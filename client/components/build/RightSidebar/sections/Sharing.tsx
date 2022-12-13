import { CopyAll, Grade } from '@mui/icons-material';
import { Checkbox, FormControlLabel, IconButton, List, ListItem, ListItemText, Switch, TextField } from '@mui/material';
import get from 'lodash/get';
import { useTranslation } from 'next-i18next';
import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';

import sections from '@/config/sections';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setResumeState } from '@/store/resume/resumeSlice';
import getResumeUrl from '@/utils/getResumeUrl';

const Sharing = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const name = t<string>('builder.rightSidebar.sections.sharing.heading');
  const path = 'metadata.sharing';
  const id = useMemo(() => path.split('.')[1], [path]);
  const icon = sections.find((x) => x.id === id)?.icon || <Grade />;
  const heading = useAppSelector((state) => get(state.resume.present, `${path}.name`, name));

  const [showShortUrl, setShowShortUrl] = useState(false);

  const resume = useAppSelector((state) => state.resume.present);
  const isPublic = useMemo(() => get(resume, 'public'), [resume]);
  const url = useMemo(() => getResumeUrl(resume, { withHost: true }), [resume]);
  const shortUrl = useMemo(() => getResumeUrl(resume, { withHost: true, shortUrl: true }), [resume]);

  const handleSetVisibility = (value: boolean) => dispatch(setResumeState({ path: 'public', value }));

  const handleCopyToClipboard = async () => {
    const text = showShortUrl ? shortUrl : url;

    await navigator.clipboard.writeText(text);

    toast.success(t<string>('common.toast.success.resume-link-copied'));
  };

  return (
    <>
      <div className="flex w-full items-center gap-3">
        <div className="opacity-50">{icon}</div>
        <h1 className="text-2xl">{heading}</h1>
      </div>
      <List sx={{ padding: 0 }}>
        <ListItem className="flex flex-col" sx={{ padding: 0 }}>
          <div className="flex w-full items-center justify-between">
            <ListItemText
              primary={t<string>('builder.rightSidebar.sections.sharing.visibility.title')}
              secondary={t<string>('builder.rightSidebar.sections.sharing.visibility.subtitle')}
            />
            <Switch checked={isPublic} onChange={(_, value) => handleSetVisibility(value)} />
          </div>

          <div className="mt-2 w-full">
            <TextField
              disabled
              fullWidth
              value={showShortUrl ? shortUrl : url}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleCopyToClipboard}>
                    <CopyAll />
                  </IconButton>
                ),
              }}
            />
          </div>

          <div className="mt-1 flex w-full">
            <FormControlLabel
              label={t<string>('builder.rightSidebar.sections.sharing.short-url.label')}
              control={
                <Checkbox className="mr-1" checked={showShortUrl} onChange={(_, value) => setShowShortUrl(value)} />
              }
            />
          </div>
        </ListItem>
      </List>
    </>
  );
};

export default Sharing;
