import { MotionValue } from 'framer-motion';
import React from 'react';

import { Desktop } from './Desktop';
import { Mobile } from './Mobile';

export const SectionIntegrations: React.FC<{
  isMobile: boolean;
  scrollProgress: MotionValue;
}> = ({ isMobile, scrollProgress }) =>
  isMobile ? <Mobile scrollProgress={scrollProgress} /> : <Desktop scrollProgress={scrollProgress} />;

SectionIntegrations.displayName = 'SectionIntegrations';
export default SectionIntegrations;
