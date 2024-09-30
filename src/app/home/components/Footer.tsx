'use client'

import {
  Linkedin,
  Facebook,
  Instagram,
  ChevronDown,
  ChevronUp,
} from 'react-feather'
import { useState, useEffect } from 'react'
/* import Image from 'next/image' */
import 'tailwindcss/tailwind.css'

export const Footer = () => {
  const [community, setCommunity] = useState<boolean>(false)
  const [training, setTraining] = useState<boolean>(false)
  const [documentation, setDocumentation] = useState<boolean>(false)
  const [news, setNews] = useState<boolean>(false)
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 480)

    // chequeo para que se ejecute solo en el cliente
    if (typeof window !== 'undefined') {
      setIsLargeScreen(window.innerWidth > 480)
      window.addEventListener('resize', handleResize)
    }

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleCommunity = () => {
    if (!isLargeScreen) setCommunity(!community)
  }
  const toggleTraining = () => {
    if (!isLargeScreen) setTraining(!training)
  }
  const toggleDocumentation = () => {
    if (!isLargeScreen) setDocumentation(!documentation)
  }
  const toggleNews = () => {
    if (!isLargeScreen) setNews(!news)
  }

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col items-center py-6 px-4 bg-black-10 text-white'>
        <div className='max-w-[960px] w-full flex flex-col gap-4'>
          <div className='flex flex-col w-full'>
            <img
              /* se colocó de Image a img porque está activo dangerouslyAllowSVG y las imágenes de Firebase son image/svg+xml */
              src={
                'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Logos%20comunidad%2Flogo_footer_orange.svg?alt=media&token=ddfda43a-c5e1-4fc3-b47f-df419d556597'
              }
              alt='logo'
              /*                          width={312}
                                                        height={63} */
              className='w-40 h-12 sm:w-80 sm:h-16'
            />
          </div>

          <div className='flex flex-wrap text-lg text-black justify-start sm:justify-end flex-col sm:flex-row gap-10'>
            <div className='flex flex-col gap-4'>
              <div
                className=' flex text-black-1 font-bold cursor-pointer sm:flex-row gap-2'
                onClick={toggleCommunity}
              >
                Comunidad
                {!isLargeScreen &&
                  (community ? <ChevronUp /> : <ChevronDown />)}
              </div>
              {(isLargeScreen || community) && (
                <>
                  <span className='font-light'>Conócenos</span>
                  <span className='font-light'>¿Quiénes somos?</span>
                </>
              )}
            </div>

            <div className='flex flex-col gap-4'>
              <div
                className='flex text-black-1 font-bold cursor-pointer sm:flex-row gap-2'
                onClick={toggleTraining}
              >
                Entrenamiento
                {!isLargeScreen && (training ? <ChevronUp /> : <ChevronDown />)}
              </div>
              {(isLargeScreen || training) && (
                <>
                  <span className='font-light'>Eventos</span>
                  <span className='font-light'>Webinars</span>
                  <span className='font-light'>Talleres</span>
                </>
              )}
            </div>

            <div className='flex flex-col gap-4'>
              <div
                className='flex text-black-1 font-bold cursor-pointer sm:flex-row gap-2'
                onClick={toggleDocumentation}
              >
                Documentación
                {!isLargeScreen &&
                  (documentation ? <ChevronUp /> : <ChevronDown />)}
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              <div
                className='flex text-black-1 font-bold cursor-pointer sm:flex-row gap-2'
                onClick={toggleNews}
              >
                Novedades
                {!isLargeScreen && (news ? <ChevronUp /> : <ChevronDown />)}
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-3 mt-6'>
            <span className='sm:text-lg text-black'>
              Síguenos en nuestras redes
            </span>
            <div className='flex gap-4'>
              <a
                href='https://www.facebook.com/scrumlatamcomunidad'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Facebook className='text-red-500' />
              </a>
              <a
                href='https://www.instagram.com/scrumlatamcomunidad/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Instagram className='text-red-500' />
              </a>
              <a
                href='https://www.linkedin.com/company/scrum-latam-comunidad'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Linkedin className='text-red-500' />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row place-content-center py-5 text-center gap-8 sm:gap-12 text-black font-semibold '>
        <span>© 2024 Scrumlatam. All rights reserved.</span>
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
      </div>
    </div>
  )
}
