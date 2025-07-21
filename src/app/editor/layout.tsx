'use client'

import { ReactNode, useState, useEffect } from 'react'
import { LoadingScreen } from '../super-admin-dashboard/components/LoadingScreen'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'

interface EditorLayoutProps {
  children: ReactNode
}

export default function EditorLayout({ children }: EditorLayoutProps) {
  const { user } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (user && user.role !== 'EDITOR') {
      router.push('/')
      return
    }
    setIsLoading(false)
  }, [user, router])

  if (isLoading) {
    return <LoadingScreen />
  }
  return (
    <div className='flex min-h-screen w-full max-w-[1620px] flex-col'>
      <div className='flex flex-1'>
        <main className='flex-1 p-6'>{children}</main>
      </div>
    </div>
  )
}
