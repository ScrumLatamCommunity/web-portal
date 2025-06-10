'use client'

import { useEffect, useState } from 'react'
import { PrimaryButton } from '../../../core/PrimaryButton' // Asumo que este componente sigue siendo válido
import { image_url_mobile, image_url_desktop } from '@/data/data' // Usaremos estos como placeholders
import useIsLargeScreen from '@/hooks/index'
import { useAuth } from '@/app/context/AuthContext'
import Image from 'next/image'
import { images } from '@/data/images_url'

const NEW_IMAGE_URL = images.welcomeComunity

export const WelcomeToCommunity = () => {
  const isLargeScreen = useIsLargeScreen()
  const [image, setImage] = useState(NEW_IMAGE_URL)

  useEffect(() => {
    setImage(NEW_IMAGE_URL)
  }, [isLargeScreen])

  const { user } = useAuth()

  return (
    // Sección principal con fondo blanco y padding vertical.
    <section className={`bg-white py-12 font-darker-grotesque md:py-20`}>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        {/* Contenedor con Grid para el layout de dos columnas */}
        <div className='grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20'>
          {/* Columna Izquierda: Texto y Botón */}
          <div className='text-center md:pr-12 md:text-left'>
            {/* Título principal con medidas exactas */}
            <h1 className='font-darker-grotesque text-[55px] font-bold leading-[50px] tracking-wide text-[#082965]'>
              ¡Bienvenido! a
            </h1>

            {/* Subtítulo con medidas exactas */}
            <p className='mt-6 font-darker-grotesque text-[26px] font-bold leading-[30px] text-[#082965]'>
              Scrum <span className='text-[#FE5833]'>Latam</span>: Donde la
              comunidad y la agilidad convergen.
            </p>

            {/* Párrafo descriptivo con medidas exactas */}
            <p className='mt-4 font-karla text-[16px] font-medium leading-[120%] tracking-wider text-gray-600'>
              Fomentamos el aprendizaje colaborativo y aplicamos metodologías
              ágiles para crecer juntos con éxito.
            </p>
            {/* Contenedor del Botón */}
            <div className='mt-10'>
              <PrimaryButton
                // Aplicando los nuevos colores al botón
                className='rounded-full bg-[#082965] px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#082965] focus:ring-offset-2'
                label='Únete a nosotros'
                // Aquí puedes añadir la lógica de navegación, ej: onClick={() => router.push('/register')}
              />
            </div>
          </div>

          {/* Columna Derecha: Imagen */}
          <div className='flex justify-center md:justify-end'>
            <div className='w-full md:w-full'>
              <Image
                src={image}
                alt='Comunidad Scrum Latam en una videollamada'
                width={1000} // Ancho intrínseco de la imagen para aspect-ratio
                height={900} // Alto intrínseco de la imagen
                className='lg:scale-140 h-auto w-full transform transition-transform duration-500 ease-in-out md:-translate-x-8 md:scale-125 lg:-translate-x-16'
                priority // Cargar esta imagen de forma prioritaria ya que es principal
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
