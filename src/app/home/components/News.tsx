'use client'

import React, { useState, useEffect } from 'react'
import { newsCommunity } from '@/data/data'
import TargetIcon2 from '@/assets/targetIcon2'
import FolderIcon from '@/assets/FolderIcon'
import GlobeIcon from '@/assets/GlobeIcon'
import BookOpenIcon from '@/assets/BookOpenIcon'
import { Pagination } from './Pagination'
import { ChevronLeft, ChevronRight } from 'react-feather'
import { useSwiper } from '../hooks/useSwiper'

const iconMap: { [key: string]: React.FC<{ className?: string }> } = {
  bookOpen: BookOpenIcon,
  folder: FolderIcon,
  globe: GlobeIcon
}

export const News = () => {
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
    totalItems: newsCommunity.length
  })

  // Reimplementa handlePageChange
  const handlePageChange = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < newsCommunity.length - 1 ? prevIndex + 1 : 0
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const currentNews = newsCommunity[currentIndex]
  const IconComponent = iconMap[currentNews.iconName]

  return (
    <div
      className='relative mx-auto my-12 flex w-full max-w-[1920px] flex-col items-center justify-center'
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className='flex flex-wrap items-center justify-center md:mt-8 md:pt-12'>
        <TargetIcon2 className='mb-6 h-10 w-10 md:h-20 md:w-20' />
        <h1 className='pb-6 text-center font-darker-grotesque text-[25px] font-extrabold text-[#082965] md:pb-14 md:pt-10 md:text-5xl'>
          Novedades de la comunidad
        </h1>
      </div>
      <div className='relative z-0 flex flex-col overflow-hidden bg-black-4 shadow-xl md:flex-row-reverse'>
        <div className='relative h-[422px] w-full md:h-[460px] md:w-[45%]'>
          <div
            className='absolute -left-4 top-[-10px] hidden w-7 bg-[#E72A00] md:block 2xl:-left-0'
            style={{
              height: '130%',
              transform: 'rotate(-13.5deg) scaleY(1.2)',
              transformOrigin: 'top left'
            }}
          ></div>
          <div
            className='absolute -left-9 top-[-20px] hidden w-5 bg-[#FE5833] md:block 2xl:-left-5'
            style={{
              height: '130%',
              transform: 'rotate(-13.5deg) scaleY(1.3)',
              transformOrigin: 'top left'
            }}
          ></div>
          <div className='relative h-full w-full'>
            <img
              alt=''
              className='h-full w-full scale-x-125 object-cover md:scale-100'
              src={currentNews.image}
              style={{
                margin: 0
              }}
            />
          </div>

          <div className='bg-black absolute bottom-0 left-0 bg-opacity-50 px-14 pb-10 text-white md:hidden'>
            <div className='inline-flex items-center gap-2 rounded-xl bg-[#E6EAF0] px-3 py-1'>
              {IconComponent && (
                <IconComponent className='text-12px h-6 w-6 text-[#345081]' />
              )}
              <p className='text-12px font-karla font-bold text-[#345081]'>
                {currentNews.type}
              </p>
            </div>
            <h1 className='font-darker-grotesque text-3xl font-bold text-[#FFFFFF]'>
              {currentNews.title}
            </h1>
            <h2 className='font-darker-grotesque text-3xl font-bold text-[#FFFFF]'>
              {currentNews.sub_title}
            </h2>
            <p className='text-13px mt-2 font-karla'>{currentNews.text}</p>
          </div>
        </div>
        <div className='m-0 w-full flex-col items-start bg-transparent md:flex md:w-[39%] md:pt-[2rem]'>
          <div className='hidden items-center gap-2 rounded-full bg-[#E6EAF0] md:mb-6 md:mt-8 md:flex md:px-2 md:py-0'>
            {IconComponent && (
              <IconComponent className='h-6 w-6 text-[#345081]' />
            )}
            <p className='font-karla font-bold leading-3 text-[#345081] md:text-6 md:leading-9'>
              {currentNews.type}
            </p>
          </div>

          <div className='hidden flex-col md:flex'>
            <h1 className='font-darker-grotesque text-3xl font-bold text-[#FE2E00] md:px-2 md:pb-0 md:text-5xl'>
              {currentNews.title}
            </h1>
            <h1 className='pb-4 font-darker-grotesque text-3xl font-bold text-[#000000] md:px-2 md:pb-12 md:text-5xl'>
              {currentNews.sub_title}
            </h1>
            <p className='w-full font-karla text-sm leading-3 text-[#082965] md:px-2 md:pb-0 md:pr-28 md:text-[22px] md:leading-6'>
              {currentNews.text}
            </p>
          </div>
        </div>
        <ChevronLeft
          className={`absolute left-[10px] top-1/2 hidden h-16 w-16 -translate-y-1/2 transform cursor-pointer text-red-400 md:block ${
            currentIndex === 0 ? 'cursor-not-allowed opacity-50' : ''
          }`}
          onClick={handlePrev}
        />
        <ChevronRight
          className={`absolute right-[10px] top-1/2 hidden h-16 w-16 -translate-y-1/2 transform cursor-pointer text-red-400 md:block ${
            currentIndex === newsCommunity.length - 1
              ? 'cursor-not-allowed opacity-50'
              : ''
          }`}
          onClick={handleNext}
        />
      </div>
      <Pagination
        currentIndex={currentIndex}
        itemsPerPage={1}
        onPageChange={handlePageChange}
        totalItems={newsCommunity.length}
      />
    </div>
  )
}

// para generar un nuevo preview
