'use client'

import { useEffect, useState } from 'react'
import { images } from '@/data/images_url'

export const DataComunity = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { imagesData } = images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesData.length)
    }, 5500)

    return () => clearInterval(interval)
  }, [imagesData.length])

  return (
    <div className='relative m-auto grid grid-cols-1 grid-rows-2 font-darker-grotesque md:max-w-[1980px] md:grid-cols-[1fr_1.35fr] md:grid-rows-1'>
      {/* Carrusel de imágenes */}
      {imagesData.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Imagen ${index + 1}`}
          className={`col-start-1 col-end-2 row-start-1 row-end-2 h-full w-full object-cover opacity-0 transition-opacity duration-1000 ease-in-out ${
            currentIndex === index ? 'opacity-100' : ''
          }`}
        />
      ))}

      {/* Contenido de texto */}
      <div className='relative flex flex-col items-center bg-[#082965] py-12 text-[#FCFCFC] md:items-start md:justify-center md:pl-[6dvw]'>
        <h3 className='mb-0 text-[7dvw] font-bold md:pb-7 md:text-start md:text-[45px] 2xl:text-[65px]'>
          Conecta, Aprende y Lidera
        </h3>

        <p className='my-8 w-9/12 text-center text-[4dvw] font-medium leading-[3.6dvw] md:w-[60%] md:text-start md:text-[22px] md:font-normal md:leading-[1.5dvw] 2xl:text-[30px]'>
          En Scrum Latam creemos en el poder de las personas para transformar el
          mundo. Conecta con una comunidad vibrante, aprende de experiencias
          reales y lidera el cambio desde donde estés.
        </p>

        <p className='mt-5 w-9/12 text-center text-[5.5dvw] font-bold leading-[4.5dvw] md:text-start md:text-[24px] md:font-normal md:leading-7 2xl:text-[28px] 2xl:leading-8'>
          <strong>No solo formes parte del cambio. Sé quien lo impulsa.</strong>
        </p>
      </div>
    </div>
  )
}
