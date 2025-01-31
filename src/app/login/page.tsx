'use client'

import React from 'react'
import { LoginHeader } from './components/LoginHeader'
import { LoginForm } from './components/LoginForm'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const { user } = useAuth()

  if (user) {
    router.push('/')
  }
  return (
    <div className='min-w-screen relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-white to-gray-100'>
      <div className='absolute -left-20 top-20 h-40 w-40 rounded-full border-2 border-dashed border-blue-200'></div>
      <div className='absolute -right-20 top-20 h-40 w-40 rounded-full border-2 border-dashed border-blue-200'></div>
      <LoginHeader />
      <LoginForm />
    </div>
  )
}
