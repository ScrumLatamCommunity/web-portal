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
    <div className='relative max-w-screen-2xl shadow-shadowFlags md:m-auto md:py-[2.5%] md:shadow-shadowFlagsDesktop'>
      <div className='flex min-h-[5vh] overflow-hidden bg-black-5 md:bg-inherit'>
        <div className='flex w-full animate-scrollLeft items-center justify-center gap-[32px] md:gap-[96px]'>
          {duplicateFlags.map((flag, index) => (
            <img
              alt={flag.name}
              aria-hidden='true'
              className='w-[24px] border-black-13 object-cover md:h-[3.6vw] md:w-widthFlags md:border 2xl:h-[90%]'
              key={index}
              src={flag.flag}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
