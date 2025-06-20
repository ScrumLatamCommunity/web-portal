'use client'

import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import { Calendar, Clock } from 'react-feather'
import Image from 'next/image'
import { useTimeConverter } from '../hooks/useFormatDate'

interface Event {
  id: string
  type: string
  title: string
  description: string
  date: string | Date
  time: string[]
  image: string
  facilitator?: string | null
  link: string
}

interface EventCardProps {
  event: Event
}

const formatDate = (
  dateInput: string | Date
): { day: string; month: string } => {
  const date = new Date(dateInput)
  const day = date.getDate().toString().padStart(2, '0')
  const monthNames = [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic'
  ]
  const month = monthNames[date.getMonth()]
  return { day, month }
}

export default function EventCard({ event }: EventCardProps) {
  const { user } = useAuth()
  const router = useRouter()
  const { day, month } = formatDate(event.date)
  const { formattedTime, isLoading } = useTimeConverter(
    event.date,
    event.time[0]
  )

  const handleEnrollClick = () => {
    if (!user) {
      localStorage.setItem('redirectToAfterAuth', `/activities`)
      router.push('/login')
    } else {
      console.log(`Usuario ${user.sub} inscribiéndose al evento ${event.id}`)
      window.open(event.link, '_blank')
    }
  }

  return (
    <div className='flex w-full max-w-full flex-row overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md shadow-black-6 transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl lg:h-[620px]'>
      {/* Imagen */}
      <div className='lg:1/3 relative h-40 min-h-[10rem] w-2/5 sm:h-full'>
        <Image
          src={event.image}
          alt={`Facilitador ${event.facilitator || event.title}`}
          className='rounded-t-2xl object-cover sm:rounded-l-2xl sm:rounded-tr-none'
          fill
        />
      </div>

      {/* Contenido */}
      <div className='flex w-2/3 flex-col justify-between p-3 text-sm sm:p-6 lg:text-3xl'>
        {/* Sección del texto */}
        <div className='flex flex-grow flex-col justify-center gap-2 lg:gap-y-7'>
          <p className='text-xs font-semibold uppercase tracking-wider text-[#FE5833] lg:text-3xl'>
            {event.title}
          </p>

          {event.facilitator && (
            <p className='font-karla text-xs font-semibold text-[#000000] lg:text-3xl'>
              Facilitador/a:{' '}
              <span className='font-normal'>{event.facilitator}</span>
            </p>
          )}

          <p className='line-clamp-3 font-karla text-xs text-[#000000] lg:text-2xl'>
            {event.description}
          </p>

          <div className='flex flex-wrap items-center gap-1 pt-1 text-xs text-gray-800 lg:space-x-10 lg:text-3xl'>
            <span className='rounded-lg bg-[#07235644] px-8 py-0.5 text-center font-normal'>
              {event.type.replaceAll('-', ' ')}
            </span>
            <span className='flex items-center gap-0.5 font-semibold'>
              <Calendar className='h-4 w-4 text-[#FE5833] lg:h-8 lg:w-8' />
              {new Date(event.date).toLocaleDateString('es-ES')}
            </span>
            <span className='flex items-center gap-0.5 font-semibold'>
              <Clock className='h-4 w-4 text-[#FE5833] lg:h-8 lg:w-8' />
              {isLoading ? 'Calculando hora...' : formattedTime}
            </span>
          </div>
        </div>

        {/* Botón */}
        <div className='flex justify-end pt-2 lg:px-20'>
          <button
            onClick={handleEnrollClick}
            className='w-full self-end rounded-3xl bg-[#082965] px-6 py-2 text-sm font-normal text-white transition-colors duration-300 hover:bg-[#FE5833] lg:w-auto lg:px-44 lg:py-5 lg:text-3xl'
          >
            Inscribirme
          </button>
        </div>
      </div>
    </div>
  )
}
