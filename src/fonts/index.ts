import { Playfair_Display, Hanken_Grotesk } from 'next/font/google'
import localFont from 'next/font/local'

export const hankenGrotesk = Hanken_Grotesk({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hanken-grotesk',
})

export const playfairDisplay = Playfair_Display({
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
})

export const rocGrotesk = localFont({
  src: [
    {
      path: '../../public/fonts/roc-medium-regular.woff2',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../../public/fonts/roc-light-regular.woff2',
      weight: '300',
      style: 'light',
    },
  ],
  display: 'swap',
  variable: '--font-roc-grotesk',
})
