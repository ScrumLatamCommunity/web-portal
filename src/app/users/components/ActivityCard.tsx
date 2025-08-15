'use client'

import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import { Calendar, Clock, MapPin } from 'react-feather'
import Image from 'next/image'
import { useTimeConverter } from '@/app/activities/hooks/useFormatDate'
import { Activity } from '@/app/activities/interfaces/activityInterface'
import Link from 'next/link'

interface ActivityCardProps {
  activity: Activity
  country: string
}

export default function ActivityCard({ activity, country }: ActivityCardProps) {
  const { user } = useAuth()
  const router = useRouter()

  const { formattedTime, isLoading } = useTimeConverter(activity, country)

  const handleEnrollClick = () => {
    if (!user) {
      localStorage.setItem('redirectToAfterAuth', `/activities`)
      router.push('/login')
    } else {
      console.log(`Usuario ${user.sub} inscribiéndose al evento ${activity.id}`)
      window.open(activity.link, '_blank')
    }
  }

  const handleAddToGoogleCalendar = () => {
    const start = new Date(activity.date) // fecha de inicio
    const end = new Date(start.getTime() + 60 * 60 * 1000) // ejemplo: +1 hora

    const formatDate = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d\d\d/g, '') // formato YYYYMMDDTHHmmssZ
    }

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      activity.title
    )}&dates=${formatDate(start)}/${formatDate(end)}&details=${encodeURIComponent(
      activity.description || ''
    )}&location=${encodeURIComponent(activity.link || '')}`

    window.open(googleCalendarUrl, '_blank')
  }

  const imageSrc = activity.image?.trim()
    ? activity.image
    : 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Comunidad%2Fimage_banner_sponsors.png?alt=media&token=6f18d393-5502-4b71-8f1c-f7adf65816fa'

  return (
    <div className='mx-auto mb-10 flex h-[160px] w-full max-w-[900px] flex-row rounded-2xl border border-gray-200 bg-white shadow-md transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl md:h-[310px]'>
      {/* Imagen */}
      <div className='relative w-2/5'>
        <img
          src={imageSrc}
          alt={`Facilitador ${activity.facilitator || activity.title}`}
          className='h-full w-full rounded-l-2xl object-fill'
        />
      </div>

      {/* Contenido */}
      <div className='flex w-3/5 flex-col justify-between p-2 md:p-4'>
        <div className='flex flex-grow flex-col gap-1 md:gap-2'>
          {/* Título */}
          <h3 className='text-xs font-bold uppercase tracking-wider text-[#FE5833] md:text-lg'>
            {activity.title}
          </h3>

          {/* Facilitador */}
          {activity.facilitator && (
            <p className='text-xs font-semibold text-[#000000] md:text-base'>
              Facilitador/a:{' '}
              <span className='font-normal'>{activity.facilitator}</span>
            </p>
          )}

          {/* Descripción */}
          <p className='line-clamp-1 hidden text-xs text-[#666666] md:line-clamp-2 md:block md:text-base'>
            {activity.description}
          </p>
        </div>
        {/* Badges y metadatos - alineados al inferior */}
        <div className='mt-auto flex items-center gap-2 text-[10px] md:gap-3 md:text-xs'>
          {/* Tipo de actividad */}
          <span className='inline-block rounded bg-[#07235644] px-1 py-0.5 text-[8px] font-medium text-[#072356] md:rounded-lg md:px-2 md:py-1 md:text-xs'>
            <span className='md:hidden'>
              {activity.type === 'Agile Learning Lab'
                ? 'A.L.L.'
                : activity.type === 'Scrum Latam Live'
                  ? 'S.L.L.'
                  : activity.type.replaceAll('-', ' ')}
            </span>
            <span className='hidden md:inline'>
              {activity.type.replaceAll('-', ' ')}
            </span>
          </span>

          {/* Fecha */}
          <span className='flex items-center gap-0.5 font-medium text-[#FE5833]'>
            <Calendar className='h-2.5 w-2.5 text-[#FE5833] md:h-3 md:w-3' />
            {new Date(activity.date).toLocaleDateString('es-ES')}
          </span>

          {/* Hora */}
          <span className='flex items-center gap-0.5 font-medium text-[#666666]'>
            <Clock className='h-2.5 w-2.5 text-[#FE5833] md:h-3 md:w-3' />
            {isLoading ? 'Calculando...' : formattedTime}
          </span>
        </div>

        {/* Botones de acción */}
        <div className='mt-1 flex flex-col gap-1 md:mt-2 md:flex-row md:gap-2'>
          <Link
            href={activity.link}
            target='_blank'
            className='flex w-full items-center justify-center rounded border border-gray-300 px-2 py-1 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50 md:rounded-md md:px-3 md:py-2 md:text-sm'
          >
            Ir al evento
          </Link>
          <button
            onClick={handleAddToGoogleCalendar}
            className='flex w-full items-center justify-center rounded bg-[#082965] px-2 py-1 text-xs font-semibold text-white transition-colors hover:bg-[#0a2f5f] md:rounded-md md:px-3 md:py-2 md:text-sm'
          >
            Agregar al calendario
          </button>
        </div>
      </div>
    </div>
  )
}
