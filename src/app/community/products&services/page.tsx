'use client'

import { useEffect, useState } from 'react'
import HeroSection from './components/heroSection'
import ProductImg from '@/assets/productImg'
import Breadcrumbs from './components/breadcrumbs'
import NewsBlogsUpdates from './components/NewsBlogsUpdates'
import SearchBar from './components/search-bar'
import ProductServiceFeature from './components/productServiceFeature'
import { useAuth } from '@/app/context/AuthContext'
import { SponsorData } from '@/interfaces'

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

  // Filtrar servicios según la búsqueda
  const filteredServices = sponsorData
    ? sponsorData.filter((service) =>
        service.companyName.toLowerCase().includes(query.toLowerCase())
      )
    : []

  return (
    <>
      <Breadcrumbs rootName='Comunidad' />
      <HeroSection
        description='Descubre productos, servicios y ofertas de cursos exclusivos para la comunidad de Scrum LATAM.'
        image={
          <ProductImg className='h-[200px] w-[300px] md:h-[455px] md:w-[455px]' />
        }
        linkTitle='Noticias, Blogs y Actualizaciones'
        title='Productos y servicios de nuestros Sponsor'
      />
      <NewsBlogsUpdates />

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
      <section className='mt-6 flex flex-col gap-8'>
        {filteredServices.length > 0 ? (
          filteredServices.map(
            (servicesData) => (
              console.log(servicesData),
              (
                <ProductServiceFeature
                  key={servicesData.id}
                  sponsorId={servicesData.id}
                  title={servicesData.companyName}
                  flag={servicesData.user.country}
                  description={servicesData.description}
                  highlights={servicesData.specialization}
                  image={servicesData.bannerWeb}
                  linkTitle={servicesData.web}
                  socialUrls={{
                    linkedin:
                      servicesData.socials.find((url) =>
                        url.includes('linkedin')
                      ) || undefined,
                    facebook:
                      servicesData.socials.find((url) =>
                        url.includes('facebook')
                      ) || undefined,
                    instagram:
                      servicesData.socials.find((url) =>
                        url.includes('instagram')
                      ) || undefined
                  }}
                />
              )
            )
          )
        ) : (
          <p className='text-center text-xl text-gray-500'>
            No se encontraron resultados.
          </p>
        )}
      </section>
    </>
  )
}
