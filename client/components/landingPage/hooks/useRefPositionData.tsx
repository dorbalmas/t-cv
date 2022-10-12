// import { Omit } from '@core/utils';
import React, { useEffect, useState } from 'react';

const INITIAL_DATA: Omit<DOMRect, 'toJSON'> = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0,
};

const getSize = (ref: React.RefObject<HTMLElement> | null) => {
  const element = (ref && ref.current) || null;

  if (element) {
    const { width, height } = element.getBoundingClientRect();
    const x = element.offsetLeft;
    const y = element.offsetTop;

    const data = {
      bottom: y + height,
      height,
      left: x,
      right: x + width,
      top: y,
      width,
      x,
      y,
    };
    return data;
  }
  return INITIAL_DATA;
};

export const useRefPositionData = (ref: React.RefObject<HTMLElement> | null, isMobile?: boolean) => {
  const [data, setData] = useState<Omit<DOMRect, 'toJSON'>>(INITIAL_DATA);
  const handleResize = () => {
    setData(getSize(ref));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // this is a terrible hack
    // FIXME: Use ResizeObserver or rewrite scroll logic
    setTimeout(() => {
      handleResize();
    }, 0);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleResize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  return data;
};
