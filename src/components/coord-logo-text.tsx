import { cn } from '@/lib/utils'
import React from 'react'

export interface CoordLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

const CoordLogo = React.forwardRef<HTMLDivElement, CoordLogoProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('relative inline-flex w-fit h-fit leading-none', className)}
        {...props}
      >
        <span
          className="font-roc font-normal uppercase whitespace-nowrap"
          style={{ fontSize: 'clamp(6rem, -0.5599rem + 26.9124vw, 42.5rem)' }}
          //style={{ fontSize: 'clamp(5rem, -0.536rem + 22.7119vw, 30rem)' }}
        >
          CO
          <span className="relative">
            <span
              className="absolute bg-current mx-auto"
              style={{
                width: 'clamp(2.375rem, 0.2267rem + 8.8136vw, 12.125rem)',
                height: 'clamp(0.5625rem, 0.1081rem + 1.8644vw, 2.625rem)',
                top: '-0.06em',
                left: '0.17em',
              }}
              aria-hidden="true"
            ></span>
            O
          </span>
          RD
        </span>
      </div>
    )
  },
)

CoordLogo.displayName = 'CoordLogo'

export default CoordLogo
