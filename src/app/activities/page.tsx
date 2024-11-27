'use client'

import HeroSection from '@/app/activities/components/heroSection'
import WorkshopFeature from '@/app/activities/components/workshopFeature'
import { workshopsData } from '@/utils/workshopsData'
import { eventsData } from '@/utils/eventsData'
import ActivitiesImage from '@/assets/activitiesImg'
import EventFeature from './components/eventFeature'

export default function Activities() {
  return (
    <div className='flex flex-col items-center justify-center px-8 md:px-20 lg:px-32'>
      {/* Hero Section */}
      <HeroSection
        description='En nuestra comunidad, los talleres son el corazón de la colaboración y el aprendizaje. Aquí, te sumergirás en experiencias prácticas que te prepararán para los desafíos reales del mundo ágil. Desde simulacros de entrevistas hasta grupos de estudio, cada taller está diseñado para fortalecer tus habilidades y conocimientos en metodologías ágiles.'
        image={
          <ActivitiesImage className='h-[268px] w-[393px] md:h-[456px] md:w-[580px]' />
        }
        title='Formación de la Comunidad'
        linkTitle='Talleres'
      />

      {/* Workshops Section */}
      <div id='talleres' className='scroll-mt-20'>
        <WorkshopFeature workshops={workshopsData} />
      </div>

      {/* Próximos Eventos Section */}
      <div id='eventos' className='scroll-mt-20'>
        <h1 className='text-center text-4xl font-semibold text-[#082965] md:m-12'>
          Próximos eventos
        </h1>
        <EventFeature events={eventsData} />
      </div>

      {/* Espaciado antes del footer */}
      <div className='mt-20'></div>
    </div>
  )
}
