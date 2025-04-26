export const clipPathRevealTB = (duration: number) => ({
  hidden: { clipPath: 'inset(0 0 90% 0)', opacity: 0 },
  visible: {
    clipPath: 'inset(0 0 0 0)',
    opacity: 1,
    transition: {
      duration: duration,
      type: 'easeInOut',
    },
  },
})

export const clipPathRevealLR = (duration: number) => ({
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0 0 0)',
    transition: {
      duration: duration,
      type: 'easeInOut',
    },
  },
})

export const clipPathRevealBT = (duration: number) => ({
  hidden: { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
  visible: {
    clipPath: 'inset(0 0 0 0)',
    opacity: 1,
    transition: {
      duration: duration,
      type: 'easeInOut',
    },
  },
})

export const fadeUpVariant = (duration: number, delay: number) => ({
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'easeInOut',
      duration: duration,
      delay: delay,
    },
  },
})
