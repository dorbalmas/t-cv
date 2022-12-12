// import { useTranslation } from 'next-i18next';

import { useTranslation } from 'next-i18next';

import CustomSuggestions from './CustomSuggestions';
import styles from './styles.module.scss';

const Summary = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>{t<string>('builder.tips.summary.intro')}</div>
      <ul className={styles.list}>
        <li>
          <div>{t<string>('builder.tips.summary.li1')}</div>
        </li>
        <li>
          <div>{t<string>('builder.tips.summary.li2')}</div>
        </li>
      </ul>
      <CustomSuggestions title="summary" />
    </>
  );
};
export default Summary;
