'use client'

import { Manual } from '../interfaces/manualInterface'
import ManualCard from './manualCards'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

export default function ManualFeature({ manuals }: { manuals: Array<Manual> }) {
  if (manuals.length === 0) {
    return (
      <section className='flex min-h-[300px] items-center justify-center bg-[#FFEAE6] py-12 md:mt-12 md:max-w-[1980px]'>
        <p className='text-gray-500'>No se encontraron manuales.</p>
      </section>
    )
  }

  if (manuals.length <= 2) {
    return (
      <section className='flex flex-col items-center justify-center bg-[#FFEAE6] py-12 md:mt-12 md:max-w-[1980px] md:justify-between'>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          {manuals.map((manual) => (
            <ManualCard key={manual.id} manual={manual} />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className='flex min-h-[300px] flex-col items-center justify-center py-4 md:mt-4 md:max-w-[1980px] md:justify-between'>
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
          className='manual-swiper-container relative w-[90%] max-w-[100vw] md:w-full md:max-w-[1980px]'
          modules={[Navigation]}
          navigation={true}
          slidesPerView={1}
          spaceBetween={0}
          style={{
            minHeight: '300px'
          }}
        >
          {manuals.map((manual) => (
            <SwiperSlide key={manual.id} className='mb-1 px-4 md:mb-0'>
              <ManualCard manual={manual} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
