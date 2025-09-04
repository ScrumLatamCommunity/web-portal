'use client'

import React, { useState, useEffect } from 'react'
import { ProductsServices } from '@/data/data'
import FolderIcon from '@/assets/FolderIcon'
import GlobeIcon from '@/assets/GlobeIcon'
import BookOpenIcon from '@/assets/BookOpenIcon'
import { Pagination } from '@/app/home//components/Pagination'
import { ChevronLeft, ChevronRight } from 'react-feather'
import { useSwiper } from '@/app/home/hooks/useSwiper'

const iconMap: { [key: string]: React.FC<{ className?: string }> } = {
  bookOpen: BookOpenIcon,
  folder: FolderIcon,
  globe: GlobeIcon
}

export default function NewsBlogsUpdates() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const {
    handlePrev,
    handleNext,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  } = useSwiper({
    currentIndex,
    setCurrentIndex,
    totalItems: ProductsServices.length
  })

  const handlePageChange = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < ProductsServices.length - 1 ? prevIndex + 1 : 0
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const currentNews = ProductsServices[currentIndex]
  const IconComponent = iconMap[currentNews.iconName]

  return (
    <div
      className='relative mx-auto my-20 flex w-full max-w-[1980px] flex-col items-center justify-center'
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className='relative z-0 flex flex-col overflow-hidden bg-[#082965] shadow-xl md:flex-row-reverse'>
        <div className='relative h-[560px] w-full md:h-[460px] md:w-[45%]'>
          {/* Imagen Cortada Correctamente */}
          <div className='relative z-10 h-full w-full overflow-hidden'>
            <img
              alt=''
              className='h-full w-full object-cover md:scale-100'
              src={currentNews.image}
              style={{
                margin: 0,
                objectFit: 'cover'
              }}
            />
          </div>

          {/* 🔥 Texto en pantallas pequeñas */}
          <div className='bg-black absolute bottom-2 left-0 z-30 w-full bg-opacity-50 px-16 py-4 text-black-13 md:hidden'>
            <h1 className='font-darker-grotesque text-[25px] font-bold text-black-13'>
              {currentNews.title}
            </h1>
            <h3 className='font-darker-grotesque text-[20px] font-bold text-black-13'>
              {currentNews.sub_title}
            </h3>
            <p className='text-13px mt-2 font-karla'>{currentNews.text}</p>
          </div>
        </div>

        {/* Contenedor de Texto y Detalles */}
        <div className='m-0 w-full flex-col items-start justify-center bg-transparent pr-20 md:flex md:w-[39%] md:pt-[2rem]'>
          {/* Contenido Principal */}
          <div className='hidden flex-col space-y-6 md:flex'>
            <h1 className='font-darker-grotesque text-3xl font-bold leading-none text-[#FFFFFF] md:px-2 md:pb-6 md:text-[50px]'>
              {currentNews.title}
            </h1>
            <h2 className='font-darker-grotesque text-lg font-bold text-[#FFFFFF] md:px-2 md:pb-6 md:text-[26px]'>
              {currentNews.sub_title}
            </h2>
            <p className='w-full font-karla text-sm leading-3 text-[#FFFFFF] md:px-2 md:pb-0 md:pr-28 md:text-[18px] md:leading-6'>
              {currentNews.text}
            </p>
          </div>
        </div>

        {/* Flechas de Navegación */}
        <ChevronLeft
          className={`absolute left-[200px] top-1/2 hidden h-16 w-16 -translate-y-1/2 transform cursor-pointer bg-black-3 pr-1.5 text-red-400 md:block rounded-full${
            currentIndex === 0
              ? 'cursor-not-allowed rounded-full opacity-50'
              : ''
          }`}
          onClick={handlePrev}
        />
        {/* Flecha de la Derecha */}
        <ChevronRight
          className={`absolute right-[160px] top-1/2 z-50 hidden h-16 w-16 -translate-y-1/2 transform cursor-pointer bg-black-1 pl-1.5 text-red-400 md:block rounded-full${
            currentIndex === ProductsServices.length - 1
              ? 'cursor-not-allowed rounded-full opacity-50'
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
        totalItems={ProductsServices.length}
      />
    </div>
  )
}
