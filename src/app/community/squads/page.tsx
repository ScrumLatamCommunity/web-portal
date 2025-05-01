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
import {
  profilesCatalizador,
  profilesCOE,
  profilesTecnologia
} from '@/data/data'

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
        description='Nos encargaremos de brindar soporte y asesoría constante, asegurando que cada equipo y proyecto esté alineado con los principios y la visión de la comunidad.'
        descriptionMiddle='Facilitar la innovación y la mejora continua. Queremos establecer un entorno organizado y estructurado que permita a todos los miembros colaborar de manera efectiva, compartir conocimientos y aplicar las mejores prácticas ágiles. '
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
        description='Acompañamos y guiamos a los equipos en la adopción de Scrum, facilitamos espacios de reflexión y aprendizaje, diseñamos experiencias formativas, promovemos la experimentación ágil y compartimos conocimientos para construir una cultura organizacional centrada en la mejora continua y el valor.'
        descriptionMiddle='Ser el motor del cambio cultural y de la evolución ágil dentro de la comunidad, a través de la promoción de prácticas Scrum efectivas que fortalezcan la colaboración, el aprendizaje continuo y la mejora de los equipos.'
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
