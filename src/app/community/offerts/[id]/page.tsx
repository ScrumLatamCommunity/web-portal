'use client'

import FacebookIcon from '@/assets/FacebookIcon'
import GlobeIcon from '@/assets/GlobeIcon'
import InstagramIcon from '@/assets/instagramIcon'
import LinkedInIcon from '@/assets/LinkedinIcon'
import MailIcon from '@/assets/MailIcon'
import PhoneIcon from '@/assets/PhoneIcon'
import { darkerGrotesque, karla, roboto } from '@/fonts'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import OffertCard from '../components/offertsCard'
import { flags } from '@/data/data'
import { Pagination } from '@/app/home//components/Pagination'
import { useAuth } from '@/app/context/AuthContext'
import { toast } from 'react-hot-toast'

const API_URL = process.env.NEXT_PUBLIC_API_URL

interface Sponsor {
  id: string
  companyName: string
  description: string
  bannerMobile: string
  bannerWeb: string
  logo: string
  phone: string
  web: string
  socials: string[]
  specialization: string[]
  status: string
  createdAt: string
  updatedAt: string
  userId: string
  user: {
    country: string
    email: string
  }
  offers: any[]
  posts: any[]
}

export default function Offerts() {
  const itemsPerPage = 1
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [sponsor, setSponsor] = useState<Sponsor | null>(null)
  const flagData = flags.find((item) => item.name === sponsor?.user.country)
  const flagUrl = flagData ? flagData.flag : ''
  const { selectedSponsorId } = useAuth()

  async function getData(sponsorId: string) {
    try {
      const response = await fetch(`${API_URL}sponsors/${sponsorId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()

      const filteredOffers = data.offers.filter(
        (offer: { status: string }) => offer.status === 'ACTIVE'
      )
      data.offers = filteredOffers

      const storedSponsors = JSON.parse(
        localStorage.getItem('sponsorsData') || '{}'
      )
      storedSponsors[sponsorId] = data
      localStorage.setItem('sponsorsData', JSON.stringify(storedSponsors))
      setSponsor(data)
    } catch (error) {
      console.log('Error al obtener los datos:', error)
    }
  }

  useEffect(() => {
    if (!selectedSponsorId) return

    getData(selectedSponsorId)
  }, [selectedSponsorId])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  if (!sponsor) {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <span>Cargando...</span>
      </div>
    )
  }

  return (
    <section
      className={`${darkerGrotesque.variable} ${roboto.variable} ${karla.variable} flex w-full max-w-[1980px] flex-col`}
    >
      <div className='flex max-h-[540px]'>
        <Image
          alt='Offerts'
          className='w-full object-contain p-2 md:p-6'
          height={540}
          src={sponsor.bannerWeb}
          width={1200}
        />
      </div>
      <div className='flex flex-col bg-gradient-to-br from-[#e0eafc] to-[#1B6AF400] md:pt-10'>
        <div className='flex flex-row 2xl:ml-[280px]'>
          <div className='md:mr-8'>
            <Image
              alt='Offerts'
              className='m-4 rounded-full bg-white md:h-[175px] md:w-[175px]'
              height={1800}
              src={sponsor.logo}
              width={1800}
            />
          </div>
          <div className='mt-5 flex w-full flex-col pl-6'>
            <div className='flex flex-row items-center'>
              <h1 className='mr-2 font-darker-grotesque text-[26px] font-extrabold md:mr-4 md:text-[56px]'>
                {sponsor.companyName}
              </h1>
              <Image
                className='h-[20px] md:mt-3 md:h-[30px] md:w-[50px]'
                src={flagUrl}
                alt={'flags'}
                width={30}
                height={10}
              />
            </div>
            <p className='mb-2 font-roboto text-[16px] font-normal md:mb-3 md:text-[26px]'>
              {Array.isArray(sponsor.specialization)
                ? sponsor.specialization.join(', ')
                : sponsor?.specialization || 'No hay área de especialización'}
            </p>
            <div className='mb-6 flex flex-row gap-2 md:gap-4'>
              <div
                onClick={() => {
                  navigator.clipboard.writeText(sponsor.user.email)
                  toast.success(
                    `Mail copiado al portapapeles: ${sponsor.user.email}`
                  )
                }}
                className='flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:h-[45px] md:w-[45px]'
              >
                <MailIcon />
              </div>
              <a
                className='flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:h-[45px] md:w-[45px]'
                href={
                  sponsor.web.startsWith('http')
                    ? sponsor.web
                    : `https://${sponsor.web}`
                }
                rel='noopener noreferrer'
                target='_blank'
              >
                <GlobeIcon className='text-[#FE2E00]' />
              </a>
              <a
                className='flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:h-[45px] md:w-[45px]'
                href={
                  sponsor.socials[0].startsWith('http')
                    ? sponsor.socials[0]
                    : `https://${sponsor.socials[0]}`
                }
                rel='noopener noreferrer'
                target='_blank'
              >
                <LinkedInIcon
                  className='text-[#FE2E00]'
                  height={20}
                  width={20}
                />
              </a>
              <a
                className='flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:h-[45px] md:w-[45px]'
                href={
                  sponsor.socials[1].startsWith('http')
                    ? sponsor.socials[1]
                    : `https://${sponsor.socials[1]}`
                }
                rel='noopener noreferrer'
                target='_blank'
              >
                <InstagramIcon height={20} width={20} />
              </a>
              <a
                className='flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:h-[45px] md:w-[45px]'
                href={
                  sponsor.socials[2].startsWith('http')
                    ? sponsor.socials[2]
                    : `https://${sponsor.socials[2]}`
                }
                rel='noopener noreferrer'
                target='_blank'
              >
                <FacebookIcon className='text-[#FE2E00]' />
              </a>
              <div
                onClick={() => {
                  navigator.clipboard.writeText(sponsor.phone)
                  toast.success(
                    `Número copiado al portapapeles: ${sponsor.phone}`
                  )
                }}
                className='flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:h-[45px] md:w-[45px]'
              >
                <PhoneIcon className='text-[#FE2E00]' height={20} width={20} />
              </div>
            </div>
          </div>
        </div>
        <h2 className='w-full pb-5 text-center font-darker-grotesque text-[22px] font-darker-grotesque-700 text-[#082965] md:pb-10 md:pt-6 2xl:text-[40px]'>
          Nuestras Certificaciones, cursos y más
        </h2>
      </div>

      <div className='flex w-full flex-col items-center bg-[#FFEAE6]'>
        <div className='grid grid-cols-1 justify-items-center gap-y-8 py-8 md:grid-cols-3'>
          {sponsor.offers
            .filter((offert) => offert.status === 'ACTIVE')
            .map((offert, index) => (
              <OffertCard key={index} {...offert} />
            ))}
        </div>

        {isMobile && (
          <Pagination
            currentIndex={currentPage}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            totalItems={sponsor.offers.length}
          />
        )}
      </div>
    </section>
  )
}
