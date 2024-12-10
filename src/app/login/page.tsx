'use client'

import { LoginForm } from './components/LoginForm'
import { LoginHeader } from './components/LoginHeader'

export default function Login() {
  const handleLogin = (email: string, password: string) => {
    console.log('Email:', email)
    console.log('Password:', password)
  }

  return (
    <main className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md rounded-lg bg-white p-6 shadow-md'>
        <LoginHeader />
        <LoginForm onSubmit={handleLogin} />
      </div>
    </main>
  )
}
