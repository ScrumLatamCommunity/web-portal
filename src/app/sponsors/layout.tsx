'use client'
import { LoadingScreen } from '../super-admin-dashboard/components/LoadingScreen'
import { ReactNode, useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'
import { sponsorDashboard } from '@/data/data'
import { MobileTabBar } from './components/mobileTabBar'
import { DesktopSidebar } from './components/desktopTabBar'

interface SponsorLayoutProps {
  children: ReactNode
}

export default function SponsorLayout({ children }: SponsorLayoutProps) {
  const { user } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (user && user.role !== 'SPONSOR') {
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
      <div className='container mx-auto flex flex-1'>
        <DesktopSidebar routes={sponsorDashboard} />
        <MobileTabBar routes={sponsorDashboard} />
        <main className='flex-1'>{children}</main>
      </div>
    </div>
  )
}
