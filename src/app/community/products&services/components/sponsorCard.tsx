import { useAuth } from '@/app/context/AuthContext'
import { darkerGrotesque } from '@/fonts'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

interface SponsorData {
  sponsorId: string
  companyName: string
  logo: string
  specialization: string[]
}

export default function SponsorCard({
  companyName,
  logo,
  sponsorId,
  specialization
}: SponsorData) {
  const { setSelectedSponsorId } = useAuth()
  const router = useRouter()
  const [hovered, setHovered] = useState(false)

  const handleClick = () => {
    if (sponsorId) {
      setSelectedSponsorId(sponsorId)
      router.push(`/community/offerts/${sponsorId}`)
    }
  }
  return (
    <div
      className={`${darkerGrotesque.variable} mx-auto mt-5 flex min-h-[250px] w-[90%] flex-col items-center justify-between rounded-2xl border-2 bg-white p-6 transition-shadow duration-300 hover:shadow-xl`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className='flex flex-col items-center'>
        <div className='my-10 flex h-[90px] w-[160px] items-center justify-center'>
          <Image
            alt={`${companyName} logo`}
            height={90}
            width={180}
            src={logo}
            className='object-fill'
          />
        </div>
        <div
          className={`w-full overflow-hidden transition-all duration-500 ${
            hovered
              ? 'mb-8 mt-1 max-h-40 opacity-100 md:mt-4'
              : 'max-h-0 opacity-0'
          }`}
        >
          <ul className='list-disc pl-6 text-left text-[16px] font-darker-grotesque-400 text-[#082965]'>
            {specialization.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <button
        className='my-3 w-[70%] rounded-3xl bg-[#082965] px-6 py-2 text-[16px] font-darker-grotesque-400 text-white shadow-md transition-colors duration-200 hover:bg-[#0a3871]'
        onClick={handleClick}
      >
        Saber más
      </button>
    </div>
  )
}
