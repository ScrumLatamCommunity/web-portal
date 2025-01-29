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
  const duplicateSponsors = [...SponsorsLogo, ...SponsorsLogo, ...SponsorsLogo]

  return (
    <div className='mx-auto hidden w-screen max-w-[1980px] px-4 py-12 lg:block'>
      <h2 className='mb-12 text-center text-3xl font-bold text-[#0A2472]'>
        Junto a nuestros aliados
      </h2>
      <div className='relative overflow-hidden'>
        <div className='flex animate-infinite-scroll items-center gap-6 py-6 lg:gap-20'>
          {duplicateSponsors.map((sponsor, index) => (
            <img
              alt={sponsor.name}
              aria-hidden='true'
              className='h-8 w-auto object-contain md:h-12 lg:h-16'
              key={index}
              src={sponsor.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
