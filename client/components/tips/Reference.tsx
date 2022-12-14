import { useTranslation } from 'next-i18next';

import styles from './styles.module.scss';

const Reference = () => {
  const { t } = useTranslation();
  const liLength = t<string>(`builder.tips.reference.li`, { returnObjects: true }).length;

  return (
    <div className={styles.container}>
      <div>{t<string>('builder.tips.reference.intro')}</div>
      <ul>
        {[...Array(liLength)].map((item, idx) => {
          return (
            <li key={idx}>
              <div>{t<string>(`builder.tips.reference.li.${idx}`)}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Reference;
