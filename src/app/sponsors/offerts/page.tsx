'use client'

import { darkerGrotesque, inter, karla } from '@/fonts'
import ImageUpload from '../components/imageUpload'
import { useCallback, useState } from 'react'
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
  const [imageUploadKey, setImageUploadKey] = useState(0)

  const handleDescriptionChange = useCallback((value: string) => {
    setFormData((prev) => ({
      ...prev,
      description: value
    }))
  }, [])

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
        return
      }

      const sponsorData = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}sponsors/user/${user?.sub}`,
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
      setImageUploadKey((prev) => prev + 1)
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
      className={`${darkerGrotesque.variable} ${karla.variable} ${inter.variable} mx-auto w-full p-6`}
    >
      <h1 className='mb-8 text-2xl font-bold text-[#FF4444]'>Agregar Curso</h1>

      <div className='rounded-lg border border-gray-200 bg-white p-6'>
        <div className='mb-6 flex justify-end'>
          <div className='flex items-center gap-2'>
            <span className='text-sm text-gray-600'>
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

        <div className='mb-6'>
          <div className='h-[250px] rounded-lg'>
            <ImageUpload
              key={imageUploadKey}
              onChange={(value: any) =>
                setFormData({ ...formData, image: value })
              }
            />
          </div>
        </div>

        <div className='space-y-6'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div>
              <label className='mb-2 block text-sm font-medium text-gray-700'>
                Título del curso
              </label>
              <input
                type='text'
                placeholder='Ej: La transformación Agil 2.0 (máximo 100 caracteres)'
                className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </div>
            <div>
              <label className='mb-2 block text-sm font-medium text-gray-700'>
                Tipo de curso
              </label>
              <select
                className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={formData.intendedFor}
                onChange={(e) =>
                  setFormData({ ...formData, intendedFor: e.target.value })
                }
              >
                <option value=''>Online</option>
                <option value='presencial'>Presencial</option>
                <option value='hibrido'>Híbrido</option>
              </select>
            </div>
          </div>

          {/* Row 2: Description and Schedule */}
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div>
              <label className='mb-2 block text-sm font-medium text-gray-700'>
                Breve descripción
              </label>
              <textarea
                placeholder='Ingrese su descripción aquí'
                className='h-20 w-full resize-none rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>
            <div>
              <label className='mb-2 block text-sm font-medium text-gray-700'>
                Horario (GMT-5)
              </label>
              <input
                type='text'
                placeholder='Ej: De 10:00 a 14:00'
                className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
              />
            </div>
          </div>

          {/* New Row: Place and Intended For */}
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div>
              <label className='mb-2 block text-sm font-medium text-gray-700'>
                Lugar
              </label>
              <input
                type='text'
                placeholder='Ej: Aula virtual, Oficina central, etc.'
                className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={formData.place}
                onChange={(e) =>
                  setFormData({ ...formData, place: e.target.value })
                }
              />
            </div>
            <div>
              <label className='mb-2 block text-sm font-medium text-gray-700'>
                Dirigido a
              </label>
              <input
                type='text'
                placeholder='Ej: Profesionales de TI, Estudiantes, Gerentes, etc.'
                className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={formData.intendedFor}
                onChange={(e) =>
                  setFormData({ ...formData, intendedFor: e.target.value })
                }
              />
            </div>
          </div>

          {/* Row 3: Discount, Valid From, Valid Until */}
          <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            <div>
              <label className='mb-2 block text-sm font-medium text-gray-700'>
                % de descuento
              </label>
              <input
                type='text'
                placeholder='Ej: 10 (Ingrese un número del 0-100)'
                className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={formData.discount}
                onChange={(e) =>
                  setFormData({ ...formData, discount: e.target.value })
                }
              />
            </div>
            <div>
              <label className='mb-2 block text-sm font-medium text-gray-700'>
                Fecha de validez
              </label>
              <input
                type='date'
                className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={formData.validFrom}
                onChange={(e) =>
                  setFormData({ ...formData, validFrom: e.target.value })
                }
              />
            </div>
            <div>
              <label className='mb-2 block text-sm font-medium text-gray-700'>
                Fecha de caducidad
              </label>
              <input
                type='date'
                className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={formData.validUntil}
                onChange={(e) =>
                  setFormData({ ...formData, validUntil: e.target.value })
                }
              />
            </div>
          </div>

          {/* Row 4: Registration Link */}
          <div>
            <label className='mb-2 block text-sm font-medium text-gray-700'>
              Enlace de inscripción curso
            </label>
            <input
              type='url'
              placeholder='metagility.com/courses/la-transformacion-agil-2/inscribirse'
              className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500'
              value={formData.link}
              onChange={(e) =>
                setFormData({ ...formData, link: e.target.value })
              }
            />
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className='mt-4 rounded border border-red-400 bg-red-100 p-3 text-red-700'>
            {error}
          </div>
        )}

        {/* Submit Button */}
        <div className='mt-8 flex justify-end'>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className='rounded-md bg-[#4A5568] px-8 py-2 font-medium text-white transition-colors hover:bg-[#2D3748] disabled:cursor-not-allowed disabled:opacity-50'
          >
            {isSubmitting ? 'Publicando...' : 'Publicar'}
          </button>
        </div>
      </div>
    </section>
  )
}
