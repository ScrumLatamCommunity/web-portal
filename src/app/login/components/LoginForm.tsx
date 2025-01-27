'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { useLoginForm } from '../hooks/useLoginForm'
import { useRegister } from '@/app/context/RegisterContext'

export function LoginForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const { handleLogin, isLoading } = useLoginForm()
  const { clearRegisterUser } = useRegister()

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!email || !password) {
      throw new Error('Usuario y contraseña son requeridos')
    }
    await handleLogin({ email, password })
    clearRegisterUser()
  }

  return (
    <div className='mx-auto w-full max-w-md p-6'>
      <form ref={formRef} onSubmit={onSubmit} className='space-y-6'>
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700'
          >
            Email
          </label>
          <input
            type='text'
            id='email'
            name='email'
            required
            placeholder='example@gmail.com'
            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500'
          />
        </div>

        <div>
          <label
            htmlFor='password'
            className='block text-sm font-medium text-gray-700'
          >
            Contraseña
          </label>
          <input
            type='password'
            id='password'
            name='password'
            required
            placeholder='Escribe tu contraseña'
            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500'
          />
        </div>

        <button
          type='submit'
          disabled={isLoading}
          className='flex w-full justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50'
        >
          {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
        </button>

        <div className='space-y-2 text-center text-sm'>
          <p>
            Si olvidaste tu contraseña, recupérala{' '}
            <Link href='/recover' className='text-red-500 hover:text-red-600'>
              AQUÍ
            </Link>
          </p>
          <p>
            Puedes cambiar tu contraseña{' '}
            <Link
              href='/change-password'
              className='text-red-500 hover:text-red-600'
            >
              AQUÍ
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}
