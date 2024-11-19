'use client'
import { BorderLinearProgress } from '@/app/home/components/progressBar'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'react-feather'
import YouTube from 'react-youtube'

interface ListaItem {
  label: string
  isActive: boolean
}

const Lista = () => {
  const [expanded, setExpanded] = useState(true)
  const listaItems: ListaItem[] = [
    { label: 'Bienvenida', isActive: true },
    { label: 'Términos y condiciones', isActive: false },
  ]

  const handleToggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <div className='mx-6 h-3/6 max-h-[450px]'>
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
  const [showNextModuleButton, setShowNextModuleButton] = useState(false)
  const value = 15

  return (
    <div className='relative flex h-[70vh] max-h-[450px] w-screen'>
      <div className='h-full max-h-[400px] w-2/6 min-w-[240px]'>
        <div className='h-1.5/6 mx-6 mb-6 mt-10 bg-[#FFBEB0]'>
          <h1 className='p-4 text-3xl font-medium'>Onboarding</h1>
          <div className='px-5 py-1'>
            <BorderLinearProgress variant='determinate' value={value} />
            <p>{value}%&nbsp;&nbsp;Completado</p>
          </div>
        </div>
        <Lista />
        {showNextModuleButton && (
          <a
            className='mx-6 mb-6 rounded-md bg-[#FD3600] p-2 font-bold text-white'
            href='terms'
          >
            Siguiente módulo
          </a>
        )}
      </div>
      <div className='relative ml-6 mt-10 h-[95%] w-4/6'>
        <YouTube
          videoId='LZJoRGuqb7o'
          opts={{
            playerVars: {
              autoplay: 1,
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
            },
          }}
          onEnd={() => setShowNextModuleButton(true)}
        />
      </div>
    </div>
  )
}
