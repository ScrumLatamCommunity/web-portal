import Image from 'next/image'
import React, { useState } from 'react'
import UploadIcon from '@/assets/UploadIcon'
import { darkerGrotesque } from '@/fonts'

const ImageUpload = () => {
  const [image, setImage] = useState<string | null>(null)

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className='flex h-full w-full items-center justify-center rounded-[10px] border-[1px] border-[#BFBFBF]'
    >
      {image ? (
        <Image
          alt='Uploaded'
          className='h-full w-full object-fill'
          height={300}
          src={image}
          unoptimized
          width={300}
        />
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
        </div>
      )}
    </div>
  )
}

export default ImageUpload
