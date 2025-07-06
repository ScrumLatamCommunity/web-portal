'use client'

import React from 'react'
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
    <div className='grid h-screen w-full grid-cols-1 md:grid-cols-2'>
      <div className='col-span-1 hidden md:block'>
        <img
          src='https://appwiseinnovations.dev/scrumlatam/photo.png'
          alt='register'
          className='h-screen w-full object-cover'
        />
      </div>
      <div className='col-span-1 flex items-center justify-center'>
        <LoginForm />
      </div>
    </div>
  )
}
