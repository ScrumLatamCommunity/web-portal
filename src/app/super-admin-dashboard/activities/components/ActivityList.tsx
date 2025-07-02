import React from 'react'
import { Activity } from '../page'
import EditIcon from '@/assets/EditIcon'

function formatDate(dateString: string) {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = String(date.getFullYear()).slice(-2)
  return `${day}/${month}/${year}`
}

export default function ActivityList({
  activities,
  onEdit
}: {
  activities: Activity[]
  onEdit?: (activity: Activity) => void
}) {
  return (
    <div className='grid grid-rows-4 gap-4 rounded-[10px] py-3'>
      {activities.map((activity) => (
        <div
          className='grid grid-cols-4 items-center gap-4 rounded-[10px] border-2 border-[#63789E40] py-5'
          key={activity.id}
        >
          <p className='pl-24 text-left font-karla'>{activity.title}</p>
          <p className='text-center font-karla'>{formatDate(activity.date)}</p>
          {(() => {
            let bg = ''
            let label = ''
            if (activity.status === 'ACTIVE') {
              bg = 'bg-[#072356]'
              label = 'Publicado'
            } else if (activity.status === 'INACTIVE') {
              bg = 'bg-[#FE2E00]'
              label = 'Rechazado'
            } else if (activity.status === 'DRAFT') {
              bg = 'bg-[#8C8C8C]'
              label = 'Pendiente'
            }
            return (
              <p
                className={`mx-auto w-[150px] rounded-2xl px-2 py-1 text-center font-karla text-white ${bg}`}
              >
                {label}
              </p>
            )
          })()}
          <button
            className='mx-auto flex w-[100px] items-center justify-center gap-2 rounded-2xl border-[2px] border-[#FFBEB0] bg-[#FFEAE6] px-2 py-1 text-center font-karla'
            onClick={() => onEdit && onEdit(activity)}
          >
            <EditIcon /> Editar
          </button>
        </div>
      ))}
    </div>
  )
}
