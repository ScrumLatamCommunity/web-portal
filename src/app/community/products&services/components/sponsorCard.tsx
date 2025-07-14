import { useAuth } from '@/app/context/AuthContext'
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
    <div className='mx-auto mt-5 flex min-h-[250px] w-[90%] flex-col items-center justify-between rounded-2xl border-2 bg-white p-6'>
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
      </div>
      <button
        className='my-3 w-[60%] rounded-3xl bg-[#082965] px-6 py-2 font-darker-grotesque text-[15px] text-white shadow-md transition-colors duration-200 hover:bg-[#0a3871]'
        onClick={handleClick}
      >
        Saber más
      </button>
    </div>
  )
}
