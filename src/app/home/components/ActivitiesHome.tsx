import React from 'react'
import MainActivity from './MainActivity'
import ActivitiesSlider from './ActivitiesSlider'
import sliderActivity from '../homeAssets/mainActivity.jpg'

const activities = [
  {
    id: 1,
    image: sliderActivity,
    title: 'Nueva Actividad',
    subtitle: 'Optimización de Sprints'
  },
  {
    id: 2,
    image: sliderActivity,
    title: 'Taller Práctico',
    subtitle: 'Scrum para Equipos Remotos'
  },
  {
    id: 3,
    image: sliderActivity,
    title: 'Webinar',
    subtitle: 'Historias de Usuario Efectivas'
  },
  {
    id: 4,
    image: sliderActivity,
    title: 'Panel de Expertos',
    subtitle: 'Escalando Scrum en Grandes Empresas'
  },
  {
    id: 5,
    image: sliderActivity,
    title: 'Meetup',
    subtitle: 'Retrospectivas Dinámicas'
  },
  {
    id: 6,
    image: sliderActivity,
    title: 'Workshop',
    subtitle: 'Kanban y Scrum: ¿Cuándo usar cada uno?'
  },
  {
    id: 7,
    image: sliderActivity,
    title: 'Charla Abierta',
    subtitle: 'Errores comunes en la Daily'
  },
  {
    id: 8,
    image: sliderActivity,
    title: 'Sesión de Preguntas',
    subtitle: 'Product Owner vs Scrum Master'
  }
]

export default function ActivitiesHome() {
  return (
    <div className='flex flex-col md:pb-20 2xl:mb-24'>
      <h1 className='mt-10 pl-36 font-darker-grotesque text-[22px] font-bold leading-1 text-[#082965] md:p-16 md:pb-2 md:pt-8 md:text-[55px] 2xl:p-16 2xl:pb-2 2xl:pt-12 2xl:text-[65px]'>
        Únete a nuestras actividades
      </h1>
      <div className='mx-auto flex flex-row items-center justify-center md:w-[75%] md:pt-10 2xl:w-[70%] 2xl:pt-16'>
        <div className='w-[40%]'>
          <MainActivity />
        </div>
        <div className='w-[50%] pr-20'>
          <ActivitiesSlider activities={activities} />
        </div>
      </div>
    </div>
  )
}
