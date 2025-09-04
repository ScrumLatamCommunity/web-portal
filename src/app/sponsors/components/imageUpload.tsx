'use client'

import Image from 'next/image'
import type React from 'react'
import { useState, useRef, useEffect } from 'react'
import UploadIcon from '@/assets/UploadIcon'
import { useAuth } from '@/app/context/AuthContext'

interface ImageUploadProps {
  onChange: (value: string) => void
  onReset?: () => void
  initialImage?: string
  className?: string
}

const ImageUpload = ({
  onChange,
  onReset,
  initialImage,
  className
}: ImageUploadProps) => {
  const { token } = useAuth()
  const [image, setImage] = useState<string | null>(initialImage || null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [lastFile, setLastFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const uploadImage = async (file: File) => {
    setIsLoading(true)
    setError(null)
    setLastFile(file)

    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('folder', 'scrumlatam')

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}image/upload`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: formData
        }
      )

      if (!response.ok) {
        throw new Error('Error al subir la imagen')
      }

      const data = await response.json()
      const imageUrl = data.url
      setImage(imageUrl)
      onChange(imageUrl)
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

  const resetImage = () => {
    setImage(null)
    setError(null)
    setLastFile(null)
  }

  useEffect(() => {
    if (onReset) {
      onReset = resetImage
    }
  }, [onReset])

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className={`relative flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-gray-200 transition-colors hover:bg-gray-300 ${className}`}
    >
      <input
        ref={fileInputRef}
        type='file'
        accept='image/*'
        onChange={handleFileChange}
        className='hidden'
        id='file-input'
      />

      {isLoading && (
        <div className='bg-black absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-opacity-50 text-white'>
          <div className='flex flex-col items-center'>
            <div className='mb-2 h-8 w-8 animate-spin rounded-full border-b-2 border-white'></div>
            <span>Subiendo...</span>
          </div>
        </div>
      )}

      {error && (
        <div className='absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between rounded-b-lg bg-red-500 p-2 text-white'>
          <span className='text-sm'>{error}</span>
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleRetry()
            }}
            className='rounded bg-white px-3 py-1 text-sm text-red-500 hover:bg-red-100'
          >
            Reintentar
          </button>
        </div>
      )}

      {image ? (
        <div
          className='group relative h-full w-full'
          onClick={triggerFileInput}
        >
          <Image
            alt='Uploaded'
            className='h-full w-full rounded-lg object-fill'
            height={500}
            src={image || '/placeholder.svg'}
            unoptimized
            width={500}
          />
          <div className='bg-black absolute inset-0 flex items-center justify-center rounded-lg bg-opacity-0 transition-all group-hover:bg-opacity-50'>
            <div className='hidden flex-col items-center text-white group-hover:flex'>
              <UploadIcon className='mb-2 h-6 w-6' />
              <p className='text-sm'>Cambiar imagen</p>
            </div>
          </div>
        </div>
      ) : (
        <button
          type='button'
          onClick={triggerFileInput}
          className='flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 transition-colors hover:bg-gray-50'
        >
          <UploadIcon className='h-4 w-4' />
          <span className='text-sm text-gray-700'>Cargar imagen</span>
        </button>
      )}
    </div>
  )
}

export default ImageUpload
