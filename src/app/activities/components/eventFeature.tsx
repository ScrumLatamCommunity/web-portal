'use client'

import EventCards from './eventCards'
import { Event } from '../interfaces/eventInterface'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

export default function EventFeature({ events }: { events: Array<Event> }) {
  return (
    <section className='flex flex-col items-center justify-center bg-[#E6EAF0] py-12 md:mt-12 md:max-w-screen-2xl md:justify-between'>
      <div className='flex flex-col gap-1 md:mx-52 md:flex-row md:items-center md:justify-center'>
        <Swiper
          autoplay={{
            delay: 5000,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
          className='event-swiper-container relative w-[90%] max-w-[100vw] md:w-full md:max-w-screen-2xl'
          modules={[Navigation]}
          navigation={true}
          slidesPerView={1}
          spaceBetween={0}
        >
          {events.map((event) => (
            <SwiperSlide key={event.id} className='mb-1 px-4 md:mb-0'>
              <EventCards events={[event]} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
