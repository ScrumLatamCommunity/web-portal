import { ReactNode } from 'react'
import { Footer } from './home/components/Footer'
import { Navbar } from './home/components'
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
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
