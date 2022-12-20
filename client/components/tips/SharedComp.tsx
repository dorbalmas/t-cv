import { useTranslation } from 'next-i18next';

// import { useState } from 'react';
// import styled from 'styled-components';
import { rtlLanguages } from '@/config/languages';
type Props = {
  open?: boolean;
};

// const Button = styled.button<{ isOpen: boolean }>`
//   color: ${(props) => (props.isOpen ? `#37baf6` : `#fafafa`)};
//   background-color: ${(props) => (props.isOpen ? `#fafafa` : `#37baf6`)};
//   border: 2px solid #fafafa;
//   width: 100%;
//   padding: 0.25rem 0.5rem;
//   cursor: pointer;
//   font-size: 1rem;
//   font-weight: 400;
//   border-radius: 4px;
//   outline: none;
//   margin-top: 0.4rem;
//   margin-bottom: calc(2rem * 0.625);
//   transition: 300ms;
//   transform: scale(1);
//   &:hover:not(:disabled),
//   &:active {
//     background-color: #fafafa;
//     color: #37baf6;
//   }
// `;

// const PlusIcon = styled.div<{ active: boolean }>`
//   display: inline-block;
//   transform: ${(props) => (props.active ? `rotate(180deg)` : `none`)};
//   transition: transform 0.3s ease;
// `;

// const FAQRowContent = styled.div<{ isOpen: boolean }>`
//   text-align: left;
//   overflow: hidden;
//   will-change: max-height;
//   max-height: ${(props) => (props.isOpen ? '20rem' : 0)};
//   transition: max-height 0.4s ease-in-out;
// `;
const SharedComp: React.FC<Props> = ({ open }) => {
  const { t, i18n } = useTranslation();
  //   const [isOpen, setOpen] = useState<boolean>(open || false);
  return (
    <>
      {/* <Button isOpen={isOpen} onClick={() => setOpen((isOpen) => !isOpen)}>
        {t<string>('builder.tips.shared.markdown')}
        <PlusIcon active={isOpen}>
          <KeyboardArrowDownIcon />
        </PlusIcon>
      </Button>
      <FAQRowContent isOpen={isOpen}> */}
      <ul>
        <li>
          <div className="rtl:text-right">{t<string>('builder.tips.shared.intro')}</div>

          <table
            className={`table-auto text-neutral-900 bg-neutral-50 divide-slate-700 mt-3 mb-3 sm:rounded-md rtl:mr-2 text-${
              rtlLanguages.includes(i18n.language) ? 'right' : 'left'
            }`}
            style={{ width: '95%' }}
          >
            <thead>
              <tr>
                <th className="text-base text-neutral-700 py-2 pl-2">
                  {t<string>('builder.tips.shared.table.header1')}
                </th>
                <th className="text-base text-neutral-700">{t<string>('builder.tips.shared.table.header2')}</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
            <td className="font-thin pl-2">*{t<string>('builder.tips.shared.table.italic')}*</td>
            <td className="font-thin ">
              <i>{t<string>('builder.tips.shared.table.italic')}</i>
            </td>
          </tr> */}
              <tr>
                <td className="font-thin pl-2">**{t<string>('builder.tips.shared.table.bold')}**</td>
                <td>
                  <b>{t<string>('builder.tips.shared.table.bold')}</b>
                </td>
              </tr>
              <tr>
                <td className="font-thin pl-2">
                  - {t<string>('builder.tips.shared.table.bull1')}
                  <br /> - {t<string>('builder.tips.shared.table.bull2')}
                  <br /> - {t<string>('builder.tips.shared.table.bull3')}
                </td>
                <td className="font-thin pl-2">
                  &bull;&nbsp; {t<string>('builder.tips.shared.table.bull1')}
                  <br /> &bull;&nbsp; {t<string>('builder.tips.shared.table.bull2')}
                  <br /> &bull;&nbsp; {t<string>('builder.tips.shared.table.bull3')}
                </td>
              </tr>
            </tbody>
          </table>
        </li>
      </ul>
      {/* </FAQRowContent> */}
    </>
  );
};
export default SharedComp;
