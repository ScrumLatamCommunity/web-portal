import { ReactNode } from 'react'
import { Footer } from './home/components/Footer'
import { Navbar } from './home/components'
import FloatingButton from './home/components/FloatingButton'
import '../app/globals.css'
import 'swiper/css'
import 'swiper/css/navigation'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '@/app/context/AuthContext'
import { OnboardingProvider } from './onboarding/context/OnboardingContext'
import { RegisterProvider } from '@/app/context/RegisterContext'

import type { Metadata } from 'next'

interface RootLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Scrum Latam',
  description: 'Scrum Latam'
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='es'>
      <body>
        <AuthProvider>
          <RegisterProvider>
            <OnboardingProvider>
              <Navbar />
              <div className='flex flex-col items-center justify-center'>
                {children}
                <FloatingButton />
              </div>
              <Footer />
              <Toaster position='top-right' />
            </OnboardingProvider>
          </RegisterProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
