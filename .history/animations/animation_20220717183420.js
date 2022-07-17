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
