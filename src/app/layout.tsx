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
import { Metadata } from 'next'

interface RootLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Super%20Admin%20Dashboard%2FIsotipo%20principal%201.svg?alt=media&token=c82729ba-f8ca-48cd-af3f-eb69b5a4024c',
        type: 'image/svg+xml'
      }
    ]
  }
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
// Conflictos con enter
