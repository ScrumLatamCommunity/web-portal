'use client'
import { useEffect, useState } from 'react'
import { images } from '@/data/images_url'

const { imagesData } = images

export const DataComunity = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [images] = useState(imagesData)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5500)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className='relative m-auto grid grid-cols-1 grid-rows-2 flex-col justify-center font-darker-grotesque md:max-w-[1980px] md:grid-cols-[1fr_1.35fr] md:grid-rows-1'>
      {images.map((url, index) => (
        <img
          alt={`Imagen ${index + 1}`}
          className={`col-start-1 col-end-2 row-start-1 row-end-2 h-full w-full object-cover opacity-0 transition-opacity duration-1000 ease-in-out ${currentIndex === index ? 'opacity-100' : ''}`}
          key={index}
          src={url}
        />
      ))}
      <div
        className={
          'relative flex flex-col items-center justify-center bg-[#082965] text-[#FCFCFC] md:items-start md:pl-[6dvw] md:text-blue-9 md:bg-blend-normal'
        }
      >
        <h3 className='mb-0 text-[5.5dvw] font-bold text-[#FCFCFC] md:pb-7 md:text-start md:text-[45px] 2xl:text-[65px]'>
          Conecta, Aprende y Lidera
        </h3>
        <p className='mt-5 w-9/12 text-center text-[3.5dvw] font-medium leading-[3.6dvw] text-[#FCFCFC] md:w-[60%] md:text-start md:text-[18px] md:font-normal md:leading-4 2xl:text-[22px]'>
          Somos una comunidad <b className='font-bold'>LATAM </b>
          dedicada a la difusión y aprendizaje del marco de trabajo Scrum y
          otras metodologías ágiles. Nuestro objetivo es compartir
          conocimientos, experiencias y fomentar el desarrollo continuo de
          nuestros miembros.
        </p>
        <p className='mt-5 w-9/12 text-center text-[3.5dvw] font-medium leading-[3.6dvw] text-[#FCFCFC] md:w-[60%] md:text-start md:text-[18px] md:font-normal md:leading-4 2xl:text-[22px]'>
          Empoderamos a líderes de equipos en organizaciones, promoviendo el
          crecimiento profesional y la adaptación a diversos proyectos en el
          mundo de la Agilidad.
        </p>
      </div>
    </div>
  )
}
