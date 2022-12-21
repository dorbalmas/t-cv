import { useTranslation } from 'next-i18next';

import styles from './styles.module.scss';

const Reference = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div>{t<string>('builder.tips.reference.intro')}</div>
    </div>
  );
};
export default Reference;
