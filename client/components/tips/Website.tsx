import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import styles from './styles.module.scss';

const Website = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>{t<string>('builder.tips.website.intro')}</div>
      <ul className={styles.list}>
        <li>
          <div>
            {' '}
            <Link href={'https://carrd.co/build'} passHref>
              <a target="_blank" rel="noopener noreferrer">
                carrd.co
              </a>
            </Link>{' '}
            - {t<string>('builder.tips.website.li')}
            <b className="tracking-wide">
              {' '}
              {t<string>('builder.tips.website.free')}!!! {t<string>('builder.tips.website.quick')}
            </b>
          </div>
        </li>
      </ul>
      <div className="text-sm">{t<string>('builder.tips.website.remember')}</div>
    </>
  );
};
export default Website;
