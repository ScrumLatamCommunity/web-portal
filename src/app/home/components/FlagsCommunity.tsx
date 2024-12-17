'use client'
import { flags } from '@/data/data'
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
    <div className='relative w-screen bg-black-5 py-6 shadow-shadowFlags md:m-auto md:max-w-screen-2xl md:py-[2.5%] md:shadow-shadowFlagsDesktop'>
      <div className='flex min-h-[5vh] overflow-hidden sm:h-12 md:bg-inherit'>
        <div className='flex w-full animate-scrollLeft items-center justify-center sm:gap-4 lg:gap-20'>
          {duplicateFlags.map((flag, index) => (
            <img
              alt={flag.name}
              aria-hidden='true'
              className='h-full w-widthFlags border border-black-13 object-cover'
              key={index}
              src={flag.flag}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
