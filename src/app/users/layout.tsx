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
  const { user } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (user && user.role !== 'USER') {
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
        <main className='flex-1'>{children}</main>
      </div>
    </div>
  )
}
