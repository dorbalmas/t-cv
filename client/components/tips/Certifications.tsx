import { useTranslation } from 'next-i18next';

import SharedComp from './SharedComp';
import styles from './styles.module.scss';

const Certifications = () => {
  const { t } = useTranslation();
  const liLength = t<string>(`builder.tips.certifications.li`, { returnObjects: true }).length;

  return (
    <div className={styles.container}>
      <div>{t<string>('builder.tips.certifications.intro')}</div>
      <ul>
        {[...Array(liLength)].map((item, idx) => {
          return (
            <li key={idx}>
              <div>{t<string>(`builder.tips.certifications.li.${idx}`)}</div>
            </li>
          );
        })}
      </ul>
      <SharedComp open />
    </div>
  );
};
export default Certifications;
