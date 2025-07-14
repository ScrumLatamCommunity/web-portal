'use client'

import 'tailwindcss/tailwind.css'
import React, { useState, useEffect } from 'react'
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
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const prevReview = () => {
    centerIndex > 0
      ? setCenterIndex(centerIndex - 1)
      : setCenterIndex(reviews.length - 1)
  }
  const nextReview = () => {
    centerIndex < reviews.length - 1
      ? setCenterIndex(centerIndex + 1)
      : setCenterIndex(0)
  }

  const getVisibleReviews = () => {
    // En mobile solo mostrar 1 review, en desktop mostrar 3
    if (isMobile) {
      return [reviews[centerIndex]]
    }

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
        <div className='flex items-center justify-center gap-4 md:gap-6'>
          <button
            className={`flex h-8 w-8 cursor-default items-center justify-center border-none bg-transparent text-[#082965] md:h-24 md:w-24 ${centerIndex === 0 ? '' : 'cursor-pointer'}`}
            onClick={prevReview}
            aria-label='Anterior'
            type='button'
          >
            <ArrowRightIcon className='h-8 w-8 rotate-180 text-[#082965] md:h-24 md:w-24' />
          </button>
          <div className='flex w-full min-w-[280px] flex-nowrap justify-center gap-4 md:min-w-[320px] md:gap-8'>
            {visibleReviews.map((review, idx) => {
              if (!review)
                return <div key={idx} className='w-[280px] md:w-[320px]'></div>
              const isCenter = isMobile ? true : idx === 1
              const isLeft = idx === 0
              const isRight = idx === 2
              const reviewIndex = centerIndex + (idx - 1)
              let translateClass = ''
              if (!isMobile) {
                if (isLeft) translateClass = '-translate-x-10'
                if (isRight) translateClass = 'translate-x-10'
              }
              return (
                <div
                  key={review.id + '-' + reviewIndex}
                  className={`flex h-full flex-col gap-2 rounded-[5%] bg-black-2 px-4 py-6 text-blue-600 shadow-lg transition-all duration-300 md:px-6 md:py-8 ${translateClass} ${isCenter ? 'z-10 w-[280px] scale-100 bg-white text-blue-900 shadow-2xl md:w-[370px] md:scale-110' : 'w-[280px] scale-95 opacity-70 md:w-[300px]'}`}
                  onClick={() => {
                    if (!isCenter && !isMobile) {
                      setCenterIndex(reviewIndex)
                    }
                  }}
                >
                  <div className='flex items-center gap-3 md:gap-4'>
                    <div className='flex overflow-hidden rounded-full border-4 border-[#082965]'>
                      <img
                        alt={review.name}
                        className='w-12 md:w-16'
                        src={review.profile}
                      />
                    </div>
                    <div className='flex flex-col'>
                      <div className='font-darker-grotesque text-[16px] font-bold text-blue-6 md:text-[20px]'>
                        {review.name}
                      </div>
                      <div className='mt-[-6px] flex font-darker-grotesque text-[14px] font-medium text-blue-6 md:mt-[-8px] md:text-[20px]'>
                        {review.position}
                      </div>
                      <img
                        alt='Nacionalidad'
                        className='mt-1 flex h-3 w-4 md:h-4 md:w-5'
                        src={review.flag}
                      />
                    </div>
                  </div>
                  <div className='flex justify-center gap-1 text-[#082965]'>
                    {[...Array(review.rating ?? 0)].map((_, index) => (
                      <Star
                        key={index}
                        className='h-8 w-8 fill-current md:h-5 md:w-5'
                      />
                    ))}
                  </div>
                  <div className='h-auto font-karla text-[14px] font-normal text-blue-6 md:text-base'>
                    {review.description.length > 120 && !isCenter
                      ? review.description.slice(0, 70) + '...'
                      : review.description}
                  </div>
                  <div className='relative mt-auto flex h-[32px] items-end md:h-[40px]'>
                    <button
                      className={`absolute right-0 border-none pr-2 font-darker-grotesque text-[14px] font-semibold text-[#082965] transition-opacity duration-300 md:text-[18px] ${isCenter ? 'pointer-events-none opacity-0' : 'opacity-70'}`}
                      style={{ minWidth: isMobile ? 100 : 120 }}
                    >
                      Seguir leyendo
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
          <button
            className={`flex h-6 w-6 cursor-default items-center justify-center border-none bg-transparent text-[#082965] md:h-24 md:w-24 ${centerIndex === reviews.length - 1 ? '' : 'cursor-pointer'}`}
            onClick={nextReview}
            aria-label='Siguiente'
            type='button'
          >
            <ArrowRightIcon className='h-6 w-6 text-[#082965] md:h-24 md:w-24' />
          </button>
        </div>
      </div>
      <div className='mb-6 mt-4 flex justify-center gap-2'>
        {(() => {
          const maxDots = isMobile ? 3 : 5
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
                className={`h-2 w-2 cursor-pointer rounded-full transition-colors duration-200 md:h-3 md:w-3 ${idx === centerIndex ? 'bg-[#082965]' : 'bg-gray-300'}`}
                onClick={() => setCenterIndex(idx)}
              />
            )
          })
        })()}
      </div>
    </div>
  )
}
