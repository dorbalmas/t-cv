import { useTranslation } from 'next-i18next';

import SharedComp from './SharedComp';
import styles from './styles.module.scss';

const Certifications = () => {
  const { t } = useTranslation();
  const liGenericLength = t<string>(`builder.tips.certifications.li-generic`, { returnObjects: true }).length;
  const liDescriptionLength = t<string>(`builder.tips.certifications.li-description`, { returnObjects: true }).length;

  return (
    <div className={styles.container}>
      <ul>
        {[...Array(liGenericLength)].map((item, idx) => {
          return (
            <li key={idx}>
              <div>{t<string>(`builder.tips.certifications.li-generic.${idx}`)}</div>
            </li>
          );
        })}
      </ul>
      <h4>{t<string>('builder.common.form.description.label')}</h4>
      <ul>
        {[...Array(liDescriptionLength)].map((item, idx) => {
          return (
            <li key={idx}>
              <div>{t<string>(`builder.tips.certifications.li-description.${idx}`)}</div>
            </li>
          );
        })}
      </ul>
      <SharedComp open />
    </div>
  );
};
export default Certifications;
