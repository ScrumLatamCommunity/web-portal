'use client'

import { useState, useEffect } from 'react'
import HeroSection from './components/heroSection'
import ProductImg from '@/assets/productImg'
import Breadcrumbs from './components/breadcrumbs'
import { NewsBlogsUpdates } from './components/NewsBlogsUpdates'
import SearchBar from './components/search-bar'
import ProductServiceFeature from '@/app/community/products&services/components/productServiceFeature'
import { getAllSponsors } from '@/services/sponsorApi'
import { useAuth } from '@/app/context/AuthContext'

export default function Squads() {
  const { user, token } = useAuth()
  const [query, setQuery] = useState<string>('')
  const [sponsors, setSponsors] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        setIsLoading(true)
        const data = await getAllSponsors()

        if (!Array.isArray(data)) {
          console.error('❌ Error: Response is not an array', data)
          setSponsors([])
          return
        }

        console.log('✅ Sponsors fetched:', data)
        setSponsors(data)
      } catch (err) {
        console.error('❌ Error fetching sponsors:', err)
        setError(
          err instanceof Error ? err.message : 'Error al obtener sponsors'
        )
      } finally {
        setIsLoading(false)
      }
    }

    fetchSponsors()
  }, [])

  const countryFlags: Record<string, string> = {
    argentina: 'https://flagcdn.com/ar.svg',
    colombia: 'https://flagcdn.com/co.svg',
    peru: 'https://flagcdn.com/pe.svg',
    mexico: 'https://flagcdn.com/mx.svg',
    chile: 'https://flagcdn.com/cl.svg'
  }

  const sponsorsWithFlags = sponsors
    .filter((sponsor) => sponsor?.companyName && sponsor?.status === 'ACTIVE')
    .map((sponsor) => ({
      ...sponsor,
      flag: countryFlags[sponsor?.user?.country?.toLowerCase() || ''] || ''
    }))

  const filteredSponsors = sponsorsWithFlags.filter((sponsor) =>
    (sponsor.companyName || '').toLowerCase().includes(query.toLowerCase())
  )

  console.log('🔍 Query:', query)
  console.log('🔎 Filtered Sponsors:', filteredSponsors)

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

      <section className='mb-4 mt-0 flex w-full justify-center px-10 md:mb-6'>
        <div className='w-full max-w-[600px]'>
          <SearchBar
            setQuery={setQuery}
            data={filteredSponsors}
            placeholder='Busca servicio o producto'
          />
        </div>
      </section>

      <section className='mt-6 flex flex-col gap-8'>
        {filteredSponsors.length > 0 ? (
          filteredSponsors.map((sponsor) => (
            <ProductServiceFeature
              key={sponsor.id}
              title={sponsor.companyName}
              flag={sponsor.flag}
              description={sponsor.description || 'Sin descripción'}
              highlights={[sponsor.specialization || '']}
              image={sponsor.logo || ''}
              linkTitle='Conocer Ofertas'
              socialUrls={{
                website: sponsor.web || '',
                phone: sponsor.phone || ''
              }}
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
