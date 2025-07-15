import { darkerGrotesque } from '@/fonts'
import React, { useState } from 'react'

const cards = [
  {
    title: 'Impulsando el Liderazgo Ágil',
    description:
      'Gracias al apoyo estratégico, Scrum Latam impulsa líderes ágiles, creando aprendizaje y conexiones para difundir buenas prácticas Scrum en la región.'
  },
  {
    title: 'Comunidad y Crecimiento',
    description:
      'En Scrum Latam, el liderazgo nace del aprendizaje continuo y la comunidad, el cual nos permite conectar a quienes transforman equipos con metodologías ágiles. ¡Sé parte del cambio!'
  },
  {
    title: 'El Futuro Ágil de Latam',
    description:
      'Gracias al apoyo, Scrum Latam impulsa el agilismo en la región: inspirando líderes, creando contenido y reforzando el compromiso.'
  }
]

const ChevronLeft = () => (
  <svg
    width='28'
    height='28'
    fill='none'
    viewBox='0 0 24 24'
    stroke='#082965'
    strokeWidth='2'
  >
    <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
  </svg>
)
const ChevronRight = () => (
  <svg
    width='28'
    height='28'
    fill='none'
    viewBox='0 0 24 24'
    stroke='#082965'
    strokeWidth='2'
  >
    <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
  </svg>
)

const SponsorServicesInfo = () => {
  const [current, setCurrent] = useState(0)

  const handlePrev = () =>
    setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1))
  const handleNext = () =>
    setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1))

  return (
    <section
      className={`${darkerGrotesque.variable} my-12 flex w-full flex-col items-center`}
    >
      <h2 className='mb-10 text-center font-darker-grotesque text-[42px] font-bold text-[#FE2E00]'>
        Lo que ofrecen nuestros Sponsors
      </h2>
      <div className='relative flex w-full flex-col items-center md:hidden'>
        <div className='flex w-full items-center justify-center'>
          <button
            aria-label='Anterior'
            onClick={handlePrev}
            className='absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 transition hover:bg-gray-100'
          >
            <ChevronLeft />
          </button>
          <div className='w-full max-w-sm rounded-xl border border-gray-200 bg-white p-8 text-center shadow-md 2xl:max-w-md'>
            <h3 className='mb-10 mt-8 font-darker-grotesque text-xl font-bold text-[#082965] md:text-[28px]'>
              {cards[current].title}
            </h3>
            <p className='px-3 font-darker-grotesque text-[22px] text-[#082965]'>
              {cards[current].description}
            </p>
          </div>
          <button
            aria-label='Siguiente'
            onClick={handleNext}
            className='absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 transition hover:bg-gray-100'
          >
            <ChevronRight />
          </button>
        </div>
        <div className='mt-4 flex justify-center gap-2'>
          {cards.map((_, idx) => (
            <span
              key={idx}
              className={`h-3 w-3 rounded-full ${idx === current ? 'bg-[#082965]' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
      <div className='hidden w-full flex-col justify-center gap-8 md:flex md:flex-row md:gap-16'>
        {cards.map((card, idx) => (
          <div
            key={card.title}
            className='w-full max-w-sm rounded-xl border border-gray-200 bg-white p-8 text-center shadow-md 2xl:max-w-md'
          >
            <h3 className='mb-10 mt-8 font-darker-grotesque text-xl font-bold text-[#082965] md:text-[28px]'>
              {card.title}
            </h3>
            <p className='px-3 font-darker-grotesque text-[22px] text-[#082965]'>
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SponsorServicesInfo
