'use client'

import { useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'react-feather'
import 'swiper/css'
import 'swiper/css/navigation'

import ActivityTypeCard from './activityTypeCard'

interface Category {
  id: string
  title: string
  description: string
  image: string
}

interface WeeklyActivityHeroProps {
  categories: Category[]
  onSelectCategory: (categoryId: string) => void
  selectedCategory: string | null
}

export default function WeeklyActivityHero({
  categories,
  onSelectCategory,
  selectedCategory
}: WeeklyActivityHeroProps) {
  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)

  return (
    <section className='bg-white py-2 md:py-10'>
      <div className='relative mx-auto max-w-[1400px] px-2 sm:px-3 lg:px-8'>
        <h2 className='mb-4 text-start font-darker-grotesque text-lg font-medium text-[#082965] sm:mb-6 sm:text-xl lg:text-4xl'>
          Actividades Semanales
        </h2>

        {/* Botones de navegación - solo en móviles */}
        <div className='block md:hidden'>
          <button
            ref={prevRef}
            className='absolute left-[-20px] top-[120px] z-10 -translate-y-1/2 rounded-full p-2 text-[#FE5833]'
          >
            <ChevronLeft size={28} />
          </button>

          <button
            ref={nextRef}
            className='absolute right-[-20px] top-[120px] z-10 -translate-y-1/2 rounded-full p-2 text-[#FE5833]'
          >
            <ChevronRight size={28} />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current
          }}
          onBeforeInit={(swiper) => {
            if (
              typeof swiper.params.navigation !== 'boolean' &&
              swiper.params.navigation
            ) {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }
          }}
          loop={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.05, // Sin scroll lateral en mobile
              spaceBetween: 6
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 8
            },
            640: {
              slidesPerView: 2.3,
              spaceBetween: 10
            },
            1024: {
              slidesPerView: 3.2, // Más pequeñas en desktop
              spaceBetween: 14
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 16
            }
          }}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <ActivityTypeCard
                category={category}
                isSelected={selectedCategory === category.title}
                onClick={() => onSelectCategory(category.title)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
