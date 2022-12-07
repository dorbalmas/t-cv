import { Language } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { MouseEvent, useState } from 'react';

import { languages } from '@/config/languages';
// import { TRANSLATE_URL } from '@/constants/index';
type Props = { isName?: boolean };
const LanguageSwitcher: React.FC<Props> = ({ isName }) => {
  const { i18n } = useTranslation();

  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const handleChange = (locale: string) => {
    const { pathname, asPath, query } = router;

    handleClose();

    document.cookie = `NEXT_LOCALE=${locale}; path=/; expires=2147483647`;

    router.push({ pathname, query }, asPath, { locale });
  };

  //   const handleAddLanguage = () => window.open(TRANSLATE_URL, '_blank');

  return (
    <div>
      <button style={{ paddingBottom: 0 }} onClick={handleClick}>
        <Language />
        {isName
          ? languages.map(({ code, name }) =>
              i18n.language == code ? <div className="text-sm text-gray-900 font-light">{name}</div> : ''
            )
          : ''}
      </button>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {languages.map(({ code, name, localName }) => (
          <MenuItem key={code} onClick={() => handleChange(code)}>
            {name} {localName && `(${localName})`}
          </MenuItem>
        ))}

        {/* <MenuItem>
          <span className="font-bold" onClick={handleAddLanguage}>
            Add your language
          </span>
        </MenuItem> */}
      </Menu>
    </div>
  );
};

export default LanguageSwitcher;
