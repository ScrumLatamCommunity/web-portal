'use client'
import { useState, useEffect, useRef } from 'react'
import { useOnboarding } from '@/app/onboarding/context/OnboardingContext'
import { useAuth } from '@/app/context/AuthContext'
import { toast } from 'react-hot-toast'
import { useRegister } from '@/app/context/RegisterContext'
import { useRouter } from 'next/navigation'
import { LogoScrumlatam } from '@/components/Logo'
import React from 'react'
import { MobileLogo } from '@/components/MobileLogo'
import { darkerGrotesque, inter, karla } from '@/fonts'

interface ListaItem {
  isActive: boolean
  label: string
  isCompleted: boolean
}

export default function Travel() {
  const { completeWelcome, isWelcomeCompleted } = useOnboarding()
  const { user, token } = useAuth() // Agregar token del AuthContext
  const [showVideo, setShowVideo] = useState(false)
  const [videoCompleted, setVideoCompleted] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [showTermsCheckbox, setShowTermsCheckbox] = useState(false)
  const [showNextModuleButton, setShowNextModuleButton] =
    useState(isWelcomeCompleted)
  const [currentStep, setCurrentStep] = useState(0)
  const [comment, setComment] = useState('')
  const termsContainerRef = useRef<HTMLDivElement>(null)
  const { registerUser } = useRegister()
  const router = useRouter()
  const videoRef = useRef<HTMLVideoElement>(null)

  const [listaItems, setListaItems] = useState<ListaItem[]>([
    { label: 'Bienvenida', isActive: true, isCompleted: false },
    { label: 'Términos y Condiciones', isActive: false, isCompleted: false },
    {
      label: 'Expectativas sobre la comunidad',
      isActive: false,
      isCompleted: false
    }
  ])

  useEffect(() => {
    if (isWelcomeCompleted) {
      setShowNextModuleButton(true)
      setVideoCompleted(true)
      setListaItems((prev) =>
        prev.map((item, index) =>
          index === 0 ? { ...item, isCompleted: true } : item
        )
      )
    }
  }, [isWelcomeCompleted])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5 // Establece el volumen al 50%
    }
  }, [])

  const handlePlayVideo = () => {
    setShowVideo(true)
  }

  const handleVideoEnd = () => {
    setVideoCompleted(true)
    setShowNextModuleButton(true)
    completeWelcome()
  }

  const handleSkip = () => {
    toast.success('Onboarding omitido')
    router.push('/')
  }

  const handleFinishOnboarding = async () => {
    if (!registerUser && !user) {
      toast.error('No hay información del usuario')
      return
    }

    const API_URL = process.env.NEXT_PUBLIC_API_URL
    let userEmail = registerUser?.email || user?.email

    // Si no tenemos email, intentamos obtenerlo del localStorage o del token
    if (!userEmail) {
      const localToken = localStorage.getItem('token')
      if (localToken) {
        try {
          const decodedToken = JSON.parse(atob(localToken.split('.')[1]))
          userEmail = decodedToken.email
        } catch (error) {
          // Error decodificando token
        }
      }
    }

    // Validación final
    if (!userEmail) {
      toast.error('No se pudo obtener el email del usuario')
      return
    }

    try {
      // Primero guardamos el comentario si existe
      if (comment.trim()) {
        const commentData = {
          email: userEmail,
          comment: comment
        }

        const commentResponse = await fetch(`${API_URL}comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify(commentData)
        })

        if (!commentResponse.ok) {
          // Error al guardar comentario, continuamos aunque falle
        }
      }

      // Luego marcamos el onboarding como completado
      const onboardingData = {
        email: userEmail,
        completed: true // Cambiar de 'onboarding' a 'completed'
      }

      const response = await fetch(`${API_URL}auth/onboarding`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token || localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(onboardingData)
      })

      if (response.ok) {
        const responseData = await response.json()

        // Verificar si la respuesta contiene el usuario actualizado
        if (responseData && responseData.onboarding === true) {
          toast.success('¡Onboarding completado!')
          router.push('/')
        } else {
          toast.error('Error: El onboarding no se actualizó correctamente')
        }
      } else {
        const errorData = await response.text()
        toast.error('Error al completar el onboarding')
      }
    } catch (error) {
      toast.error('Error al completar el onboarding')
    }
  }

  const handleContinue = () => {
    if (currentStep === 0 && !videoCompleted) {
      toast.error('Por favor, mira el video completo antes de continuar')
      return
    }

    if (currentStep === 1 && (!showTermsCheckbox || !termsAccepted)) {
      toast.error('Por favor, acepta los términos y condiciones para continuar')
      return
    }

    // Si es el último paso, finalizar el onboarding
    if (currentStep === 2) {
      handleFinishOnboarding()
      return
    }

    if (user?.onboarding) {
      toast.success('Ya has completado el onboarding')
      return
    }

    // Marcar el paso actual como completado y activar el siguiente
    setListaItems((prev) =>
      prev.map((item, index) => {
        if (index === currentStep)
          return { ...item, isActive: false, isCompleted: true }
        if (index === currentStep + 1) return { ...item, isActive: true }
        return item
      })
    )

    setCurrentStep((prev) => prev + 1)
  }

  const handleTermsScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.target as HTMLDivElement
    const isAtBottom =
      Math.abs(
        element.scrollHeight - element.scrollTop - element.clientHeight
      ) < 50
    if (isAtBottom) {
      setShowTermsCheckbox(true)
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className='h-[350px] overflow-hidden rounded-lg bg-white shadow-lg md:h-[360px] 2xl:h-[485px]'>
            <div className='bg-black relative aspect-video'>
              {!showVideo ? (
                <div className='absolute inset-0 flex items-center justify-center'>
                  <img
                    src='https://appwiseinnovations.dev/scrumlatam/Captura%20de%20pantalla%202025-07-06%20192049.png'
                    alt='Video thumbnail'
                    className='h-full w-full object-cover'
                  />
                  <button
                    onClick={handlePlayVideo}
                    className='bg-black absolute inset-0 flex items-center justify-center bg-opacity-30 transition-all hover:bg-opacity-40'
                  >
                    <div className='flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg'>
                      <svg
                        className='text-black ml-1 h-6 w-6'
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
                  src='https://appwiseinnovations.dev/scrumlatam/video_ruben_onboarding.mp4'
                  controls
                  autoPlay
                  className='h-full w-full'
                  onEnded={handleVideoEnd}
                />
              )}
            </div>
          </div>
        )
      case 1:
        return (
          <div
            className={`${darkerGrotesque.variable} h-[350px] rounded-lg border-[1px] border-[#072356] bg-white p-6 md:h-[360px] 2xl:h-[485px]`}
          >
            <div
              ref={termsContainerRef}
              onScroll={handleTermsScroll}
              className='h-full overflow-y-auto pr-4 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-gray-100 [&::-webkit-scrollbar-thumb]:bg-[#072356] [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar]:w-2'
            >
              <h1 className='mb-5 font-darker-grotesque text-3xl font-bold text-[#FE7354]'>
                Términos y Condiciones de Scrum Latam
              </h1>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque text-[18px] text-[#072356]'>
                <strong>SCRUM LATAM te da la bienvenida</strong>
              </p>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque font-medium text-[#072356]'>
                Al unirte a Scrum Latam Comunidad, aceptas participar
                activamente bajo los principios de respeto, colaboración y
                crecimiento continuo. Todo contenido compartido en nuestros
                espacios —virtuales o presenciales— debe promover el
                aprendizaje, el respeto mutuo y el espíritu ágil. El uso
                indebido de los canales, la divulgación de información sin
                consentimiento o cualquier comportamiento que atente contra la
                integridad de la comunidad será motivo de suspensión inmediata.
              </p>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque font-medium text-[#072356]'>
                <strong>
                  Esta es una comunidad para crecer, aportar y transformar. Tu
                  participación es un privilegio que conlleva responsabilidad.
                </strong>
              </p>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque text-[20px] text-[#072356]'>
                <strong>Compromiso de Participación</strong>
              </p>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque text-[17px] font-medium text-[#072356]'>
                En Scrum Latam Comunidad, nos comprometemos a:
              </p>
              <ul className='mb-5 list-disc space-y-2 pl-6 font-darker-grotesque text-[18px] font-medium text-[#072356]'>
                <li>
                  Participar desde el respeto, la escucha activa y el aporte
                  genuino.
                </li>
                <li>
                  Compartir conocimientos con humildad, sin imponer verdades
                  absolutas.
                </li>
                <li>
                  Fomentar un entorno seguro, libre de discriminación o juicio.
                </li>
                <li>
                  Ser ejemplo de liderazgo colaborativo, retador e inspirador.
                </li>
              </ul>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque font-medium text-[#072356]'>
                <strong>
                  Al participar, asumes el compromiso de construir con
                  integridad y pasión.
                </strong>
              </p>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque text-[20px] font-medium text-[#072356]'>
                <strong>Privacidad y Protección de Datos</strong>
              </p>
              <p className='mb-2 whitespace-pre-line font-darker-grotesque text-[18px] font-medium text-[#072356]'>
                Scrum Latam Comunidad valora tu confianza y protege tu
                información personal. Todos los datos que compartas con nosotros
                serán tratados con confidencialidad, exclusivamente para fines
                de comunicación, formación y participación dentro de la
                comunidad.
              </p>
              <p className='mb-2 whitespace-pre-line font-darker-grotesque text-[18px] font-medium text-[#072356]'>
                No compartiremos tu información con terceros sin tu
                consentimiento explícito.
              </p>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque text-[18px] font-medium text-[#072356]'>
                Cumplimos con las normativas locales e internacionales de
                protección de datos.
              </p>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque font-medium text-[#072356]'>
                <strong>
                  Tu privacidad es nuestra prioridad. Tu confianza, nuestro
                  compromiso.
                </strong>
              </p>
              {currentStep === 1 && showTermsCheckbox && (
                <div className='flex items-center gap-2 self-end'>
                  <input
                    type='checkbox'
                    id='accept-terms'
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className='h-4 w-4 rounded border-gray-300 bg-[#072356] text-[#072356]'
                  />
                  <label
                    htmlFor='accept-terms'
                    className='font-darker-grotesque text-[22px] font-medium text-[#072356]'
                  >
                    Acepto los términos y condiciones
                  </label>
                </div>
              )}
            </div>
          </div>
        )
      case 2:
        return (
          <div
            className={`${darkerGrotesque.variable} rounded-lg border-[1px] border-[#072356] bg-white p-6 md:h-[360px] 2xl:h-[485px]`}
          >
            <h2 className='mb-4 text-2xl font-medium text-orange-500'>
              ¡Ya casi finalizamos!
            </h2>
            <p className='mb-6 text-[#072356]'>
              Nos gustaría saber tus expectativas sobre la comunidad (opcional)
            </p>
            <textarea
              className='w-full rounded-lg border border-gray-300 p-4 text-[#072356] focus:border-blue-500 focus:outline-none'
              rows={6}
              placeholder='Escribe tus expectativas aquí...'
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        )
      default:
        return null
    }
  }
  return (
    <div className='mx-auto min-h-screen w-full bg-gray-50'>
      {/* Header */}
      <div className='flex items-center justify-between bg-white px-6 py-4 shadow-sm'>
        <div className='flex items-center gap-4'>
          <div className='hidden md:block'>
            <LogoScrumlatam />
          </div>
          <div className='block md:hidden'>
            <MobileLogo />
          </div>
        </div>
        <div className='flex items-center gap-3'>
          {user && (
            <>
              <span className='text-lg font-medium text-gray-700'>
                ¡Hola {user.email.split('@')[0]}!
              </span>
              <div className='h-10 w-10 overflow-hidden rounded-full bg-gray-300'>
                <img
                  src='https://appwiseinnovations.dev/scrumlatam/photo.png'
                  alt='Profile'
                  className='h-full w-full object-cover'
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Title Section */}
      <div className={`${darkerGrotesque.variable} py-8 text-center`}>
        <h1 className='mb-4 font-darker-grotesque text-[32px] font-semibold text-orange-500 md:text-[45px]'>
          Antes de comenzar...
        </h1>
        <p className='px-8 font-darker-grotesque text-[18px] text-[#082965] md:text-[24px]'>
          Debes completar el onboarding para continuar e iniciar con la
          comunidad
        </p>
      </div>

      {/* Two Columns Layout */}
      <div className='flex flex-col items-center justify-center gap-4 px-6 md:mx-auto md:max-w-[1920px] md:flex-row md:gap-8 md:px-12'>
        {/* Left Column - Dynamic Content */}
        <div className='w-[130%]'>{renderStepContent()}</div>

        {/* Right Column - Onboarding Info */}
        <div className='mb-8 flex w-full flex-col justify-between rounded-lg border-[1px] border-[#072356] bg-white p-6 md:mb-0 md:h-[360px] 2xl:h-[485px]'>
          <div className='mb-6'>
            <h2 className='mb-4 font-darker-grotesque text-3xl font-semibold text-[#FE7354]'>
              Onboarding
            </h2>
          </div>

          <div className='mb-8 space-y-4'>
            {listaItems.map((item, index) => (
              <div key={index} className='flex items-center gap-3'>
                <div
                  className={`flex h-5 w-5 items-center justify-center rounded-full ${
                    item.isCompleted
                      ? 'bg-[#082965]'
                      : item.isActive
                        ? 'bg-[#082965]'
                        : 'bg-gray-200'
                  }`}
                >
                  {item.isCompleted && (
                    <svg
                      className='h-3 w-3 text-white'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  )}
                </div>
                <span
                  className={`text-sm ${
                    item.isActive || item.isCompleted
                      ? 'font-medium text-[#072356]'
                      : 'text-gray-500'
                  }`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Actions */}
          <div className='flex flex-col items-end gap-4'>
            <div className='flex w-full items-center justify-between'>
              <button
                onClick={handleSkip}
                className='font-medium text-gray-500 hover:text-gray-700'
              >
                Omitir por ahora
              </button>
              <button
                onClick={handleContinue}
                disabled={
                  (currentStep === 0 && !videoCompleted) ||
                  (currentStep === 1 && (!showTermsCheckbox || !termsAccepted))
                }
                className={`flex items-center gap-2 font-medium ${
                  (currentStep === 0 && videoCompleted) ||
                  (currentStep === 1 && showTermsCheckbox && termsAccepted) ||
                  currentStep > 1
                    ? 'cursor-pointer text-gray-500 hover:text-[#072356]'
                    : 'cursor-not-allowed text-gray-300'
                }`}
              >
                {currentStep === 2 ? 'Finalizar' : 'Continuar'}
                <svg
                  className='h-4 w-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
