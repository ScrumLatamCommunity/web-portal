import Image from 'next/image'
import React from 'react'

interface Activity {
  id: number
  image: any
  title: string
  subtitle: string
}

interface ActivitiesSliderProps {
  activities: Activity[]
}

export default function ActivitiesSlider({
  activities
}: ActivitiesSliderProps) {
  return (
    <div className='flex h-[500px] flex-col flex-nowrap gap-y-2 overflow-y-auto py-2 scrollbar-thumb-gray-400 scrollbar-w-44'>
      {activities.map((activity) => (
        <div
          key={activity.id}
          className='w-full flex-shrink-0 rounded-2xl bg-white shadow-2xl'
        >
          <div className='flex flex-row items-center'>
            <Image
              alt={activity.title}
              className='rounded-2xl object-cover p-2 md:h-[6.5rem] md:w-[6.5rem] 2xl:h-[7.5rem] 2xl:w-[7.5rem]'
              height={120}
              src={activity.image}
              width={120}
            />
            <div className='ml-5 flex flex-col items-start justify-center py-5'>
              <h1 className='mb-0 font-darker-grotesque text-[26px] font-bold leading-tight text-[#082965]'>
                {activity.title}
              </h1>
              <h2 className='font-darker-grotesque text-[24px] leading-tight text-[#082965]'>
                {activity.subtitle}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
