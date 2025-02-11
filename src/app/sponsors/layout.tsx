'use client'

import { DesktopNavbar } from '../super-admin-dashboard/allies/components/DesktopNavbar'
import { DesktopSidebar } from '../super-admin-dashboard/allies/components/DesktopSidebar'
import { LoadingScreen } from '../super-admin-dashboard/components/LoadingScreen'
import { ReactNode, useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'
import { sponsorDashboard } from '@/data/data'

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
      <DesktopNavbar />
      <div className='flex flex-1'>
        <DesktopSidebar routes={sponsorDashboard} />
        <main className='flex-1 p-6'>{children}</main>
      </div>
    </div>
  )
}
