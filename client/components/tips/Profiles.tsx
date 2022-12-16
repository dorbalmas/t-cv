import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import styles from './styles.module.scss';

const Profiles = () => {
  const { t } = useTranslation();
  const liLength = t<string>(`builder.tips.profiles.li`, { returnObjects: true }).length;

  return (
    <div className={styles.container}>
      <ul>
        {[...Array(liLength - 1)].map((item, idx) => {
          return (
            <li key={idx}>
              <div>{t<string>(`builder.tips.profiles.li.${idx}`)}</div>
            </li>
          );
        })}
        <li>
          <div>
            {' '}
            <Link href={'https://www.linkedin.com/'} passHref>
              <a target="_blank" rel="noopener noreferrer">
                Linkedin
              </a>
            </Link>
            <span> - {t<string>('builder.tips.profiles.li.2')}</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Profiles;
