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

export const NewsBlogsUpdates = () => {
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
      className='relative mx-auto my-12 flex w-full max-w-[1980px] flex-col items-center justify-center'
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className='relative z-0 flex flex-col overflow-hidden bg-[#D9D9D9] shadow-xl md:flex-row-reverse'>
        <div className='relative h-[422px] w-full overflow-hidden md:h-[460px] md:w-[45%]'>
          {/* Líneas Roja y Naranja - Más gruesas y juntas */}
          <div className='absolute -left-2 top-[-10px] z-20 h-[140%] w-[16px] origin-top-left rotate-[-13deg] scale-y-[1.3] bg-[#E72A00] md:block'></div>
          <div className='absolute -left-6 top-[-10px] z-20 h-[140%] w-[16px] origin-top-left rotate-[-13deg] scale-y-[1.3] bg-[#FE5833] md:block'></div>

          {/* Imagen Cortada Correctamente */}
          <div className='relative z-10 h-full w-full overflow-hidden'>
            <img
              alt=''
              className='h-full w-full object-cover md:scale-100'
              src={currentNews.image}
              style={{
                margin: 0,
                objectFit: 'cover',
                objectPosition: 'right' // Corta la parte izquierda
              }}
            />
            {/* Capa de opacidad sobre la imagen */}
            <div className='bg-black pointer-events-none absolute inset-0 bg-opacity-30'></div>
          </div>
        </div>

        {/* Contenedor de Texto y Detalles */}
        <div className='m-0 w-full flex-col items-start bg-transparent md:flex md:w-[39%] md:pt-[2rem]'>
          <div className='hidden items-center gap-4 md:mb-6 md:mt-8 md:flex md:px-2 md:py-0'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Comunidad%2FagileTalentClubImg.png?alt=media&token=f7fc7141-a29e-4b13-a025-e70096604333'
              alt='Agile Talent Club'
              className='h-20 w-20 rounded-full'
            />
            <div className='inline-flex items-center gap-1 rounded-xl bg-[#E6EAF0] px-3 py-0'>
              {/* Ícono del tipo */}
              {IconComponent && (
                <IconComponent className='h-6 w-6 text-[#345081]' />
              )}

              {/* Texto del tipo */}
              <p className='font-karla font-bold leading-3 text-[#345081] md:text-6 md:leading-9'>
                {currentNews.type}
              </p>
            </div>
          </div>

          {/* Contenido Principal */}
          <div className='hidden flex-col md:flex'>
            <h1 className='font-darker-grotesque text-3xl font-bold text-[#04122D] md:px-2 md:pb-6 md:text-[36px]'>
              {currentNews.title}
            </h1>
            <p className='w-full font-karla text-sm leading-3 text-[#04122D] md:px-2 md:pb-0 md:pr-28 md:text-[18px] md:leading-6'>
              {currentNews.text}
            </p>
          </div>
        </div>

        {/* Flechas de Navegación */}
        <ChevronLeft
          className={`absolute left-[10px] top-1/2 hidden h-16 w-16 -translate-y-1/2 transform cursor-pointer text-red-400 md:block ${
            currentIndex === 0 ? 'cursor-not-allowed opacity-50' : ''
          }`}
          onClick={handlePrev}
        />
        {/* Flecha de la Derecha */}
        <ChevronRight
          className={`absolute right-4 top-1/2 z-50 h-16 w-16 -translate-y-1/2 transform cursor-pointer text-red-400 md:block ${
            currentIndex === ProductsServices.length - 1
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
        totalItems={ProductsServices.length}
      />
    </div>
  )
}
