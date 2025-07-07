'use client'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/context/AuthContext'
import { RegisterForm } from './components/RegisterForm'

export default function Register() {
  const { user } = useAuth()
  const router = useRouter()

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
        <RegisterForm />
      </div>
    </div>
  )
}
