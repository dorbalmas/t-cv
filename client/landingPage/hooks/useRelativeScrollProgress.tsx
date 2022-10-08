import { useMotionValue, useViewportScroll } from 'framer-motion';
import { useEffect } from 'react';

interface IPositionData {
  height: number;
  top: number;
}

export const useRelativeScrollProgress = (ref: React.RefObject<HTMLElement>, { height, top }: IPositionData) => {
  const { scrollY } = useViewportScroll();
  const scrollValue = useMotionValue(0);

  function updateProgress(height: number, top: number) {
    const offset = Math.max(0, scrollY.get() - top);
    const progress = Math.min(!height || !offset ? 0 : offset / height, 1);
    scrollValue.set(progress);
  }

  useEffect(() => {
    return scrollY.onChange(() => updateProgress(height, top));
  });

  return {
    scrollProgress: scrollValue,
    scrollToTop: false, // scrollProgress <= 0
  };
};
