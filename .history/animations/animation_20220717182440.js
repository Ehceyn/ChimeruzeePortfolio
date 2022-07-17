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
  initial: {
    opacity: 0,
    y: "10vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
