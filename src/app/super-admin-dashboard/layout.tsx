'use client'

import { ReactNode, useEffect, useState } from 'react'
import { DesktopNavbar } from './allies/components/DesktopNavbar'
import { DesktopSidebar } from './allies/components/DesktopSidebar'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'
import { LoadingScreen } from './components/LoadingScreen'
import { superAdminDashboard } from '@/data/data'

interface SuperAdminLayoutProps {
  children: ReactNode
}

export default function SuperAdminLayout({ children }: SuperAdminLayoutProps) {
  const { user } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (user && user.role !== 'ADMIN') {
      router.push('/')
      return
    }
    setIsLoading(false)
  }, [user, router])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className='flex min-h-screen w-full flex-col'>
      <DesktopNavbar />
      <div className='flex flex-1'>
        <DesktopSidebar routes={superAdminDashboard} />
        <main className='flex-1 p-6'>{children}</main>
      </div>
    </div>
  )
}
