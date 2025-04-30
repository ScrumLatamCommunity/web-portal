import { useEffect, useRef } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import ProfileCard from './profileCardSection'

interface ProfileSectionProps {
  profiles: {
    name: string
    title: string
    description: string
    countryFlagUrl: string
    imageUrl: string
    linkedinUrl: string
  }[]
}

export default function ProfileSection({ profiles }: ProfileSectionProps) {
  const swiperRef = useRef<SwiperType | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.slideNext()
      }
    }, 7500)

    return () => clearInterval(interval)
  }, [])

  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper
      }}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
      }}
      spaceBetween={-30}
      slidesPerView={1}
      loop={true}
      modules={[Navigation]}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: -30
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: -30
        }
      }}
      className='profile-swiper-container w-[275px] md:w-full md:max-w-screen-2xl'
    >
      {profiles.map((profile, index) => (
        <SwiperSlide key={index}>
          <ProfileCard
            key={index}
            name={profile.name}
            title={profile.title}
            countryFlagUrl={profile.countryFlagUrl}
            description={profile.description}
            imageUrl={profile.imageUrl}
            linkedinUrl={profile.linkedinUrl}
          />
        </SwiperSlide>
      ))}
      {/* Botones personalizados */}
      <div className='swiper-button-prev absolute top-1/2 z-10 transform md:left-20'></div>
      <div className='swiper-button-next absolute top-1/2 z-10 transform md:right-20'></div>
    </Swiper>
  )
}
