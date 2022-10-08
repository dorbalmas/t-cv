export type AnimationKeys = 1 | 2 | 3 | 4;
export type AnimationConfig = {
  breakpoint: number;
};

export const animationMap: Record<AnimationKeys, AnimationConfig> = {
  1: {
    breakpoint: 0.3,
  },
  2: {
    breakpoint: 0.25,
  },
  3: {
    breakpoint: 0.15,
  },
  4: {
    breakpoint: 0.05,
  },
};

const hiddenVariant = {
  opacity: 0,
  translateX: 0,
  translateY: 0,
  transition: {
    duration: 0.5,
    ease: 'easeOut',
  },
};

const visibleVariant = {
  opacity: 1,
  translateX: 0,
  translateY: 0,
  transition: {
    duration: 0.5,
    ease: 'easeOut',
  },
};

export const variants = {
  voice: {
    hidden: {
      ...hiddenVariant,
      translateY: -50,
    },
    visible: visibleVariant,
  },
  car: {
    hidden: {
      ...hiddenVariant,
      translateX: -50,
      translateY: -50,
    },
    visible: visibleVariant,
  },
  algolia: {
    hidden: {
      ...hiddenVariant,
      translateX: 50,
      translateY: -50,
    },
    visible: visibleVariant,
  },
  social: {
    hidden: {
      ...hiddenVariant,
      translateX: -50,
    },
    visible: visibleVariant,
  },
  containers: {
    hidden: {
      ...hiddenVariant,
      translateX: -50,
      translateY: 50,
    },
    visible: visibleVariant,
  },
  applePay: {
    hidden: {
      ...hiddenVariant,
      translateX: 50,
    },
    visible: visibleVariant,
  },
  contentful: {
    hidden: {
      ...hiddenVariant,
      translateX: 50,
      translateY: 50,
    },
    visible: visibleVariant,
  },
  strapi: {
    hidden: {
      ...hiddenVariant,
      translateY: 50,
    },
    visible: visibleVariant,
  },
  opacity: {
    hidden: hiddenVariant,
    visible: visibleVariant,
  },
};
