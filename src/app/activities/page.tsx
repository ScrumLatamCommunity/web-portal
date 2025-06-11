'use client'

import HeroSection from '@/app/activities/components/heroSection'
import WorkshopFeature from '@/app/activities/components/workshopFeature'
import JoinCommunity from '@/app/community/components/joinSection'
import { workshopsData } from '@/utils/workshopsData'
import { eventsData } from '@/utils/eventsData'
import ActivitiesImage from '@/assets/activitiesImg'
import EventFeature from './components/eventFeature'

export default function Activities() {
  return (
    <div className='mx-auto flex w-full max-w-[1920px] flex-col'>
      {/* Hero Section */}
      <HeroSection
        description='En nuestra comunidad, los talleres son el corazón de la colaboración y el aprendizaje. Aquí, te sumergirás en experiencias prácticas que te prepararán para los desafíos reales del mundo ágil. Desde simulacros de entrevistas hasta grupos de estudio, cada taller está diseñado para fortalecer tus habilidades y conocimientos en metodologías ágiles.'
        image={
          <ActivitiesImage className='h-auto w-full md:h-[456px] md:max-w-[580px]' />
        }
        linkTitle='Talleres'
        title='Formación de la Comunidad'
      />

      {/* Workshops Section */}
      <div id='talleres' className='scroll-mt-20'>
        <WorkshopFeature workshops={workshopsData} />
      </div>

      {/* Próximos Eventos Section */}
      <div id='eventos' className='scroll-mt-20'>
        <h3 className='mt-4 pb-4 text-center font-darker-grotesque text-lg font-bold text-[#082965] md:mb-0 md:mt-12 md:text-4xl md:font-semibold'>
          Próximos eventos
        </h3>

        <EventFeature events={eventsData} />
      </div>

      {/* Espaciado antes del footer */}
      <div className='mt-20'></div>

      <JoinCommunity
        buttonText='Regístrate Ahora'
        callToAction='¡Regístrate hoy y sé parte de nuestra transformación ágil!'
        description='Conéctate con profesionales ágiles de toda Latinoamérica, accede a recursos exclusivos, y participa en eventos y webinars que impulsarán tu crecimiento.'
        title='¡Únete a Nuestra Comunidad!'
      />
    </div>
  )
}
