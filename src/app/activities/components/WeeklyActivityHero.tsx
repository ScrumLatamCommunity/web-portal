// En tu archivo components/WeeklyActivityHero.tsx
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import ActivityTypeCard from './activityTypeCard' // Importa el componente de tarjeta

// Importa los estilos de Swiper
import 'swiper/css'
import 'swiper/css/navigation'

interface Category {
  id: string
  title: string
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
  return (
    <section className='bg-white py-2 md:py-10'>
      <div className='mx-1 max-w-7xl px-4 sm:px-6 lg:px-8'>
        <h2 className='mb-4 text-start font-darker-grotesque text-lg font-bold text-[#082965] sm:mb-6 sm:text-xl lg:text-2xl'>
          Actividades Semanales
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={true}
          loop={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          spaceBetween={16}
          className='weekly-activity-swiper'
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 5
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 5
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 5
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30
            }
          }}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <ActivityTypeCard
                category={category}
                isSelected={selectedCategory === category.id}
                onClick={() => onSelectCategory(category.id)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
