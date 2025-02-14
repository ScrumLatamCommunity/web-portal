'use client'

import { useState, useEffect } from 'react'
import HeroSection from './components/heroSection'
import ProductImg from '@/assets/productImg'
import Breadcrumbs from './components/breadcrumbs'
import { NewsBlogsUpdates } from './components/NewsBlogsUpdates'
import SearchBar from './components/search-bar'
import ProductServiceFeature from '@/app/community/products&services/components/productServiceFeature'
import AgileTalentClubImg from '@/assets/agileTalentClubImg'
import AgileMindsImg from '@/assets/agileMindsImg'
import { servicesData } from '@/utils/productsServicesData'
import { getAllSponsors } from '@/services/sponsorApi'
import { useAuth } from '@/app/context/AuthContext'

const imageMap: Record<string, JSX.Element> = {
  agileTalentClub: <AgileTalentClubImg className='h-[200px] w-[300px] pt-8' />,
  agileMinds: <AgileMindsImg className='h-[200px] w-[300px] pt-8' />
}

export default function Squads() {
  const { user, token } = useAuth()
  const [query, setQuery] = useState<string>('')
  const [sponsors, setSponsors] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Filtrar servicios según la búsqueda
  const filteredServices = servicesData.filter((service) =>
    service.title.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        setIsLoading(true)
        const data = await getAllSponsors()
        console.log('Sponsors fetched:', data)
        setSponsors(data)
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Error al obtener sponsors'
        )
      } finally {
        setIsLoading(false)
      }
    }

    fetchSponsors()
  }, [])

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
            setQuery={setQuery}
            data={filteredServices}
            placeholder='Busca servicio o producto'
          />
        </div>
      </section>

      {/* Renderizar dinámicamente los servicios desde JSON con separación */}
      <section className='mt-6 flex flex-col gap-8'>
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <ProductServiceFeature
              key={service.id}
              title={service.title}
              flag={service.flag}
              description={service.description}
              highlights={service.highlights}
              image={imageMap[service.imageId]}
              linkTitle={service.linkTitle}
              socialUrls={service.socialUrls}
            />
          ))
        ) : (
          <p className='text-center text-xl text-gray-500'>
            No se encontraron resultados.
          </p>
        )}
      </section>
    </>
  )
}
