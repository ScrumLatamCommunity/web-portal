import { useAuth } from '@/app/context/AuthContext'
import FacebookIcon from '@/assets/FacebookIcon'
import LinkedInIcon from '@/assets/LinkedinIcon'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

interface SponsorData {
  sponsorId: string
  companyName: string
  logo: string
  specialization: string[]
}

export default function SponsorCard({
  companyName,
  logo,
  specialization,
  sponsorId
}: SponsorData) {
  const { setSelectedSponsorId } = useAuth()
  const router = useRouter()

  const handleClick = () => {
    if (sponsorId) {
      setSelectedSponsorId(sponsorId)
      router.push(`/community/offerts/${sponsorId}`)
    }
  }
  return (
    <div className='group my-3 flex min-h-[200px] w-[85%] flex-col justify-between rounded-3xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),0_6px_10px_0_rgba(0,0,0,0.1)] transition-all duration-300 group-hover:shadow-xl'>
      <div className='flex flex-col items-center justify-center py-5'>
        <div className='mb-2 flex h-[120px] w-[120px] items-center justify-center overflow-hidden rounded-full shadow-[4px_4px_10px_rgba(0,0,0,0.1)]'>
          <Image
            alt={`${companyName} logo`}
            height={80}
            width={80}
            src={logo}
            className='h-[120px] w-[120px] object-contain'
          />
        </div>
        <h1 className='font-darker-grotesque text-[28px] font-bold text-[#082965]'>
          {companyName}
        </h1>
      </div>

      <div className='flex max-h-0 flex-col items-start gap-1 overflow-hidden px-4 opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-[500px] group-hover:opacity-100'>
        {specialization.map((item, index) => (
          <p
            key={index}
            className='text-[#082965] before:mr-2 before:content-["●"]'
          >
            {item}
          </p>
        ))}

        <div className='mb-5 mt-5 flex flex-row gap-2 self-center'>
          <LinkedInIcon className='fill-[#082965] text-[#082965]' />
          <FacebookIcon className='fill-[#082965] text-[#082965]' />
        </div>

        <div className='w-full border-[1px] border-[#082965]'></div>

        <button
          className='mb-6 mt-4 self-center rounded-3xl bg-[#082965] px-4 py-1 font-darker-grotesque text-[16px] text-white'
          onClick={handleClick}
        >
          Conóceme
        </button>
      </div>
    </div>
  )
}
