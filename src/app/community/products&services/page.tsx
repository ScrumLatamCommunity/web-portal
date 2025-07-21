'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/app/context/AuthContext'
import { SponsorData } from '@/interfaces'
import SponsorCard from './components/sponsorCard'
import SearchBar from './components/search-bar'

export default function Squads() {
  const [sponsorData, setSponsorData] = useState<SponsorData[] | null>(null)
  const [query, setQuery] = useState<string>('')
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

  const filteredServices = sponsorData
    ? query
      ? sponsorData.filter((service) =>
          service.companyName.toLowerCase().includes(query.toLowerCase())
        )
      : sponsorData
    : []

  return (
    <>
      <div className='relative z-10 mb-4 flex w-full max-w-[700px] flex-col items-center pt-10 md:pt-10 2xl:pt-24'>
        <h1 className='mb-4 px-12 text-center font-darker-grotesque text-[1.2rem] font-bold leading-tight text-[#082965] md:mb-6 md:px-0 md:text-[1.6rem] 2xl:text-[2rem]'>
          Descubre servicios y ofertas de cursos exclusivos para la comunidad
          <span className='text-[#FE2E00]'> Scrum Latam</span>
        </h1>
      </div>
      <section className='mb-4 flex w-full justify-center px-10 md:mb-12 md:mt-6'>
        <div className='w-full max-w-[600px]'>
          <SearchBar
            data={sponsorData || []}
            placeholder='Ingresa el producto o servicio aquí...'
            setQuery={setQuery}
          />
        </div>
      </section>
      <section className='mb-20 mt-6 flex w-full max-w-[1920px] flex-wrap items-center justify-center gap-1 xl:px-36'>
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
    </>
  )
}
