import { useLayoutEffect, useRef, useState } from 'react';

interface IAnimation {
  id: number;
}
interface IProps {
  headerH?: number;
  isMobile: boolean;
}
const HEADER_H = 150;

export const useScrollDirection = ({ headerH = HEADER_H, isMobile = false }: IProps) => {
  const [scrollToTop, setScrollToTop] = useState<boolean>(false);
  const scrollToTopRef = useRef<boolean>(false);

  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  let observer: IntersectionObserver | null = null;
  const animationHandler: IAnimation = { id: 0 };
  let lastPosition = 0;

  const update = (node: Element) => {
    if (typeof window !== 'undefined') {
      if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window) {
        observer = new IntersectionObserver((entries) => {
          if (!entries[0].isIntersecting) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        });
        observer.observe(node);
      }
    }
  };

  const updateProgress = () => {
    animationHandler.id = requestAnimationFrame(updateProgress);
    const top = window.pageYOffset;

    if (top === lastPosition) {
      return;
    }

    const toTop = top < lastPosition && top > headerH;
    const toDown = top > lastPosition || top < headerH;

    if (toTop && !scrollToTopRef.current) {
      setScrollToTop(true);
      scrollToTopRef.current = true;
    } else if (toDown && scrollToTopRef.current) {
      setScrollToTop(false);
      scrollToTopRef.current = false;
    }
    lastPosition = top;
  };

  useLayoutEffect(() => {
    const node = document.querySelector('#main-header');
    if (node) {
      update(node);
    }
    if (!isMobile) {
      animationHandler.id = requestAnimationFrame(updateProgress);
    }

    return () => {
      if (!isMobile) {
        cancelAnimationFrame(animationHandler.id);
      }
      if (typeof window !== 'undefined' && observer && node) {
        observer.unobserve(node);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  return {
    scrollToTop,
    isScrolled,
  };
};
