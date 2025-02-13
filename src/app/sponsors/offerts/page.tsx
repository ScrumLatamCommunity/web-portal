'use client'

import { darkerGrotesque, inter, karla } from '@/fonts'
import OffertDropdown from '../components/offert-dropdown'
import GlobeIcon from '@/assets/GlobeIcon'
import TextEditor from '../components/TextEditor'
import ImageUpload from '../components/imageUpload'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { useAuth } from '@/app/context/AuthContext'
import { toast } from 'react-hot-toast'

export default function Offerts() {
  const { token, user } = useAuth()
  const [formData, setFormData] = useState({
    title: '',
    validFrom: '',
    validUntil: '',
    discount: '',
    time: '',
    place: '',
    intendedFor: '',
    link: '',
    description: '',
    image: '',
    status: 'INACTIVE' as 'ACTIVE' | 'INACTIVE'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit() {
    try {
      setIsSubmitting(true)
      setError('')

      if (
        !formData.title ||
        !formData.validFrom ||
        !formData.time ||
        !formData.place ||
        !formData.intendedFor ||
        !formData.link ||
        !formData.discount ||
        !formData.image ||
        !formData.validUntil ||
        !formData.description
      ) {
        toast.error('Por favor completa todos los campos requeridos')
      }

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
        sponsorId: sponsorData.id,
        validFrom: new Date(formData.validFrom).toISOString(),
        validUntil: new Date(formData.validUntil).toISOString()
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}sponsors/offerts`,
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
        const error = await response.json()
        throw new Error(error.message || 'Error al crear la oferta')
      }

      setFormData({
        title: '',
        validFrom: '',
        validUntil: '',
        link: '',
        description: '',
        image: '',
        discount: '',
        place: '',
        time: '',
        intendedFor: '',
        status: 'INACTIVE'
      })

      toast.success('Oferta creada exitosamente')
    } catch (error) {
      setError(
        error instanceof Error ? error.message : 'Error al crear la oferta'
      )
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  function toggleStatus() {
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
        className={`items-left mb-0 max-w-[1980px] font-darker-grotesque text-[30px] font-darker-grotesque-700 text-[#082965]`}
      >
        Ofertas para la Comunidad
      </h1>
      <h2
        className={`items-left mb-4 max-w-[1980px] font-karla text-[18px] font-karla-400 text-[#141414]`}
      >
        Llena este formulario para compartir tus beneficios u ofertas con
        nuestra comunidad.
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
        <div className={`mb-8 flex flex-row items-start`}>
          <div className='mx-[33px] flex w-[45%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='offer-name'
            >
              Título
            </label>
            <input
              className='h-[39px] w-full rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
              id='offer-name'
              placeholder='Título de la oferta'
              type='text'
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>
          <div className='mx-[33px] flex w-[25%] flex-col gap-2'>
            <label
              className='whitespace-nowrap font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='offer-date'
            >
              Fecha de validez
            </label>
            <input
              className='h-[39px] w-full rounded-[10px] bg-[#D9D9D940] p-[8px] text-center'
              id='offer-date'
              type='date'
              value={formData.validFrom}
              onChange={(e) =>
                setFormData({ ...formData, validFrom: e.target.value })
              }
            />
          </div>
          <div className='mx-[33px] flex w-[25%] flex-col gap-2'>
            <label
              className='whitespace-nowrap font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='offer-date-end'
            >
              Fecha de caducidad
            </label>
            <input
              className='h-[39px] w-full rounded-[10px] bg-[#D9D9D940] p-[8px] text-center'
              id='offer-date-end'
              type='date'
              value={formData.validUntil}
              onChange={(e) =>
                setFormData({ ...formData, validUntil: e.target.value })
              }
            />
          </div>
        </div>
        <div className={`mb-8 flex flex-row`}>
          <div className='mx-[33px] flex w-[25%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='offer-name'
            >
              Horario
            </label>
            <input
              className='h-[39px] w-full rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
              id='time'
              placeholder='Ej: de 16hs a 21hs'
              type='text'
              value={formData.time}
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              }
            />
          </div>
          <div className='mx-[33px] flex w-[25%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='offer-name'
            >
              Lugar
            </label>
            <input
              className='h-[39px] w-full rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
              id='place'
              placeholder='Ej: Vía Zoom // Meeting Room'
              type='text'
              value={formData.place}
              onChange={(e) =>
                setFormData({ ...formData, place: e.target.value })
              }
            />
          </div>
          <div className='mx-[33px] flex w-[35%] flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='offer-name'
            >
              Dirigido a
            </label>
            <textarea
              className='h-[70px] w-full resize-none rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
              id='intendedFor'
              placeholder='Dirijido a personas con intereses en...'
              value={formData.intendedFor}
              onChange={(e) =>
                setFormData({ ...formData, intendedFor: e.target.value })
              }
            />
          </div>
        </div>
        <div className={`flex flex-col`}>
          <div className='mx-[33px] mb-10 flex flex-col gap-2'>
            <label className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'>
              Descripción
            </label>
            <TextEditor
              value={formData.description}
              onChange={(value) =>
                setFormData({ ...formData, description: value })
              }
            />
          </div>
          <div className='mx-[33px] mb-6 flex flex-col gap-2'>
            <p className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'>
              Ingresar link y/o web
            </p>
            <label htmlFor='post-web'>
              Insertar link para redireccionar al usuario donde desee.
            </label>
            <div className='mt-3 flex flex-row'>
              <GlobeIcon className='my-1 mr-2 stroke-[#FE2E00]' />
              <input
                className='ml-2 h-[39px] w-[555px] rounded-[10px] bg-[#D9D9D940] py-[6px] pl-3 font-inter-400 text-[#04122D] placeholder:font-inter-400 placeholder:text-[#04122D]'
                id='post-web'
                placeholder='www.ejemplo.com'
                type='text'
                value={formData.link}
                onChange={(e) =>
                  setFormData({ ...formData, link: e.target.value })
                }
              ></input>
            </div>
          </div>
          <div className='mx-[33px] flex flex-col gap-2'>
            <label
              className='font-darker-grotesque text-[21px] font-darker-grotesque-700 text-[#000000]'
              htmlFor='post-img'
            >
              Imagen destacada
            </label>
            <div className='mb-4 flex flex-row'>
              <div className='flex flex-col'>
                <label
                  className='mb-[8px] w-[500px] font-darker-grotesque text-[21px] text-[#000000]'
                  htmlFor='company-logo'
                >
                  <strong>Usa formatos PNG o JPG para mejor calidad: </strong>{' '}
                  412x300 px
                </label>
                <div className='mt-3 h-[280px] w-[314px]'>
                  <ImageUpload
                    onChange={(value) =>
                      setFormData({ ...formData, image: value })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {error && <div className='mx-[33px] mb-4 text-red-500'>{error}</div>}
        <div className={`flex w-full flex-row justify-end gap-4`}>
          {/* <button
            className='h-[48px] w-[150px] rounded-[10px] bg-[#FFFFFF] px-3 font-inter text-[18px] font-inter-400 text-[#FD3600]'
            type='button'
          >
            Vista previa
          </button> */}
          <button
            className='h-[48px] w-[207px] rounded-[10px] bg-[#FD3600] px-3 font-inter font-inter-400 text-[#FFFFFF] disabled:opacity-50'
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Publicando...' : 'Publicar'}
          </button>
        </div>
      </div>
    </section>
  )
}
