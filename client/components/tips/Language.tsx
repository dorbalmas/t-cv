import { useTranslation } from 'next-i18next';

import styles from './styles.module.scss';

const Language = () => {
  const { t } = useTranslation();
  const liLength = t<string>(`builder.tips.language.li`, { returnObjects: true }).length;

  return (
    <div className={styles.container}>
      <ul>
        {[...Array(liLength)].map((item, idx) => {
          return (
            <li key={idx}>
              <div>{t<string>(`builder.tips.language.li.${idx}`)}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Language;
