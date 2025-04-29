import { ArrowRight } from 'lucide-react'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const CoordButtonVariants = {
  white: 'bg-white text-black',
  yellow: 'bg-button-background-secondary text-white',
}

const responsivePadding = {
  paddingBlock: 'clamp(0.5rem, 0.354rem + 0.5991vw, 1.3125rem)',
  paddingInline: 'clamp(1.3125rem, 1.0092rem + 1.2442vw, 3rem)',
}

export interface CoordButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof CoordButtonVariants
  withArrow?: boolean
  fullWidth?: boolean
}

const CoordButton = React.forwardRef<HTMLButtonElement, CoordButtonProps>(
  (
    {
      variant = 'white',
      withArrow = false,
      fullWidth = false,
      className = '',
      children,
      disabled,
      type = 'button',
      style,
      ...props
    },
    ref,
  ) => {
    const baseStyles = 'cta-text flex items-center justify-center hover:cursor-pointer'

    const buttonClasses = twMerge(
      baseStyles,
      CoordButtonVariants[variant],
      fullWidth ? 'w-full' : '',
      disabled ? 'opacity-50 cursor-not-allowed' : '',
      className,
    )

    const mergedStyles = {
      ...responsivePadding,
      ...style,
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={buttonClasses}
        style={mergedStyles}
        {...props}
      >
        <span>{children}</span>
        {withArrow && <ArrowRight className="ml-2" size="1.3em" />}
      </button>
    )
  },
)

CoordButton.displayName = 'CoordButton'

export default CoordButton
