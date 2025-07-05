'use client'
import { flags } from '@/data/data'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Flag } from 'react-feather'

type Flag = {
  id: number
  name: string
  flag: string
}

export const FlagsCommunity = () => {
  const [FlagsCommunity, setFlagsCommunity] = useState<Flag[]>([])
  useEffect(() => {
    setFlagsCommunity(flags)
  }, [])
  const duplicateFlags = [...FlagsCommunity, ...FlagsCommunity]

  return (
    <div className='relative w-full py-6 shadow-shadowFlags md:m-auto md:max-w-[1920px] md:py-[1.5%] md:shadow-shadowFlagsDesktop'>
      <div className='flex overflow-hidden sm:h-12 md:min-h-[5vh] md:bg-inherit'>
        <div className='flex w-full animate-scrollLeft items-center justify-center gap-x-14 lg:gap-20'>
          {duplicateFlags.map((flag, index) => (
            <Image
              alt={flag.name}
              aria-hidden='true'
              className='h-[28px] w-[48px] rounded-md object-cover md:min-h-[40px] md:min-w-[70px] 2xl:h-full 2xl:max-h-[60px] 2xl:w-[120px]'
              height={600}
              key={index}
              src={flag.flag}
              width={600}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
