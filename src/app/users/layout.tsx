'use client'
import { MobileTabBar } from '../super-admin-dashboard/allies/components/DesktopSidebar'
import { LoadingScreen } from '../super-admin-dashboard/components/LoadingScreen'
import { ReactNode, useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'
import { userDashboard } from '@/data/data'

interface UserLayoutProps {
  children: ReactNode
}

export default function UserLayout({ children }: UserLayoutProps) {
  const { user, token, isLoading: authLoading } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Esperar a que la autenticación termine de cargar
    if (authLoading) {
      return
    }

    // Si no hay token, redirigir al login
    if (!token) {
      router.push('/login')
      return
    }

    // Si hay usuario autenticado pero no es USER, redirigir al home
    if (user && user.role !== 'USER') {
      router.push('/')
      return
    }

    // Si llegamos aquí, el usuario está autenticado y es USER
    setIsLoading(false)
  }, [user, token, authLoading, router])

  // Mostrar loading mientras se verifica la autenticación
  if (authLoading || isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className='flex min-h-screen w-full flex-col'>
      <main className='flex-1'>{children}</main>
    </div>
  )
}
