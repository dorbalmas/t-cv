import { breakpoints } from 'landingPage/globalStyles/theme';
import { useEffect, useState } from 'react';

export const useBreakpoints = () => {
  const [isMobile, setMobile] = useState<boolean>(true);
  const [isTablet, setTablet] = useState<boolean>(true);

  const mobileViewport =
    typeof window !== 'undefined' ? window.matchMedia(`screen and (max-width: ${breakpoints.smMin}em)`) : null;

  const tabletViewport =
    typeof window !== 'undefined'
      ? window.matchMedia(`screen and (min-width: ${breakpoints.sm}em) and (max-width:${breakpoints.md}em)`)
      : null;

  function setValues(ds: MediaQueryListEvent | MediaQueryList) {
    setMobile(ds.matches);
  }

  function setTabletValues(ds: MediaQueryListEvent | MediaQueryList) {
    setTablet(ds.matches);
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && mobileViewport && tabletViewport) {
      setValues(mobileViewport);
      mobileViewport.addListener(setValues);

      setTabletValues(tabletViewport);
      tabletViewport.addListener(setTabletValues);

      return () => {
        mobileViewport.removeListener(setValues);
        tabletViewport.removeListener(setValues);
      };
    }
  }, []);

  return {
    breakpoints,
    isDesktop: !isMobile && !isTablet,
    isMobile,
    isTablet,
  };
};
