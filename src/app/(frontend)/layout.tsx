import React from 'react'
import './globals.css'
import { hankenGrotesk, playfairDisplay, rocGrotesk } from '@/fonts'
import LenisProvider from '@/components/LenisProvider'

export const metadata = {
  description:
    'COORD (Crafted Objects Operational Resource Database) is more than a platform; it is a movement to ensure that no craft dies unseen, no artisan works in isolation, and no story goes untold.',
  title: 'COORD',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html
      lang="en"
      className={`${rocGrotesk.variable} ${hankenGrotesk.variable} ${playfairDisplay.variable} antialiased`}
    >
      <body>
        <LenisProvider>
          <main className="mx-auto overflow-hidden md:overflow-visible">{children}</main>
        </LenisProvider>
      </body>
    </html>
  )
}
