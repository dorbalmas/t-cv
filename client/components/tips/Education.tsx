import { useTranslation } from 'next-i18next';

import SharedComp from './SharedComp';
import styles from './styles.module.scss';

const Education = () => {
  const { t } = useTranslation();
  const liLength = t<string>(`builder.tips.education.li`, { returnObjects: true }).length;

  return (
    <div className={styles.container}>
      <ul>
        {[...Array(liLength)].map((item, idx) => {
          return (
            <li key={idx}>
              <div>{t<string>(`builder.tips.education.li.${idx}`)}</div>
            </li>
          );
        })}
      </ul>
      <SharedComp open />
    </div>
  );
};
export default Education;
