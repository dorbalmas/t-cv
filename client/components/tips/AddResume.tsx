import { useTranslation } from 'next-i18next';

import styles from './styles.module.scss';

const AddResume = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>{t<string>('builder.tips.addResume.intro')}</div>
      <ul className={styles.list}>
        <li>
          <div>{t<string>('builder.tips.addResume.li1')}</div>
        </li>
      </ul>
      <div>{t<string>('builder.tips.addResume.closure')}</div>
    </>
  );
};
export default AddResume;
