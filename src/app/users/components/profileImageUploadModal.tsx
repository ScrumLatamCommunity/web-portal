'use client'

import React from 'react'
import ImageUpload from './imageUpload'
import { UserData } from '@/interfaces'

interface ProfileImageUploadModalProps {
  isOpen: boolean
  onClose: () => void
  currentImageUrl: string | null | undefined
  onUploadComplete: (updatedUserData: UserData) => void
  currentUserData?: UserData | null
}

export default function ProfileImageUploadModal({
  isOpen,
  onClose,
  currentImageUrl,
  onUploadComplete,
  currentUserData
}: ProfileImageUploadModalProps) {
  if (!isOpen) {
    return null
  }

  const handleInternalUploadComplete = (updatedUserData: UserData) => {
    onUploadComplete(updatedUserData)
  }

  return (
    <div
      className='bg-black fixed inset-0 z-50 flex items-center justify-center p-4 duration-300 ease-in-out'
      onClick={onClose}
    >
      {/* Contenido del Modal */}
      <div
        className='mx-auto w-full max-w-lg scale-100 transform rounded-lg bg-white p-6 shadow-xl transition-all duration-300 ease-in-out'
        onClick={(e) => e.stopPropagation()} // Evitar que el clic dentro del modal lo cierre
      >
        <div className='mb-6 flex items-center justify-between'>
          <h2 className='text-xl font-semibold text-gray-800'>
            Cambiar Foto de Perfil
          </h2>
          <button
            onClick={onClose}
            className='text-3xl leading-none text-gray-400 hover:text-gray-600'
            aria-label='Cerrar modal'
          >
            &times; {/* Botón "X" para cerrar */}
          </button>
        </div>

        {/* Aquí va el componente que maneja la subida de la imagen */}
        <ImageUpload
          currentImageUrl={currentImageUrl}
          onUploadComplete={handleInternalUploadComplete} // Pasa la función de callback
          className='w-full' // Ajusta el estilo de ImageUpload si es necesario
          currentUserData={currentUserData}
        />

        {/* Botón de Cancelar adicional (opcional, ya que la 'X' y el backdrop cierran) */}
        <div className='mt-6 flex justify-end border-t border-gray-200 pt-4'>
          <button
            type='button'
            onClick={onClose}
            className='rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
          >
            Cancelar
          </button>
          {/* No necesitamos un botón "Guardar" aquí si ImageUpload guarda inmediatamente */}
        </div>
      </div>
    </div>
  )
}
