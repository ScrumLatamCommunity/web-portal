'use client'

import Image from 'next/image'
import React, { useState, useRef } from 'react'
import UploadIcon from '@/assets/UploadIcon'
import { darkerGrotesque } from '@/fonts'
import { useAuth } from '@/app/context/AuthContext'

type ImageUploadProps = {
  onChange: (imageUrl: string) => void
  initialImage?: string
  className?: string
}

const ImageUpload = ({
  onChange,
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
      console.log(response)
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

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onClick={triggerFileInput}
      className={`relative flex h-full w-full cursor-pointer items-center justify-center rounded-[10px] border-[1px] border-[#BFBFBF] ${className}`}
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
        <div className='bg-black absolute inset-0 z-10 flex items-center justify-center bg-opacity-50 text-white'>
          Subiendo...
        </div>
      )}

      {error && (
        <div className='absolute bottom-0 z-10 flex w-full items-center justify-between bg-red-500 p-2 text-white'>
          <span>{error}</span>
          <button
            onClick={(e) => {
              e.stopPropagation() // Evitar que se abra el selector de archivos
              handleRetry()
            }}
            className='rounded bg-white px-3 py-1 text-red-500 hover:bg-red-100'
          >
            Reintentar
          </button>
        </div>
      )}

      {image ? (
        <div className='relative h-full w-full'>
          <Image
            alt='Uploaded'
            className='h-full w-full object-fill'
            height={300}
            src={image}
            unoptimized
            width={300}
          />
          <div className='bg-black absolute inset-0 flex items-center justify-center bg-opacity-0 transition-all hover:bg-opacity-50'>
            <p className='hidden text-white hover:block'>Cambiar imagen</p>
          </div>
        </div>
      ) : (
        <div
          className={`${darkerGrotesque.variable} flex h-[150px] w-[160px] flex-col items-center justify-center rounded-[10px] shadow-[0px_0px_30px_rgba(0,0,0,0.2)]`}
        >
          <div className='flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white shadow-[0px_0px_30px_rgba(0,0,0,0.2)]'>
            <UploadIcon />
          </div>
          <p className='mt-4 text-center text-[16px] font-darker-grotesque-700 text-[#63789E]'>
            Subir imagen
          </p>
          <span className='cursor-pointer'>Seleccionar archivo</span>
        </div>
      )}
    </div>
  )
}

export default ImageUpload
