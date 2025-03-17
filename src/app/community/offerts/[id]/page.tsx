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
  }
  offers: any[]
  posts: any[]
}

interface OffertsProps {
  params: Promise<{
    id: string
  }>
}

export default function Offerts({ params }: OffertsProps) {
  const resolvedParams = React.use(params)
  const itemsPerPage = 1
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [sponsor, setSponsor] = useState<Sponsor | null>(null)
  const flagData = flags.find((item) => item.name === sponsor?.user.country)
  const flagUrl = flagData ? flagData.flag : ''

  const formatUrl = (url: string) => {
    if (!url) return ''
    return url.startsWith('http') ? url : `https://${url}`
  }

  async function getData() {
    try {
      const response = await fetch(`${API_URL}sponsors/${resolvedParams.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`)
      }

      const data = await response.json()
      setSponsor(data)
    } catch (error) {
      console.error('Error al obtener los datos:', error)
    }
  }

  useEffect(() => {
    if (!resolvedParams.id) return
    getData()
  }, [resolvedParams.id])

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
      className={`${darkerGrotesque.variable} ${roboto.variable} ${karla.variable} z-[20] flex w-full max-w-[1980px] flex-col`}
    >
      <div className='z-[20] bg-white'>
        <Image
          alt='Offerts'
          className='z-[20] w-full'
          height={isMobile ? 288 : 540}
          src={isMobile ? sponsor.bannerMobile : sponsor.bannerWeb}
          width={isMobile ? 393 : 1200}
        />
      </div>
      <div className='flex flex-col md:pt-10'>
        <div className='absolute -left-8 top-36 z-[10] h-[200px] w-[200px] rounded-full bg-blue-400 opacity-40 blur-3xl md:-left-28 md:top-96 md:h-[500px] md:w-[450px]'></div>
        <div className='z-[20] flex flex-row md:ml-[400px]'>
          <div className='ml-6 mt-2 py-4 md:mr-8'>
            <Image
              alt='Offerts'
              className='m-1 h-[100px] w-[140px] rounded-full object-fill md:m-4 md:h-[200px] md:w-[200px]'
              height={1000}
              src={sponsor.logo}
              width={1000}
            />
          </div>
          <div className='mt-5 flex w-full flex-col pl-6'>
            <div className='flex flex-row items-center'>
              <h1 className='mr-2 font-darker-grotesque text-[26px] font-extrabold text-[#082965] md:mr-4 md:text-[56px]'>
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
            <p className='mb-2 font-roboto text-[16px] font-normal text-[#082965] md:mb-3 md:text-[22px]'>
              {sponsor.specialization}
            </p>
            <div className='mb-6 flex flex-row gap-2 md:gap-4'>
              <div className='flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:h-[45px] md:w-[45px]'>
                <MailIcon />
              </div>

              {sponsor.web && (
                <a
                  href={formatUrl(sponsor.web)}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-colors hover:bg-gray-50 md:h-[45px] md:w-[45px]'
                >
                  <GlobeIcon className='text-[#FE2E00]' />
                </a>
              )}

              {sponsor.socials[0] && (
                <a
                  href={formatUrl(sponsor.socials[0])}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-colors hover:bg-gray-50 md:h-[45px] md:w-[45px]'
                >
                  <LinkedInIcon height={20} width={20} />
                </a>
              )}

              {sponsor.socials[1] && (
                <a
                  href={formatUrl(sponsor.socials[1])}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-colors hover:bg-gray-50 md:h-[45px] md:w-[45px]'
                >
                  <InstagramIcon height={20} width={20} />
                </a>
              )}

              {sponsor.socials[2] && (
                <a
                  href={formatUrl(sponsor.socials[2])}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-colors hover:bg-gray-50 md:h-[45px] md:w-[45px]'
                >
                  <FacebookIcon />
                </a>
              )}

              <div className='flex hidden h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:h-[45px] md:w-[45px]'>
                <PhoneIcon className='text-[#FE2E00]' height={20} width={20} />
              </div>
            </div>
          </div>
        </div>
        <h2 className='w-full pb-5 text-center font-darker-grotesque text-[22px] font-darker-grotesque-700 text-[#082965] md:pb-14 md:pt-6 md:text-[40px]'>
          Nuestras Certificaciones, cursos y más
        </h2>
      </div>

      <div className='flex w-full flex-col items-center bg-[#FFEAE6]'>
        <div className='grid grid-cols-1 justify-items-center md:grid-cols-3 md:py-16'>
          {sponsor.offers.map((offert, index) => (
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
