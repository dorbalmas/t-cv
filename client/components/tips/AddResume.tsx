import { useTranslation } from 'next-i18next';

import styles from './styles.module.scss';

const AddResume = () => {
  const { t } = useTranslation();
  const liLength = t<string>(`builder.tips.addResume.li`, { returnObjects: true }).length;

  return (
    <div className={styles.container}>
      <ul>
        {[...Array(liLength)].map((item, idx) => {
          return (
            <li key={idx}>
              <div>{t<string>(`builder.tips.addResume.li.${idx}`)}</div>
            </li>
          );
        })}
      </ul>
      <div>{t<string>('builder.tips.addResume.closure')}</div>
    </div>
  );
};
export default AddResume;
