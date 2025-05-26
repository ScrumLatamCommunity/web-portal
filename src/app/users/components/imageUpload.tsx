// src/app/components/imageUpload.tsx
'use client'

import React, { useState, ChangeEvent, useEffect } from 'react'
import Image from 'next/image'
import { useAuth } from '@/app/context/AuthContext' // Para obtener el token
import { UserData } from '@/interfaces' // Asumiendo que UserData es tu interfaz

interface ImageUploadProps {
  currentImageUrl?: string | null
  onUploadComplete: (updatedUserData: UserData) => void // Callback con los datos del usuario actualizado
  className?: string
}

export default function ImageUpload({
  currentImageUrl,
  onUploadComplete,
  className = ''
}: ImageUploadProps) {
  const { token, user } = useAuth() // Asumimos que 'user' del contexto tiene 'sub' (ID del usuario)
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Establecer la URL de previsualización inicial si existe una imagen actual
    if (currentImageUrl) {
      setPreviewUrl(currentImageUrl)
    }
  }, [currentImageUrl])

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        // 5MB Límite (consistente con backend)
        setError('El archivo es demasiado grande (máx. 5MB).')
        setFile(null)
        setPreviewUrl(currentImageUrl || null) // Revertir a la imagen actual o ninguna
        return
      }
      if (
        !['image/jpeg', 'image/png', 'image/webp', 'image/gif'].includes(
          selectedFile.type
        )
      ) {
        setError('Tipo de archivo no válido (solo JPG, PNG, WebP, GIF).')
        setFile(null)
        setPreviewUrl(currentImageUrl || null)
        return
      }
      setFile(selectedFile)
      setPreviewUrl(URL.createObjectURL(selectedFile)) // Mostrar previsualización local
      setError(null)
    }
  }

  const handleUpload = async () => {
    if (!file) {
      setError('Por favor, selecciona un archivo primero.')
      return
    }
    if (!token || !user?.sub) {
      setError('No autenticado o ID de usuario no disponible.')
      return
    }

    setIsUploading(true)
    setError(null)

    const formData = new FormData()
    formData.append('profilePicture', file) // 'profilePicture' debe coincidir con FileInterceptor en NestJS

    try {
      // El endpoint es para el usuario autenticado, el backend usa req.user.sub
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}users/profile-picture/upload`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${token}`
            // 'Content-Type': 'multipart/form-data' es añadido automáticamente por fetch con FormData
          },
          body: formData
        }
      )

      if (!response.ok) {
        let errorData
        try {
          errorData = await response.json()
        } catch (e) {
          errorData = { message: `Error al subir: ${response.statusText}` }
        }
        throw new Error(
          errorData.message || `Error al subir la imagen: ${response.status}`
        )
      }

      const updatedUserData: UserData = await response.json()
      onUploadComplete(updatedUserData) // Notificar al componente padre con todos los datos del usuario actualizados
      setPreviewUrl(updatedUserData.profilePictureUrl || null) // Actualizar previsualización con URL de Cloudinary
      setFile(null) // Limpiar selección de archivo
    } catch (err) {
      console.error('Error en handleUpload:', err)
      setError(
        err instanceof Error
          ? err.message
          : 'Ocurrió un error desconocido al subir la imagen.'
      )
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {previewUrl ? (
        <div className='relative mx-auto h-32 w-32 overflow-hidden rounded-full border-2 border-gray-300 shadow-sm md:h-40 md:w-40'>
          <Image
            src={previewUrl}
            alt='Vista previa de perfil'
            layout='fill'
            objectFit='cover'
            key={previewUrl} // Ayuda a React a recargar la imagen si la URL cambia
            unoptimized
          />
        </div>
      ) : (
        <div className='mx-auto flex h-32 w-32 items-center justify-center rounded-full border-2 border-gray-300 bg-gray-200 text-gray-400 md:h-40 md:w-40'>
          <span>Sin foto</span>
        </div>
      )}

      <div>
        <label htmlFor='profilePictureInput' className='sr-only'>
          {' '}
          {/* Solo para accesibilidad */}
          Seleccionar foto de perfil
        </label>
        <input
          id='profilePictureInput'
          type='file'
          accept='image/jpeg, image/png, image/webp, image/gif'
          onChange={handleFileChange}
          className='block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-sky-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-sky-700 hover:file:bg-sky-100'
        />
      </div>

      {file && ( // Mostrar botón de subir solo si hay un archivo seleccionado para subir
        <button
          onClick={handleUpload}
          disabled={isUploading || !file}
          className='w-full rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60'
        >
          {isUploading ? 'Subiendo...' : 'Subir Foto'}
        </button>
      )}
      {error && <p className='mt-1 text-xs text-red-600'>{error}</p>}
    </div>
  )
}
