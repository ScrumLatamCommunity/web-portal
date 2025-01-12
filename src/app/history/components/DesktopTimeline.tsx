'use client'

import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'
export const DesktopTimeline = () => {
  const timelineRef = useRef<HTMLDivElement | null>(null)

  const scrollTimeline = (direction: 'left' | 'right'): void => {
    if (timelineRef.current) {
      const scrollAmount = 400
      const currentScroll = timelineRef.current.scrollLeft
      const maxScroll =
        timelineRef.current.scrollWidth - timelineRef.current.clientWidth

      if (direction === 'left' && currentScroll > 0) {
        timelineRef.current.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth',
        })
      } else if (direction === 'right' && currentScroll < maxScroll) {
        timelineRef.current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        })
      }
    }
  }

  return (
    <div className='mx-auto flex h-[770px] w-full items-center justify-start overflow-hidden bg-[#F0F0F0]'>
      <div className='relative z-10 flex w-[3%] items-center justify-center'>
        <button
          onClick={() => scrollTimeline('left')}
          className='transition-opacity hover:opacity-70 focus:outline-none'
        >
          <ChevronLeft className='cursor-pointer' />
        </button>
      </div>
      <div className='relative flex flex-1 flex-col overflow-hidden bg-[#F0F0F0]'>
        <div className='mb-14 flex justify-center'>
          <h1 className='font-darker-grotesque text-17 font-black text-[#082965]'>
            Logros de la comunidad
          </h1>
        </div>
        <div
          className='scrollbar-hide relative flex h-[700px] flex-col overflow-x-auto whitespace-nowrap'
          ref={timelineRef}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* <div className='relative mb-10 flex font-darker-grotesque h-16'>
            <h2 className='absolute top-[80px] left-[110px] font-darker-grotesque text-18 font-bold text-[#061D48]'>
              2020
            </h2>
            <h2 className='absolute top-[80px] left-[480px] font-darker-grotesque text-18 font-bold text-[#061D48]'>
              2021
            </h2>
            <h2 className='absolute top-[80px] left-[830px] font-darker-grotesque text-18 font-bold text-[#061D48]'>
              2022
            </h2>
            <h2 className='absolute top-[80px] left-[1160px] font-darker-grotesque text-18 font-bold text-[#061D48]'>
              2023
            </h2>
            <h2 className='absolute top-[80px] left-[1470px] font-darker-grotesque text-18 font-bold text-[#061D48]'>
              2024
            </h2>
          </div> */}
          <div className='mb-20 flex'>
            <img
              alt='timeline'
              className='mt-14 flex h-[131px] min-w-[1700px] object-left'
              src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/History%2FTimeline%2FLinea%20de%20tiempo%20desktop.png?alt=media&token=fec439d7-d9c1-40d8-be90-df27a3626dd7'
            />
          </div>
          {/* <div className="relative flex h-auto font-darker-grotesque">
            <div className="absolute max-w-[254px] left-16 top-[-30px] flex w-full whitespace-normal">
              <p className="font-karla text-5 text-[#061D48]">
                Se funda la comunidad SL. Se establecen los delegados representantes por país, quienes se encargan de invitar a
                las personas de su nación a los eventos de la comunidad. Se implementan los "Martes de Retrospectiva" y, a finales del año,
                se lanzan los primeros webinars.
              </p>
            </div>
            <div className="absolute max-w-[254px] left-[399px] top-[-30px] flex w-full whitespace-normal">
              <p className="font-karla text-5 text-[#061D48]">
                Se crean los Squads, equipos que fortalecen la colaboración y el trabajo en grupo dentro de la comunidad.
              </p>
            </div>
            <div className="absolute max-w-[254px] left-[762px] top-[-30px] flex w-full whitespace-normal">
              <p className="font-karla text-5 text-[#061D48]">
                Se lanzan los talleres,  ofreciendo sesiones prácticas y formativas que enriquecen el aprendizaje y la participación
                de los miembros.
              </p>
            </div>
            <div className="absolute max-w-[254px] left-[1088px] top-[-30px] flex w-full whitespace-normal">
              <p className="font-karla text-5 text-[#061D48]">
                Se lanzan los talleres,  ofreciendo sesiones prácticas y formativas que enriquecen el aprendizaje y la participación
                de los miembros.
              </p>
            </div>
            <div className="absolute max-w-[254px] left-[1401px] top-[-30px] flex w-full whitespace-normal">
              <p className="font-karla text-5 text-[#061D48]">
                Se lanzan las membresías para los miembros de la comunidad y se estrena el nuevo portal web,
                proporcionando una plataforma mejorada para la interacción y el acceso a recursos.
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <div className='z-10 flex w-[3%] items-center justify-center'>
        <button
          onClick={() => scrollTimeline('right')}
          className='transition-opacity hover:opacity-70 focus:outline-none'
        >
          <ChevronRight className='cursor-pointer' />
        </button>
      </div>
    </div>
  )
}
