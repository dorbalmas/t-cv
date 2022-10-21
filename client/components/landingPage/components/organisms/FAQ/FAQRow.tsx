import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';

// import plus from '../../../../images/plus_icon.svg';
import * as S from './styles';

type IFAQ = {
  title: string;
  content: any;
};
export const FAQRow = ({ title, content: Content }: IFAQ) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const id = title.replace(/\s+/g, '');
  const ariaProps = isOpen ? { 'aria-disabled': true } : {};

  return (
    <S.FAQRow aria-expanded={isOpen}>
      <S.FAQRowTitle active={isOpen} aria-controls={id} {...ariaProps} onClick={() => setOpen((isOpen) => !isOpen)}>
        <h5>{title}</h5>
        <S.PlusIcon active={isOpen}>
          <AddIcon sx={{ float: 'right', fontSize: '2rem' }} />
        </S.PlusIcon>
      </S.FAQRowTitle>
      {!!Content && (
        <S.FAQRowContent isOpen={isOpen}>
          <Content />
        </S.FAQRowContent>
      )}
    </S.FAQRow>
  );
};
