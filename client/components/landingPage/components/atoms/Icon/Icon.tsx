import React from 'react';

import { icons } from '@/components/landingPage/globalStyles/definitions';

type IProps = {
  color: string;
  name: string;
};
export const Icon: React.FC<IProps> = ({ color = '#2D294F', name }: IProps) => {
  const icon = icons[name];
  return (
    icon && (
      <svg viewBox={icon.viewBox} width={icon.width} height={icon.height}>
        <path d={icon.d} fill={icon.fill ? color : 'none'} stroke={color} strokeWidth={icon.strokeWidth} />
        {icon.d2 && (
          <path d={icon.d2} fill={icon.fill ? color : 'none'} stroke={color} strokeWidth={icon.strokeWidth} />
        )}
      </svg>
    )
  );
};

export default Icon;
