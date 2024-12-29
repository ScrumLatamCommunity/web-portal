'use client'

import React from 'react'

export const LoginHeader: React.FC = () => {
  return (
    <div className='mb-6 text-center'>
      <h1 className='text-3xl font-bold text-gray-800'>Bienvenido</h1>
      <p className='text-sm text-gray-600'>
        Por favor, inicia sesión para continuar
      </p>
    </div>
  )
}
