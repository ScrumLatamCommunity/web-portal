import React from 'react'

export const LoadingScreen = () => {
  return (
    <div className='flex min-h-screen w-full items-center justify-center'>
      <div className='flex flex-col items-center'>
        <div className='h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-red-500'></div>
        <span className='mt-4 animate-typing overflow-hidden whitespace-nowrap text-xl font-semibold text-red-500'>
          Cargando...
        </span>
      </div>
    </div>
  )
}
