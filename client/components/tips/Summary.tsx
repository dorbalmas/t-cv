import { useTranslation } from 'next-i18next';

const Summary = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>{t<string>('builder.tips.summary.intro')}</div>
      {/* <ul>
        <li>
          <a href="https://carrd.co/build" target="_blank" rel="noreferrer">
            carrd.co
          </a>
        </li>
      </ul> */}
    </>
  );
};
export default Summary;
