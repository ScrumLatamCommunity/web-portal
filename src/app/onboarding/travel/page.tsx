'use client'

import { BorderLinearProgress } from '@/app/home/components/progressBar'
import { useState, useRef, useEffect } from 'react'
import { ChevronDown, ChevronUp } from 'react-feather'

interface ListaItem {
  label: string
  isActive: boolean
}

const Lista = () => {
  const [expanded, setExpanded] = useState(true)
  const listaItems: ListaItem[] = [
    { label: 'Bienvenida', isActive: true },
    { label: 'Visión y misión', isActive: true },
    { label: 'Términos y condiciones', isActive: false },
  ]

  const handleToggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <div className='mx-6 h-3/6'>
      <div className='flex items-center justify-between bg-[#FFBEB0] p-4'>
        <div className='h-6 min-h-[24px] w-6 min-w-[24px] rounded-full border border-gray-300 bg-white' />
        <h2 className='text-xl font-medium'>Conociendo a la comunidad</h2>
        {expanded ? (
          <ChevronUp onClick={handleToggleExpanded} />
        ) : (
          <ChevronDown onClick={handleToggleExpanded} />
        )}
      </div>
      {expanded && (
        <ul className='max-h-[200px] overflow-y-auto bg-[#FFBEB0] px-4'>
          {listaItems.map((item, index) => (
            <li key={index} className='flex items-center py-1'>
              <div
                className={`size-6 min-h-[24px] min-w-[24px] rounded-full ${
                  item.isActive ? 'bg-[#061D48]' : 'bg-white'
                } border border-gray-300`}
              />
              <span className='ml-4 text-lg'>{item.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Travel() {
  const value = 15
  const [showNextModuleButton, setShowNextModuleButton] = useState(false)
  const videoRef: React.RefObject<HTMLDivElement> = useRef(null)

  useEffect(() => {
    const loadVideo = () => {
      const tag: HTMLScriptElement = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      document.body.appendChild(tag)

      const videoId: string = 'FnwD5naSJFI'

      ;(window as Window).YT.onYouTubeIframeAPIReady = () => {
        const player = new window.YT.Player(videoRef.current!, {
          videoId,
          playerVars: {
            controls: 0,
            showinfo: 0,
            modestbranding: 0,
            rel: 0,
            autoplay: 1,
          },
          events: {
            onStateChange: (event: { data: number }) => {
              if (event.data === 0) {
                setShowNextModuleButton(true)
              }
            },
          },
        })
        return player
      }
    }

    loadVideo()

    return () => {
      if (videoRef.current) {
        videoRef.current.innerHTML = ''
      }
    }
  }, [])

  return (
    <div className='relative flex h-[70vh] w-screen'>
      <div className='h-full max-h-[400px] w-2/6 min-w-[240px]'>
        <div className='h-1.5/6 mx-6 mb-6 mt-20 bg-[#FFBEB0]'>
          <h1 className='p-4 text-3xl font-medium'>Onboarding</h1>
          <div className='px-5 py-2'>
            <BorderLinearProgress variant='determinate' value={value} />
            <p>{value}%&nbsp;&nbsp;Completado</p>
          </div>
        </div>
        <Lista />
        {showNextModuleButton && (
          <a
            className='mx-6 mb-4 rounded-md bg-[#FD3600] p-2 font-bold text-white'
            href='terms'
          >
            Siguiente módulo
          </a>
        )}
      </div>
      <div className='h-full w-4/6 pt-20'>
        <div ref={videoRef} className='relative aspect-video h-[95%] w-[95%]' />
      </div>
    </div>
  )
}
