// import { PhotoFilter } from '@mui/icons-material';
import { Divider } from '@mui/material';
import { useTranslation } from 'next-i18next';

import Heading from '@/components/shared/Heading';
import ResumeInput from '@/components/shared/ResumeInput';
import Tips from '@/components/shared/Tips';

// import PhotoFilters from './PhotoFilters';
// import PhotoUpload from './PhotoUpload';

const Basics = () => {
  const { t } = useTranslation();

  //   const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  //   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //     setAnchorEl(event.currentTarget);
  //   };

  //   const handleClose = () => {
  //     setAnchorEl(null);
  //   };

  return (
    <>
      <Heading path="sections.basics" name={t<string>('builder.leftSidebar.sections.basics.heading')} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* <div className="grid items-center gap-4 sm:col-span-2 sm:grid-cols-3"> */}
        {/* <div className="mx-auto">
            <PhotoUpload />
          </div> */}

        {/* <div className="grid gap-2 w-full sm:col-span-2"> */}
        <ResumeInput
          label={t<string>('builder.leftSidebar.sections.basics.name.label')}
          path="basics.name"
          className="sm:col-span-2"
        />

        {/* <Button variant="outlined" startIcon={<PhotoFilter />} onClick={handleClick}>
              {t<string>('builder.leftSidebar.sections.basics.actions.photo-filters')}
            </Button> */}

        {/* <Popover
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <PhotoFilters />
            </Popover> */}
        {/* </div> */}
        {/* </div> */}

        {/* <ResumeInput
          type="date"
          label={t<string>('builder.leftSidebar.sections.basics.birthdate.label')}
          path="basics.birthdate"
          className="sm:col-span-2"
        /> */}
        <ResumeInput
          label={t<string>('builder.common.form.email.label')}
          path="basics.email"
          className="sm:col-span-2"
        />
        <ResumeInput label={t<string>('builder.common.form.phone.label')} path="basics.phone" />
        <ResumeInput
          label={t<string>('builder.leftSidebar.sections.location.city.label')}
          path="basics.location.city"
        />

        <Tips tipsTitle="website">
          <ResumeInput label={t<string>('builder.common.form.url.label')} path="basics.website" />
        </Tips>

        <Divider className="sm:col-span-2" />

        <ResumeInput
          label={t<string>('builder.leftSidebar.sections.basics.headline.label')}
          path="basics.headline"
          className="sm:col-span-2"
        />

        <Tips tipsTitle="summary">
          <ResumeInput
            type="textarea"
            label={t<string>('builder.common.form.summary.label')}
            path="basics.summary"
            // markdownSupported
          />
        </Tips>
      </div>
    </>
  );
};

export default Basics;
