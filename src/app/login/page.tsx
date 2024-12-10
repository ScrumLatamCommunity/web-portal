'use client'
import { useState } from 'react'
import { NextPage } from 'next'

interface FormData {
  password: string
  username: string
}

const BackgroundCircles = () => {
  return (
    <div className='absolute inset-0 -z-10'>
      <div className='absolute left-10 top-40 h-48 w-48 rounded-full bg-gradient-to-r from-[#FD3600] to-[#FF5733] opacity-40 blur-3xl md:left-10 md:top-20'></div>
      <div className='absolute right-10 top-10 h-48 w-48 rounded-full bg-gradient-to-r from-[#FD3600] to-[#FF5733] opacity-30 blur-3xl md:right-60 md:top-32'></div>
      <div className='absolute left-40 top-80 h-36 w-36 rounded-full bg-gradient-to-r from-[#FD3600] to-[#FF5733] opacity-20 blur-3xl md:left-40 md:top-60'></div>
    </div>
  )
}

const RegisterForm: NextPage = () => {
  const [formData, setFormData] = useState<FormData>({
    password: '',
    username: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className='relative mx-10 my-20 grid grid-cols-1 gap-10 md:grid-cols-3'>
      <BackgroundCircles />
      <div className='order-1 col-span-1 md:order-1'>
        <p className='mx-6 mb-6 text-4xl font-bold'>Inicia sesión</p>
      </div>
      <div className='order-2 col-span-2 flex items-center justify-center md:order-2'>
        <form
          className='flex w-full flex-col space-y-4 md:w-3/4 lg:w-2/3'
          onSubmit={handleSubmit}
        >
          <input
            type='text'
            placeholder='Nombre de usuario'
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            className='w-full border-b-2 border-[#FD3600] bg-transparent p-4 shadow-sm placeholder:text-[#555]'
          />
          <input
            type='password'
            placeholder='Contraseña'
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className='w-full border-b-2 border-[#FD3600] bg-transparent p-4 shadow-sm placeholder:text-[#555]'
          />
          <button
            type='submit'
            className='rounded bg-[#FD3600] px-4 py-2 text-white'
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
