'use client'
import React from 'react'
import Image from 'next/image'
import EditIcon from '@/assets/EditIcon'
import ConfirmModal, { SuccessModal } from './ConfirmModal'

export default function ActivityForm({
  activity,
  onBack
}: {
  activity: any
  onBack: () => void
}) {
  const [isEditing, setIsEditing] = React.useState(false)
  const [formData, setFormData] = React.useState(activity)
  const [showConfirm, setShowConfirm] = React.useState(false)
  const [confirmType, setConfirmType] = React.useState<
    'save' | 'reject' | 'approve' | null
  >(null)
  const [successModal, setSuccessModal] = React.useState<{
    open: boolean
    message: string
  }>({ open: false, message: '' })

  React.useEffect(() => {
    setFormData(activity)
  }, [activity])

  const handleEditSave = async () => {
    if (isEditing) {
      setConfirmType('save')
      setShowConfirm(true)
      return
    }
    setIsEditing((prev) => !prev)
  }

  const handleReject = async () => {
    setConfirmType('reject')
    setShowConfirm(true)
  }

  const handleApprove = async () => {
    setConfirmType('approve')
    setShowConfirm(true)
  }

  const handleConfirm = async () => {
    if (confirmType === 'save') {
      const isChanged = JSON.stringify(formData) !== JSON.stringify(activity)
      if (isChanged) {
        try {
          const {
            title,
            description,
            date,
            recurrency,
            time,
            image,
            link,
            type,
            facilitator
          } = formData
          const dataToSend = {
            title,
            description,
            date,
            recurrency,
            time,
            image,
            link,
            type,
            facilitator
          }
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}activities/${activity.id}`,
            {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(dataToSend)
            }
          )
          if (!response.ok) {
            throw new Error('Error al actualizar la actividad')
          }
          setSuccessModal({
            open: true,
            message: 'Cambios guardados con éxito'
          })
        } catch (error) {
          console.error(error)
        }
      }
      setIsEditing(false)
    } else if (confirmType === 'reject') {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}activities/reject/${activity.id}`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        if (!response.ok) {
          throw new Error('Error al rechazar la actividad')
        }
        setSuccessModal({
          open: true,
          message: 'Actividad rechazada con éxito'
        })
      } catch (error) {
        console.error(error)
      }
    } else if (confirmType === 'approve') {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}activities/approve/${activity.id}`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        if (!response.ok) {
          throw new Error('Error al aprobar la actividad')
        }
        setSuccessModal({
          open: true,
          message: 'Actividad publicada con éxito'
        })
      } catch (error) {
        console.error(error)
      }
    }
    setShowConfirm(false)
    setConfirmType(null)
  }

  const handleCancelSave = () => {
    setShowConfirm(false)
    setConfirmType(null)
  }

  let confirmMessage = '¿Está seguro de guardar estos cambios?'
  if (confirmType === 'reject') {
    confirmMessage = '¿Está seguro que desea rechazar esta actividad?'
  } else if (confirmType === 'approve') {
    confirmMessage = '¿Está seguro que desea publicar esta actividad?'
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
            Detalles de la actividad
          </h1>
        </div>
        <div className='flex flex-row'>
          <div>
            <Image
              alt='ActivityImage'
              className='rounded-2xl'
              height={800}
              src={formData.image}
              width={500}
            />
          </div>
          <div className='flex w-[60%] flex-col gap-4 pl-6'>
            <label className='font-darker-grotesque text-[20px] font-semibold'>
              Título de la actividad
              <input
                type='text'
                className='mt-1 w-full rounded border px-3 py-2 font-inter text-[16px] font-normal text-[#8C8C8C]'
                value={formData.title || ''}
                readOnly={!isEditing}
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
                value={formData.facilitator || 'Nombre del facilitador'}
                readOnly={!isEditing}
                onChange={(e) =>
                  setFormData({ ...formData, facilitator: e.target.value })
                }
              />
            </label>
            <label className='font-darker-grotesque font-semibold'>
              Descripción
              <textarea
                className='mt-1 w-full rounded border px-3 py-2 font-inter text-[16px] font-normal text-[#8C8C8C]'
                value={formData.description || ''}
                readOnly={!isEditing}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </label>
            <div className='flex flex-row gap-4'>
              <label className='flex-1 font-darker-grotesque font-semibold'>
                Tipo de actividad
                <input
                  type='text'
                  className='mt-1 w-full rounded border px-3 py-2 font-inter text-[16px] font-normal text-[#8C8C8C]'
                  value={formData.type || ''}
                  readOnly={!isEditing}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                />
              </label>
            </div>
            <div className='flex flex-row gap-4'>
              <label className='flex-1 font-darker-grotesque font-semibold'>
                Fecha inicio
                <div className='flex w-full flex-row items-center rounded border'>
                  <input
                    type='date'
                    className='mt-1 w-full px-3 py-2 font-inter text-[16px] font-normal text-[#8C8C8C]'
                    value={formData.date ? formData.date.slice(0, 10) : ''}
                    readOnly={!isEditing}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                  />
                </div>
              </label>
              <label className='flex-1 font-darker-grotesque font-semibold'>
                Horario (GMT-05)
                <input
                  type='text'
                  className='mt-1 w-full rounded border px-3 py-2 font-inter text-[16px] font-normal text-[#8C8C8C]'
                  value={
                    Array.isArray(formData.time)
                      ? formData.time.join(' a ')
                      : formData.time || ''
                  }
                  readOnly={!isEditing}
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
                className='mt-1 w-full rounded border px-3 py-2 font-inter text-[16px] font-normal text-[#8C8C8C]'
                value={formData.link || ''}
                readOnly={!isEditing}
                onChange={(e) =>
                  setFormData({ ...formData, link: e.target.value })
                }
              />
            </label>
            <label className='font-darker-grotesque font-semibold'>
              Observaciones de la publicación
              <textarea
                className='mt-1 w-full rounded border px-3 py-2 font-inter text-[16px] font-normal text-[#8C8C8C]'
                value={formData.observations || ''}
                readOnly={!isEditing}
                onChange={(e) =>
                  setFormData({ ...formData, observations: e.target.value })
                }
              />
            </label>
            <div className='mt-6 flex w-full flex-row gap-4'>
              <button
                className='text-black flex w-full flex-row items-center justify-center gap-2 rounded-xl border-[2px] border-[#FFBEB0] bg-[#FFEAE6] px-4 py-2 font-karla font-medium'
                onClick={handleEditSave}
              >
                <EditIcon />
                {isEditing ? 'Guardar' : 'Editar'}
              </button>
              <button
                className='w-full rounded-xl bg-[#FE2E00] px-4 py-2 font-bold text-white'
                onClick={handleReject}
              >
                Rechazar
              </button>
              <button
                className='w-full rounded-xl bg-[#072356] px-4 py-2 font-bold text-white'
                onClick={handleApprove}
              >
                Publicar
              </button>
            </div>
          </div>
        </div>
      </div>
      <ConfirmModal
        isOpen={showConfirm}
        message={confirmMessage}
        onConfirm={handleConfirm}
        onCancel={handleCancelSave}
      />
      <SuccessModal
        isOpen={successModal.open}
        message={successModal.message}
        onClose={() => setSuccessModal({ open: false, message: '' })}
      />
    </div>
  )
}
