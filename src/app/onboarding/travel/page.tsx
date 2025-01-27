'use client'
import { BorderLinearProgress } from '@/app/home/components/progressBar'
import { ChevronDown, ChevronUp } from 'react-feather'
import { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import { useOnboarding } from '@/app/onboarding/context/OnboardingContext'
import { useAuth } from '@/app/context/AuthContext'
import { toast } from 'react-hot-toast'
import { useRegister } from '@/app/context/RegisterContext'
import { useRouter } from 'next/navigation'

interface ListaItem {
  isActive: boolean
  label: string
}

const Lista = () => {
  const [expanded, setExpanded] = useState(true)
  const listaItems: ListaItem[] = [
    { label: 'Bienvenida', isActive: true },
    { label: 'Términos y condiciones', isActive: false }
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
  const { completeWelcome, progress, isWelcomeCompleted } = useOnboarding()
  const { user } = useAuth()
  const [showNextModuleButton, setShowNextModuleButton] =
    useState(isWelcomeCompleted)
  const { registerUser } = useRegister()
  const router = useRouter()

  useEffect(() => {
    if (isWelcomeCompleted) {
      setShowNextModuleButton(true)
    }
  }, [isWelcomeCompleted])

  useEffect(() => {
    if (!registerUser) {
      router.push('/login')
    }
  }, [registerUser, router])

  return (
    <div className='relative flex h-[70vh] max-h-[450px] w-screen'>
      <div className='h-full max-h-[400px] w-2/6 min-w-[240px]'>
        <div className='h-1.5/6 mx-6 mb-6 mt-10 bg-[#FFBEB0]'>
          <h1 className='p-4 text-3xl font-medium'>Onboarding</h1>
          <div className='px-5 py-1'>
            <BorderLinearProgress variant='determinate' value={progress} />
            <p>{progress}%&nbsp;&nbsp;Completado</p>
          </div>
        </div>
        <Lista />
        {showNextModuleButton && (
          <a
            className={`mx-6 mb-6 rounded-md bg-[#FD3600] p-2 font-bold text-white ${
              user?.onboarding ? 'cursor-not-allowed opacity-50' : ''
            }`}
            href={user?.onboarding ? '#' : 'terms'}
            onClick={(e) => {
              if (user?.onboarding) {
                e.preventDefault()
                toast.success('Ya has completado el onboarding')
                return
              }
              completeWelcome()
            }}
          >
            Siguiente módulo
          </a>
        )}
      </div>
      <div className='relative ml-6 mt-10 h-[95%] w-4/6'>
        <YouTube
          onEnd={() => {
            setShowNextModuleButton(true)
            completeWelcome()
          }}
          opts={{
            playerVars: {
              autoplay: 1,
              modestbranding: 1,
              rel: 0,
              showinfo: 0
            }
          }}
          videoId='LZJoRGuqb7o'
        />
      </div>
    </div>
  )
}
