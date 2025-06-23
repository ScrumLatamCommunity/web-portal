'use client'
import { FC, SVGProps, useEffect, useState } from 'react'
import UserIcon from '@/assets/userIcon'
import StarIcon from '@/assets/starIcon'
import ActivityIcon from '@/assets/activityIcon'
import React from 'react'
import WorldIcon from '@/assets/worldIcon'

interface Counter {
  id: number
  number: number
  text: string
  icon: FC<SVGProps<SVGSVGElement>>
}

const initialCounters: Counter[] = [
  {
    id: 1,
    number: 0,
    text: 'Miembros',
    icon: UserIcon
  },
  {
    id: 2,
    number: 0,
    text: 'Países',
    icon: WorldIcon
  },
  {
    id: 3,
    number: 0,
    text: 'Actividades',
    icon: ActivityIcon
  },
  {
    id: 4,
    number: 0,
    text: 'Sponsors',
    icon: StarIcon
  }
]

export const CounterToCommunity = () => {
  const [currentCounters, setCurrentCounters] =
    useState<Counter[]>(initialCounters)
  const [currentActivities, setCurrentActivities] = useState<any[] | undefined>(
    undefined
  )

  const getMembers = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error('Error al obtener miembros')
      }

      const data: { role: string; country: string }[] = await response.json()

      let userCount = 0
      let sponsorCount = 0
      const uniqueCountries = new Set<string>()

      data.forEach((user) => {
        if (user.role === 'USER') {
          userCount++
        }
        if (user.role === 'SPONSOR') {
          sponsorCount++
        }
        if (user.country) {
          uniqueCountries.add(user.country)
        }
      })

      const updatedCounters = initialCounters.map((counter) => {
        if (counter.text === 'Miembros') {
          return { ...counter, number: userCount }
        }
        if (counter.text === 'Sponsors') {
          return { ...counter, number: sponsorCount }
        }
        if (counter.text === 'Países') {
          return { ...counter, number: uniqueCountries.size }
        }
        return counter
      })

      setCurrentCounters(updatedCounters)
    } catch (error) {
      console.error('Error al obtener miembros:', error)
    }
  }

  const getActivities = async () => {
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
        throw new Error('Error al obtener actividades')
      }
      const data: any[] = await response.json()
      setCurrentActivities(data)

      setCurrentCounters((prevCounters) =>
        prevCounters.map((counter) => {
          if (counter.text === 'Actividades') {
            return { ...counter, number: data.length }
          }
          return counter
        })
      )
    } catch (error) {
      console.error('Error al obtener actividades:', error)
    }
  }

  useEffect(() => {
    getMembers()
    getActivities()
  }, [])

  return (
    <section className='relative m-auto mt-8 pb-8 font-darker-grotesque md:max-w-[1920px] md:pb-24'>
      <div className='mt-8 flex flex-wrap items-center justify-center gap-4 pt-12'>
        <h3 className='m-0 text-6 font-black text-blue-8 md:text-4xl xl:text-17'>
          Somos una gran comunidad
        </h3>
      </div>
      <div className='flex flex-wrap justify-around gap-x-20 px-5 md:gap-14 md:px-16 xl:mt-14 xl:gap-x-0 2xl:px-24'>
        {currentCounters.map((counter, index) => (
          <React.Fragment key={counter.id}>
            <div className='mt-6 flex flex-col items-center md:gap-7'>
              <div className='w-12 max-w-[114px] pt-3 md:w-[8dvw]'>
                {React.createElement(counter.icon, {
                  className: 'w-full h-full bg-white fill-none stroke-red-500'
                })}
              </div>
              <h4
                className='text-center text-10 font-black text-blue-8 md:text-5xl 2xl:text-7xl'
                id='counter'
              >
                {counter.number}
              </h4>
              <p className='font-black text-blue-8 md:text-7 xl:text-11'>
                {counter.text}
              </p>
            </div>
            {index < currentCounters.length - 1 && (
              <div className='hidden w-[1px] bg-gray-400 md:block md:h-72'></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
