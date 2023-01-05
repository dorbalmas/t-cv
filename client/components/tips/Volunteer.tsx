import { useTranslation } from 'next-i18next';

import SharedComp from './SharedComp';
import styles from './styles.module.scss';

const Volunteer = () => {
  const { t } = useTranslation();
  const liGenericLength = t<string>(`builder.tips.Volunteer.li-generic`, { returnObjects: true }).length;
  const liDescriptionLength = t<string>(`builder.tips.Volunteer.li-description`, { returnObjects: true }).length;

  return (
    <div className={styles.container}>
      <ul>
        {[...Array(liGenericLength)].map((item, idx) => {
          return (
            <li key={idx}>
              <div>{t<string>(`builder.tips.Volunteer.li-generic.${idx}`)}</div>
            </li>
          );
        })}
      </ul>
      <h4>{t<string>('builder.common.form.description.label')}</h4>
      <SharedComp open />
      <ul>
        {[...Array(liDescriptionLength)].map((item, idx) => {
          return (
            <li key={idx}>
              <div>{t<string>(`builder.tips.Volunteer.li-description.${idx}`)}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Volunteer;
