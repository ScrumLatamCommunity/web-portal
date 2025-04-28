'use client'

import HeroSection from '@/app/community/components/heroSection'
import SquadsImage from '@/assets/squadsImg'
import SquadFeature from '@/app/community/components/squadFeature'
import PhoneImg from '@/assets/phoneImg'
import BooknoteImg from '@/assets/booknoteImg'
import MountainImg from '@/assets/mountainImg'
import ProfileSection from '@/app/community/components/profileSection'
import JoinCommunity from '@/app/community/components/joinSection'
import Breadcrumbs from '@/app/community/components/breadcrumbs'

const profilesTecnologia = [
  {
    name: 'Ruben Dario Romero Chica',
    title: 'Fundador',
    description: 'Creador y fundador de la comunidad SCRUM Latam',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/profile_squads_photo%2FRuben.jpg?alt=media&token=b4607afc-b5c6-4b94-890a-312231e7aa16',
    linkedinUrl: 'https://www.linkedin.com/in/ruben-dario-scrumlatam/'
  },
  {
    name: 'Majiruz Vargas',
    title: 'UX/UI Designer',
    description:
      'Diseñadora enfocada en experiencias de usuario atractivas y funcionales',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/profile_squads_photo%2FMajiruz_Vargas.jpeg?alt=media&token=5f61150b-ea70-4ff8-bc68-d0f49ce39971',
    linkedinUrl: 'https://www.linkedin.com/in/majiruz-vargas-majilustra/'
  },
  {
    name: 'Fernando Campellone',
    title: 'Fullstack Developer',
    description:
      'Desarrollador fullstack apasionado por las tecnologías web modernas',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/profile_squads_photo%2FFernandoCampellone.jpg?alt=media&token=98160cee-e1aa-48d2-ae61-08405079f5df',
    linkedinUrl: 'https://www.linkedin.com/in/fernando-campellone-a57335232/'
  },
  {
    name: 'David Morcillo Benavidez',
    title: 'Fullstack Developer',
    description:
      'Desarrollador fullstack apasionado por las tecnologías web modernas',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/profile_squads_photo%2FAlejandro_Morcillo.jpg?alt=media&token=26ecc8ae-527e-4eff-91d4-5cb199b4c102',
    linkedinUrl:
      'https://www.linkedin.com/in/david-morcillo-benavidez-aljo1996/'
  },
  {
    name: 'Geornith Melo Ortiz',
    title: 'Product Owner',
    description: 'Experta en desarrollo de software y transformación digital',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/profile_squads_photo%2FGeornith_Melo_Ortiz.jpg?alt=media&token=e53d32c9-69d6-4de3-ab11-1292332a7b99',
    linkedinUrl: 'www.linkedin.com/in/geornith-melo-ortiz'
  }
]

const profilesCOE = [
  {
    name: 'Perfil COE',
    title: 'COE',
    description: 'Descricion perfil COE',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2Femoji_user_blue.svg?alt=media&token=d3a4b3b8-49e0-40f0-a71d-a00f5224f46e',
    linkedinUrl: 'https://www.linkedin.com/company/scrum-latam-comunidad/'
  },
  {
    name: 'Perfil COE',
    title: 'COE',
    description: 'Descricion perfil COE',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2Femoji_user_blue.svg?alt=media&token=d3a4b3b8-49e0-40f0-a71d-a00f5224f46e',
    linkedinUrl: 'https://www.linkedin.com/company/scrum-latam-comunidad/'
  },
  {
    name: 'Perfil COE',
    title: 'COE',
    description: 'Descricion perfil COE',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2Femoji_user_blue.svg?alt=media&token=d3a4b3b8-49e0-40f0-a71d-a00f5224f46e',
    linkedinUrl: 'https://www.linkedin.com/company/scrum-latam-comunidad/'
  }
]

const profilesCatalizador = [
  {
    name: 'Perfil Catalizador',
    title: 'Catalizador',
    description: 'Descricion perfil Catalizador',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2Femoji_user_blue.svg?alt=media&token=d3a4b3b8-49e0-40f0-a71d-a00f5224f46e',
    linkedinUrl: 'https://www.linkedin.com/company/scrum-latam-comunidad/'
  },
  {
    name: 'Perfil Catalizador',
    title: 'Catalizador',
    description: 'Descricion perfil Catalizador',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2Femoji_user_blue.svg?alt=media&token=d3a4b3b8-49e0-40f0-a71d-a00f5224f46e',
    linkedinUrl: 'https://www.linkedin.com/company/scrum-latam-comunidad/'
  }
]

export default function Squads() {
  return (
    <>
      <Breadcrumbs rootName='Comunidad' />
      <HeroSection
        description='Somos una organización sin fines de lucro de la agilidad. Nuestro equipo multidisciplinario conformado por principiantes profesionales y expertos ágiles, donde fortalecemos y potenciamos conocimientos, experiencias, proyectos e iniciativas en todos los campos, a través de un proceso de transformación organizacional.'
        image={
          <SquadsImage className='h-[268px] w-[393px] md:h-[456px] md:w-[580px]' />
        }
        linkTitle='Nuestros Squads'
        title='¿Quienes somos?'
      />
      <SquadFeature
        description='Diseñar y desarrollar cursos, talleres, promover la formación de líderes ágiles y Fomentar el aprendizaje continuo.'
        descriptionMiddle='Ser el líder en la generación de experiencias en formación y capacitación de alta calidad para la comunidad en Latinoamérica, impulsando el conocimiento y la adopción de prácticas ágiles.'
        image={<BooknoteImg className='h-[268px] w-[393px]' />}
        linkTitle='COE'
        title='¿Qué hacemos?'
      />
      <ProfileSection profiles={profilesCOE} />
      <SquadFeature
        description='Desarrollar e implementar plataformas tecnológicas, automatizar procesos, explorar e implementar tecnologías emergentes, promover la cultura DevOps y compartir conocimiento y experiencias.'
        descriptionMiddle='Ser el impulsor de la innovación y la transformación digital de la comunidad, a través del desarrollo de soluciones tecnológicas que potencien la colaboración, el aprendizaje y la gestión de  proyectos ágiles. '
        image={<PhoneImg className='h-[268px] w-[393px]' />}
        linkTitle='Squad Tecnología'
        title='¿Qué hacemos?'
      />
      <ProfileSection profiles={profilesTecnologia} />
      <SquadFeature
        description='Diseñar y desarrollar cursos, talleres, promover la formación de líderes ágiles y Fomentar el aprendizaje continuo.'
        descriptionMiddle='Ser el líder en la generación de experiencias en formación y capacitación de alta calidad para la comunidad en Latinoamérica, impulsando el conocimiento y la adopción de prácticas ágiles.'
        image={<BooknoteImg className='h-[268px] w-[393px]' />}
        linkTitle='Squad Catalizador'
        title='¿Qué hacemos?'
      />
      <ProfileSection profiles={profilesCatalizador} />
      <JoinCommunity
        buttonText='Regístrate Ahora'
        callToAction='¡Regístrate hoy y sé parte de nuestra transformación ágil!'
        description='Conéctate con profesionales ágiles de toda Latinoamérica, accede a recursos exclusivos, y participa en eventos y webinars que impulsarán tu crecimiento.'
        title='¡Únete a Nuestra Comunidad!'
      />
    </>
  )
}
