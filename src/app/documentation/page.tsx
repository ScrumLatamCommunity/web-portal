'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import TutorialFeature from './components/tutorialFeature'
import ManualFeature from './components/manualFeature'
import { tutorialsData } from '@/utils/tutorialsData'
import { manualsData } from '@/utils/manualsData'
import SearchBar from './components/search-bar'

// Define los tipos de datos
type Tutorial = (typeof tutorialsData)[number]
type Manual = (typeof manualsData)[number]

export default function Documentations() {
  const searchParams = useSearchParams()
  const section = searchParams.get('section')

  const [query, setQuery] = React.useState<string>('')

  // Determina los datos y el componente según la sección
  let data: Tutorial[] | Manual[] = []
  let FeatureComponent: React.FC<{ data: Tutorial[] | Manual[] }> | null = null

  const TutorialComponent = ({ data }: { data: Tutorial[] }) => (
    <TutorialFeature tutorials={data} />
  )
  TutorialComponent.displayName = 'TutorialComponent'

  const ManualComponent = ({ data }: { data: Manual[] }) => (
    <ManualFeature manuals={data} />
  )
  ManualComponent.displayName = 'ManualComponent'

  if (section === 'tutorials') {
    data = tutorialsData
    FeatureComponent = TutorialComponent
  } else if (section === 'manuals') {
    data = manualsData
    FeatureComponent = ManualComponent
  } else {
    return <p className='text-center text-gray-500'>Sección no encontrada.</p>
  }

  const filteredData = query
    ? data.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()),
      )
    : data

  return (
    <>
      <section className='my-4 flex w-full justify-center px-3 md:mb-12'>
        <div className='w-full max-w-screen-xl'>
          <SearchBar setQuery={setQuery} data={data} />
        </div>
      </section>
      <div id='content' className='scroll-mt-20'>
        {filteredData.length > 0 && FeatureComponent ? (
          <FeatureComponent data={filteredData} />
        ) : (
          <p className='text-center text-gray-500'>
            No se encontraron resultados.
          </p>
        )}
      </div>
    </>
  )
}
