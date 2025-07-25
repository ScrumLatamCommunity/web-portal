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
  const { user } = useAuth()
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
    try {
      // Primero guardamos el comentario si existe
      if (comment.trim()) {
        await fetch(`${API_URL}comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: registerUser?.email || user?.email,
            comment: comment
          })
        })
      }

      // Luego marcamos el onboarding como completado
      const response = await fetch(`${API_URL}auth/onboarding`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: registerUser?.email || user?.email,
          completed: true
        })
      })

      if (response.ok) {
        toast.success('¡Onboarding completado!')
        router.push('/')
      } else {
        toast.error('Error al completar el onboarding')
      }
    } catch (error) {
      toast.error('Error al completar el onboarding')
      console.error('Error:', error)
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
          <div className='overflow-hidden rounded-lg bg-white shadow-lg'>
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
            className={`${darkerGrotesque.variable} h-[350px] rounded-lg border-2 border-[#072356] bg-white p-6 md:h-[360px] 2xl:h-[485px]`}
          >
            <div
              ref={termsContainerRef}
              onScroll={handleTermsScroll}
              className='h-full overflow-y-auto pr-4'
            >
              <h1 className='mb-5 font-darker-grotesque text-3xl font-medium text-[#072356]'>
                TÉRMINOS Y CONDICIONES DE SCRUM LATAM
              </h1>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque text-[18px] text-[#072356]'>
                <strong>Bienvenida a SCRUM LATAM</strong>
              </p>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque font-medium text-[#072356]'>
                Estamos encantados de que te unas a nuestra comunidad. SCRUM
                LATAM es un espacio digital dedicado a la difusión y el
                aprendizaje en las buenas prácticas herramientas y técnicas en
                Agile. Aquí podrás compartir experiencias, recursos y
                conocimientos para fomentar el liderazgo ágil en las
                organizaciones.
              </p>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque text-[20px] text-[#072356]'>
                <strong>Nuestra Misión y Visión</strong>
              </p>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque text-[18px] text-[#072356]'>
                <strong>Misión:</strong> Compartir y fomentar el mindset agile a
                través del intercambio de conocimiento y buenas prácticas en la
                comunidad LATAM.
              </p>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque text-[18px] text-[#072356]'>
                <strong>Visión:</strong> Convertirnos en el principal espacio de
                aprendizaje y crecimiento en Latinoamérica, generando un impacto
                positivo en las organizaciones a través de nuestros miembros.
              </p>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque text-[20px] text-[#072356]'>
                <strong>Compromiso de Participación</strong>
              </p>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque text-[17px] font-medium text-[#072356]'>
                Al unirte a SCRUM LATAM, te comprometes a:
              </p>
              <p className='mb-5 whitespace-pre-line'>
                <ul className='list-disc space-y-2 pl-6 font-darker-grotesque text-[18px] font-medium text-[#072356]'>
                  <li>
                    Participar activamente y con respeto en todas las
                    actividades, discusiones y eventos.
                  </li>
                  <li>
                    Mantener un comportamiento cortés y profesional en tus
                    interacciones.
                  </li>
                  <li>
                    Compartir contenido relevante en Buenas prácticas en
                    Agilidad.
                  </li>
                  <li>
                    Respetar los derechos de autor y la privacidad de los demás
                    miembros.
                  </li>
                </ul>
              </p>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque text-[20px] font-medium text-[#072356]'>
                <strong>Registro y Creación de Cuenta</strong>
              </p>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque text-[18px] font-medium text-[#072356]'>
                Para formar parte de SCRUM LATAM, te pedimos que proporciones
                información verídica y actualizada. Tu compromiso nos ayuda a
                mantener una comunidad segura y colaborativa. Protege la
                privacidad de tu cuenta y recuerda que eres responsable de las
                actividades realizadas en ella.
              </p>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque text-[20px] font-medium text-[#072356]'>
                <strong>Reglas de Contenido y Comportamiento</strong>
              </p>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque text-[20px] font-medium text-[#072356]'>
                Queremos que este sea un espacio inclusivo y respetuoso. Por
                eso, te pedimos:
              </p>
              <p className='mb-5 whitespace-pre-line'>
                <ul className='list-disc space-y-2 pl-6'>
                  <li className='font-darker-grotesque text-[18px] font-medium text-[#072356]'>
                    <strong>Respeto y Profesionalismo:</strong> Mantén un
                    comportamiento cortés y profesional en todas tus
                    interacciones.
                  </li>
                  <li className='font-darker-grotesque text-[18px] font-medium text-[#072356]'>
                    <strong>Contenido Relevante:</strong> Publica contenido
                    relacionado con metodologías ágiles y temas de desarrollo
                    profesional en agilidad.
                  </li>
                  <li className='font-darker-grotesque text-[18px] font-medium text-[#072356]'>
                    <strong>No Publicidad Sin Autorización:</strong> Evita
                    promover productos o servicios pagos sin autorización. Los
                    Sponsor son los únicos autorizados.
                  </li>
                  <li className='font-darker-grotesque text-[18px] font-medium text-[#072356]'>
                    <strong>Contenido Apropiado:</strong> No compartas contenido
                    que incite a la violencia, actividades ilegales o
                    información falsa.
                  </li>
                  <li className='font-darker-grotesque text-[18px] font-medium text-[#072356]'>
                    <strong>Derechos de Autor:</strong> Respeta los derechos de
                    autor y no compartas contenido sin el permiso necesario.
                  </li>
                  <li className='font-darker-grotesque text-[18px] font-medium text-[#072356]'>
                    <strong>Privacidad:</strong> No compartas información
                    personal o confidencial de otros sin su consentimiento.
                  </li>
                </ul>
              </p>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque text-[20px] font-medium text-[#072356]'>
                <strong>Privacidad y Protección de Datos</strong>
              </p>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque text-[18px] font-medium text-[#072356]'>
                En SCRUM LATAM, valoramos tu privacidad. No compartiremos tus
                datos personales con terceros sin tu consentimiento. Para más
                información, consulta nuestra Política de Privacidad.
              </p>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque text-[20px] font-medium text-[#072356]'>
                <strong>Propiedad Intelectual</strong>
              </p>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque text-[18px] font-medium text-[#072356]'>
                El contenido original de SCRUM LATAM, como publicaciones y
                materiales educativos, es propiedad de la comunidad. Puedes
                compartir este contenido para fines personales y educativos,
                siempre y cuando respetes los derechos de autor.
              </p>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque text-[20px] font-medium text-[#072356]'>
                <strong>Modificación de los Términos y Condiciones</strong>
              </p>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque text-[18px] font-medium text-[#072356]'>
                Podemos actualizar estos términos para mejorar la comunidad. Te
                notificaremos sobre cualquier cambio importante. Mantente
                informado revisando estos términos periódicamente.
              </p>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque text-[20px] font-medium text-[#072356]'>
                <strong>Terminación de la Cuenta</strong>
              </p>
              <p className='mb-5 whitespace-pre-line font-darker-grotesque text-[18px] font-medium text-[#072356]'>
                Queremos que todos disfruten de una experiencia positiva en
                SCRUM LATAM. Si alguien no sigue estas guías, podríamos
                suspender o cancelar su cuenta. Si tienes preguntas sobre una
                decisión, contáctanos en scrumlatam@gmail.com.
              </p>
              {currentStep === 1 && showTermsCheckbox && (
                <div className='flex items-center gap-2 self-end'>
                  <input
                    type='checkbox'
                    id='accept-terms'
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className='h-4 w-4 rounded border-gray-300 text-[#072356]'
                  />
                  <label
                    htmlFor='accept-terms'
                    className='text-sm text-[#072356]'
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
            className={`${darkerGrotesque.variable} rounded-lg border-2 border-[#072356] bg-white p-6 md:h-[360px] 2xl:h-[485px]`}
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
  console.log('user', user)
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
        <div className='w-full'>{renderStepContent()}</div>

        {/* Right Column - Onboarding Info */}
        <div className='mb-8 flex w-full flex-col justify-between rounded-lg border-2 border-orange-500 bg-white p-6 md:mb-0 md:h-[360px] 2xl:h-[485px]'>
          <div className='mb-6'>
            <h2 className='mb-4 text-xl font-semibold text-orange-500'>
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
