'use client'

import { BorderLinearProgress } from '@/app/home/components/progressBar'
import { ChevronDown, ChevronUp } from 'react-feather'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import { useOnboarding } from '@/app/onboarding/context/OnboardingContext'
import { useAuth } from '@/app/context/AuthContext'

interface ListaItem {
  isActive: boolean
  label: string
}

const Lista = () => {
  const [expanded, setExpanded] = useState(true)
  const listaItems: ListaItem[] = [
    { label: 'Bienvenida', isActive: true },
    { label: 'Términos y condiciones', isActive: true },
  ]

  const handleToggleExpanded = (): void => {
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

export default function Terms() {
  const { completeTerms, progress, isTermsCompleted } = useOnboarding()
  const { user } = useAuth()
  const [checkedA, setCheckedA] = useState(isTermsCompleted)
  const [checkedB, setCheckedB] = useState(isTermsCompleted)

  useEffect(() => {
    if (user?.onboarding) {
      setCheckedA(true)
      setCheckedB(true)
    } else if (isTermsCompleted) {
      setCheckedA(true)
      setCheckedB(true)
    }
  }, [isTermsCompleted, user])

  const handleNextModule = () => {
    completeTerms()
  }

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'A' | 'B'
  ) => {
    if (type === 'A') {
      setCheckedA(e.target.checked)
    } else {
      setCheckedB(e.target.checked)
    }

    // // Si ambos checkboxes están marcados, completar los términos
    // if (
    //   (type === 'A' && e.target.checked && checkedB) ||
    //   (type === 'B' && e.target.checked && checkedA)
    // ) {
    //   completeTerms()
    // }
  }

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
        {checkedA && checkedB && (
          <Button
            className='mx-6 mb-6 rounded-md bg-[#FD3600] p-2 font-bold text-white'
            onClick={handleNextModule}
          >
            Siguiente módulo
          </Button>
        )}
      </div>
      <div className='relative ml-6 mt-10 h-[85%] w-4/6 overflow-x-auto overflow-y-auto'>
        <h1 className='mb-5 text-3xl font-medium'>
          TÉRMINOS Y CONDICIONES DE SCRUM LATAM
        </h1>
        <p className='mb-5 whitespace-pre-line'>
          <strong>Bienvenida a SCRUM LATAM</strong>
        </p>
        <p className='mb-5 whitespace-pre-line'>
          Estamos encantados de que te unas a nuestra comunidad. SCRUM LATAM es
          un espacio digital dedicado a la difusión y el aprendizaje en las
          buenas prácticas herramientas y técnicas en Agile. Aquí podrás
          compartir experiencias, recursos y conocimientos para fomentar el
          liderazgo ágil en las organizaciones.
        </p>
        <p className='mb-5 whitespace-pre-line'>
          <strong>Nuestra Misión y Visión</strong>
        </p>
        <p className='mb-5 whitespace-pre-line'>
          <strong>Misión:</strong> Compartir y fomentar el mindset agile a
          través del intercambio de conocimiento y buenas prácticas en la
          comunidad LATAM.
        </p>
        <p className='mb-5 whitespace-pre-line'>
          <strong>Visión:</strong> Convertirnos en el principal espacio de
          aprendizaje y crecimiento en Latinoamérica, generando un impacto
          positivo en las organizaciones a través de nuestros miembros.
        </p>
        <p className='mb-5 whitespace-pre-line'>
          <strong>Compromiso de Participación</strong>
        </p>
        <p className='mb-5 whitespace-pre-line'>
          Al unirte a SCRUM LATAM, te comprometes a:
        </p>
        <p className='mb-5 whitespace-pre-line'>
          <ul className='list-disc space-y-2 pl-6'>
            <li>
              Participar activamente y con respeto en todas las actividades,
              discusiones y eventos.
            </li>
            <li>
              Mantener un comportamiento cortés y profesional en tus
              interacciones.
            </li>
            <li>
              Compartir contenido relevante en Buenas prácticas en Agilidad.
            </li>
            <li>
              Respetar los derechos de autor y la privacidad de los demás
              miembros.
            </li>
          </ul>
        </p>
        <p className='mb-5 whitespace-pre-line'>
          <strong>Registro y Creación de Cuenta</strong>
        </p>
        <p className='mb-5 whitespace-pre-line'>
          Para formar parte de SCRUM LATAM, te pedimos que proporciones
          información verídica y actualizada. Tu compromiso nos ayuda a mantener
          una comunidad segura y colaborativa. Protege la privacidad de tu
          cuenta y recuerda que eres responsable de las actividades realizadas
          en ella.
        </p>
        <p className='mb-5 whitespace-pre-line'>
          <strong>Reglas de Contenido y Comportamiento</strong>
        </p>
        <p className='mb-5 whitespace-pre-line'>
          Queremos que este sea un espacio inclusivo y respetuoso. Por eso, te
          pedimos:
        </p>
        <p className='mb-5 whitespace-pre-line'>
          <ul className='list-disc space-y-2 pl-6'>
            <li>
              <strong>Respeto y Profesionalismo:</strong> Mantén un
              comportamiento cortés y profesional en todas tus interacciones.
            </li>
            <li>
              <strong>Contenido Relevante:</strong> Publica contenido
              relacionado con metodologías ágiles y temas de desarrollo
              profesional en agilidad.
            </li>
            <li>
              <strong>No Publicidad Sin Autorización:</strong> Evita promover
              productos o servicios pagos sin autorización. Los Sponsor son los
              únicos autorizados.
            </li>
            <li>
              <strong>Contenido Apropiado:</strong> No compartas contenido que
              incite a la violencia, actividades ilegales o información falsa.
            </li>
            <li>
              <strong>Derechos de Autor:</strong> Respeta los derechos de autor
              y no compartas contenido sin el permiso necesario.
            </li>
            <li>
              <strong>Privacidad:</strong> No compartas información personal o
              confidencial de otros sin su consentimiento.
            </li>
          </ul>
        </p>
        <p className='mb-5 whitespace-pre-line'>
          <strong>Privacidad y Protección de Datos</strong>
        </p>
        <p className='mb-5 whitespace-pre-line'>
          En SCRUM LATAM, valoramos tu privacidad. No compartiremos tus datos
          personales con terceros sin tu consentimiento. Para más información,
          consulta nuestra Política de Privacidad.
        </p>
        <p className='mb-5 whitespace-pre-line'>
          <strong>Propiedad Intelectual</strong>
        </p>
        <p className='mb-5 whitespace-pre-line'>
          El contenido original de SCRUM LATAM, como publicaciones y materiales
          educativos, es propiedad de la comunidad. Puedes compartir este
          contenido para fines personales y educativos, siempre y cuando
          respetes los derechos de autor.
        </p>
        <p className='mb-5 whitespace-pre-line'>
          <strong>Modificación de los Términos y Condiciones</strong>
        </p>
        <p className='mb-5 whitespace-pre-line'>
          Podemos actualizar estos términos para mejorar la comunidad. Te
          notificaremos sobre cualquier cambio importante. Mantente informado
          revisando estos términos periódicamente.
        </p>
        <p className='mb-5 whitespace-pre-line'>
          <strong>Terminación de la Cuenta</strong>
        </p>
        <p className='mb-5 whitespace-pre-line'>
          Queremos que todos disfruten de una experiencia positiva en SCRUM
          LATAM. Si alguien no sigue estas guías, podríamos suspender o cancelar
          su cuenta. Si tienes preguntas sobre una decisión, contáctanos en
          scrumlatam@gmail.com.
        </p>
        <div className='mt-4'>
          <label
            className={user?.onboarding ? 'cursor-not-allowed opacity-50' : ''}
          >
            <input
              checked={checkedA}
              onChange={(e) =>
                !user?.onboarding && handleCheckboxChange(e, 'A')
              }
              type='checkbox'
              disabled={user?.onboarding}
            />
            Acepto los términos y condiciones
          </label>
          <br />
          <label
            className={user?.onboarding ? 'cursor-not-allowed opacity-50' : ''}
          >
            <input
              checked={checkedB}
              onChange={(e) =>
                !user?.onboarding && handleCheckboxChange(e, 'B')
              }
              type='checkbox'
              disabled={user?.onboarding}
            />
            Estoy de acuerdo con la política de privacidad
          </label>
        </div>
      </div>
    </div>
  )
}
