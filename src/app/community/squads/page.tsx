'use client'

import {
  profilesCatalizador,
  profilesCOE,
  profilesTecnologia,
  headerCOE,
  headerTecnología,
  headerCatalziador
} from '@/data/data'
import SquadHeader from './components/SquadHeader'
import SquadProfileCarousel from './components/SquadProfileCarousel'
import StarIcon from './components/starIcon'
import Link from 'next/link'
import { darkerGrotesque } from '@/fonts'

export default function Squads() {
  return (
    <>
      <section className={`${darkerGrotesque.variable}`}>
        <div>
          <h1 className='mb-6 mt-8 text-center font-darker-grotesque text-[30px] font-bold text-[#FE2E00] md:mb-8 md:mt-16 md:text-4xl md:text-[40px]'>
            Los Squads
          </h1>
          <h3 className='mb-8 px-12 text-center font-darker-grotesque text-[18px] font-medium text-[#3B4A6B] md:mb-12 md:max-w-2xl md:px-0 md:text-[26px]'>
            Agilidad sin fines de lucro: Unimos principiantes y expertos para
            impulsar la transformación organizacional
          </h3>
        </div>
      </section>
      <section className='flex w-full flex-col items-center bg-[#E6EAF0] px-2 md:px-0'>
        <SquadHeader
          title={headerCOE.title}
          description={headerCOE.description}
        />
        <SquadProfileCarousel profiles={profilesCOE} />
      </section>
      <section className='flex w-full flex-col items-center bg-white px-2 md:px-0'>
        <SquadHeader
          title={headerTecnología.title}
          description={headerTecnología.description}
        />
        <SquadProfileCarousel profiles={profilesTecnologia} />
      </section>
      <section className='flex w-full flex-col items-center bg-[#E6EAF0] px-2 md:px-0'>
        <SquadHeader
          title={headerCatalziador.title}
          description={headerCatalziador.description}
        />
        <SquadProfileCarousel profiles={profilesCatalizador} />
      </section>
      <section className={`${darkerGrotesque.variable}`}>
        <div className='flex flex-col items-center justify-center bg-white py-16 md:mt-16'>
          <StarIcon />
          <h2 className='mb-8 text-center font-darker-grotesque text-[28px] font-bold text-[#FE2E00] md:text-[40px]'>
            ¡Únete a Nuestra Comunidad!
          </h2>
          <p className='mb-8 max-w-2xl text-center font-darker-grotesque text-[18px] font-medium text-[#3B4A6B] md:text-[24px]'>
            Conéctate con profesionales ágiles de toda Latinoamérica, accede a
            recursos exclusivos, y participa en eventos y webinars que
            impulsarán tu crecimiento
          </p>
          <Link href='/register'>
            <button className='rounded-2xl bg-[#3B4A6B] px-16 py-1 font-darker-grotesque text-lg font-medium text-white transition hover:bg-[#254075] md:mb-20 md:px-24 md:py-3 md:text-[22px]'>
              Registrarme ahora
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}
