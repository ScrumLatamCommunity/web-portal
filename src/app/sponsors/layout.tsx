'use client'
import { LoadingScreen } from '../super-admin-dashboard/components/LoadingScreen'
import { ReactNode } from 'react'
import { sponsorDashboard } from '@/data/data'
import { MobileTabBar } from './components/mobileTabBar'
import { DesktopSidebar } from './components/desktopTabBar'
import RouteProtection from '../components/RouteProtection'

interface SponsorLayoutProps {
  children: ReactNode
}

export default function SponsorLayout({ children }: SponsorLayoutProps) {
  return (
    <RouteProtection allowedRoles={['SPONSOR']}>
      <div className='flex min-h-screen w-full flex-col'>
        <div className='container mx-auto flex flex-1'>
          <DesktopSidebar routes={sponsorDashboard} />
          <MobileTabBar routes={sponsorDashboard} />
          <main className='flex-1'>{children}</main>
        </div>
      </div>
    </RouteProtection>
  )
}
