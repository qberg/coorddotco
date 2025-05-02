export const clipPathRevealTB = (duration: number, delay: number) => ({
  hidden: { clipPath: 'inset(0 0 90% 0)', opacity: 0 },
  visible: {
    clipPath: 'inset(0 0 0 0)',
    opacity: 1,
    transition: {
      clipPath: {
        duration: duration,
        delay: delay,
        ease: [0.25, 1, 0.5, 1], // Custom easing curve for smooth reveal
      },
      opacity: {
        duration: duration * 0.5,
        delay: delay,
      },
    },
  },
})

export const clipPathRevealBT = (duration: number, delay: number) => ({
  hidden: { clipPath: 'inset(90% 0 0 0)', opacity: 0 },
  visible: {
    clipPath: 'inset(0 0 0 0)',
    opacity: 1,
    transition: {
      clipPath: {
        duration: duration,
        delay: delay,
        ease: [0.25, 1, 0.5, 1],
      },
      opacity: {
        duration: duration * 0.5,
        delay: delay,
      },
    },
  },
})

export const clipPathRevealLR = (duration: number, delay: number) => ({
  hidden: { clipPath: 'inset(0 0 0 90%)', opacity: 0 },
  visible: {
    clipPath: 'inset(0 0 0 0)',
    opacity: 1,
    transition: {
      clipPath: {
        duration: duration,
        delay: delay,
        ease: [0.25, 1, 0.5, 1],
      },
      opacity: {
        duration: duration * 0.5,
        delay: delay,
      },
    },
  },
})

export const clipPathRevealRL = (duration: number, delay: number) => ({
  hidden: { clipPath: 'inset(0 90% 0 0)', opacity: 0 },
  visible: {
    clipPath: 'inset(0 0 0 0)',
    opacity: 1,
    transition: {
      clipPath: {
        duration: duration,
        delay: delay,
        ease: [0.25, 1, 0.5, 1],
      },
      opacity: {
        duration: duration * 0.5,
        delay: delay,
      },
    },
  },
})
