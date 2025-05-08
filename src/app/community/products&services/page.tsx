'use client'

import { useEffect, useState } from 'react'
import HeroSection from './components/heroSection'
import NewsBlogsUpdates from './components/NewsBlogsUpdates'
import SearchBar from './components/search-bar'
import { useAuth } from '@/app/context/AuthContext'
import { SponsorData } from '@/interfaces'
import SponsorCard from './components/sponsorCard'
import Banner from '@/assets/SponsorBannerImage.png'
import Image from 'next/image'

export default function Squads() {
  const [sponsorData, setSponsorData] = useState<SponsorData[] | null>(null)
  const [shuffledSponsors, setShuffledSponsors] = useState<
    SponsorData[] | null
  >(null)
  const { token } = useAuth()
  const [query, setQuery] = useState<string>('')

  const shuffleArray = (array: SponsorData[]) => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  const fetchSponsorData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}sponsors`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }

    const data = await response.json()
    setSponsorData(data)

    const now = new Date().getTime()
    const lastShuffleTime = localStorage.getItem('lastShuffleTime')
    const shuffledData = localStorage.getItem('shuffledData')
    const oneHour = 60 * 60 * 1000

    if (
      lastShuffleTime &&
      shuffledData &&
      now - parseInt(lastShuffleTime) < oneHour
    ) {
      setShuffledSponsors(JSON.parse(shuffledData))
    } else {
      const shuffled = shuffleArray(data)
      localStorage.setItem('lastShuffleTime', now.toString())
      localStorage.setItem('shuffledData', JSON.stringify(shuffled))
      setShuffledSponsors(shuffled)
    }
  }

  useEffect(() => {
    fetchSponsorData()
  }, [token])

  const filteredServices = shuffledSponsors
    ? query
      ? shuffledSponsors.filter((service) =>
          service.companyName.toLowerCase().includes(query.toLowerCase())
        )
      : shuffledSponsors
    : []

  return (
    <>
      <HeroSection
        image={
          <Image
            alt=''
            src={Banner}
            className='mt-12 h-[200px] w-[300px] md:h-[455px] md:w-[620px]'
          />
        }
        title='Productos y servicios de nuestros Sponsor'
      >
        Descubre productos, servicios y ofertas de cursos exclusivos para la
        comunidad de Scrum <span style={{ color: '#FE2E00' }}>Latam</span>.
      </HeroSection>
      {/* Search Bar */}
      <section className='mb-4 flex w-full justify-center px-10 md:mb-12 md:mt-12'>
        <div className='w-full max-w-[600px]'>
          <SearchBar
            data={sponsorData || []}
            placeholder='Busca servicio o producto'
            setQuery={setQuery}
          />
        </div>
      </section>
      <section className='mb-10 mt-6 flex w-full flex-wrap items-center justify-center gap-1 xl:px-36'>
        {filteredServices.length > 0 ? (
          filteredServices.map((servicesData: SponsorData) => (
            <div
              key={servicesData.id}
              className='flex w-[350px] justify-center'
            >
              <SponsorCard
                sponsorId={servicesData.id}
                companyName={servicesData.companyName}
                specialization={servicesData.specialization}
                logo={servicesData.logo}
              />
            </div>
          ))
        ) : (
          <p className='col-span-full text-center text-xl text-gray-500'>
            {query ? 'No se encontraron resultados.' : 'Cargando los sponsors.'}
          </p>
        )}
      </section>
      <NewsBlogsUpdates />
    </>
  )
}
