'use client'

import React, { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import TutorialFeature from './components/tutorialFeature'
import ManualFeature from './components/manualFeature'
import DatabaseFeature from './components/databaseFeature'
import { tutorialsData } from '@/utils/tutorialsData'
import { manualsData } from '@/utils/manualsData'
import { databaseData } from '@/utils/databaseData'
import { Tutorial } from './interfaces/tutorialInterface'
import { Manual } from './interfaces/manualInterface'
import { Database } from './interfaces/databaseInterface'
import SearchBar from './components/search-bar'
import DottedOrange from '@/assets/dottedOrange'
import DottedBlue from '@/assets/dottedBlue'
import Benefits from './components/benefits'

function DocumentationsContent() {
  const searchParams = useSearchParams()
  const section = searchParams.get('section')

  const [query, setQuery] = useState<string>('')
  const [placeholder, setPlaceholder] = useState<string>('Busca un artículo')

  useEffect(() => {
    // Actualiza el placeholder según la sección
    if (section === 'tutorials') {
      setPlaceholder('Busca un tutorial')
    } else if (section === 'manuals') {
      setPlaceholder('Busca un manual')
    } else if (section === 'database') {
      setPlaceholder('Busca un artículo')
    } else {
      setPlaceholder('Sección no encontrada')
    }
  }, [section]) // Ejecuta el efecto cuando cambia la sección

  const getFilteredData = () => {
    if (section === 'tutorials') {
      return tutorialsData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()),
      )
    } else if (section === 'manuals') {
      return manualsData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()),
      )
    } else if (section === 'database') {
      return databaseData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()),
      )
    }
    return []
  }

  const renderFeatureComponent = () => {
    if (section === 'tutorials') {
      return <TutorialFeature tutorials={getFilteredData() as Tutorial[]} />
    } else if (section === 'manuals') {
      return <ManualFeature manuals={getFilteredData() as Manual[]} />
    } else if (section === 'database') {
      return <DatabaseFeature databases={getFilteredData() as Database[]} />
    } else {
      return <p className='text-center text-gray-500'>Sección no encontrada.</p>
    }
  }

  const filteredData = getFilteredData()

  return (
    <div>
      <section className='mb-4 mt-10 flex w-full px-10 md:mb-0'>
        <div className='mx-auto w-full md:mx-0 md:w-1/2 md:max-w-screen-xl md:justify-start'>
          <SearchBar
            setQuery={setQuery}
            data={filteredData}
            placeholder={placeholder}
          />
        </div>
      </section>
      <section className='relative'>
        <DottedBlue className='absolute left-0 top-1/2 h-[600px] w-[400px] -translate-y-1/2 transform md:h-[400px] md:w-[333px]' />
        <DottedOrange className='absolute right-0 top-1/2 h-[500px] w-[400px] -translate-y-1/2 transform md:right-[-5rem] md:h-[500px] md:w-[700px]' />
        <div id='content' className='scroll-mt-20'>
          {filteredData.length > 0 ? (
            renderFeatureComponent()
          ) : (
            <p className='text-center text-gray-500'>
              No se encontraron resultados.
            </p>
          )}
        </div>
      </section>
      <section className='mt-10'>
        <Benefits
          buttonText='Beneficios'
          description='Descubre los beneficios de ser parte de nuestra comunidad y acceder a nuevos programas de entrenamiento'
          title='¿Deseas ver el contenido completo?'
        />
      </section>
    </div>
  )
}

export default function Documentations() {
  return (
    <Suspense fallback={<div className='text-center'>Cargando...</div>}>
      <DocumentationsContent />
    </Suspense>
  )
}
