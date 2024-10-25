'use client'

import 'tailwindcss/tailwind.css'
import React, { useState, useEffect } from 'react'
import { Pagination } from './Pagination'
import { ChevronLeft, ChevronRight, Star } from 'react-feather'
import { reviews } from '@/data/data'

interface Review {
  id: number
  profile: string
  name: string
  position: string
  flag: string
  rating: number
  description: string
}

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [fullReviews, setFullReviews] = useState<boolean>(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [itemsPerPage, setItemsPerPage] = useState<number>(3)

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 520) {
        setItemsPerPage(1)
        setIsMobile(true)
      } else {
        setItemsPerPage(3)
        setIsMobile(false)
      }
    }

    updateItemsPerPage()
    window.addEventListener('resize', updateItemsPerPage)

    return () => {
      window.removeEventListener('resize', updateItemsPerPage)
    }
  }, [])

  const nextReviews = () => {
    if (currentIndex + itemsPerPage < reviews.length) {
      setCurrentIndex(currentIndex + itemsPerPage)
    }
  }

  const prevReviews = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage)
    }
  }

  const handlePageChange = (index: number) => {
    setCurrentIndex(index)
  }

  const toggleReadMore = () => {
    setFullReviews(!fullReviews)
  }

  return (
    <div
      className={`flex flex-col gap-7 ${fullReviews ? 'bg-gray-200' : ''} ${fullReviews && isMobile ? 'bg-black-1' : ''}`}
    >
      <span className='text-center font-darker-grotesque text-[20px] font-extrabold text-blue-6 sm:text-3xl md:text-5xl'>
        ¿Qué opina nuestra comunidad?
      </span>
      <div
        className={`flex flex-wrap items-center justify-center gap-[14px] ${!isMobile ? 'flex flex-row flex-wrap' : ''}`}
      >
        <ChevronLeft
          className={`h-6 w-6 text-red-400 ${fullReviews && !isMobile ? 'translate-y-[-48px]' : ''}`}
          onClick={prevReviews}
        />
        <div
          className={`flex flex-wrap place-content-center gap-12 ${fullReviews ? 'flex flex-wrap gap-5' : ''} `}
        >
          {reviews
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((review: Review) => (
              <div
                className={`flex w-[300px] flex-col gap-4 rounded-[5%] bg-black-2 py-8 pl-6 text-blue-600 shadow-lg ${fullReviews && !isMobile ? 'h-auto gap-5 bg-black-1 py-6 pl-8 pr-4 text-blue-100 opacity-50 transition-transform duration-300 hover:scale-[1.3] hover:opacity-100' : 'w-56 opacity-100'} ${hoveredCard === review.id && fullReviews ? 'z-10 opacity-100 transition-transform duration-300' : ''} ${fullReviews && isMobile ? 'h-auto gap-5 py-6 pl-8 pr-4 text-blue-100' : ''} `}
                key={review.id}
                onMouseEnter={() => setHoveredCard(review.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className='flex items-center gap-4'>
                  <div className='flex overflow-hidden rounded-full border-2 border-red-300'>
                    <img
                      alt={review.name}
                      className='w-16'
                      src={review.profile}
                    />
                  </div>
                  <div className='flex flex-col place-content-center gap-1'>
                    <div className='font-darker-grotesque font-bold text-blue-6'>
                      {review.name}
                    </div>
                    <div className='mt-[-8px] flex font-darker-grotesque text-2 font-medium text-blue-6'>
                      {review.position}
                    </div>
                    <img
                      alt='Nacionalidad'
                      className='mt-1 flex h-4 w-5'
                      src={review.flag}
                    />
                  </div>
                  {hoveredCard === review.id && (
                    <button
                      className='ml-auto flex self-start rounded-none bg-red-400 bg-transparent font-darker-grotesque text-7 font-extrabold'
                      onClick={toggleReadMore}
                    >
                      {fullReviews ? (
                        <img
                          alt='Cerrar'
                          className='w-6 gap-1'
                          src={
                            'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Reviews%20icons%2Fx.svg?alt=media&token=3fca622b-ce3c-436b-9372-0208bf399ba4'
                          }
                        />
                      ) : (
                        ''
                      )}
                    </button>
                  )}
                </div>
                <div className='flex gap-1 place-self-center text-red-400'>
                  {[...Array(review.rating ?? 0)].map((_, index) => (
                    <Star key={index} className='fill-current' />
                  ))}
                </div>
                <div
                  className={`h-[72px] w-auto font-karla font-normal text-blue-6 ${fullReviews ? 'h-auto' : ''}`}
                >
                  {fullReviews
                    ? review.description
                    : `${review.description.slice(0, 85)}...`}
                </div>
                {!fullReviews && (
                  <button
                    className='mt-auto self-end border-none pr-8 font-darker-grotesque text-sm font-semibold text-red-400'
                    onClick={toggleReadMore}
                  >
                    Seguir leyendo
                  </button>
                )}
              </div>
            ))}
        </div>
        <ChevronRight
          className={`h-6 w-6 text-red-400 ${fullReviews && !isMobile ? 'translate-y-12' : ''} `}
          onClick={nextReviews}
        />
      </div>
      <Pagination
        currentIndex={currentIndex}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        totalItems={reviews.length}
      />
    </div>
  )
}
