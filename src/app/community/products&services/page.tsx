'use client'

import { useState } from 'react'
import HeroSection from './components/heroSection'
import ProductImg from '@/assets/productImg'
import Breadcrumbs from './components/breadcrumbs'
import { NewsBlogsUpdates } from './components/NewsBlogsUpdates'
import SearchBar from '@/app/documentation/components/search-bar'
import ProductServiceFeature from '@/app/community/products&services/components/productServiceFeature'
import AgileTalentClubImg from '@/assets/agileTalentClubImg'
import AgileMindsImg from '@/assets/agileMindsImg'
import { servicesData } from '@/utils/productsServicesData'

// Función para mapear identificadores de imágenes a componentes
const imageMap: Record<string, JSX.Element> = {
  agileTalentClub: <AgileTalentClubImg className='h-[200px] w-[300px] pt-8' />,
  agileMinds: <AgileMindsImg className='h-[200px] w-[300px] pt-8' />
}

export default function Squads() {
  const [query, setQuery] = useState<string>('')

  // Filtrar servicios según la búsqueda
  const filteredServices = servicesData.filter((service) =>
    service.title.toLowerCase().includes(query.toLowerCase())
  )

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
