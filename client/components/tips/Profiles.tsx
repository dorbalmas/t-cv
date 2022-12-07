import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import styles from './styles.module.scss';

const Profiles = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* <div>{t<string>('builder.tips.addResume.intro')}</div> */}
      <ul className={styles.list}>
        <li>
          <div>{t<string>('builder.tips.profiles.li1')}</div>
        </li>
        <li>
          <div>{t<string>('builder.tips.profiles.li2')}</div>
        </li>
        <li>
          <div>
            {' '}
            <Link href={'https://www.linkedin.com/'} passHref>
              <a target="_blank" rel="noopener noreferrer">
                Linkedin
              </a>
            </Link>
            <span> - {t<string>('builder.tips.profiles.li3')}</span>
          </div>
        </li>
      </ul>
    </>
  );
};
export default Profiles;