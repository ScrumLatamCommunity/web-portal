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
    <div className='flex w-full max-w-full flex-row overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl'>
      {/* Imagen */}
      <div className='relative w-full md:w-[55%]'>
        <Image
          src={imageSrc}
          alt={`Facilitador ${activity.facilitator || activity.title}`}
          className='object-fill'
          fill
          priority
        />
      </div>

      {/* Contenido */}
      <div className='flex w-full flex-col justify-between p-3 text-xs sm:p-6 sm:text-sm lg:text-base xl:text-lg'>
        <div className='flex flex-grow flex-col justify-center gap-2 lg:gap-y-5'>
          <p className='font-semibold tracking-wider text-[#FE5833]'>
            {activity.title}
          </p>

          {activity.facilitator && (
            <p className='font-karla font-semibold text-[#000000]'>
              Facilitador/a:{' '}
              <span className='font-normal'>{activity.facilitator}</span>
            </p>
          )}

          <p className='line-clamp-3 hidden font-karla text-[#000000] md:block'>
            {activity.description}
          </p>

          <div className='flex flex-col items-start gap-1 pt-1 text-gray-800 md:flex-row lg:gap-x-6'>
            <span className='rounded-lg bg-[#07235644] px-4 py-0.5 text-center font-normal'>
              {activity.type.replaceAll('-', ' ')}
            </span>
            <span className='flex items-center gap-0.5 font-semibold'>
              <Calendar className='h-4 w-4 text-[#FE5833]' />
              {new Date(activity.date).toLocaleDateString('es-ES')}
            </span>
            <span className='flex items-center gap-0.5 font-semibold'>
              <Clock className='h-4 w-4 text-[#FE5833]' />
              {isLoading ? 'Calculando hora...' : formattedTime}
            </span>
          </div>
        </div>

        <div className='flex justify-end pt-2 lg:px-6'>
          <button
            onClick={handleEnrollClick}
            className='w-full self-end rounded-xl bg-[#082965] px-6 py-2 text-sm font-normal text-white transition-colors duration-300 hover:bg-[#FE5833] lg:w-auto lg:px-10 lg:py-3'
          >
            Inscribirme
          </button>
        </div>
      </div>
    </div>
  )
}
