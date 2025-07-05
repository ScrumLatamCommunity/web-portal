'use client'

import 'tailwindcss/tailwind.css'
import React, { useState } from 'react'
import { Star } from 'react-feather'
import { reviews } from '@/data/data'
import ArrowRightIcon from '@/assets/ArrowRightIcon'

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
          <button
            className={`flex h-24 w-24 cursor-default items-center justify-center border-none bg-transparent text-[#082965] ${centerIndex === 0 ? '' : 'cursor-pointer'}`}
            onClick={prevReview}
            aria-label='Anterior'
            type='button'
          >
            <ArrowRightIcon className='h-24 w-24 rotate-180 text-[#082965]' />
          </button>
          <div className='flex w-full min-w-[300px] flex-nowrap justify-center gap-8 md:min-w-[320px]'>
            {visibleReviews.map((review, idx) => {
              if (!review) return <div key={idx} className='w-[320px]'></div>
              const isCenter = idx === 1
              const isLeft = idx === 0
              const isRight = idx === 2
              const reviewIndex = centerIndex + (idx - 1)
              let translateClass = ''
              if (isLeft) translateClass = '-translate-x-10'
              if (isRight) translateClass = 'translate-x-10'
              return (
                <div
                  key={review.id + '-' + reviewIndex}
                  className={`flex h-full flex-col gap-2 rounded-[5%] bg-black-2 px-4 py-8 text-blue-600 shadow-lg transition-all duration-150 md:px-6 ${translateClass} ${isCenter ? 'z-10 scale-110 bg-white text-blue-900 shadow-2xl md:w-[370px]' : 'scale-95 opacity-70 md:w-[300px]'}`}
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
                  <button
                    className={`mt-auto scale-95 self-end border-none pr-2 font-darker-grotesque text-[18px] font-semibold text-[#082965] ${isCenter ? 'pointer-events-none opacity-0' : 'opacity-70'}`}
                  >
                    Seguir leyendo
                  </button>
                </div>
              )
            })}
          </div>
          <button
            className={`flex h-24 w-24 cursor-default items-center justify-center border-none bg-transparent text-[#082965] opacity-100 ${centerIndex === reviews.length - 1 ? '' : 'cursor-pointer opacity-100'}`}
            onClick={nextReview}
            aria-label='Siguiente'
            type='button'
          >
            <ArrowRightIcon className='h-24 w-24' stroke='#082965' />
          </button>
        </div>
      </div>
      <div className='mb-6 mt-4 flex justify-center gap-2'>
        {(() => {
          const maxDots = 5
          const total = reviews.length
          let start = Math.max(0, centerIndex - Math.floor(maxDots / 2))
          let end = start + maxDots
          if (end > total) {
            end = total
            start = Math.max(0, end - maxDots)
          }
          return Array.from({ length: end - start }).map((_, i) => {
            const idx = start + i
            return (
              <div
                key={idx}
                className={`h-3 w-3 cursor-pointer rounded-full transition-colors duration-200 ${idx === centerIndex ? 'bg-[#082965]' : 'bg-gray-300'}`}
                onClick={() => setCenterIndex(idx)}
              />
            )
          })
        })()}
      </div>
    </div>
  )
}
