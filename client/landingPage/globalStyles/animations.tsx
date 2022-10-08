import { motion } from 'framer-motion';
import React from 'react';
import { keyframes } from 'styled-components';

interface ILine {
  d: string;
  transform: string;
  color?: string;
}

interface IProps {
  delay?: number;
  itemDelay?: number;
  origin?: 'left' | 'center' | 'right';
  lines: ILine[];
  variant: 'hidden' | 'visible';
}

const getLineStroke = (line: ILine) => line.color && { stroke: line.color };

const originValues = {
  center: 0.5,
  left: 1,
  right: 0,
};

export const staggeredLinesAnimation = ({
  delay = 0,
  lines,
  variant = 'hidden',
  itemDelay = 0.1,
  origin = 'center',
  ...props
}: IProps) => {
  const variants = {
    visible: (i: number) => ({
      scaleX: 1,
      transition: { delay: delay + i * itemDelay },
    }),
  };
  const animationProps = {
    animate: variant,
    initial: { scaleX: 0 },
    variants,
  };

  return (
    <g {...props}>
      {lines.map((line, index) => (
        <g key={index} transform={line.transform}>
          <motion.path
            d={line.d}
            custom={index}
            {...animationProps}
            {...getLineStroke(line)}
            style={{ originX: originValues[origin] }}
          />
        </g>
      ))}
    </g>
  );
};

export const rotateMenu = (isOpen: boolean, customTranslate?: string) => keyframes`
  from {
  transform: ${customTranslate} rotateX(${isOpen ? '-20deg' : 0});
    opacity: ${isOpen ? 0 : 1};
  }
  to {
  transform: ${customTranslate} rotateX(${isOpen ? 0 : '-20deg'});
    opacity:${isOpen ? 1 : 0};
  }
`;
