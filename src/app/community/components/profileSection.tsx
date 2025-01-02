import { useEffect, useRef } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import ProfileCard from './profileCardSection'
import ProfileImage from '@/assets/perfilImg'

const profiles = [
  {
    name: 'Sergio Gonzalez',
    title: 'CEO',
    description: 'Creador y fundador de la comunidad SCRUM',
    image: <ProfileImage />,
    githubUrl: 'https://github.com/sergioGonzalez',
    behanceUrl: 'https://behance.net/sergioGonzalez',
    instagramUrl: 'https://instagram.com/sergioGonzalez',
  },
  {
    name: 'Ana Martínez',
    title: 'CTO',
    description: 'Experta en desarrollo de software y transformación digital',
    image: <ProfileImage />,
    githubUrl: 'https://github.com/anaMartinez',
    behanceUrl: 'https://behance.net/anaMartinez',
    instagramUrl: 'https://instagram.com/anaMartinez',
  },
  {
    name: 'Carlos Reyes',
    title: 'Product Manager',
    description: 'Líder en gestión de productos digitales e innovación',
    image: <ProfileImage />,
    githubUrl: 'https://github.com/carlosReyes',
    behanceUrl: 'https://behance.net/carlosReyes',
    instagramUrl: 'https://instagram.com/carlosReyes',
  },
  {
    name: 'Laura Ortega',
    title: 'UX/UI Designer',
    description:
      'Diseñadora enfocada en experiencias de usuario atractivas y funcionales',
    image: <ProfileImage />,
    githubUrl: 'https://github.com/lauraOrtega',
    behanceUrl: 'https://behance.net/lauraOrtega',
    instagramUrl: 'https://instagram.com/lauraOrtega',
  },
  {
    name: 'Pedro Ramírez',
    title: 'Frontend Developer',
    description:
      'Desarrollador frontend apasionado por las tecnologías web modernas',
    image: <ProfileImage />,
    githubUrl: 'https://github.com/pedroRamirez',
    behanceUrl: 'https://behance.net/pedroRamirez',
    instagramUrl: 'https://instagram.com/pedroRamirez',
  },
  {
    name: 'Sergio Gonzalez',
    title: 'CEO',
    description: 'Creador y fundador de la comunidad SCRUM',
    image: <ProfileImage />,
    githubUrl: 'https://github.com/sergioGonzalez',
    behanceUrl: 'https://behance.net/sergioGonzalez',
    instagramUrl: 'https://instagram.com/sergioGonzalez',
  },
  {
    name: 'Ana Martínez',
    title: 'CTO',
    description: 'Experta en desarrollo de software y transformación digital',
    image: <ProfileImage />,
    githubUrl: 'https://github.com/anaMartinez',
    behanceUrl: 'https://behance.net/anaMartinez',
    instagramUrl: 'https://instagram.com/anaMartinez',
  },
  {
    name: 'Carlos Reyes',
    title: 'Product Manager',
    description: 'Líder en gestión de productos digitales e innovación',
    image: <ProfileImage />,
    githubUrl: 'https://github.com/carlosReyes',
    behanceUrl: 'https://behance.net/carlosReyes',
    instagramUrl: 'https://instagram.com/carlosReyes',
  },
  {
    name: 'Laura Ortega',
    title: 'UX/UI Designer',
    description:
      'Diseñadora enfocada en experiencias de usuario atractivas y funcionales',
    image: <ProfileImage />,
    githubUrl: 'https://github.com/lauraOrtega',
    behanceUrl: 'https://behance.net/lauraOrtega',
    instagramUrl: 'https://instagram.com/lauraOrtega',
  },
  {
    name: 'Pedro Ramírez',
    title: 'Frontend Developer',
    description:
      'Desarrollador frontend apasionado por las tecnologías web modernas',
    image: <ProfileImage />,
    githubUrl: 'https://github.com/pedroRamirez',
    behanceUrl: 'https://behance.net/pedroRamirez',
    instagramUrl: 'https://instagram.com/pedroRamirez',
  },
  {
    name: 'Sergio Gonzalez',
    title: 'CEO',
    description: 'Creador y fundador de la comunidad SCRUM',
    image: <ProfileImage />,
    githubUrl: 'https://github.com/sergioGonzalez',
    behanceUrl: 'https://behance.net/sergioGonzalez',
    instagramUrl: 'https://instagram.com/sergioGonzalez',
  },
  {
    name: 'Ana Martínez',
    title: 'CTO',
    description: 'Experta en desarrollo de software y transformación digital',
    image: <ProfileImage />,
    githubUrl: 'https://github.com/anaMartinez',
    behanceUrl: 'https://behance.net/anaMartinez',
    instagramUrl: 'https://instagram.com/anaMartinez',
  },
  {
    name: 'Carlos Reyes',
    title: 'Product Manager',
    description: 'Líder en gestión de productos digitales e innovación',
    image: <ProfileImage />,
    githubUrl: 'https://github.com/carlosReyes',
    behanceUrl: 'https://behance.net/carlosReyes',
    instagramUrl: 'https://instagram.com/carlosReyes',
  },
  {
    name: 'Laura Ortega',
    title: 'UX/UI Designer',
    description:
      'Diseñadora enfocada en experiencias de usuario atractivas y funcionales',
    image: <ProfileImage />,
    githubUrl: 'https://github.com/lauraOrtega',
    behanceUrl: 'https://behance.net/lauraOrtega',
    instagramUrl: 'https://instagram.com/lauraOrtega',
  },
  {
    name: 'Pedro Ramírez',
    title: 'Frontend Developer',
    description:
      'Desarrollador frontend apasionado por las tecnologías web modernas',
    image: <ProfileImage />,
    githubUrl: 'https://github.com/pedroRamirez',
    behanceUrl: 'https://behance.net/pedroRamirez',
    instagramUrl: 'https://instagram.com/pedroRamirez',
  },
  {
    name: 'Sergio Gonzalez',
    title: 'CEO',
    description: 'Creador y fundador de la comunidad SCRUM',
    image: <ProfileImage />,
    githubUrl: 'https://github.com/sergioGonzalez',
    behanceUrl: 'https://behance.net/sergioGonzalez',
    instagramUrl: 'https://instagram.com/sergioGonzalez',
  },
  {
    name: 'Ana Martínez',
    title: 'CTO',
    description: 'Experta en desarrollo de software y transformación digital',
    image: <ProfileImage />,
    githubUrl: 'https://github.com/anaMartinez',
    behanceUrl: 'https://behance.net/anaMartinez',
    instagramUrl: 'https://instagram.com/anaMartinez',
  },
  {
    name: 'Carlos Reyes',
    title: 'Product Manager',
    description: 'Líder en gestión de productos digitales e innovación',
    image: <ProfileImage />,
    githubUrl: 'https://github.com/carlosReyes',
    behanceUrl: 'https://behance.net/carlosReyes',
    instagramUrl: 'https://instagram.com/carlosReyes',
  },
  {
    name: 'Laura Ortega',
    title: 'UX/UI Designer',
    description:
      'Diseñadora enfocada en experiencias de usuario atractivas y funcionales',
    image: <ProfileImage />,
    githubUrl: 'https://github.com/lauraOrtega',
    behanceUrl: 'https://behance.net/lauraOrtega',
    instagramUrl: 'https://instagram.com/lauraOrtega',
  },
  {
    name: 'Pedro Ramírez',
    title: 'Frontend Developer',
    description:
      'Desarrollador frontend apasionado por las tecnologías web modernas',
    image: <ProfileImage />,
    githubUrl: 'https://github.com/pedroRamirez',
    behanceUrl: 'https://behance.net/pedroRamirez',
    instagramUrl: 'https://instagram.com/pedroRamirez',
  },
]

export default function ProfileSection() {
  const swiperRef = useRef<SwiperType | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.slideNext()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper
      }}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      spaceBetween={-30}
      slidesPerView={1}
      modules={[Navigation]}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: -30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: -30,
        },
      }}
      className='profile-swiper-container w-[275px] md:w-full md:max-w-screen-2xl'
    >
      {profiles.map((profile, index) => (
        <SwiperSlide key={index}>
          <ProfileCard
            key={index}
            name={profile.name}
            title={profile.title}
            description={profile.description}
            image={profile.image}
            githubUrl={profile.githubUrl}
            behanceUrl={profile.behanceUrl}
            instagramUrl={profile.instagramUrl}
          />
        </SwiperSlide>
      ))}
      {/* Botones personalizados */}
      <div className='swiper-button-prev absolute top-1/2 z-10 transform md:left-20'></div>
      <div className='swiper-button-next absolute top-1/2 z-10 transform md:right-20'></div>
    </Swiper>
  )
}
