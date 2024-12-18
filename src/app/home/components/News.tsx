'use client'

import React, { useState, useEffect } from 'react'
import { newsCommunity } from '@/data/data'
import TargetIcon2 from '@/assets/targetIcon2'
import FolderIcon from '@/assets/FolderIcon'
import GlobeIcon from '@/assets/GlobeIcon'
import BookOpenIcon from '@/assets/BookOpenIcon'
import { Pagination } from './Pagination'
import { ChevronLeft, ChevronRight } from 'react-feather'

const iconMap: { [key: string]: React.FC<{ className?: string }> } = {
  bookOpen: BookOpenIcon,
  folder: FolderIcon,
  globe: GlobeIcon,
}

export const News = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePageChange = (index: number) => {
    setCurrentIndex(index)
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < newsCommunity.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < newsCommunity.length - 1 ? prevIndex + 1 : 0,
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const currentNews = newsCommunity[currentIndex]
  const IconComponent = iconMap[currentNews.iconName] // Obtener el componente del icono dinámicamente

  return (
    <div className='relative flex max-w-screen-2xl flex-col items-center pb-9'>
      <div className='mt-8 flex flex-wrap items-center justify-center gap-4 pt-12'>
        <TargetIcon2 className='h-20 w-20' />
        <h3 className='pb-10 pt-10 text-center font-darker-grotesque text-[20px] font-extrabold text-blue-6 sm:text-3xl md:text-5xl'>
          Novedades de la comunidad
        </h3>
      </div>
      {/* Contenedor principal */}
      <div className='relative z-0 flex flex-col overflow-hidden bg-black-4 shadow-xl md:flex-row-reverse'>
        <div className='relative h-[460px] w-full md:w-[45%]'>
          {/* Línea roja inclinada */}
          <div
            className='absolute -left-3 top-[-10px] w-6 bg-[#E72A00]'
            style={{
              height: '130%',
              transform: 'rotate(-13.5deg) scaleY(1.2)',
              transformOrigin: 'top left',
            }}
          ></div>
          {/* Línea naranja inclinada */}
          <div
            className='absolute -left-9 top-[-20px] w-6 bg-[#FE5833]'
            style={{
              height: '130%',
              transform: 'rotate(-13.5deg) scaleY(1.3)',
              transformOrigin: 'top left',
            }}
          ></div>
          {/* Imagen */}
          <img
            alt=''
            className='h-full w-full object-cover'
            src={currentNews.image}
            style={{
              width: '120%',
              height: '100%',
              margin: -1,
            }}
          />
        </div>
        <div className='m-0 flex w-full flex-col items-start bg-transparent pb-10 pt-[2rem] md:w-[39%]'>
          <div className='flex items-center gap-2 rounded-xl bg-[#E6EAF0] md:mb-6 md:mt-8 md:px-2'>
            {IconComponent && (
              <IconComponent className='h-6 w-6 text-[#345081]' />
            )}
            <p className='font-karla font-bold leading-3 text-[#345081] md:text-6 md:leading-9'>
              {currentNews.type}
            </p>
          </div>
          <h1 className='font-darker-grotesque text-3xl font-bold text-[#FE2E00] md:px-2 md:pb-0 md:text-5xl'>
            {currentNews.title}
          </h1>
          <h1 className='pb-4 font-darker-grotesque text-3xl font-bold text-[#000000] md:px-2 md:pb-12 md:text-5xl'>
            {currentNews.sub_title}
          </h1>
          <p className='w-full font-darker-grotesque text-sm font-medium leading-3 text-[#082965] md:px-2 md:pb-0 md:pr-28 md:text-[22px]'>
            {currentNews.text}
          </p>
        </div>
        {/* Chevron Izquierda */}
        <ChevronLeft
          className={`absolute left-[10px] top-1/2 h-16 w-16 -translate-y-1/2 transform cursor-pointer text-red-400 ${
            currentIndex === 0 ? 'cursor-not-allowed opacity-50' : ''
          }`}
          onClick={handlePrev}
        />
        {/* Chevron Derecha */}
        <ChevronRight
          className={`absolute right-[10px] top-1/2 h-16 w-16 -translate-y-1/2 transform cursor-pointer text-red-400 ${
            currentIndex === newsCommunity.length - 1
              ? 'cursor-not-allowed opacity-50'
              : ''
          }`}
          onClick={handleNext}
        />
      </div>
      {/* Paginación */}
      <Pagination
        currentIndex={currentIndex}
        itemsPerPage={1}
        onPageChange={handlePageChange}
        totalItems={newsCommunity.length}
      />
    </div>
  )
}
