'use client'
import { sponsors } from '@/data/data'
import React, { useEffect, useState } from 'react'

type Sponsor = {
  id: number
  name: string
  image: string
  alt: string
}

export const Sponsors: React.FC = () => {
  const [SponsorsLogo, setSponsorsLogo] = useState<Sponsor[]>([])
  useEffect(() => {
    setSponsorsLogo(sponsors)
  }, [])
  const duplicateSponsors = [...SponsorsLogo, ...SponsorsLogo]

  return (
    <div className='flex flex-col items-center bg-black-4 px-4 py-6 text-white'>
      <div className='flex w-full max-w-[960px] flex-col gap-4'>
        <span className='text-center font-darker-grotesque text-[20px] font-extrabold text-blue-6 sm:text-3xl md:text-5xl'>
          Junto a nuestros aliados
        </span>
        <div className='my-10 flex w-full animate-scrollLeft items-center justify-center gap-[32px] md:gap-[96px]'>
          {duplicateSponsors.map((sponsors, index) => (
            <img
              alt={sponsors.name}
              aria-hidden='true'
              className='w-widthFlags md:border 2xl:h-[90%]'
              key={index}
              src={sponsors.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
