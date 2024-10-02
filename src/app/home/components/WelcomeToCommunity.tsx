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
    <section className='flex flex-col pl-4 sm:flex-row sm:items-center max-w-[1440px] sm:bg-gradient-to-tr sm:from-red-300 sm:to-transparent xl:m-auto'>
      <div className='w-[100px] h-[100px] bg-blue-5 rounded-full blur-2xl opacity-60 absolute right-0 top-10 sm:hidden'></div>
      <div className='w-[300px] h-[300px] bg-red-300 rounded-full blur-2xl opacity-20 absolute bottom-1/4 -left-14 sm:hidden'></div>
      <div className='font-darker-grotesque sm:w-1/2 sm:pl-36 sm:grow'>
        <h1 className='text-17 text-red-500 leading-1 font-darker-grotesque-4 sm:text-19'>
          ¡Bienvenido!
        </h1>
        <h2 className='font-extrabold text-12 leading-8 opacity-80 sm:text-17 sm:w-4/5 sm:leading-1'>
          a Scrum Latam: Donde la Comunidad y la Agilidad Convergen
        </h2>
        <p className='text-5 w-[86%] font-karla pt-6 text-blue-8 font-semibold leading-[21.6px] sm:text-10 sm:leading-[29.23px] sm:w-[80%]'>
          Nos dedicamos al aprendizaje colaborativo y a la implementación de
          metodologías ágiles. ¡Bienvenidos a un entorno donde la cooperación y
          la agilidad impulsan nuestro crecimiento y éxito!
        </p>
        <div className='hidden sm:block sm:pt-10'>
          <PrimaryButton label='Únete a nosotros' />
        </div>
      </div>
      <img className='w-auto' alt='Scrum Latam' src={image} />
    </section>
  )
}
