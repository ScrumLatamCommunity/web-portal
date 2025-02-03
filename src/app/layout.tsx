'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
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

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname()
  const hideLayout = pathname.startsWith('/sponsors')

  return (
    <html lang='es'>
      <body>
        <AuthProvider>
          <RegisterProvider>
            <OnboardingProvider>
              {!hideLayout && <Navbar />}
              <div className='flex flex-col items-center justify-center'>
                {children}
                {!hideLayout && <FloatingButton />}
              </div>
              {!hideLayout && <Footer />}
              <Toaster position='top-right' />
            </OnboardingProvider>
          </RegisterProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
