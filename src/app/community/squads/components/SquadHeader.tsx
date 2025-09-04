import { darkerGrotesque } from '@/fonts'
import React from 'react'

interface SquadHeaderProps {
  title: string
  description: string
}

const SquadHeader: React.FC<SquadHeaderProps> = ({ title, description }) => (
  <div
    className={`${darkerGrotesque.variable} mt-6 flex w-full flex-col items-center md:mb-8 md:mt-16`}
  >
    <h2 className='mb-4 text-center font-darker-grotesque text-3xl font-bold text-[#FE2E00] md:text-[40px]'>
      {title}
    </h2>
    <p className='max-w-2xl px-5 text-center font-darker-grotesque text-[18px] font-medium text-[#3B4A6B] md:text-[24px]'>
      {description}
    </p>
  </div>
)

export default SquadHeader
