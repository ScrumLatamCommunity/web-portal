'use client'

import { getSocialIcon } from '@/utils/getSocialIcon'
import { darkerGrotesque, karla, roboto } from '@/fonts'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import OffertCard from '../components/offertsCard'
import { useAuth } from '@/app/context/AuthContext'
import { toast } from 'react-hot-toast'
import WhatsappIcon from '@/assets/whatsapp'
import { getCountryFlag } from '@/utils/getFlags'
import MailIcon from '@/assets/MailIcon'
import GlobeIcon from '@/assets/GlobeIcon'
import ChevronLeftIcon from '@/assets/ChevronLeftIcon'
import ChevronRightIcon from '@/assets/ChevronRightIcon'
import { SponsorCertificate } from '@/interfaces'

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
  descriptions: { title: string; description: string }[]
}

export default function Offerts() {
  const itemsPerPage = 1
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [sponsor, setSponsor] = useState<Sponsor | null>(null)
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0)
  const [certificates, setCertificates] = useState<SponsorCertificate[]>([])
  const [currentDescIndex, setCurrentDescIndex] = useState(0)

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

  async function getCertificates(sponsorId: string) {
    try {
      const response = await fetch(
        `${API_URL}sponsors/${sponsorId}/certificates`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const data = await response.json()
      setCertificates(data)
    } catch (error) {
      console.log('Error al obtener los certificados:', error)
    }
  }

  useEffect(() => {
    if (!selectedSponsorId) return

    getData(selectedSponsorId)
    getCertificates(selectedSponsorId)
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

  const handlePrevDesc = () =>
    setCurrentDescIndex((prev) => Math.max(prev - 1, 0))
  const handleNextDesc = () =>
    setCurrentDescIndex((prev) => Math.min(prev + 1, 2))

  if (!sponsor) {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <span>Cargando...</span>
      </div>
    )
  }

  const activeOffers = sponsor.offers.filter(
    (offert) => offert.status === 'ACTIVE'
  )
  const totalOffers = activeOffers.length
  const CARDS_TO_SHOW = 3

  const getVisibleOffers = () => {
    if (totalOffers <= CARDS_TO_SHOW) return activeOffers
    if (currentOfferIndex > totalOffers - CARDS_TO_SHOW) {
      return activeOffers.slice(totalOffers - CARDS_TO_SHOW, totalOffers)
    }
    return activeOffers.slice(
      currentOfferIndex,
      currentOfferIndex + CARDS_TO_SHOW
    )
  }

  const canGoPrev = currentOfferIndex > 0
  const canGoNext = currentOfferIndex < totalOffers - CARDS_TO_SHOW

  const handlePrev = () => {
    if (canGoPrev) setCurrentOfferIndex((prev) => prev - 1)
  }

  const handleNext = () => {
    if (canGoNext) setCurrentOfferIndex((prev) => prev + 1)
  }

  return (
    <section
      className={`${darkerGrotesque.variable} ${roboto.variable} ${karla.variable} flex w-full max-w-[1980px] flex-col`}
    >
      <div className='mx-auto flex max-h-[200] max-w-[400px]'>
        <Image
          alt='Offerts'
          className=''
          height={450}
          src={sponsor.logo}
          width={1200}
        />
      </div>
      <div className='flex flex-col items-center md:pr-80'>
        <div className='flex flex-row 2xl:ml-[280px]'>
          <div className='flex w-full flex-col pl-6'>
            <div className='mx-auto flex flex-row items-center'>
              <h1 className='mr-2 font-darker-grotesque text-[32px] font-semibold text-[#082965] md:mr-4 md:text-[60px]'>
                {sponsor.companyName}
              </h1>
              <div className='flex gap-2'>
                {sponsor.user.country.map((country, index) => (
                  <Image
                    key={index}
                    className='mt-2 h-[20px] rounded-md md:mt-3 md:h-[40px] md:w-[60px] md:rounded-lg'
                    src={getCountryFlag(country)}
                    alt={`flag-${country}`}
                    width={30}
                    height={20}
                  />
                ))}
              </div>
            </div>
            <div className='mb-2 mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2'>
              {sponsor.specialization.map((item, idx) => (
                <React.Fragment key={idx}>
                  <span className='text-[14px] font-semibold text-[#082965] md:text-[18px]'>
                    {item}
                  </span>
                  {idx < sponsor.specialization.length - 1 && (
                    <span className='h-5 border-l border-gray-300 md:mx-2' />
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className='mx-auto mb-6 mt-6 flex w-[60%] flex-row items-center justify-evenly gap-2 md:mt-12 md:gap-4'>
              <div
                onClick={() => {
                  navigator.clipboard.writeText(sponsor.user.email)
                  toast.success(
                    `Mail copiado al portapapeles: ${sponsor.user.email}`
                  )
                }}
                className='flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full md:h-[60px] md:w-[60px]'
              >
                <MailIcon className='text-[#FE5833]' height={40} width={40} />
              </div>
              <a
                className='flex h-[30px] w-[30px] items-center justify-center rounded-full md:h-[60px] md:w-[60px]'
                href={
                  sponsor.web.startsWith('http')
                    ? sponsor.web
                    : `https://${sponsor.web}`
                }
                rel='noopener noreferrer'
                target='_blank'
              >
                <GlobeIcon className='text-[#FE5833]' height={40} width={40} />
              </a>
              {sponsor.socials.map((social, index) => {
                const url = social.startsWith('http')
                  ? social
                  : `https://${social}`

                return (
                  <a
                    key={index}
                    className='flex h-[35px] w-[35px] items-center justify-center rounded-full md:h-[60px] md:w-[60px]'
                    href={url}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    {getSocialIcon(social, {
                      className: 'text-[#FE5833]',
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
                className='flex h-[35px] w-[35px] items-center justify-center rounded-full md:h-[60px] md:w-[60px]'
              >
                <WhatsappIcon
                  className='text-[#FE5833]'
                  height={37}
                  width={37}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className='my-8 flex w-full flex-col items-center md:my-20'>
        <h2 className='mb-10 text-center font-darker-grotesque text-[32px] font-bold text-[#FE2E00] md:text-[40px]'>
          Sobre nosotros
        </h2>
        <div className='flex w-full items-center justify-center md:hidden'>
          <button
            onClick={handlePrevDesc}
            disabled={currentDescIndex === 0}
            className='p-2'
          >
            <ChevronLeftIcon
              width={28}
              height={28}
              className={currentDescIndex === 0 ? 'opacity-30' : ''}
            />
          </button>
          <div className='flex min-w-[150px] max-w-[85%] flex-1 flex-col items-center justify-center rounded-xl border border-[#D6E0F0] bg-white p-6 shadow-md'>
            <h3 className='mb-4 text-center text-[18px] font-bold text-[#082965] md:py-6 md:text-2xl'>
              {sponsor.descriptions?.[currentDescIndex]?.title || ''}
            </h3>
            <p className='px-4 text-center text-[16px] text-[#082965] md:pb-6 md:text-lg'>
              {sponsor.descriptions?.[currentDescIndex]?.description || ''}
            </p>
          </div>
          <button
            onClick={handleNextDesc}
            disabled={currentDescIndex === 2}
            className='p-2'
          >
            <ChevronRightIcon
              width={28}
              height={28}
              className={currentDescIndex === 2 ? 'opacity-30' : ''}
            />
          </button>
        </div>
        <div className='hidden w-full flex-col justify-center gap-2 px-1 md:flex md:flex-row md:gap-x-10 md:px-0'>
          {[0, 1, 2].map((idx) => {
            const desc = sponsor.descriptions && sponsor.descriptions[idx]
            return (
              <div
                key={idx}
                className='flex min-w-[150px] max-w-[85%] flex-1 flex-col items-center justify-center rounded-xl border border-[#D6E0F0] bg-white p-6 shadow-md md:min-w-[300px] md:max-w-[400px]'
              >
                <h3 className='mb-4 text-center text-lg font-bold text-[#082965] md:py-6 md:text-2xl'>
                  {desc ? desc.title : ''}
                </h3>
                <p className='px-4 text-center text-lg text-[#082965] md:pb-6'>
                  {desc ? desc.description : ''}
                </p>
              </div>
            )
          })}
        </div>
      </section>
      {activeOffers.length > 0 && (
        <section>
          <div className='mt-6 flex flex-col items-center md:mt-10'>
            <h1 className='font-darker-grotesque text-[30px] font-bold text-[#FE2E00] md:text-[44px]'>
              Cursos que ofrecemos
            </h1>
            <h2 className='px-10 text-center font-darker-grotesque text-[18px] font-semibold text-[#072356] md:text-[28px]'>
              Ofrecemos cursos diseñados para potenciar tus habilidades y
              conocimientos.
            </h2>
          </div>
          <div className='animate-fadeIn flex w-full flex-col items-center transition-opacity duration-500 ease-in-out'>
            <div className='relative flex w-full items-center justify-center py-8'>
              <button
                onClick={handlePrev}
                className='absolute left-0 z-10 text-3xl text-[#082965] transition-colors hover:text-[#FE2E00] md:left-5 md:p-2'
                aria-label='Anterior'
                disabled={!canGoPrev}
                style={{
                  opacity: canGoPrev ? 1 : 0.3,
                  cursor: canGoPrev ? 'pointer' : 'not-allowed'
                }}
              >
                <ChevronLeftIcon width={32} height={32} />
              </button>
              <div className='grid w-[85%] grid-cols-1 justify-items-center md:grid-cols-3 md:gap-8 md:px-[10%]'>
                {getVisibleOffers().map((offert, idx) => (
                  <OffertCard key={idx} {...offert} />
                ))}
              </div>
              <button
                onClick={handleNext}
                className='absolute right-2 z-10 text-3xl text-[#082965] transition-colors hover:text-[#FE2E00] md:right-5 md:p-2'
                aria-label='Siguiente'
                disabled={!canGoNext}
                style={{
                  opacity: canGoNext ? 1 : 0.3,
                  cursor: canGoNext ? 'pointer' : 'not-allowed'
                }}
              >
                <ChevronRightIcon width={32} height={32} />
              </button>
            </div>
          </div>
        </section>
      )}
      {certificates.length > 0 && (
        <section className='flex w-full flex-col items-center bg-white md:mt-14'>
          <h2 className='font-darker-grotesque text-[30px] font-bold text-[#FE2E00] md:text-[44px]'>
            Nuestras Certificaciones
          </h2>
          <p className='mb-6 px-4 text-center font-darker-grotesque text-[18px] font-semibold text-[#082965] md:mb-16 md:px-0 md:text-2xl'>
            Emitimos certificaciones que avalan tus conocimientos y habilidades
            adquiridas.
          </p>
          <div className='mb-16 flex w-full flex-col items-center justify-center gap-8 md:mb-32 md:flex-row md:gap-48'>
            {certificates.map((cert, idx) => (
              <a
                key={idx}
                href={cert.title}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src={cert.url}
                  alt={cert.title}
                  width={200}
                  height={200}
                  className='aspect-square rounded-lg object-cover'
                />
              </a>
            ))}
          </div>
        </section>
      )}
    </section>
  )
}
