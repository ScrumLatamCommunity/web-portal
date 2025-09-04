'use client'
import React, { useEffect, useState } from 'react'
import MainActivity from './MainActivity'
import ActivitiesSlider from './ActivitiesSlider'

interface ActivitiesI {
  title: string
  description: string
  date: string
  time: string[]
  recurrency: string
  image: string
  type: string
  link: string
}

const getActivities = async (): Promise<ActivitiesI[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}activities`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    if (!response.ok) {
      throw new Error('Error al obtener las actividades')
    }
    const activities: ActivitiesI[] = await response.json()
    activities.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    return activities
  } catch (error) {
    console.error('Error al obtener las actividades:', error)
    return []
  }
}

export default function ActivitiesHome() {
  const [activities, setActivities] = useState<ActivitiesI[]>([])
  const [selectedActivity, setSelectedActivity] = useState<ActivitiesI | null>(
    null
  )

  useEffect(() => {
    getActivities().then((acts) => {
      setActivities(acts)
      if (acts.length > 0) setSelectedActivity(acts[0])
    })
  }, [])

  return (
    <div className='flex flex-col pb-10 md:pb-14 2xl:pb-20'>
      <h1 className='mt-4 pb-5 pl-[8%] font-darker-grotesque text-[24px] font-bold leading-1 text-[#082965] md:mt-8 md:pb-2 md:pt-8 md:text-[55px] 2xl:pb-2 2xl:pt-12 2xl:text-[65px]'>
        Únete a nuestras actividades
      </h1>
      <div className='mx-auto flex w-full flex-col items-center justify-center gap-6 md:w-[75%] md:flex-row md:pt-10 2xl:w-[70%] 2xl:pt-16'>
        <div className='w-full px-4 md:w-[40%] md:px-0'>
          <MainActivity activity={selectedActivity} />
        </div>
        <div className='w-full px-4 md:w-[50%] md:px-0 md:pr-20'>
          <ActivitiesSlider
            activities={activities}
            onSelect={setSelectedActivity}
          />
        </div>
      </div>
    </div>
  )
}
