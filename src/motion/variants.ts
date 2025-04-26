export const clipPathRevealTB = (duration: number) => ({
  hidden: { clipPath: 'inset(0 0 100% 0)' },
  visible: {
    clipPath: 'inset(0 0 0 0)',
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
  hidden: { clipPath: 'inset(100% 0 0 0)' },
  visible: {
    clipPath: 'inset(0 0 0 0)',
    transition: {
      duration: duration,
      type: 'easeInOut',
    },
  },
})
