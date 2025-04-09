'use client'

import { Tutorial } from '../interfaces/tutorialInterface'
import TutorialCard from './tutorialCards'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

export default function TutorialFeature({
  tutorials
}: {
  tutorials: Array<Tutorial>
}) {
  if (tutorials.length === 0) {
    return (
      <section className='flex min-h-[300px] items-center justify-center bg-[#FFEAE6] py-12 md:mt-12 md:max-w-[1980px]'>
        <p className='text-gray-500'>No se encontraron tutoriales.</p>
      </section>
    )
  }

  if (tutorials.length <= 2) {
    return (
      <section className='flex flex-col items-center justify-center bg-[#FFEAE6] py-12 md:mt-12 md:max-w-[1980px] md:justify-between'>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          {tutorials.map((tutorial) => (
            <TutorialCard key={tutorial.id} tutorial={tutorial} />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className='flex min-h-[300px] flex-col items-center justify-center py-4 md:mt-4 md:justify-between'>
      <div className='flex flex-col gap-1 md:mx-52 md:flex-row md:items-center md:justify-center'>
        <Swiper
          autoplay={{
            delay: 5000
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0
            }
          }}
          className='tutorial-swiper-container relative w-[90%] md:max-w-[1480px]'
          modules={[Navigation]}
          navigation={true}
          slidesPerView={1}
          spaceBetween={0}
          style={{
            minHeight: '300px'
          }}
        >
          {tutorials.map((tutorial) => (
            <SwiperSlide key={tutorial.id} className='mb-1 px-4 md:mb-0'>
              <TutorialCard tutorial={tutorial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
