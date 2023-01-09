import { Trans, useTranslation } from 'next-i18next';

import styles from './styles.module.scss';

const Entrance = () => {
  const { t } = useTranslation();
  const liLength = t<string>(`builder.tips.entrance.li`, { returnObjects: true }).length;

  return (
    <div className={styles.container}>
      <ol>
        {[...Array(liLength)].map((item, idx) => {
          return (
            <li key={idx}>
              <div>
                <Trans t={t} i18nKey={`builder.tips.entrance.li.${idx}`}>
                  Download for FREE the
                  <a
                    className="font-bold"
                    href="https://chrome.google.com/webstore/detail/grammarly-grammar-checker/kbfnbcaeplbcioakkpcpgfkobkghlhen"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                </Trans>
              </div>
            </li>
          );
        })}
        <li>
          <div>Video</div>
        </li>
      </ol>
    </div>
  );
};
export default Entrance;
