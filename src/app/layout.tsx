import { Metadata } from 'next'
import React from 'react'

import '../styles/global.css'

export const metadata: Metadata = {
  title: 'Metaverse',
  description: 'Created by Vinicius Ferreira',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
