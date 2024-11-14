'use client'

import HeroSection from '@/app/community/components/heroSection'
import SquadsImage from '@/assets/squadsImg'
import SquadFeature from '@/app/community/components/squadFeature'
import PhoneImg from '@/assets/phoneImg'
import BooknoteImg from '@/assets/booknoteImg'
import MountainImg from '@/assets/mountainImg'
import ProfileSection from '../components/profileSection'

export default function Squads() {
  return (
    <>
      <HeroSection
        description='Somos una organización sin fines de lucro de la agilidad. Nuestro equipo multidisciplinario conformado por principiantes profesionales y expertos ágiles, donde fortalecemos y potenciamos conocimientos, experiencias, proyectos e iniciativas en todos los campos, a través de un proceso de transformación organizacional.'
        image={<SquadsImage width={393} height={268} />}
        linkTitle='Nuestros Squads'
        title='¿Quienes somos?'
      />
      <SquadFeature
        description='Desarrollar e implementar plataformas tecnológicas, automatizar procesos, explorar e implementar tecnologías emergentes, promover la cultura DevOps y compartir conocimiento y experiencias.'
        descriptionMiddle='Ser el impulsor de la innovación y la transformación digital de la comunidad, a través del desarrollo de soluciones tecnológicas que potencien la colaboración, el aprendizaje y la gestión de  proyectos ágiles. '
        image={<PhoneImg width={393} height={268} />}
        linkTitle='Squad Tecnología'
        title='¿Qué hacemos?'
      />
      <ProfileSection />
      <SquadFeature
        description='Diseñar y desarrollar cursos, talleres, promover la formación de líderes ágiles y Fomentar el aprendizaje continuo.'
        descriptionMiddle='Ser el líder en la generación de experiencias en formación y capacitación de alta calidad para la comunidad en Latinoamérica, impulsando el conocimiento y la adopción de prácticas ágiles.'
        image={<BooknoteImg width={250} height={268} />}
        linkTitle='Squad Tecnología'
        title='¿Qué hacemos?'
      />
      <ProfileSection />
      <SquadFeature
        description='Organizar eventos de alta calidad. Desarrollar estrategias de comunicación efectivas, atraer nuevos miembros y fortalecer la marca.'
        descriptionMiddle='Ser el motor que impulsa la  visibilidad, el crecimiento y el compromiso de la comunidad a través de la organización de eventos y estrategias de comunicación efectivas.'
        image={<MountainImg width={281} height={203} />}
        linkTitle='Squad Tecnología'
        title='¿Qué hacemos?'
      />
      <ProfileSection />
    </>
  )
}
