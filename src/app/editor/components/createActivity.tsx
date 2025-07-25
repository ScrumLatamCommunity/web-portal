'use client'
import React, { useEffect, useState } from 'react'
import ConfirmModal, {
  SuccessModal
} from '@/app/super-admin-dashboard/activities/components/ConfirmModal'
import { useRouter } from 'next/navigation'
import ImageUpload from './imgs/imageUpload'
import { Send } from 'react-feather'

export default function CreateActivity({
  activity,
  onBack,
  onActivityUpdate
}: {
  activity: any
  onBack: () => void
  onActivityUpdate: () => void
}) {
  const [formData, setFormData] = useState({
    ...activity,
    recurrency: 'Semanal'
  })
  const [showConfirm, setShowConfirm] = useState(false)
  const [successModal, setSuccessModal] = useState<{
    open: boolean
    message: string
  }>({ open: false, message: '' })
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({})
  const router = useRouter()

  console.log(formData)

  useEffect(() => {
    if (activity && (!formData || formData.id !== activity.id)) {
      setFormData({ ...activity, recurrency: 'Semanal' })
    }
  }, [activity?.id])

  const handleImageChange = (imageUrl: string) => {
    setFormData({ ...formData, image: imageUrl })
  }

  const validateForm = () => {
    const newErrors: { [key: string]: boolean } = {}

    if (!formData.title?.trim()) newErrors.title = true
    if (!formData.description?.trim()) newErrors.description = true
    if (!formData.date?.trim()) newErrors.date = true
    if (!formData.image?.trim()) newErrors.image = true
    if (!formData.type?.trim()) newErrors.type = true
    if (!formData.link?.trim()) newErrors.link = true
    if (
      !formData.time ||
      !Array.isArray(formData.time) ||
      formData.time.length === 0 ||
      formData.time.some((t: string) => !t.trim())
    ) {
      newErrors.time = true
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleCreate = () => {
    setShowConfirm(true)
  }

  const handleConfirm = async () => {
    const isValid = validateForm()
    if (!isValid) {
      return
    }

    try {
      const { title, description, date, time, image, link, type } = formData

      let formattedDate = date
      if (date && !date.includes('T')) {
        const [year, month, day] = date.split('-')
        const localDate = new Date(
          parseInt(year),
          parseInt(month) - 1,
          parseInt(day)
        )
        formattedDate = localDate.toISOString()
      }

      const dataToSend = {
        title,
        description,
        date: formattedDate,
        recurrency: 'Semanal',
        time,
        image,
        link,
        type
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}activities`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataToSend)
        }
      )
      if (!response.ok) {
        const errorBody = await response.text()
        console.error('API error:', errorBody)
        throw new Error('Error al crear la actividad')
      }
      setSuccessModal({
        open: true,
        message: 'Actividad creada con éxito'
      })
      onActivityUpdate()
    } catch (error) {
      console.error(error)
    }
    setShowConfirm(false)
  }

  const handleCancel = () => {
    setShowConfirm(false)
  }

  const handleClear = () => {
    setFormData({
      id: '',
      type: '',
      title: '',
      description: '',
      date: '',
      recurrency: 'Semanal',
      time: [],
      inscriptions: [],
      image: '',
      status: 'DRAFT',
      link: '',
      facilitator: '',
      createdAt: '',
      updatedAt: ''
    })
    setErrors({})
  }

  const defaultTimes: Record<string, string> = {
    'Agile SOS': '19:00 a 20:30',
    'Scrum Latam Live': '16:00 a 15:30',
    'Agile Learning Lab': '9:00 a 10:30',
    'Track Formativo': '14:00 a 15:30',
    Evento: '13:00 a 15:30'
  }

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = e.target.value
    setFormData((prev: any) => ({
      ...prev,
      type: selectedType,
      time: defaultTimes[selectedType] ? [defaultTimes[selectedType]] : ['']
    }))
  }

  return (
    <div className='flex justify-center'>
      <div className='flex w-full flex-col'>
        <div className='flex items-center gap-4 pb-12'>
          <button onClick={onBack} className='focus:outline-none'>
            <svg
              width='28'
              height='28'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#FE2E00'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <polyline points='15 18 9 12 15 6'></polyline>
            </svg>
          </button>
          <h1 className='font-darker-grotesque text-[30px] font-semibold text-[#FE2E00]'>
            Crear nueva actividad
          </h1>
        </div>
        <div className='flex flex-col lg:flex-row'>
          <div className='h-[550px] w-[550px]'>
            <ImageUpload
              key={formData.image}
              onChange={handleImageChange}
              initialImage={formData.image}
              className={`bg-[#D9D9D9] ${errors.image ? 'border-2 border-[#FE5833]' : ''}`}
            />
          </div>
          <div className='flex w-full flex-col gap-4 pl-6 lg:w-[60%]'>
            <label className='font-darker-grotesque text-[20px] font-semibold'>
              Título de la actividad
              <input
                type='text'
                className={`mt-1 w-full rounded border px-3 py-2 font-inter text-[16px] font-normal text-[#8C8C8C] ${
                  errors.title ? 'border-[#FE5833]' : ''
                }`}
                value={formData.title || ''}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </label>
            <label className='font-darker-grotesque font-semibold'>
              Nombre del facilitador
              <input
                type='text'
                className='mt-1 w-full rounded border px-3 py-2 font-inter text-[16px] font-normal text-[#8C8C8C]'
                value={formData.facilitator || ''}
                onChange={(e) =>
                  setFormData({ ...formData, facilitator: e.target.value })
                }
              />
            </label>
            <label className='font-darker-grotesque font-semibold'>
              Descripción
              <textarea
                className={`mt-1 w-full rounded border px-3 py-2 font-inter text-[16px] font-normal text-[#8C8C8C] ${
                  errors.description ? 'border-[#FE5833]' : ''
                }`}
                value={formData.description || ''}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </label>
            <div className='flex flex-row gap-4'>
              <label className='flex-1 font-darker-grotesque font-semibold'>
                Tipo de actividad
                <select
                  className={`mt-1 w-full rounded border px-3 py-2 font-inter text-[16px] font-normal text-[#8C8C8C] ${
                    errors.type ? 'border-[#FE5833]' : ''
                  }`}
                  value={formData.type || ''}
                  onChange={handleTypeChange}
                >
                  <option value=''>Selecciona un tipo</option>
                  <option value='Agile SOS'>Agile SOS</option>
                  <option value='Scrum Latam Live'>Scrum Latam Live</option>
                  <option value='Agile Learning Lab'>Agile Learning Lab</option>
                  <option value='Track Formativo'>Track Formativo</option>
                  <option value='Evento'>Evento</option>
                </select>
              </label>
            </div>
            <div className='flex flex-row gap-4'>
              <label className='flex-1 font-darker-grotesque font-semibold'>
                Fecha inicio
                <div className='flex w-full flex-row items-center rounded border'>
                  <input
                    type='date'
                    className={`mt-1 w-full px-3 py-2 font-inter text-[16px] font-normal text-[#8C8C8C] ${
                      errors.date ? 'border-[#FE5833]' : ''
                    }`}
                    value={formData.date ? formData.date.slice(0, 10) : ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        date: e.target.value
                      })
                    }
                  />
                </div>
              </label>
              <label className='flex-1 font-darker-grotesque font-semibold'>
                Horario (GMT-05)
                <input
                  type='text'
                  className={`mt-1 w-full rounded border px-3 py-2 font-inter text-[16px] font-normal text-[#8C8C8C] ${
                    errors.time ? 'border-[#FE5833]' : ''
                  }`}
                  value={
                    Array.isArray(formData.time)
                      ? formData.time.join(' a ')
                      : formData.time || ''
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      time: e.target.value.split(' a ')
                    })
                  }
                />
              </label>
            </div>
            <label className='font-darker-grotesque font-semibold'>
              Enlace de la actividad
              <input
                type='text'
                className={`mt-1 w-full rounded border px-3 py-2 font-inter text-[16px] font-normal text-[#8C8C8C] ${
                  errors.link ? 'border-[#FE5833]' : ''
                }`}
                value={formData.link || ''}
                onChange={(e) =>
                  setFormData({ ...formData, link: e.target.value })
                }
              />
            </label>
            <div className='mt-6 flex w-full flex-col gap-4 lg:flex-row'>
              <button
                className='flex flex-1 flex-row items-center justify-center gap-2 rounded-xl border-[2px] border-[#FFBEB0] bg-[#FE5833] px-4 py-2 font-karla font-medium text-white'
                onClick={handleClear}
              >
                Limpiar
              </button>
              <button
                className='flex flex-1 flex-row items-center justify-center gap-2 rounded-xl border-[2px] border-[#FFBEB0] bg-[#072356] px-4 py-2 font-karla font-medium text-white'
                onClick={handleCreate}
              >
                <Send className='w-4' />
                Enviar a revisión
              </button>
            </div>
          </div>
        </div>
      </div>
      <ConfirmModal
        isOpen={showConfirm}
        message={'¿Está seguro de crear esta actividad?'}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
      <SuccessModal
        isOpen={successModal.open}
        message={successModal.message}
        type={'save'}
        onClose={() => setSuccessModal({ open: false, message: '' })}
      />
    </div>
  )
}
