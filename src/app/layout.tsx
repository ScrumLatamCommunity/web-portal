import { ReactNode } from 'react'
import { Footer } from './home/components/Footer'
import { Navbar } from './home/components'
import '../app/globals.css'
import 'swiper/css'
import 'swiper/css/navigation'

import type { Metadata } from 'next'
import { AuthProvider } from '@/contexts/AuthContext'

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
        <AuthProvider>
          <Navbar />
          <div className='flex flex-col items-center justify-center'>
            {children}
          </div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
