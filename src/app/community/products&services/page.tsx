'use client'

import { useState } from 'react'
import HeroSection from '@/app/community/components/heroSection'
import SquadsImage from '@/assets/squadsImg'
import Breadcrumbs from '@/app/community/components/breadcrumbs'
import { NewsBlogsUpdates } from './components/NewsBlogsUpdates'
import SearchBar from '@/app/documentation/components/search-bar'
import ProductServiceFeature from '@/app/community/products&services/components/productServiceFeature'
import PhoneImg from '@/assets/phoneImg'

interface DataItem {
  id: number
  title: string // ✅ Matches SearchBarProps
}

// Simulated Data (Replace with real API data)
const squadsData: DataItem[] = [
  { id: 1, title: 'Curso de Scrum' },
  { id: 2, title: 'Consultoría Agile' },
  { id: 3, title: 'Certificación Oficial' }
]

export default function Squads() {
  const [query, setQuery] = useState<string>('')

  // Function to filter data based on query
  const getFilteredData = () => {
    return squadsData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    )
  }

  const filteredData = getFilteredData()

  return (
    <>
      <Breadcrumbs rootName='Comunidad' />
      <HeroSection
        description='Descubre productos, servicios y ofertas de cursos exclusivos para la comunidad de Scrum LATAM.'
        image={
          <SquadsImage className='h-[268px] w-[393px] md:h-[456px] md:w-[580px]' />
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
            data={filteredData}
            placeholder='Busca servicio o producto'
          />
        </div>
      </section>

      <ProductServiceFeature
        title='Agile Talent Club'
        flag='https://flagcdn.com/co.svg'
        description='Brindamos un asesoramiento integral en prácticas Ágiles y estrategias para Transformación Digital-Organizacional-Ágil. Facilitación y Capacitación en temas generales sobre Agilidad y Liderazgo.'
        highlights={['Metodologías Ágiles', 'Agilidad y Liderazgo']}
        image={<PhoneImg className='h-[268px] w-[393px]' />}
        linkTitle='Conocer Ofertas'
        socialUrls={{
          email: 'contacto@agiletalentclub.com',
          website: 'https://agiletalentclub.com',
          facebook: 'https://facebook.com/agiletalentclub',
          instagram: 'https://instagram.com/agiletalentclub',
          linkedin: 'https://linkedin.com/company/agiletalentclub',
          phone: '+123456789'
        }}
      />

      {/* Display Search Results */}
      <section className='mt-4'>
        {filteredData.length > 0 ? (
          <ul className='space-y-2'>
            {filteredData.map((item) => (
              <li key={item.id} className='text-lg text-gray-800'>
                {item.title}
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-center text-gray-500'>
            No se encontraron resultados.
          </p>
        )}
      </section>
    </>
  )
}
