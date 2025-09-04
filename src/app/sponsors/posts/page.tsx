'use client'
import React, { useState } from 'react'
import TextEditor from '../components/TextEditor'
import { darkerGrotesque, inter, karla } from '@/fonts'
import CategoriesDropdown from '../components/categories-dropdown'
import GlobeIcon from '@/assets/GlobeIcon'
import ImageUpload from '../components/imageUpload'
import PostPublished from '../components/published'
import { useAuth } from '@/app/context/AuthContext'
import { Switch } from '@headlessui/react'

interface PostFormData {
  title: string
  category: string[]
  validFrom: string
  validUntil: string
  description: string
  link: string
  imageWeb: string
  imageMobile: string
  status: 'ACTIVE' | 'INACTIVE'
}

export default function SponsorPosts() {
  const { token, user } = useAuth()
  const [showPopup, setShowPopup] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState<PostFormData>({
    title: '',
    category: [],
    validFrom: '',
    validUntil: '',
    description: '',
    link: '',
    imageWeb: '',
    imageMobile: '',
    status: 'ACTIVE'
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCategoryChange = (category: string[]) => {
    setFormData((prev) => ({
      ...prev,
      category
    }))
  }

  const handleDescriptionChange = (description: string) => {
    setFormData((prev) => ({
      ...prev,
      description
    }))
  }

  const handleImageWebChange = (imageUrl: string) => {
    setFormData((prev) => ({
      ...prev,
      imageWeb: imageUrl
    }))
  }

  const handleImageMobileChange = (imageUrl: string) => {
    setFormData((prev) => ({
      ...prev,
      imageMobile: imageUrl
    }))
  }

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true)
      setError(null)

      const sponsorData = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}sponsors/${user?.sub}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      ).then((res) => res.json())

      const sendData = {
        ...formData,
        sponsorId: sponsorData.id
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}sponsors/posts`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(sendData)
        }
      )

      if (!response.ok) {
        throw new Error('Error al crear el post')
      }

      setShowPopup(true)
      setFormData({
        title: '',
        category: [],
        validFrom: '',
        validUntil: '',
        description: '',
        link: '',
        imageWeb: '',
        imageMobile: '',
        status: 'INACTIVE'
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al crear el post')
      console.error('Error creating post:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  const toggleStatus = () => {
    setFormData((prev) => ({
      ...prev,
      status: prev.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE'
    }))
  }

  return (
    <section
      className={`${darkerGrotesque.variable} ${karla.variable} ${inter.variable} mb-8 w-auto max-w-[1980px] items-center overflow-hidden`}
    >
      <h1
        className={`items-left mb-0 font-darker-grotesque text-[30px] font-darker-grotesque-700 text-[#082965]`}
      >
        Publica tu contenido
      </h1>
      <h2
        className={`items-left mb-4 font-karla text-[18px] font-karla-400 text-[#141414]`}
      >
        Llena este formulario para compartir tus noticias con nuestra comunidad.
      </h2>
      <div
        className={`mb-8 w-screen rounded-[20px] border-[0.5px] border-black-13 py-6 pr-8 md:max-w-[1025px] 2xl:max-w-[1250px]`}
      >
        <div className='mx-[33px] mb-4 flex items-center justify-end'>
          <div className='flex items-center gap-2'>
            <span className='font-darker-grotesque text-[16px] text-[#63789E]'>
              {formData.status === 'ACTIVE' ? 'Público' : 'Privado'}
            </span>
            <Switch
              checked={formData.status === 'ACTIVE'}
              onChange={toggleStatus}
              className={`${
                formData.status === 'ACTIVE' ? 'bg-[#FD3600]' : 'bg-gray-300'
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
            >
              <span
                className={`${
                  formData.status === 'ACTIVE'
                    ? 'translate-x-6'
                    : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
          </div>
        </div>
        <div className={`flex flex-row`}>
          <div className='mx-[33px] flex w-[30%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='post-title'
            >
              Título
            </label>
            <input
              name='title'
              value={formData.title}
              onChange={handleInputChange}
              className='ml-2 h-[39px] w-full rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
              id='post-title'
              placeholder='Título de la publicacion'
              type='text'
            ></input>
          </div>
          <div className='mx-[33px] flex w-[15%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[19px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='post-date'
            >
              Fecha de validez
            </label>
            <input
              name='validFrom'
              value={formData.validFrom}
              onChange={handleInputChange}
              className='h-[39px] w-full rounded-[10px] bg-[#D9D9D940] p-[8px] text-center'
              id='post-date'
              placeholder='22/01/2025'
              type='date'
            ></input>
          </div>
          <div className='mx-[33px] flex w-[15%] flex-col gap-2'>
            <label
              className='w-[150px] font-darker-grotesque text-[19px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='post-date-end'
            >
              Fecha de caducidad
            </label>
            <input
              name='validUntil'
              value={formData.validUntil}
              onChange={handleInputChange}
              className='h-[39px] w-full rounded-[10px] bg-[#D9D9D940] p-[8px] text-center'
              id='post-date-end'
              placeholder='23/01/2025'
              type='date'
            ></input>
          </div>
          <div className='mx-[33px] flex w-[25%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='post-category'
            >
              Categoría
            </label>
            <CategoriesDropdown
              onChange={handleCategoryChange}
              value={formData.category}
            />
          </div>
        </div>
        <div className={`mb-6 mt-6 flex flex-col`}>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'>
              Descripción
            </label>
            <TextEditor
              onChange={handleDescriptionChange}
              value={formData.description}
            />
          </div>
          <div className='mx-[33px] my-6 flex w-[540px] flex-col gap-2'>
            <p className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'>
              Ingresar link y/o web
            </p>
            <label htmlFor='post-web'>
              Insertar link para redireccionar al usuario donde desee.
            </label>
            <div className='flex flex-row'>
              <GlobeIcon className='my-1 mr-2 stroke-[#FE2E00]' />
              <input
                name='link'
                value={formData.link}
                onChange={handleInputChange}
                className='ml-2 h-[39px] w-[497px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
                id='company-web'
                placeholder='www.ejemplo.com'
                type='text'
              />
            </div>
          </div>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label
              className='mb-2 font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='post-img'
            >
              Imagen destacada
            </label>
            <div className='mb-4 flex flex-row'>
              <div className='mr-6 flex flex-col'>
                <label
                  className='mb-8 font-darker-grotesque text-[21px] text-[#000000]'
                  htmlFor='company-logo'
                >
                  <strong>Pantalla grande:</strong> 650x550 px (ideal para
                  computadoras).
                </label>
                <div className='mt-3 h-[280px] w-[560px]'>
                  <ImageUpload onChange={handleImageWebChange} />
                </div>
              </div>
              <div className='flex flex-col'>
                <label
                  className='w-[286px] pl-2 font-darker-grotesque text-[21px] text-[#000000]'
                  htmlFor='company-logo'
                >
                  <strong>Pantalla pequeña:</strong> 393x288 px (optimizado para
                  celulares).
                </label>
                <div className='mt-3 h-[280px] w-[314px]'>
                  <ImageUpload onChange={handleImageMobileChange} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex w-full flex-row justify-end`}>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className='h-[48px] w-[150px] rounded-[10px] bg-[#FFFFFF] px-3 font-inter text-[18px] font-inter-400 text-[#FD3600] hover:bg-[#FD3600] hover:text-[#FFFFFF]'
          >
            {isSubmitting ? 'Publicando...' : 'Publicar'}
          </button>
        </div>
      </div>
      {error && (
        <div className='mt-4 rounded bg-red-100 p-3 text-red-600'>{error}</div>
      )}
      {showPopup && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div
            className='absolute inset-0 bg-black-8 opacity-75'
            onClick={handleClosePopup}
          ></div>
          <div className='relative z-10'>
            <PostPublished onClose={handleClosePopup} />
          </div>
        </div>
      )}
    </section>
  )
}
