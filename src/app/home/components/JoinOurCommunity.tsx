'use client'
import { useEffect, useRef, useState } from 'react'
import { images } from '@/data/images_url'

const { imagesData } = images

export const JoinOurCommunity = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showVideo, setShowVideo] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [images] = useState(imagesData)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5 // Establece el volumen al 50%
    }
  }, [])

  const handlePlayVideo = () => {
    setShowVideo(true)
  }

  return (
    <>
      <h2 className='mb-6 mt-2 pl-[8%] font-darker-grotesque text-[24px] font-bold text-[#082965] md:mb-16 md:mt-12 md:text-[60px]'>
        Porque aquí no solo aprendes… <strong>te transformas.</strong>
      </h2>
      <div className='relative m-auto mb-12 grid grid-cols-1 grid-rows-2 flex-col justify-center font-darker-grotesque md:max-w-[1980px] md:grid-cols-[1fr_1.35fr] md:grid-rows-1'>
        <div
          className={
            'relative flex flex-col items-center justify-center bg-[#082965] md:items-start md:bg-blend-normal lg:pl-24'
          }
        >
          <p className='text-center text-4 font-semibold leading-4 text-[#FCFCFC] md:w-[70%] md:text-start md:text-4 lg:text-9 lg:leading-[1.4] 2xl:text-11'>
            Conecta con una red vibrante de profesionales que viven y respiran
            agilidad.
          </p>
          <p className='text-center text-4 font-semibold leading-4 text-[#FCFCFC] md:w-[70%] md:text-start md:text-4 lg:text-9 lg:leading-[1.4] 2xl:text-11'>
            Aprende con experiencias reales, herramientas prácticas y espacios
            de crecimiento continuo.
          </p>
          <p className='mb-4 text-center text-4 font-semibold leading-4 text-[#FCFCFC] md:mb-6 md:w-[70%] md:text-start md:text-4 lg:mb-8 lg:text-9 lg:leading-[1.4] 2xl:mb-10 2xl:text-11'>
            Lidera el cambio desde tu rol, tu equipo, tu organización… o tu
            propósito.
          </p>

          <p className='text-center text-4 font-semibold text-[#FFFFFF] md:w-[70%] md:text-start md:text-4 lg:mt-8 lg:text-9 lg:leading-[1.4] 2xl:text-11'>
            <strong>
              {' '}
              No estás aquí por casualidad. Estás aquí porque estás listo.
            </strong>
          </p>
        </div>
        <div className='overflow-hidden bg-white lg:pr-2'>
          <div className='bg-black relative aspect-video'>
            {!showVideo ? (
              <div className='absolute inset-0 flex items-center justify-center'>
                <img
                  src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Home%2Funete_scrumlatam.png?alt=media&token=8ade5c9e-9d50-498c-90c0-c985f245710c'
                  alt='Video thumbnail'
                  className='h-full w-full object-cover'
                />
                <button
                  onClick={handlePlayVideo}
                  className='bg-black absolute inset-0 flex items-center justify-center bg-opacity-30 transition-all hover:bg-opacity-40'
                >
                  <div className='flex h-16 w-16 items-center justify-center shadow-lg'>
                    <svg
                      className='h-30 w-30 ml-1 text-[#bcb7b7]'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M8 5v14l11-7z' />
                    </svg>
                  </div>
                </button>
              </div>
            ) : (
              <video
                ref={videoRef}
                src='https://appwiseinnovations.dev/scrumlatam/video_otro.mp4'
                controls
                autoPlay
                className='h-full w-full'
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
