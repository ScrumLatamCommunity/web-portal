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
import AboutUs from '../components/svg/about-us'
import Certificates from '../components/svg/certificates'

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
  const [activeSection, setActiveSection] = useState<'about' | 'certificates'>(
    'about'
  )

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
      <div className='flex flex-col items-center md:pr-80 md:pt-10'>
        <div className='flex flex-row 2xl:ml-[280px]'>
          <div className='md:mr-8'>
            <Image
              alt='Offerts'
              className='m-4 rounded-full bg-white md:h-[300px] md:w-[300px]'
              height={1800}
              src={sponsor.logo}
              width={1800}
            />
          </div>
          <div className='mt-5 flex w-full flex-col pl-6'>
            <div className='flex flex-row items-center'>
              <h1 className='mr-2 font-darker-grotesque text-[26px] font-extrabold text-[#082965] md:mr-4 md:text-[80px]'>
                {sponsor.companyName}
              </h1>
              <Image
                className='h-[20px] md:mt-3 md:h-[40px] md:w-[60px]'
                src={flagUrl}
                alt={'flags'}
                width={30}
                height={10}
              />
            </div>
            <div className='mb-6 flex flex-row gap-2 md:gap-4'>
              <div
                onClick={() => {
                  navigator.clipboard.writeText(sponsor.user.email)
                  toast.success(
                    `Mail copiado al portapapeles: ${sponsor.user.email}`
                  )
                }}
                className='flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:h-[60px] md:w-[60px]'
              >
                <MailIcon className='text-[#082965]' height={40} width={40} />
              </div>
              <a
                className='flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:h-[60px] md:w-[60px]'
                href={
                  sponsor.web.startsWith('http')
                    ? sponsor.web
                    : `https://${sponsor.web}`
                }
                rel='noopener noreferrer'
                target='_blank'
              >
                <GlobeIcon className='text-[#082965]' height={40} width={40} />
              </a>
              <a
                className='flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:h-[60px] md:w-[60px]'
                href={
                  sponsor.socials[0].startsWith('http')
                    ? sponsor.socials[0]
                    : `https://${sponsor.socials[0]}`
                }
                rel='noopener noreferrer'
                target='_blank'
              >
                <LinkedInIcon
                  className='text-[#082965]'
                  height={40}
                  width={40}
                />
              </a>
              <a
                className='flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:h-[60px] md:w-[60px]'
                href={
                  sponsor.socials[1].startsWith('http')
                    ? sponsor.socials[1]
                    : `https://${sponsor.socials[1]}`
                }
                rel='noopener noreferrer'
                target='_blank'
              >
                <InstagramIcon
                  className='text-[#082965]'
                  height={40}
                  width={40}
                />
              </a>
              <a
                className='flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:h-[60px] md:w-[60px]'
                href={
                  sponsor.socials[2].startsWith('http')
                    ? sponsor.socials[2]
                    : `https://${sponsor.socials[2]}`
                }
                rel='noopener noreferrer'
                target='_blank'
              >
                <FacebookIcon
                  className='text-[#082965]'
                  height={40}
                  width={40}
                />
              </a>
              <div
                onClick={() => {
                  navigator.clipboard.writeText(sponsor.phone)
                  toast.success(
                    `Número copiado al portapapeles: ${sponsor.phone}`
                  )
                }}
                className='flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:h-[60px] md:w-[60px]'
              >
                <PhoneIcon className='text-[#082965]' height={35} width={35} />
              </div>
            </div>
            {sponsor.specialization.map((item, index) => (
              <p
                key={index}
                className='text-[24px] text-[#082965] before:mr-2 before:content-["●"]'
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className='mb-0 mt-24 flex flex-row items-center justify-center gap-x-48'>
        <div className='flex w-[380px] items-center rounded-[50px] bg-white p-3 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),0_6px_10px_0_rgba(0,0,0,0.1)]'>
          <div className='relative flex h-full w-full flex-col items-center rounded-[50px] border-2 border-[#082965] px-5'>
            <div className='absolute -top-20 z-10 flex flex-col rounded-full bg-white'>
              <AboutUs className='rounded-full' />
            </div>
            <p className='mb-6 pt-24 text-[20px] text-[#082965]'>
              Descubre la esencia de nuestra empresa y nuestro compromiso
              contigo.
            </p>
            <button
              onClick={() => setActiveSection('about')}
              className={`mb-5 rounded-3xl border-[2px] px-3 py-1 text-[22px] transition-colors duration-300 ${
                activeSection === 'about'
                  ? 'border-[#082965] bg-[#082965] text-white'
                  : 'border-[#082965] bg-white text-[#082965]'
              }`}
            >
              Sobre nosotros
            </button>
          </div>
        </div>
        <div className='flex w-[380px] items-center rounded-[50px] bg-white p-3 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),0_6px_10px_0_rgba(0,0,0,0.1)]'>
          <div className='relative flex h-full w-full flex-col items-center rounded-[50px] border-2 border-[#082965] px-5'>
            <div className='absolute -top-14 z-10 flex flex-col rounded-full bg-white'>
              <Certificates className='rounded-full' />
            </div>
            <p className='mb-6 pt-24 text-[20px] text-[#082965]'>
              Emitimos certificaciones que avalan tus conocimientos y
              habilidades adquiridas.
            </p>
            <button
              onClick={() => setActiveSection('certificates')}
              className={`mb-5 rounded-3xl border-[2px] px-3 py-1 text-[22px] transition-colors duration-300 ${
                activeSection === 'certificates'
                  ? 'border-[#082965] bg-[#082965] text-white'
                  : 'border-[#082965] bg-white text-[#082965]'
              }`}
            >
              Certificados
            </button>
          </div>
        </div>
      </div>
      {activeSection === 'about' && (
        <div className='animate-fadeIn mt-16 flex items-center justify-center transition-opacity duration-500 ease-in-out'>
          <div className='mb-10 flex w-[50%] scale-100 transform items-center justify-center rounded-3xl border-[2px] border-[#082965] p-3 transition-transform duration-500 ease-in-out'>
            <div
              className='text-[20px] leading-relaxed'
              dangerouslySetInnerHTML={{ __html: sponsor.description }}
            />
          </div>
        </div>
      )}
      {activeSection === 'certificates' && (
        <div className='animate-fadeIn flex w-full flex-col items-center transition-opacity duration-500 ease-in-out'>
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
      )}
    </section>
  )
}
