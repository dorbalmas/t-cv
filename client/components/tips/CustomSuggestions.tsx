import { Divider } from '@mui/material';
import { useTranslation } from 'next-i18next';
import reactStringReplace from 'react-string-replace';

import { rtlLanguages } from '@/config/languages';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setResumeState } from '@/store/resume/resumeSlice';

type Props = {
  text: string;
};
const Item: React.FC<Props> = ({ text }) => {
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const { summary } = useAppSelector((state) => state.resume.present.basics);
  const path = 'basics.summary';

  const onClick = () => {
    dispatch(setResumeState({ path, value: summary + `${summary.length === 0 ? '' : ' '}` + text }));
  };

  return (
    <div>
      <div
        onClick={onClick}
        className={`w-full font-thin text-left p-2 border-natural-500 border-4 hover:border-neutral-50 hover:opacity-50 text-${
          rtlLanguages.includes(i18n.language) ? 'right' : 'left'
        }`}
        style={{ cursor: 'copy' }}
      >
        {reactStringReplace(text, /\[([^\^]*)\]/g, (match, i) => (
          <span key={i} style={{ color: '#36BBF7' }}>
            [{match}]
          </span>
        ))}
      </div>
      <Divider
        style={{ backgroundColor: '#36BBF7', height: '0.2rem', paddingLeft: '1.2rem', paddingRight: '0.2rem' }}
      />
    </div>
  );
};

const CustomSuggestions = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="text-neutral-900 bg-neutral-50 mt-3 mb-3">
        {[...Array(3)].map((e, i) => {
          return <Item key={i} text={t<string>(`builder.tips.summary.generic.${i}`)} />;
        })}
      </div>
    </>
  );
};
export default CustomSuggestions;
