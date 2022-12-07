// import { useTranslation } from 'next-i18next';

import { useTranslation } from 'next-i18next';

import SharedComp from './SharedComp';
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
      <SharedComp open />
    </>
  );
};
export default Summary;
