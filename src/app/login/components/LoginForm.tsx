'use client'

import React, { useState } from 'react'
import { useLoginForm } from '../hooks/useLoginForm'
import { useRegister } from '@/app/context/RegisterContext'
import { LogoScrumlatam } from '@/components/Logo'
import { useRouter } from 'next/navigation'

export function LoginForm() {
  const router = useRouter()
  const { handleLogin, isLoading } = useLoginForm()
  const { clearRegisterUser } = useRegister()
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

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
    <div className='flex w-full flex-col items-center justify-center p-4'>
      <div className='mb-4 text-center'>
        <div className='mb-2 flex justify-center'>
          <LogoScrumlatam />
        </div>
        <p className='mb-1 text-[16px] font-semibold text-[#072356] md:text-[26px]'>
          Iniciar sesión
        </p>
        <p className='text-[10px] text-gray-600'>
          Todos los campos con <span className='text-orange-500'>*</span> son
          obligatorios
        </p>
      </div>

      <div className='w-full max-w-md'>
        <form className='space-y-3' onSubmit={onSubmit}>
          {/* Correo electrónico */}
          <div>
            <label className='mb-1 block text-xs font-medium text-gray-700'>
              Correo electrónico<span className='text-orange-500'>*</span>
            </label>
            <input
              className='w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500'
              name='email'
              placeholder='Ej: tu correo@gmail.com'
              type='email'
              required
              disabled={isLoading}
            />
          </div>

          {/* Contraseña */}
          <div>
            <label className='mb-1 block text-xs font-medium text-gray-700'>
              Contraseña<span className='text-orange-500'>*</span>
            </label>
            <div className='relative'>
              <input
                className='w-full rounded-md border border-gray-300 px-3 py-1.5 pr-10 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500'
                name='password'
                type={showPassword ? 'text' : 'password'}
                required
                disabled={isLoading}
                minLength={6}
              />
              <button
                type='button'
                className='absolute inset-y-0 right-0 flex items-center pr-3'
                onClick={togglePasswordVisibility}
                disabled={isLoading}
              >
                {showPassword ? (
                  <svg
                    className='h-4 w-4 text-gray-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21'
                    />
                  </svg>
                ) : (
                  <svg
                    className='h-4 w-4 text-gray-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Botón de registro */}
          <button
            className='w-full rounded-md bg-[#072356] px-4 py-2 text-sm font-medium text-white transition duration-200 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </button>

          {/* Links de navegación */}
          <div className='flex flex-col items-center gap-2 text-center'>
            <p className='flex flex-col text-xs text-gray-600'>
              ¿No tienes una cuenta?{' '}
              <button
                type='button'
                className='font-medium text-blue-600 hover:text-blue-500'
                onClick={() => router.push('/register')}
                disabled={isLoading}
              >
                Registrate
              </button>
            </p>
            <p className='flex flex-col text-xs text-gray-600'>
              si tienes problemas para iniciar sesión, por favor contacta a
              soporte de la comunidad:{' '}
              <a
                href='mailto: scrums.latam@gmail.com'
                className='text-blue-600 hover:text-blue-500'
              >
                scrums.latam@gmail.com
              </a>
            </p>
            <button
              type='button'
              onClick={() => router.push('/')}
              className='flex items-center gap-1 text-xs text-gray-500 hover:text-[#072356]'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-3 w-3'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
                />
              </svg>
              Volver al inicio
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
