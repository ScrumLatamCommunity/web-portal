'use client'

import { ReactNode } from 'react'
import { DesktopNavbar } from './allies/components/DesktopNavbar'
import { DesktopSidebar } from './allies/components/DesktopSidebar'
import { superAdminDashboard } from '@/data/data'
import RouteProtection from '../components/RouteProtection'

interface SuperAdminLayoutProps {
  children: ReactNode
}

export default function SuperAdminLayout({ children }: SuperAdminLayoutProps) {
  return (
    <RouteProtection allowedRoles={['ADMIN']}>
      <div className='flex min-h-screen w-full flex-col'>
        <DesktopNavbar />
        <div className='flex flex-1'>
          <DesktopSidebar routes={superAdminDashboard} />
          <main className='flex-1 p-6'>{children}</main>
        </div>
      </div>
    </RouteProtection>
  )
}
