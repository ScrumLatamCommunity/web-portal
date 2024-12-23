'use client'

import Link from 'next/link'
import React, { useState } from 'react'

interface RegisterProps {
  onRegister: (formData: {
    name: string
    email: string
    password: string
  }) => void
}

export const RegisterComponent: React.FC<RegisterProps> = ({ onRegister }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.')
      return
    }

    setError('')
    onRegister({ name, email, password })
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md rounded-lg bg-white p-6 shadow-md'>
        <h2 className='mb-4 text-center text-2xl font-bold text-gray-800'>
          Crear Cuenta
        </h2>
        {error && (
          <div className='mb-4 text-center text-sm text-red-500'>{error}</div>
        )}
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label
              className='block text-sm font-medium text-gray-700'
              htmlFor='name'
            >
              Nombre Completo
            </label>
            <input
              className='mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200'
              id='name'
              onChange={(e) => setName(e.target.value)}
              placeholder='Tu nombre completo'
              required
              type='text'
              value={name}
            />
          </div>
          <div>
            <label
              className='block text-sm font-medium text-gray-700'
              htmlFor='email'
            >
              Correo Electrónico
            </label>
            <input
              className='mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200'
              id='email'
              onChange={(e) => setEmail(e.target.value)}
              placeholder='tucorreo@ejemplo.com'
              required
              type='email'
              value={email}
            />
          </div>
          <div>
            <label
              className='block text-sm font-medium text-gray-700'
              htmlFor='password'
            >
              Contraseña
            </label>
            <input
              className='mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200'
              id='password'
              onChange={(e) => setPassword(e.target.value)}
              placeholder='••••••••'
              required
              type='password'
              value={password}
            />
          </div>
          <div>
            <label
              className='block text-sm font-medium text-gray-700'
              htmlFor='confirmPassword'
            >
              Confirmar Contraseña
            </label>
            <input
              className='mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200'
              id='confirmPassword'
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='••••••••'
              required
              type='password'
              value={confirmPassword}
            />
          </div>
          <button
            className='w-full rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200'
            type='submit'
          >
            Registrarse
          </button>
        </form>
        <p className='mt-4 text-center text-sm text-gray-600'>
          ¿Ya tienes una cuenta?{' '}
          <Link className='text-indigo-600 hover:underline' href='/register'>
            Inicia Sesión
          </Link>
        </p>
      </div>
    </div>
  )
}
