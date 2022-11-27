import { useTranslation } from 'next-i18next';
const Website = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>{t<string>('builder.tips.website.intro')}.</div>
      <ul className="my-1">
        <li className="text-neutral-50">
          <a href="https://carrd.co/build" target="_blank" rel="noreferrer">
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
