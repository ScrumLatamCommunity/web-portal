'use client'

import BehanceIcon from '@/assets/behanceIcon'
import { images } from '@/data/images_url'
import React from 'react'
import { GitHub, Instagram } from 'react-feather'

export const MobileFounder = () => {
  return (
    <div className='flex flex-col items-center gap-8 pb-20 pt-20'>
      <div className='flex gap-2'>
        <img alt='icono' className='object-cover' src={images.founder[0]} />
        <span className='text-10 font-black text-[#061D48]'>
          Nuestro fundador
        </span>
      </div>
      <div className='flex w-fit justify-center rounded-lg bg-[#345081] bg-opacity-10 px-4 py-2'>
        <span className='font-darker-grotesque text-lg font-semibold text-[#082965] sm:text-2xl'>
          ¿Qué es lo que hacemos?
        </span>
      </div>
      <p className='px-7 text-center font-karla text-3 font-medium text-[#061D48]'>
        Rubén Darío Romero Chica inició la comunidad Scrum Latam en 2020 con la
        visión de crear un espacio colaborativo para compartir conocimientos
        sobre agilidad. Su liderazgo y pasión por Scrum han sido fundamentales
        para el crecimiento y la cohesión de nuestra comunidad. Bajo su guía,
        hemos conectado a profesionales de toda Latinoamérica, promoviendo el
        aprendizaje y la transformación organizacional.
      </p>
      <img alt='founder' src={images.founder[1]} />
      <div className='flex items-center justify-center gap-2'>
        <GitHub className='text-red-500' />
        <BehanceIcon className='text-red-500' width={23} height={14} />
        <a
          href='https://www.instagram.com/scrumlatamcomunidad/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Instagram className='text-red-500' />
        </a>
      </div>
    </div>
  )
}

export default MobileFounder
