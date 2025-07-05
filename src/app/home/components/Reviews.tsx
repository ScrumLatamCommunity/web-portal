'use client'

import 'tailwindcss/tailwind.css'
import React, { useState } from 'react'
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
  const [centerIndex, setCenterIndex] = useState<number>(1)

  const prevReview = () => {
    if (centerIndex > 0) setCenterIndex(centerIndex - 1)
  }
  const nextReview = () => {
    if (centerIndex < reviews.length - 1) setCenterIndex(centerIndex + 1)
  }

  // Solo mostramos 3: el central y los adyacentes
  const getVisibleReviews = () => {
    const left = centerIndex - 1 >= 0 ? reviews[centerIndex - 1] : null
    const center = reviews[centerIndex]
    const right =
      centerIndex + 1 < reviews.length ? reviews[centerIndex + 1] : null
    return [left, center, right]
  }

  const visibleReviews = getVisibleReviews()

  return (
    <div className='mb-12 flex w-screen flex-col gap-7 md:max-w-[1920px]'>
      <span className='pb:5 pl-[10%] pt-5 text-left font-darker-grotesque text-[24px] font-extrabold text-blue-6 sm:text-3xl md:pb-10 md:pt-10 md:text-5xl'>
        ¿Qué opina nuestra comunidad?
      </span>
      <div className='flex w-full items-center justify-center'>
        <div className='flex items-center justify-center md:gap-6'>
          <ChevronLeft
            className={`h-8 w-8 cursor-default text-[#082965] opacity-30 ${centerIndex === 0 ? '' : 'cursor-pointer opacity-100'}`}
            onClick={prevReview}
          />
          <div className='flex w-full min-w-[300px] flex-nowrap justify-center gap-8 md:min-w-[320px]'>
            {visibleReviews.map((review, idx) => {
              if (!review) return <div key={idx} className='w-[320px]'></div>
              const isCenter = idx === 1
              const reviewIndex = centerIndex + (idx - 1)
              return (
                <div
                  key={review.id}
                  className={`flex flex-col gap-2 rounded-[5%] bg-black-2 px-4 py-8 text-blue-600 shadow-lg transition-all duration-300 md:px-6${isCenter ? 'z-10 scale-110 bg-white text-blue-900 shadow-2xl md:w-[370px]' : 'scale-95 opacity-70 md:h-[260px] md:w-[300px]'}`}
                  style={{ minWidth: isCenter ? 320 : 260 }}
                  onClick={() => {
                    if (!isCenter) setCenterIndex(reviewIndex)
                  }}
                >
                  <div className='flex items-center gap-4'>
                    <div className='flex overflow-hidden rounded-full border-4 border-[#082965]'>
                      <img
                        alt={review.name}
                        className='w-16'
                        src={review.profile}
                      />
                    </div>
                    <div className='flex flex-col'>
                      <div className='font-darker-grotesque text-[20px] font-bold text-blue-6'>
                        {review.name}
                      </div>
                      <div className='mt-[-8px] flex font-darker-grotesque text-[20px] font-medium text-blue-6'>
                        {review.position}
                      </div>
                      <img
                        alt='Nacionalidad'
                        className='mt-1 flex h-4 w-5'
                        src={review.flag}
                      />
                    </div>
                  </div>
                  <div className='flex justify-center gap-1 text-[#082965]'>
                    {[...Array(review.rating ?? 0)].map((_, index) => (
                      <Star key={index} className='fill-current' />
                    ))}
                  </div>
                  <div className='h-auto font-karla font-normal text-blue-6'>
                    {review.description.length > 120 && !isCenter
                      ? review.description.slice(0, 70) + '...'
                      : review.description}
                  </div>
                  {!isCenter && (
                    <button className='self-end border-none pr-8 font-darker-grotesque text-[18px] font-semibold text-[#082965]'>
                      Seguir leyendo
                    </button>
                  )}
                </div>
              )
            })}
          </div>
          <ChevronRight
            className={`h-8 w-8 cursor-default text-[#082965] opacity-30 ${centerIndex === reviews.length - 1 ? '' : 'cursor-pointer opacity-100'}`}
            onClick={nextReview}
          />
        </div>
      </div>
    </div>
  )
}
