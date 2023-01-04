import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import reactStringReplace from 'react-string-replace';

import styles from './styles.module.scss';

const Website = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div>{t<string>('builder.tips.website.intro')}</div>
      <ul>
        <li>
          <div>
            {' '}
            <Link href={'https://carrd.co/build'} passHref>
              <a target="_blank" rel="noopener noreferrer">
                carrd.co
              </a>
            </Link>{' '}
            -{' '}
            {reactStringReplace(t<string>('builder.tips.website.li.0'), /\*\*([^\^]*)\*\*/g, (match, i) => (
              <strong key={i} className="uppercase">
                {match}
              </strong>
            ))}
          </div>
        </li>
        <li>
          <div>{t<string>('builder.tips.website.li.1')}</div>
        </li>
      </ul>
    </div>
  );
};
export default Website;
