'use client'

import { getSocialIcon } from '@/utils/getSocialIcon'
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
import YouTubeIcon from '@/assets/YoutubeIcon'
import XIcon from '@/assets/twitter-x'
import WhatsappIcon from '@/assets/whatsapp'
import { getCountryFlag } from '@/utils/getFlags'
import MailIcon from '@/assets/MailIcon'
import GlobeIcon from '@/assets/GlobeIcon'

const API_URL = process.env.NEXT_PUBLIC_API_URL

interface Sponsor {
  id: string
  companyName: string
  description: string
  bannerMobile: string
  bannerWeb: string
  logo: string
  phone: string
  wppMessage: string
  web: string
  socials: string[]
  specialization: string[]
  status: string
  createdAt: string
  updatedAt: string
  userId: string
  user: {
    country: string[]
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
              className='m-4 rounded-full bg-white object-contain md:h-[300px] md:w-[300px]'
              height={300}
              width={300}
              src={sponsor.logo}
              priority
              quality={75}
              sizes='(max-width: 768px) 100vw, 300px'
              placeholder='blur'
              blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU2ODU6Ojo8Pj4+QEZGRkZGRkZGRkZGRkZGRkb/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
            />
          </div>
          <div className='mt-5 flex w-full flex-col pl-6'>
            <div className='flex flex-row items-center'>
              <h1 className='mr-2 font-darker-grotesque text-[26px] font-extrabold text-[#082965] md:mr-4 md:text-[80px]'>
                {sponsor.companyName}
              </h1>
              <div className='flex gap-2'>
                {sponsor.user.country.map((country, index) => (
                  <Image
                    key={index}
                    className='h-[20px] md:mt-3 md:h-[40px] md:w-[60px]'
                    src={getCountryFlag(country)}
                    alt={`flag-${country}`}
                    width={30}
                    height={10}
                  />
                ))}
              </div>
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
              {sponsor.socials.map((social, index) => {
                const url = social.startsWith('http')
                  ? social
                  : `https://${social}`

                return (
                  <a
                    key={index}
                    className='flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:h-[60px] md:w-[60px]'
                    href={url}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    {getSocialIcon(social, {
                      className: 'text-[#082965]',
                      height: 40,
                      width: 40
                    })}
                  </a>
                )
              })}
              <a
                href={`https://wa.me/${sponsor.phone}?text=${sponsor.wppMessage}`}
                target='_blank'
                rel='noopener noreferrer'
                className='flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:h-[60px] md:w-[60px]'
              >
                <WhatsappIcon
                  className='text-[#082965]'
                  height={40}
                  width={40}
                />
              </a>
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
          <div
            className={`relative flex h-full w-full flex-col items-center rounded-[50px] border-2 px-5 transition-colors duration-300 ${
              activeSection === 'about' ? 'border-gray-400' : 'border-[#082965]'
            }`}
          >
            <div className='absolute -top-20 z-10 flex flex-col rounded-full bg-white'>
              <AboutUs
                className={`rounded-full transition-colors duration-300 ${
                  activeSection === 'about' ? 'text-gray-400' : 'text-[#082965]'
                }`}
              />
            </div>
            <p
              className={`mb-6 pt-24 text-[20px] transition-colors duration-300 ${
                activeSection === 'about' ? 'text-gray-400' : 'text-[#082965]'
              }`}
            >
              Descubre la esencia de nuestra empresa y nuestro compromiso
              contigo.
            </p>
            <button
              onClick={() => setActiveSection('about')}
              className={`mb-5 rounded-3xl border-[2px] px-3 py-1 text-[22px] transition-colors duration-300 ${
                activeSection === 'about'
                  ? 'border-gray-400 text-gray-400'
                  : 'border-[#082965] text-[#082965]'
              }`}
            >
              Sobre nosotros
            </button>
          </div>
        </div>
        <div className='flex w-[380px] items-center rounded-[50px] bg-white p-3 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),0_6px_10px_0_rgba(0,0,0,0.1)]'>
          <div
            className={`relative flex h-full w-full flex-col items-center rounded-[50px] border-2 px-5 transition-colors duration-300 ${
              activeSection === 'certificates'
                ? 'border-gray-400'
                : 'border-[#082965]'
            }`}
          >
            <div className='absolute -top-14 z-10 flex flex-col rounded-full bg-white'>
              <Certificates
                className={`p-5 transition-colors duration-300 ${
                  activeSection === 'certificates'
                    ? 'text-gray-400'
                    : 'text-[#082965]'
                }`}
              />
            </div>
            <p
              className={`mb-6 pt-24 text-[20px] transition-colors duration-300 ${
                activeSection === 'certificates'
                  ? 'text-gray-400'
                  : 'text-[#082965]'
              }`}
            >
              Emitimos certificaciones que avalan tus conocimientos y
              habilidades adquiridas.
            </p>
            <button
              onClick={() => setActiveSection('certificates')}
              className={`mb-5 rounded-3xl border-[2px] px-3 py-1 text-[22px] transition-colors duration-300 ${
                activeSection === 'certificates'
                  ? 'border-gray-400 text-gray-400'
                  : 'border-[#082965] text-[#082965]'
              }`}
            >
              Certificados
            </button>
          </div>
        </div>
      </div>
      {activeSection === 'about' && (
        <div className='animate-fadeIn mt-16 flex items-center justify-center transition-opacity duration-500 ease-in-out'>
          <div className='z-[-1] flex w-[100%] scale-100 transform animate-slideUp items-center justify-center rounded-t-3xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.7)] transition-all duration-1000 ease-in-out'>
            <div
              className='text-[20px] leading-relaxed'
              dangerouslySetInnerHTML={{ __html: sponsor.description }}
            />
          </div>
        </div>
      )}
      {activeSection === 'certificates' && (
        <div className='animate-fadeIn flex w-full flex-col items-center transition-opacity duration-500 ease-in-out'>
          <div className='animate-fadeIn grid grid-cols-1 justify-items-center gap-y-8 py-8 transition-opacity duration-1000 ease-in-out md:grid-cols-3'>
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
