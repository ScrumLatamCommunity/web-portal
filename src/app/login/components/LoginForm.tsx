'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { useFormStatus } from 'react-dom'
import { login } from '@/app/actions/auth'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      disabled={pending}
      className='flex w-full justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50'
    >
      {pending ? 'Iniciando sesión...' : 'Iniciar Sesión'}
    </button>
  )
}

export function LoginForm() {
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <div className='mx-auto w-full max-w-md p-6'>
      <form ref={formRef} action={login} className='space-y-6'>
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700'
          >
            Usuario
          </label>
          <input
            type='text'
            id='email'
            name='email'
            required
            placeholder='Escribe tu usuario'
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

        <SubmitButton />

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
