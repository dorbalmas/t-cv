import { Divider } from '@mui/material';
import { useTranslation } from 'next-i18next';
import reactStringReplace from 'react-string-replace';

import { rtlLanguages } from '@/config/languages';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setResumeState } from '@/store/resume/resumeSlice';

type PropsItem = {
  text?: string;
  title: string;
};
const Item: React.FC<PropsItem> = ({ text, title }) => {
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const { summary } = useAppSelector((state) => state.resume.present.basics);

  const path = `basics.${title}`;
  const reactStringReplaceText = reactStringReplace(text, /(\[.*?\])/g, (match, i) => (
    <span key={i} style={{ color: '#36BBF7' }}>
      {match}
    </span>
  ));
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
        {reactStringReplace(reactStringReplaceText, /\*\*([^\^]*)\*\*/g, (match, i) => (
          <strong key={i} style={{ color: '#000000' }}>
            {match}
          </strong>
        ))}
      </div>
      <Divider
        style={{ backgroundColor: '#36BBF7', height: '0.2rem', paddingLeft: '1.2rem', paddingRight: '0.2rem' }}
      />
    </div>
  );
};

const CustomSuggestions: React.FC<PropsItem> = ({ title }) => {
  const { t } = useTranslation();
  const suggestions = t<string>(`builder.tips.${title}.generic`, { returnObjects: true }).length;

  return (
    <>
      <div className="text-neutral-900 bg-neutral-50 mt-3 mb-3">
        {[...Array(suggestions)].map((item, idx) => {
          return <Item key={idx} title={title} text={t<string>(`builder.tips.${title}.generic.${idx}`)} />;
        })}
      </div>
    </>
  );
};
export default CustomSuggestions;
