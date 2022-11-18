import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';

import * as S from './styles';
type IProps = {
  isMobile: boolean;
};
export const Footer = ({ isMobile }: IProps) => {
  const { t } = useTranslation();

  return (
    <>
      {isMobile && (
        <S.Footer>
          <Link href="/meta/privacy" passHref>
            <S.Decoration>{t<string>('landing.links.links.privacy')}</S.Decoration>
          </Link>
          <Link href="/meta/service" passHref>
            <S.Decoration>{t<string>('landing.links.links.service')}</S.Decoration>
          </Link>
          <S.Decoration href="mailto:tivlotcv@gmail.com">Contact Us</S.Decoration>
        </S.Footer>
      )}
      <S.Footer>
        <S.BottomPart>
          <span>&copy; TivlotCV &bull; 2020 - {new Date().getFullYear()} </span>
        </S.BottomPart>

        {!isMobile && (
          <>
            <Link href="/meta/privacy" passHref>
              <S.Decoration>{t<string>('landing.links.links.privacy')}</S.Decoration>
            </Link>
            <Link href="/meta/service" passHref>
              <S.Decoration>{t<string>('landing.links.links.service')}</S.Decoration>
            </Link>
            <S.Decoration href="mailto:tivlotcv@gmail.com">Contact Us</S.Decoration>
          </>
        )}
      </S.Footer>
    </>
  );
};

export default Footer;
