'use client'

import { Workshop } from '../interfaces/workshopInterface'
import WorkshopCard from './workshopCards'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

export default function WorkshopFeature({
  workshops
}: {
  workshops: Array<Workshop>
}) {
  return (
    <section className='md:max-w-screen-[1980px] flex flex-col items-center justify-center bg-[#FFEAE6] py-12 md:mt-12 md:w-screen md:justify-between'>
      <div className='flex flex-col gap-1 md:mx-52 md:flex-row md:items-center md:justify-center'>
        <Swiper
          autoplay={{
            delay: 5000 // Automático cada 5 segundos
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
          className='workshop-swiper-container relative w-[90%] max-w-[100vw] md:w-full md:max-w-screen-2xl'
          modules={[Navigation]}
          navigation={true}
          slidesPerView={1}
          spaceBetween={0}
        >
          {workshops.map((workshop) => (
            <SwiperSlide key={workshop.id} className='mb-1 px-4 md:mb-0'>
              <WorkshopCard workshop={workshop} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
