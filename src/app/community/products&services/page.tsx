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
  const { token } = useAuth()

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
  }

  useEffect(() => {
    fetchSponsorData()
  }, [token])

  const [query, setQuery] = useState<string>('')

  // Función para mezclar aleatoriamente un array
  const shuffleArray = (array: SponsorData[]) => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  // Filtrar servicios según la búsqueda y mezclar aleatoriamente
  const filteredServices = sponsorData
    ? shuffleArray(
        sponsorData.filter((service) =>
          service.companyName.toLowerCase().includes(query.toLowerCase())
        )
      )
    : []

  return (
    <>
      <HeroSection
        image={
          <Image
            alt=''
            src={Banner}
            className='h-[200px] w-[300px] md:h-[455px] md:w-[620px]'
          />
        }
        title='Productos y servicios de nuestros Sponsor'
      >
        Descubre productos, servicios y ofertas de cursos exclusivos para la
        comunidad de Scrum <span style={{ color: '#FE2E00' }}>Latam</span>.
      </HeroSection>
      {/* Search Bar */}
      <section className='mb-4 mt-0 flex w-full justify-center px-10 md:mb-6'>
        <div className='w-full max-w-[600px]'>
          <SearchBar
            data={filteredServices}
            placeholder='Busca servicio o producto'
            setQuery={setQuery}
          />
        </div>
      </section>
      {/* Renderizar dinámicamente los servicios desde JSON con separación */}
      <section className='mb-10 mt-6 grid w-full grid-cols-1 items-center justify-items-center gap-2 px-36 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {filteredServices.length > 0 ? (
          filteredServices.map((servicesData) => (
            <div key={servicesData.id} className='flex w-full justify-center'>
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
            No se encontraron resultados.
          </p>
        )}
      </section>
      <NewsBlogsUpdates />
    </>
  )
}
