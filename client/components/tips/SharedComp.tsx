import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import styled from 'styled-components';
type Props = {
  open?: boolean;
};

const Button = styled.button`
  color: white;
  border: 2px solid white;
  width: 100%;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 4px;
  outline: none;
  margin-top: 2rem;
  margin-bottom: calc(2rem * 0.625);
  transition: 300ms;
  transform: scale(1);
  &:hover:not(:disabled),
  &:active {
    background-color: white;
    color: #37baf6;
  }
`;

const PlusIcon = styled.div<{ active: boolean }>`
  display: inline-block;
  transform: ${(props) => (props.active ? `rotate(180deg)` : `none`)};
  transition: transform 0.3s ease;
`;

const FAQRowContent = styled.div<{ isOpen: boolean }>`
  text-align: left;
  overflow: hidden;
  will-change: max-height;
  max-height: ${(props) => (props.isOpen ? '20rem' : 0)};
  transition: max-height 0.4s ease-in-out;
`;
const SharedComp: React.FC<Props> = ({ open }) => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState<boolean>(open || false);
  return (
    <>
      <Button onClick={() => setOpen((isOpen) => !isOpen)}>
        {t<string>('builder.tips.shared.markdown')}
        <PlusIcon active={isOpen}>
          <KeyboardArrowDownIcon />
        </PlusIcon>
      </Button>
      <FAQRowContent isOpen={isOpen}>
        {t<string>('builder.tips.shared.intro')}

        <table className="table-auto text-neutral-900 bg-neutral-50 divide-slate-700 sm:rounded-md">
          <thead>
            <tr>
              <th className="text-base text-neutral-700 py-2 pl-2">{t<string>('builder.tips.shared.table.header1')}</th>
              <th className="text-base text-neutral-700">{t<string>('builder.tips.shared.table.header2')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-thin pl-2">*{t<string>('builder.tips.shared.table.italic')}*</td>
              <td className="font-thin ">
                <i>{t<string>('builder.tips.shared.table.italic')}</i>
              </td>
            </tr>
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
                &bull; {t<string>('builder.tips.shared.table.bull1')}
                <br /> &bull; {t<string>('builder.tips.shared.table.bull2')}
                <br /> &bull; {t<string>('builder.tips.shared.table.bull3')}
              </td>
            </tr>
          </tbody>
        </table>
      </FAQRowContent>
      <div>{t<string>('builder.tips.shared.intro1')} dfdf</div>
    </>
  );
};
export default SharedComp;
