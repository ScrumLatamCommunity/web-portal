'use client'

import React, { useState } from 'react'

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(email, password)
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-700'
        >
          Correo Electrónico
        </label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='tucorreo@ejemplo.com'
          required
          className='mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200'
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='••••••••'
          required
          className='mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200'
        />
      </div>
      <button
        type='submit'
        className='w-full rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200'
      >
        Iniciar Sesión
      </button>
    </form>
  )
}
