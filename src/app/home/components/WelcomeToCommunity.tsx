'use client'

import { PrimaryButton } from '../../../core/PrimaryButton'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
export const WelcomeToCommunity = () => {
  const router = useRouter()

  return (
    <section className='my-10 bg-white font-darker-grotesque md:py-10'>
      <div className='mx-auto max-w-[1440px] px-1 lg:px-1'>
        <div className='grid grid-cols-1 items-center md:grid-cols-2 md:gap-x-12 lg:gap-x-24'>
          <div className='text-center md:pr-12 md:text-left'>
            <h1 className='font-darker-grotesque text-[70px] font-bold leading-[70px] tracking-wide text-[#082965] md:text-8xl'>
              ¡Hola!
            </h1>
            <div className=''>
              <p className='mb-3 mt-8 font-darker-grotesque text-4xl font-bold leading-[30px] text-[#082965]'>
                Scrum <span className='text-[#FE5833]'>Latam</span> te da la
                bienvenida a un espacio donde la agilidad cobra vida.
              </p>
              <p className='mt-8 px-1 font-karla text-[19px] font-normal leading-[120%] tracking-wider text-[#082965]'>
                Aquí comienzan nuevas ideas, conexiones y oportunidades para
                transformar tu forma de trabajar, aprender y liderar. Estás en
                el lugar correcto para crecer, compartir y evolucionar.
              </p>
            </div>
            <div className='mt-10'>
              <PrimaryButton
                className='rounded-full bg-[#082965] px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#082965] focus:ring-offset-2'
                label='Únete a nosotros'
                onClick={() => router.push('/login')}
              />
            </div>
          </div>
          <div className='mt-12 flex items-center justify-center md:justify-end'>
            <div className='w-full max-w-[700px] overflow-visible md:w-full'>
              <Image
                src={
                  'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Home%2FSLHome.jpeg?alt=media&token=7ba18bcd-20bb-4c46-927c-89f93b262084'
                }
                alt='Comunidad Scrum Latam en una videollamada'
                width={1000}
                height={900}
                className='h-auto w-full max-w-[100%] transition-transform duration-500 ease-in-out md:scale-105'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
