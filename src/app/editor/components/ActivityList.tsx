import React from 'react'
import { Activity } from '../page'
import EditIcon from '@/assets/EditIcon'
import EyeIcon from '@/assets/eyeIcon'

function formatDate(dateString: string) {
  try {
    if (!dateString) return 'Sin fecha'
    const date = new Date(dateString)
    if (isNaN(date.getTime())) return 'Fecha inválida'
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = String(date.getFullYear()).slice(-2)
    return `${day}/${month}/${year}`
  } catch {
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
  return (
    <div className='-mx-4 overflow-x-auto sm:mx-0'>
      <table className='w-full table-auto divide-y divide-gray-200'>
        <thead className='bg-[#FFEAE6]'>
          <tr>
            <th className='py-5 pl-5 text-left text-lg font-semibold tracking-wider text-[#04122D]'>
              Actividad
            </th>
            <th className='hidden px-4 py-5 text-center text-lg font-semibold tracking-wider text-[#04122D] md:table-cell'>
              Fecha de realización
            </th>
            <th className='px-4 py-5 text-center text-lg font-semibold tracking-wider text-[#04122D]'>
              Estado
            </th>
            <th className='px-4 py-5 text-center text-lg font-semibold tracking-wider text-[#04122D]'>
              Más
            </th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200 bg-white'>
          {activities.map((activity) => {
            const { label, bg } = STATUS_STYLES[activity.status] || {
              label: 'Desconocido',
              bg: 'bg-gray-400'
            }

            return (
              <tr key={activity.id} className='hover:bg-gray-50'>
                <td className='max-w-[300px] break-words px-4 py-7 text-lg font-medium text-gray-900'>
                  {activity.title}
                </td>
                <td className='hidden whitespace-nowrap px-4 py-7 text-center text-lg text-gray-500 md:table-cell'>
                  {formatDate(activity.date)}
                </td>
                <td className='px-4 py-7 text-center text-sm'>
                  <span
                    className={`inline-flex justify-center rounded-full px-3 py-1 text-lg font-semibold leading-5 text-white lg:w-36 ${bg}`}
                  >
                    {label}
                  </span>
                </td>
                <td className='items-center justify-center px-4 py-7 text-center text-sm font-medium'>
                  {activity.status === 'ACTIVE' ? (
                    <button
                      onClick={() => onView?.(activity)}
                      className='text-black mx-auto flex w-full max-w-[100px] items-center justify-center gap-2 rounded-[15px] border border-[#FFBEB0] bg-[#FFEAE6] px-4 py-[5px] text-xs transition-colors hover:bg-[#E62E00] hover:text-white'
                    >
                      <EyeIcon />
                      Ver
                    </button>
                  ) : (
                    <button
                      onClick={() => onEdit?.(activity)}
                      className='text-black mx-auto flex w-full max-w-[100px] items-center justify-center gap-2 rounded-[15px] border border-[#FFBEB0] bg-[#FFEAE6] px-4 py-[5px] text-xs transition-colors hover:bg-[#E62E00] hover:text-white'
                    >
                      <EditIcon />
                      Editar
                    </button>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      {activities.length === 0 && (
        <div className='py-10 text-center text-gray-500'>
          Aún no hay actividades registradas.
        </div>
      )}
    </div>
  )
}
