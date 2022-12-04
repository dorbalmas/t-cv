import { useTranslation } from 'next-i18next';

import styles from './styles.module.scss';

const Website = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>{t<string>('builder.tips.website.intro')}</div>
      <ul className={styles.list}>
        <li className="text-neutral-50 rtl:mr-4">
          <a className="text-neutral-50 rtl:mr-1" href="https://carrd.co/build" target="_blank" rel="noreferrer">
            carrd.co
          </a>{' '}
          - {t<string>('builder.tips.website.li')}
          <b className="tracking-wide"> {t<string>('builder.tips.website.free')}!!!</b>
        </li>
      </ul>
      <div className="text-sm">{t<string>('builder.tips.website.remember')}</div>
    </>
  );
};
export default Website;
