import { useTranslation } from 'next-i18next';

import SharedComp from './SharedComp';
import styles from './styles.module.scss';

const Awards = () => {
  const { t } = useTranslation();
  const liLength = t<string>(`builder.tips.awards.li`, { returnObjects: true }).length;

  return (
    <div className={styles.container}>
      <div>{t<string>('builder.tips.awards.intro')}</div>
      <SharedComp open />
      <ul>
        {[...Array(liLength)].map((item, idx) => {
          return (
            <li key={idx}>
              <div>{t<string>(`builder.tips.awards.li.${idx}`)}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Awards;
