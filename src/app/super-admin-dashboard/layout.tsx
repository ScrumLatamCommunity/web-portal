import { ReactNode } from 'react'
import { DesktopNavbar } from './components/DesktopNavbar'
import '../../app/globals.css'
import { DesktopSidebar } from './components/DesktopSidebar'

interface SuperAdminLayoutProps {
  children: ReactNode
}

export const metadata = {
  title: 'Super Admin Dashboard',
  description: 'Dashboard exclusivo para administradores.',
}

export default function SuperAdminLayout({ children }: SuperAdminLayoutProps) {
  return (
    <html lang='es'>
      <body className='flex flex-col'>
        <DesktopNavbar />
        <div className='flex'>
          <DesktopSidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
