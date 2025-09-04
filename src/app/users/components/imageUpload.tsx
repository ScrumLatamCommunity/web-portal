// src/app/components/imageUpload.tsx
'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import UploadIcon from '@/assets/UploadIcon'
import { darkerGrotesque } from '@/fonts'
import { useAuth } from '@/app/context/AuthContext'
import { UserData } from '@/interfaces'

interface ImageUploadProps {
  currentImageUrl?: string | null
  onUploadComplete: (updatedUserData: UserData) => void
  className?: string
  currentUserData?: UserData | null
}

export default function ImageUpload({
  currentImageUrl,
  onUploadComplete,
  className = '',
  currentUserData
}: ImageUploadProps) {
  const { token, user } = useAuth()
  const [image, setImage] = useState<string | null>(currentImageUrl || null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [lastFile, setLastFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (currentImageUrl) {
      setImage(currentImageUrl)
    }
  }, [currentImageUrl])

  const uploadImage = async (file: File) => {
    setIsLoading(true)
    setError(null)
    setLastFile(file)

    try {
      const formData = new FormData()
      formData.append('profilePicture', file)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}users/profile-picture/upload`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: formData
        }
      )

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(
          `Error al subir la imagen: ${response.status} - ${errorText}`
        )
      }

      const data = await response.json()
      const imageUrl = data.url

      setImage(imageUrl)

      // Solo enviar profilePictureUrl ya que es lo único que necesitamos actualizar
      const updatePayload = {
        profilePictureUrl: imageUrl
      }

      const userResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}users/${user?.sub}`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatePayload)
        }
      )

      if (!userResponse.ok) {
        const errorText = await userResponse.text()
        throw new Error(
          `Error al actualizar perfil: ${userResponse.status} - ${errorText}`
        )
      }

      const updatedUserData: UserData = await userResponse.json()

      onUploadComplete(updatedUserData)
      setLastFile(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al subir la imagen')
      console.error('Error uploading image:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleRetry = async () => {
    if (lastFile) {
      await uploadImage(lastFile)
    }
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      // Mostrar preview inmediatamente
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)

      // Subir la imagen
      await uploadImage(file)
    }
  }

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      // Mostrar preview inmediatamente
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)

      // Subir la imagen
      await uploadImage(file)
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {image ? (
        <div className='relative mx-auto h-[150px] w-[150px] overflow-hidden rounded-full border-2 border-gray-300 shadow-sm'>
          <Image
            src={image}
            alt='Vista previa de perfil'
            layout='fill'
            objectFit='cover'
            key={image}
            unoptimized
          />
        </div>
      ) : (
        <div className='mx-auto flex h-[100px] w-[100px] items-center justify-center rounded-full border-2 border-gray-300 bg-gray-200 text-gray-400'>
          <span>Sin foto</span>
        </div>
      )}

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={triggerFileInput}
        className='relative flex w-full cursor-pointer items-center justify-center rounded-[10px] border-[1px] border-[#BFBFBF] bg-white p-4'
      >
        <input
          ref={fileInputRef}
          type='file'
          accept='image/*'
          onChange={handleFileChange}
          className='hidden'
          id='profilePictureInput'
        />

        {isLoading && (
          <div className='bg-black absolute inset-0 z-10 flex items-center justify-center bg-opacity-50 text-white'>
            Subiendo...
          </div>
        )}

        {error && (
          <div className='absolute bottom-0 z-10 flex w-full items-center justify-between bg-red-500 p-2 text-white'>
            <span>{error}</span>
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleRetry()
              }}
              className='rounded bg-white px-3 py-1 text-red-500 hover:bg-red-100'
            >
              Reintentar
            </button>
          </div>
        )}

        <div
          className={`${darkerGrotesque.variable} flex h-[60px] w-[160px] flex-col items-center justify-center rounded-[10px]`}
        >
          <div className='flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.1)]'>
            <UploadIcon />
          </div>
          <p className='mt-2 text-center text-[12px] font-darker-grotesque-700 text-[#63789E]'>
            Subir imagen
          </p>
          <span className='cursor-pointer text-[10px]'>
            Seleccionar archivo
          </span>
        </div>
      </div>
    </div>
  )
}
