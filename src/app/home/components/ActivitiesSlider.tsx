import Image from 'next/image'
import React, { Key } from 'react'

interface Activity {
  title: string
  description: string
  date: string
  time: string[]
  recurrency: string
  image: string
  type: string
  link: string
}

interface ActivitiesSliderProps {
  activities: Activity[]
  onSelect: (activity: Activity) => void
}

export default function ActivitiesSlider({
  activities,
  onSelect
}: ActivitiesSliderProps) {
  return (
    <div className='flex h-[250px] w-full flex-col gap-y-2 overflow-y-auto overflow-x-hidden rounded-xl px-3 py-2 md:h-[500px]'>
      {activities.map((activity, i) => (
        <div
          key={i}
          className='w-full flex-shrink-0 cursor-pointer rounded-2xl bg-white shadow-2xl transition-transform hover:scale-[1.02]'
          onClick={() => onSelect(activity)}
        >
          <div className='flex flex-row items-center'>
            <Image
              alt={activity.title}
              className='h-[4rem] w-[6.5rem] rounded-3xl object-fill pl-2 md:h-[6.5rem] md:w-[6.5rem] md:p-3 2xl:h-[7rem] 2xl:w-[7rem]'
              height={500}
              src={activity.image}
              width={500}
            />
            <div className='ml-5 flex flex-col items-start justify-center py-5'>
              <h1 className='mb-0 font-darker-grotesque text-[16px] font-bold leading-tight text-[#082965] md:text-[26px]'>
                {activity.type}
              </h1>
              <h2 className='font-darker-grotesque leading-tight text-[#082965] text-[14x] md:text-[24px]'>
                {activity.title}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
