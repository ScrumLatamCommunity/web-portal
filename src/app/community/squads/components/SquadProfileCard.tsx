import React from 'react'
import Image from 'next/image'
import LinkedInIcon from '@/assets/LinkedinIcon'
import { darkerGrotesque } from '@/fonts'

interface SquadProfileCardProps {
  name: string
  title: string
  description: string
  imageUrl: string
  countryFlagUrl: string
  linkedinUrl: string
}

const SquadProfileCard: React.FC<SquadProfileCardProps> = ({
  name,
  title,
  description,
  imageUrl,
  countryFlagUrl,
  linkedinUrl
}) => {
  return (
    <div
      className={`${darkerGrotesque.variable} flex w-full min-w-[220px] max-w-[360px] flex-col items-center rounded-2xl px-4 py-8`}
    >
      <Image
        src={imageUrl}
        alt={name}
        width={160}
        height={160}
        className='mb-2 h-40 w-40 rounded-full object-cover shadow-md'
      />
      <Image
        src={countryFlagUrl}
        alt='Bandera'
        width={48}
        height={28}
        className='mb-4 h-7 w-12 rounded-xl shadow-md'
      />
      <h3 className='mb-1 text-center font-darker-grotesque text-[24px] font-bold text-[#082965] md:text-[26px]'>
        {name}
      </h3>
      <span className='mb-4 text-center font-darker-grotesque text-[22px] font-bold text-[#FE2E00] md:text-[22px]'>
        {title}
      </span>
      <p className='mb-8 text-center font-darker-grotesque text-[18px] font-medium text-[#3B4A6B] md:text-[20px]'>
        {description}
      </p>
      <a
        href={linkedinUrl}
        target='_blank'
        rel='noopener noreferrer'
        className='flex justify-center text-[#FE2E00]'
      >
        <LinkedInIcon className='text-[#FE5833]' height={30} width={30} />
      </a>
    </div>
  )
}

export default SquadProfileCard
