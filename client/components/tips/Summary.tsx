import { useTranslation } from 'next-i18next';

import CustomSuggestions from './CustomSuggestions';
import styles from './styles.module.scss';

const Summary = () => {
  const { t } = useTranslation();
  const liLength = t<string>(`builder.tips.summary.li`, { returnObjects: true }).length;

  return (
    <div className={styles.container}>
      <div>{t<string>('builder.tips.summary.intro')}</div>
      <ul>
        {[...Array(liLength)].map((item, idx) => {
          return (
            <li key={idx}>
              <div>{t<string>(`builder.tips.summary.li.${idx}`)}</div>
            </li>
          );
        })}
      </ul>
      <CustomSuggestions title="summary" />
    </div>
  );
};
export default Summary;
