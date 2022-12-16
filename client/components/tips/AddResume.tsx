import { useTranslation } from 'next-i18next';

import styles from './styles.module.scss';

const AddResume = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div>{t<string>('builder.tips.addResume.intro')}</div>
      <ul>
        <li>
          <div>{t<string>('builder.tips.addResume.li1')}</div>
        </li>
      </ul>
      <div>{t<string>('builder.tips.addResume.closure')}</div>
    </div>
  );
};
export default AddResume;
