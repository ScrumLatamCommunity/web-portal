'use client'

import React from 'react'
import { LoginHeader } from './components/LoginHeader'
import { LoginForm } from './components/LoginForm'

export default function LoginPage() {
  return (
    <div className='min-w-screen relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-white to-gray-100'>
      <div className='absolute -left-20 top-20 h-40 w-40 rounded-full border-2 border-dashed border-blue-200'></div>
      <div className='absolute -right-20 top-20 h-40 w-40 rounded-full border-2 border-dashed border-blue-200'></div>
      <LoginHeader />
      <LoginForm />
    </div>
  )
}
