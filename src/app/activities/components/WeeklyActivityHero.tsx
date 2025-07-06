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
      <div className='relative mx-auto px-1 sm:px-3 lg:px-8'>
        <h2 className='mb-4 text-start font-darker-grotesque text-lg font-medium text-[#082965] sm:mb-6 sm:text-xl lg:text-5xl'>
          Actividades Semanales
        </h2>

        {/* Botones de navegación - solo en móviles */}
        <div className='block'>
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
            // asignamos los refs manualmente
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
          spaceBetween={16}
          className='weekly-activity-swiper'
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 5
            },
            480: {
              slidesPerView: 1.75,
              spaceBetween: 2
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 5
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 10
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
