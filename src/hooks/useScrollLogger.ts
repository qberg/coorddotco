'use client'
import { MotionValue } from 'motion/react'
import { useEffect } from 'react'

/**
 * A custom hook that logs the changes in a motion value to the console
 * @param motionValue - The motion value to log
 * @param label - Optional label to identify the logs in the console
 * @param throttleMs - Optional throttle time in milliseconds to reduce log frequency
 */
export const useScrollLogger = (
  motionValue: MotionValue<number>,
  label: string = 'Motion Value',
  throttleMs: number = 0,
) => {
  useEffect(() => {
    let lastLogTime = 0

    const unsubscribe = motionValue.on('change', (value) => {
      const now = Date.now()

      if (throttleMs > 0) {
        if (now - lastLogTime < throttleMs) {
          return
        }
        lastLogTime = now
      }

      console.log(`${label}:`, value)
    })

    return () => {
      unsubscribe()
    }
  }, [motionValue, label, throttleMs])
}

export default useScrollLogger
