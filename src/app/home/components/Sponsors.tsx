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
    <div className='flex w-screen max-w-[1980px] flex-col items-center overflow-hidden bg-black-4 px-4 py-6 text-white'>
      <div className='flex max-w-[960px] flex-col'>
        <span className='text-center font-darker-grotesque text-[20px] font-extrabold text-blue-6 sm:text-3xl md:text-5xl'>
          Junto a nuestros aliados
        </span>
        <div className='flex w-full animate-scrollLeft items-center justify-center gap-6 py-6 lg:gap-20'>
          {duplicateSponsors.map((sponsors, index) => (
            <img
              alt={sponsors.name}
              aria-hidden='true'
              className='h-full w-widthFlags object-cover'
              key={index}
              src={sponsors.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
