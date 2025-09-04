'use client'

import { ReactNode } from 'react'
import RouteProtection from '../components/RouteProtection'

interface EditorLayoutProps {
  children: ReactNode
}

export default function EditorLayout({ children }: EditorLayoutProps) {
  return (
    <RouteProtection allowedRoles={['EDITOR']}>
      <div className='flex min-h-screen w-full max-w-[1620px] flex-col'>
        <div className='flex flex-1'>
          <main className='flex-1 p-6'>{children}</main>
        </div>
      </div>
    </RouteProtection>
  )
}
