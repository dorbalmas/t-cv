import { Grade, PictureAsPdf, Schema } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import get from 'lodash/get';
import pick from 'lodash/pick';
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import { useMutation } from 'react-query';

import sections from '@/config/sections';
import { ServerError } from '@/services/axios';
import { printResumeAsPdf, PrintResumeAsPdfParams } from '@/services/printer';
import { useAppSelector } from '@/store/hooks';

const Export = () => {
  const { t } = useTranslation();

  const resume = useAppSelector((state) => state.resume.present);

  const name = t<string>('builder.rightSidebar.sections.export.heading');
  const path = 'metadata.export';
  const id = useMemo(() => path.split('.')[1], [path]);
  const icon = sections.find((x) => x.id === id)?.icon || <Grade />;
  const heading = useAppSelector((state) => get(state.resume.present, `${path}.name`, name));

  const { mutateAsync, isLoading } = useMutation<string, ServerError, PrintResumeAsPdfParams>(printResumeAsPdf);

  const pdfListItemText = {
    normal: {
      primary: t<string>('builder.rightSidebar.sections.export.pdf.normal.primary'),
      secondary: t<string>('builder.rightSidebar.sections.export.pdf.normal.secondary'),
    },
    loading: {
      primary: t<string>('builder.rightSidebar.sections.export.pdf.loading.primary'),
      secondary: t<string>('builder.rightSidebar.sections.export.pdf.loading.secondary'),
    },
  };

  const handleExportJSON = async () => {
    const { nanoid } = await import('nanoid');
    const download = (await import('downloadjs')).default;

    const redactedResume = pick(resume, ['basics', 'sections', 'metadata', 'public']);
    const jsonString = JSON.stringify(redactedResume, null, 4);
    const jsonBlob = new Blob([jsonString], { type: 'application/json;charset=utf-8' });
    const filename = `TivlotCV_JSONExport_${nanoid()}.json`;

    download(jsonBlob, filename);
  };

  const handleExportPDF = async () => {
    const download = (await import('downloadjs')).default;

    const slug = get(resume, 'slug');
    const username = get(resume, 'user.username');

    const url = await mutateAsync({ username, slug });

    download(`/api${url}`);
  };

  return (
    <>
      <div className="flex w-full items-center gap-3">
        <div className="opacity-50">{icon}</div>
        <h1 className="text-2xl">{heading}</h1>
      </div>
      <List sx={{ padding: 0 }}>
        <ListItem sx={{ padding: 0 }}>
          <ListItemButton className="gap-6" onClick={handleExportJSON}>
            <Schema />

            <ListItemText
              primary={t<string>('builder.rightSidebar.sections.export.json.primary')}
              secondary={t<string>('builder.rightSidebar.sections.export.json.secondary')}
            />
          </ListItemButton>
        </ListItem>

        <ListItem sx={{ padding: 0 }}>
          <ListItemButton className="gap-6" onClick={handleExportPDF} disabled={isLoading}>
            <PictureAsPdf />

            <ListItemText {...(isLoading ? pdfListItemText.loading : pdfListItemText.normal)} />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default Export;
