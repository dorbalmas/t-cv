// import { ENTERPRISE, INTEGRATIONS, PRICING } from '@core/url';
import { AnimatePresence } from 'framer-motion';
import React, { useRef, useState } from 'react';

import LanguageSwitcher from '@/components/shared/LanguageSwitcher';

// import { BlogContent, Developers, DevelopersContent, Product, ProductContent } from './elements';
import * as S from './styles';
type IMenuProps = {
  activeItem: any;
  setActiveItem: any;
  scrollToTop: any;
  isMobile: boolean;
  variant: any;
};
const INIT_HOVER_DATA = {
  height: 0,
  width: 0,
  left: 0,
};

// interface IComponents {
//   [key: string]: (props: IContentProps) => React.ReactElement;
// }

// const components: IComponents = {
//   product: ProductContent,
//   developers: DevelopersContent,
//   blog: BlogContent,
// };

export const DesktopMenu = ({ activeItem, setActiveItem, scrollToTop, isMobile, variant }: IMenuProps) => {
  const menuRef = useRef<HTMLUListElement | null>(null);
  const prevActiveItem = useRef<null>(null);
  const [hoverData] = useState(INIT_HOVER_DATA);

  //   const resetDropdownSize = useCallback(() => {
  //     setActiveItem(null);
  //     setHoverData(INIT_HOVER_DATA);
  //   }, []);

  //   const onMouseOver = useCallback(
  //     (item: any) => () => {
  //       if (activeItem !== item) {
  //         prevActiveItem.current = activeItem;
  //         setActiveItem(item);
  //       }
  //     },
  //     [activeItem]
  //   );

  //   const isActive = ({ isPartiallyCurrent }: { isPartiallyCurrent: boolean }) =>
  //     isPartiallyCurrent ? { isactive: '' } : {};

  //   useEffect(() => {
  //     if (!isMobile) {
  //       resetDropdownSize();
  //     }
  //   }, [scrollToTop]);

  //   const setPositionData = (linkRef: React.RefObject<HTMLLIElement>, ref: React.RefObject<HTMLDivElement>) => {
  //     const element = ref.current;
  //     const linkElement = linkRef.current;
  //     if (element && linkElement) {
  //       const height = element.offsetHeight;
  //       const width = element.offsetWidth;
  //       const left = linkElement.offsetLeft + linkElement.offsetWidth / 2;

  //       setHoverData({ height, width, left });
  //     }
  //   };

  const initialAnimation = prevActiveItem.current === null && activeItem !== null;
  const endAnimation = activeItem === null;

  const animationProps = { initialAnimation, endAnimation };
  //   const props = { activeItem, setPositionData, variant };
  //   const ActiveComponent = activeItem ? components[activeItem] : null;
  //   const sizeVariant =
  //     activeItem === 'product' || activeItem === 'blog' ? 'lg' : activeItem === 'developers' ? 'md' : 'sm';
  const handleClick = (id: string) => {
    const elementId = `#${id}`;
    const section = document.querySelector(elementId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <S.Menu ref={menuRef}>
      <S.AnimatedBlock {...hoverData} {...animationProps}>
        <AnimatePresence exitBeforeEnter></AnimatePresence>
      </S.AnimatedBlock>
      {/* <Product item="product" onMouseOver={onMouseOver('product')} {...props} /> */}
      <S.Item>
        <S.Decoration onClick={() => handleClick('Home')}>Home</S.Decoration>
      </S.Item>
      {/* <Developers item="developers" onMouseOver={onMouseOver('developers')} {...props} /> */}
      <S.Item>
        <S.Decoration onClick={() => handleClick('Features')}>Features</S.Decoration>
      </S.Item>
      <S.Item>
        <S.Decoration onClick={() => handleClick('Pricing')}>Pricing</S.Decoration>
      </S.Item>
      <S.Item>
        <S.Decoration onClick={() => handleClick('FAQ')}>FAQ</S.Decoration>
      </S.Item>
      <S.ItemLanguageSwitcher>
        <LanguageSwitcher />
      </S.ItemLanguageSwitcher>
      {/* <div onMouseOver={onMouseOver('blog')} {...props} /> */}
    </S.Menu>
  );
};

export default DesktopMenu;
