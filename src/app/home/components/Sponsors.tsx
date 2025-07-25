'use client'
import { useAuth } from '@/app/context/AuthContext'
import { sponsors } from '@/data/data'
import React, { useEffect, useState } from 'react'
import { SponsorData } from '@/interfaces'
import Image from 'next/image'

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

  const { token } = useAuth()
  const [sponsorData, setSponsorData] = useState<SponsorData[] | null>(null)

  const fetchSponsorData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}sponsors`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }

    const data = await response.json()
    console.log(data)
    setSponsorData(data)
  }

  useEffect(() => {
    fetchSponsorData()
  }, [token])

  return (
    <div className='mx-auto flex w-full max-w-[1920px] flex-col bg-[#fbfbfb] py-8 md:px-4 md:py-20'>
      <h2 className='pl-[8%] text-left font-darker-grotesque text-[24px] font-bold text-[#082965] md:mb-12 md:text-[50px] 2xl:text-[65px]'>
        Junto a nuestros sponsors
      </h2>
      <div className='relative overflow-hidden md:max-w-[1920px]'>
        <div className='flex animate-infinite-scroll items-center gap-6 py-6 lg:gap-20'>
          {[
            ...(sponsorData || []),
            ...(sponsorData || []),
            ...(sponsorData || [])
          ].map((sponsor: SponsorData, index: number) => (
            <Image
              alt={sponsor.companyName}
              aria-hidden='true'
              className='h-[80px] w-auto max-w-[80px] object-contain md:h-[120px] md:max-w-[200px] 2xl:h-[170px]'
              height={600}
              key={index}
              src={sponsor.logo}
              width={600}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
