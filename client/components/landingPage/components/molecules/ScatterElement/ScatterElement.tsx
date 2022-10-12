import { MotionStyle, MotionValue, useTransform } from 'framer-motion';
import React from 'react';

import { StyledElement } from './styles';

type Props = {
  offset: { x: number; y: number };
  progress: MotionValue<number>;
  direction?: 'inward' | 'outward';
  motionStyle?: MotionStyle;
  children?: React.ReactNode;
};

const getDirection = (value: number, direction: Props['direction']) =>
  Math.abs(value - (direction === 'inward' ? 1 : 0));

export const ScatterElement: React.FC<Props> = ({
  offset = { x: 0, y: 0 },
  progress,
  direction = 'inward',
  children,
  motionStyle,
  ...props
}) => {
  const translateX = useTransform(progress, (value) => offset.x * getDirection(value, direction));
  const translateY = useTransform(progress, (value) => offset.y * getDirection(value, direction));

  return (
    <StyledElement
      {...props}
      style={{
        ...motionStyle,
        translateX,
        translateY,
      }}
    >
      {children}
    </StyledElement>
  );
};
