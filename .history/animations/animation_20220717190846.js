export const heroImage = {
  initial: {
    rotate: 0,
    // x: -100
  },
  animate: {
    rotate: 180,
    // x: 100
  },
  transition: {
    type: "tween",
    ease: "easeInOut",
    repeat: "Infinity",
    duration: 0.2,
  },
};

export const fromBottom = {
  animate: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

export const scaleUp = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
