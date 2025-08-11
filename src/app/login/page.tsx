'use client'

import React, { useEffect } from 'react'
import { LoginForm } from './components/LoginForm'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      // Solo redirigir al home si el usuario ya completó el onboarding
      if (user.onboarding === true) {
        router.push('/')
      }
      // Si onboarding es false, dejar que el hook de login maneje la redirección
    }
  }, [user, router])

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
