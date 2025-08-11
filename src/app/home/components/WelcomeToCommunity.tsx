'use client'

import { PrimaryButton } from '../../../core/PrimaryButton'
import Image from 'next/image'
import { images } from '@/data/images_url'
import { useRouter } from 'next/navigation'
import useIsLargeScreen from '@/hooks'

const NEW_IMAGE_URL = images.welcomeComunity

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
          <div className='mt-12 flex justify-center md:justify-end'>
            <div className='w-full max-w-[700px] overflow-hidden md:w-full'>
              <Image
                src={NEW_IMAGE_URL}
                alt='Comunidad Scrum Latam en una videollamada'
                width={1000}
                height={900}
                className='h-auto w-full max-w-[100%] transition-transform duration-500 ease-in-out md:-translate-x-4 md:scale-105 lg:-translate-x-8'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
