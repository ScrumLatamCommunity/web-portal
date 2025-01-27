'use client'
import { useEffect, useState } from 'react'
import { PrimaryButton } from '../../../core/PrimaryButton'
import { image_url_mobile, image_url_desktop } from '@/data/data'
import useIsLargeScreen from '@/hooks/index'
import { useAuth } from '@/app/context/AuthContext'

export const WelcomeToCommunity = () => {
  const { user } = useAuth()
  console.log(user)
  const isLargeScreen = useIsLargeScreen(468)
  const [image, setImage] = useState(image_url_mobile)

  useEffect(() => {
    setImage(isLargeScreen ? image_url_desktop : image_url_mobile)
  }, [isLargeScreen])

  return (
    <section className='flex flex-col pl-4 md:items-center md:bg-gradient-to-tr md:from-red-300 md:to-transparent md:pl-0 xl:m-auto'>
      <div className='relative mx-auto flex max-w-screen-2xl flex-col items-center justify-center md:flex-row'>
        <div className='absolute right-0 top-10 h-[100px] w-[100px] rounded-full bg-blue-5 opacity-60 blur-2xl md:hidden'></div>
        <div className='absolute -left-14 bottom-1/4 h-[300px] w-[300px] rounded-full bg-red-300 opacity-20 blur-2xl md:hidden'></div>
        <div className='max-w-screen-2xl font-darker-grotesque md:w-1/2 md:pl-16 xl:pl-40'>
          <h1 className='max-w-prose text-15 font-darker-grotesque-4 leading-1 text-red-500 md:text-14 xl:text-19'>
            ¡Bienvenido!
          </h1>
          <h2 className='text-12 font-extrabold leading-8 opacity-80 md:w-11/12 md:text-11 md:leading-[30px] xl:w-11/12 xl:text-17 xl:leading-1'>
            Scrum Latam: Donde la Comunidad y la Agilidad Convergen
          </h2>
          <p className='w-[86%] pt-6 font-karla text-5 font-semibold leading-[21.6px] text-blue-8 md:w-[100%] md:text-4 md:leading-[23.23px] xl:w-[85.1%] xl:text-10 xl:leading-8'>
            Nos dedicamos al aprendizaje colaborativo y a la implementación de
            metodologías ágiles. ¡Bienvenidos a un entorno donde la cooperación
            y la agilidad impulsan nuestro crecimiento y éxito!
          </p>
          <div className='pt-6 md:block md:pt-4 xl:pt-10'>
            <PrimaryButton label='Únete a nosotros' />
          </div>
        </div>
        <img
          alt='Landscape picture'
          className={`-mt-2 aspect-[693/662] ${
            isLargeScreen ? 'w-[45%] -translate-x-10' : 'w-[85%] -translate-x-1'
          } -translate-y-8`}
          src={image}
        />
      </div>
    </section>
  )
}
