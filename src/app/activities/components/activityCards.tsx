'use client'

import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import { Calendar, Clock } from 'react-feather'
import Image from 'next/image'
import { useTimeConverter } from '../hooks/useFormatDate'
import { Activity } from '../interfaces/activityInterface'
import { registerActivity } from '../actions/register.actions'

interface ActivityCardProps {
  activity: Activity
  country: string
}

export default function ActivityCard({ activity, country }: ActivityCardProps) {
  const { user } = useAuth()
  const router = useRouter()

  const { formattedTime, isLoading } = useTimeConverter(activity, country)

  const handleEnrollClick = () => {
    if (!user || !user.sub) {
      localStorage.setItem('redirectToAfterAuth', `/activities`)
      router.push('/login')
    } else {
      registerActivity(activity.id, user?.sub || '')
      window.open(activity.link, '_blank')
    }
  }

  const imageSrc = activity.image?.trim()
    ? activity.image
    : 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Comunidad%2Fimage_banner_sponsors.png?alt=media&token=6f18d393-5502-4b71-8f1c-f7adf65816fa'

  return (
    <div className='flex w-full max-w-full flex-row overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md shadow-black-6 transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl lg:h-[620px]'>
      {/* Imagen */}
      <div className='lg:1/3 relative h-40 min-h-[10rem] w-2/5 sm:h-full'>
        <Image
          src={imageSrc}
          alt={`Facilitador ${activity.facilitator || activity.title}`}
          className='object-fill'
          fill
        />
      </div>

      {/* Contenido */}
      <div className='flex w-2/3 flex-col justify-between p-3 text-sm sm:p-6 lg:text-3xl'>
        <div className='flex flex-grow flex-col justify-center gap-2 lg:gap-y-7'>
          <p className='text-xs font-semibold tracking-wider text-[#FE5833] lg:text-3xl'>
            {activity.title}
          </p>

          {activity.facilitator && (
            <p className='font-karla text-xs font-semibold text-[#000000] lg:text-3xl'>
              Facilitador/a:{' '}
              <span className='font-normal'>{activity.facilitator}</span>
            </p>
          )}

          <p className='line-clamp-3 font-karla text-xs text-[#000000] lg:text-2xl'>
            {activity.description}
          </p>

          <div className='flex flex-wrap items-center gap-1 pt-1 text-xs text-gray-800 lg:space-x-10 lg:text-3xl'>
            <span className='rounded-lg bg-[#07235644] px-4 py-0.5 text-center font-normal'>
              {activity.type.replaceAll('-', ' ')}
            </span>
            <span className='flex items-center gap-0.5 font-semibold'>
              <Calendar className='h-4 w-4 text-[#FE5833] lg:h-8 lg:w-8' />
              {new Date(activity.date).toLocaleDateString('es-ES')}
            </span>
            <span className='flex items-center gap-0.5 font-semibold'>
              <Clock className='h-4 w-4 text-[#FE5833] lg:h-8 lg:w-8' />
              {isLoading ? 'Calculando hora...' : formattedTime}
            </span>
          </div>
        </div>
        <div className='flex justify-end pt-2 lg:px-10'>
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
