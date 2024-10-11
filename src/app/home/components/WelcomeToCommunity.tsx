'use client'
import { useEffect, useState } from 'react'
import { PrimaryButton } from '../../../core/PrimaryButton'

const image_url_mobile =
  'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Imagen%20home%20-%20scrum%20latam%20MOBILE.svg?alt=media&token=9341b402-afa4-481c-90a4-1c12b8a121ab'
const image_url_desktop =
  'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Imagen%20home%20-%20DESTOK.svg?alt=media&token=abfb73e3-b1d4-4a92-a924-a86e3df53fb1'
export const WelcomeToCommunity = () => {
  const [image, setImage] = useState(image_url_mobile)
  const updateImage = () => {
    return window.innerWidth > 468
      ? setImage(image_url_desktop)
      : setImage(image_url_mobile)
  }

  useEffect(() => {
    updateImage()
    window.addEventListener('resize', updateImage)
    return () => window.removeEventListener('resize', updateImage)
  }, [])

  return (
    <section className='flex flex-col pl-4 md:items-center md:bg-gradient-to-tr md:from-red-300 md:to-transparent md:pl-0 xl:m-auto'>
      <div className='relative mx-auto flex max-w-screen-2xl flex-col items-center justify-center md:flex-row'>
        <div className='absolute right-0 top-10 h-[100px] w-[100px] rounded-full bg-blue-5 opacity-60 blur-2xl md:hidden'></div>
        <div className='absolute -left-14 bottom-1/4 h-[300px] w-[300px] rounded-full bg-red-300 opacity-20 blur-2xl md:hidden'></div>
        <div className='max-w-screen-2xl font-darker-grotesque md:w-1/2 md:pl-4'>
          <h1 className='max-w-prose text-14 font-darker-grotesque-4 leading-1 text-red-500 md:text-15 xl:text-19'>
            ¡Bienvenido!
          </h1>
          <h2 className='text-12 font-extrabold leading-8 opacity-80 md:w-11/12 md:text-13 md:leading-[33px] xl:w-4/5 xl:text-17 xl:leading-1'>
            a Scrum Latam: Donde la Comunidad y la Agilidad Convergen
          </h2>
          <p className='w-[86%] pt-6 font-karla text-5 font-semibold leading-[21.6px] text-blue-8 md:w-[100%] md:text-6 md:leading-[29.23px] xl:w-[80.1%] xl:text-10'>
            Nos dedicamos al aprendizaje colaborativo y a la implementación de
            metodologías ágiles. ¡Bienvenidos a un entorno donde la cooperación
            y la agilidad impulsan nuestro crecimiento y éxito!
          </p>
          <div className='hidden md:block md:pt-5 xl:pt-10'>
            <PrimaryButton label='Únete a nosotros' />
          </div>
        </div>
        <img src={image} alt='Landscape picture' />
      </div>
    </section>
  )
}
