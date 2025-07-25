import React from 'react'
import { Activity } from '../page'
import EditIcon from '@/assets/EditIcon'

function formatDate(dateString: string) {
  try {
    if (!dateString) return 'Sin fecha'

    const date = new Date(dateString)

    if (isNaN(date.getTime())) {
      console.error('Fecha inválida:', dateString)
      return 'Fecha inválida'
    }

    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = String(date.getFullYear()).slice(-2)

    const formattedDate = `${day}/${month}/${year}`

    return formattedDate
  } catch (error) {
    console.error('Error formateando fecha:', dateString, error)
    return 'Error fecha'
  }
}

const STATUS_STYLES: Record<string, { label: string; bg: string }> = {
  ACTIVE: { label: 'Publicado', bg: 'bg-[#072356]' },
  INACTIVE: { label: 'Inactivo', bg: 'bg-[#63789E]' },
  DRAFT: { label: 'Pendiente', bg: 'bg-[#8C8C8C]' },
  REJECTED: { label: 'Rechazado', bg: 'bg-[#FE2E00]' },
  REVISION: { label: 'Revisión', bg: 'bg-[#FAB81C]' }
}

export default function ActivityList({
  activities,
  onEdit,
  onView
}: {
  activities: Activity[]
  onEdit?: (activity: Activity) => void
  onView?: (activity: Activity) => void
}) {
  console.log(
    'ActivityList recibió actividades:',
    activities.map((a) => ({ id: a.id, title: a.title, date: a.date }))
  )

  return (
    <div className='grid grid-rows-4 gap-4 rounded-[10px] py-3'>
      {activities.map((activity) => {
        const { label, bg } = STATUS_STYLES[activity.status] || {
          label: 'Desconocido',
          bg: 'bg-gray-400'
        }

        return (
          <div
            className='grid grid-cols-4 items-center gap-4 rounded-[10px] border-2 border-[#63789E40] py-5'
            key={activity.id}
          >
            <p className='pl-24 text-left font-karla'>{activity.title}</p>
            <p className='hidden text-center font-karla md:block'>
              {formatDate(activity.date)}
            </p>
            <p
              className={`mx-auto w-[150px] rounded-2xl px-2 py-1 text-center font-karla text-white ${bg}`}
            >
              {label}
            </p>
            {activity.status === 'ACTIVE' ? (
              <button
                className='mx-auto flex w-[100px] items-center justify-center gap-2 rounded-2xl border-[2px] border-[#072356] bg-[#072356] px-2 py-1 text-center font-karla text-white'
                onClick={() => onView && onView(activity)}
              >
                Ver
              </button>
            ) : (
              <button
                className='mx-auto flex w-[100px] items-center justify-center gap-2 rounded-2xl border-[2px] border-[#FFBEB0] bg-[#FFEAE6] px-2 py-1 text-center font-karla'
                onClick={() => onEdit && onEdit(activity)}
              >
                <EditIcon /> Editar
              </button>
            )}
          </div>
        )
      })}
    </div>
  )
}
