import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
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
]

export default function ProfileSection() {
  return (
    <Swiper
      navigation={true}
      spaceBetween={10}
      slidesPerView={1}
      modules={[Navigation]}
      breakpoints={{
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      className='max-w-screen-2xl'
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
    </Swiper>
  )
}
