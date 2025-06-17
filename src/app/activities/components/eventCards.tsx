// En tu archivo components/EventCard.tsx (o como lo llames, antes WorkshopCards.tsx)
'use client'

import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import { Calendar, Clock } from 'react-feather'
import Image from 'next/image'

// Interfaz basada en tu modelo Prisma 'Event'
interface Event {
  id: string
  type: string // ej: 'scrum-latam-live', 'agile-learning-lab'
  title: string
  description: string
  date: string | Date // Puede ser string o Date, lo formatearemos
  time: string[] // ej: ['19:00 a 20:00']
  image: string // URL de la imagen del facilitador o evento
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

  const handleEnrollClick = () => {
    if (!user) {
      localStorage.setItem('redirectToAfterAuth', `/activities`)
      router.push('/login')
    } else {
      console.log(`Usuario ${user.sub} inscribiéndose al evento ${event.id}`)
      // Aquí iría la lógica de inscripción real
      window.open(event.link, '_blank')
    }
  }

  return (
    <div className='max-w-12xl mx-auto flex w-full flex-row overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md shadow-black-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
      {/* Columna Izquierda: Imagen y Fecha */}
      <div className='relative h-56 w-full flex-shrink-0 sm:h-64 md:aspect-square md:h-auto md:w-1/3'>
        <Image
          src={event.image}
          alt={`Facilitador ${event.facilitator || event.title}`}
          fill // La prop `fill` hace que la imagen llene el contenedor padre
          className='object-cover' // `object-cover` es una clase de Tailwind, reemplaza la prop `objectFit`
        />
        <div className='absolute left-4 top-4 rounded-lg bg-white bg-opacity-80 p-2 text-center leading-none backdrop-blur-sm'>
          <p className='font-darker-grotesque text-3xl font-bold text-[#082965]'>
            {day}
          </p>
          <p className='font-karla text-sm uppercase text-[#082965]'>{month}</p>
        </div>
      </div>

      {/* Columna Derecha: Información y Acción */}
      <div className='flex flex-col justify-between gap-5 p-6 md:w-2/3'>
        <div className='items-center py-10'>
          <div className='mb-4 flex items-start justify-between'>
            <p className='text-sm font-semibold uppercase tracking-wider text-[#FE5833]'>
              {event.title}
            </p>
          </div>
          {event.facilitator && (
            <p className='text-md mb-3 font-karla font-semibold text-gray-700'>
              Facilitador/a:{' '}
              <span className='font-normal'>{event.facilitator}</span>
            </p>
          )}
          <p className='max-h-24 overflow-hidden font-karla text-sm leading-relaxed text-gray-600'>
            {event.description}
          </p>

          <div className='mb-4 flex items-center gap-4 py-3 text-sm text-gray-800 sm:mb-0'>
            {/* Aquí podrías mapear event.time si tiene múltiples horarios */}
            <span className='rounded bg-[#07235644] px-2 font-normal'>
              {event.type.replaceAll('-', ' ')}
            </span>
            <span className='flex flex-nowrap items-center font-semibold'>
              <Calendar className='mx-1 p-1 text-[#FE5833]' />{' '}
              {new Date(event.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
              })}
            </span>
            <span className='flex flex-nowrap items-center font-semibold'>
              <Clock className='mx-1 p-1 text-[#FE5833]' />
              {event.time.join().replace('-', ' a ')}
            </span>
          </div>
        </div>

        <div className='flex justify-end pt-2'>
          <button
            onClick={handleEnrollClick}
            className='w-full rounded-2xl bg-[#082965] px-20 py-2 font-semibold text-white transition-colors duration-300 hover:bg-[#FE5833] sm:w-auto'
          >
            Inscribirme
          </button>
        </div>
      </div>
    </div>
  )
}
