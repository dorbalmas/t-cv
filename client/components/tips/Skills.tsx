import { useTranslation } from 'next-i18next';

import styles from './styles.module.scss';

const Skills = () => {
  const { t } = useTranslation();
  const liLength = t<string>(`builder.tips.skills.li`, { returnObjects: true }).length;

  return (
    <div className={styles.container}>
      <div>{t<string>('builder.tips.skills.intro')}</div>

      <ul>
        {[...Array(liLength)].map((item, idx) => {
          return (
            <li key={idx}>
              <div>{t<string>(`builder.tips.skills.li.${idx}`)}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Skills;
