import React from 'react';

import * as S from './styles';
type IProps = {
  children: React.ReactNode;
};

export const FluidContainer = ({ children, ...props }: IProps) => (
  <S.FluidContainer fluid={true} {...props}>
    {children}
  </S.FluidContainer>
);

export default FluidContainer;
