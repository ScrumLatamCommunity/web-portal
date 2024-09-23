import { ReactNode } from 'react'
import '../app/globals.css'
import type { Metadata } from 'next'
interface RootLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Scrum Latam',
  description: 'Scrum Latam',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='es'>
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
}
