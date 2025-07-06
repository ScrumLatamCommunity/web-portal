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
  console.log(activity)

  const imageSrc = activity.image?.trim()
    ? activity.image
    : 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Comunidad%2Fimage_banner_sponsors.png?alt=media&token=6f18d393-5502-4b71-8f1c-f7adf65816fa'

  return (
    <div className='mx-auto flex h-auto min-h-[80px] w-full max-w-3xl flex-row overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl'>
      {/* Imagen */}
      <div className='relative h-full w-2/5'>
        <img
          src={imageSrc}
          alt={`Facilitador ${activity.facilitator || activity.title}`}
          className='h-full w-full rounded-t-2xl object-cover sm:rounded-l-2xl sm:rounded-tr-none'
        />
      </div>

      {/* Contenido */}
      <div className='flex w-3/5 flex-col justify-between p-2 text-xs sm:p-3 lg:text-base'>
        <div className='flex flex-grow flex-col justify-center gap-1 lg:gap-y-3'>
          <p className='text-xs font-semibold uppercase tracking-wider text-[#FE5833] lg:text-lg'>
            {activity.title}
          </p>
          {activity.facilitator && (
            <p className='font-karla text-xs font-semibold text-[#000000] lg:text-base'>
              Facilitador/a:{' '}
              <span className='font-normal'>{activity.facilitator}</span>
            </p>
          )}
          <p className='line-clamp-3 font-karla text-xs text-[#000000] lg:text-sm'>
            {activity.description}
          </p>
          <div className='flex flex-wrap items-center gap-1 pt-1 text-xs text-gray-800 lg:space-x-4 lg:text-base'>
            <span className='rounded-lg bg-[#07235644] px-4 py-0.5 text-center font-normal'>
              {activity.type.replaceAll('-', ' ')}
            </span>
            <span className='flex items-center gap-0.5 font-semibold'>
              <Calendar className='h-4 w-4 text-[#FE5833] lg:h-6 lg:w-6' />
              {new Date(activity.date).toLocaleDateString('es-ES')}
            </span>
            <span className='flex items-center gap-0.5 font-semibold'>
              <Clock className='h-4 w-4 text-[#FE5833] lg:h-6 lg:w-6' />
              {isLoading ? 'Calculando hora...' : formattedTime}
            </span>
            {country && country !== 'No especificado' && (
              <span className='flex items-center gap-0.5 font-semibold'>
                <MapPin className='h-4 w-4 text-[#FE5833] lg:h-6 lg:w-6' />
                {country}
              </span>
            )}
          </div>
        </div>
        <Link
          href={activity.link}
          target='_blank'
          className='font-md flex justify-end pt-2 font-semibold text-[#082965]'
        >
          Ir al evento
        </Link>
      </div>
    </div>
  )
}
