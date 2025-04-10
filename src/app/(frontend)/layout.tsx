import React from 'react'
import './globals.css'
import { hankenGrotesk, playfairDisplay, rocGrotesk } from '@/fonts'
import Header from '@/components/header'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'COORD',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html
      lang="en"
      className={`${rocGrotesk.variable} ${hankenGrotesk.variable} ${playfairDisplay} antialiased`}
    >
      <body>
        <Header />
        <main className="mx-auto px-4 md:px-10 4xl:px-14 overflow-hidden md:overflow-visible">
          {children}
        </main>
      </body>
    </html>
  )
}
