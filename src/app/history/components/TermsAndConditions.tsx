import { darkerGrotesque, karla } from '@/fonts'
import React from 'react'

const OrangeCheck = () => (
  <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
    <path
      d='M5 10.5L8.5 14L15 7'
      stroke='#FE2E00'
      strokeWidth='2.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const OrangeClose = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    aria-label='Cerrar'
    className='absolute right-6 top-6 rounded-full p-2 transition-colors hover:bg-[#ffe5df] md:right-8 md:top-8'
    style={{ lineHeight: 0 }}
  >
    <svg width='28' height='28' viewBox='0 0 28 28' fill='none'>
      <path
        d='M7 7L21 21M21 7L7 21'
        stroke='#FE2E00'
        strokeWidth='2.5'
        strokeLinecap='round'
      />
    </svg>
  </button>
)

interface TermsAndConditionsProps {
  open: boolean
  onClose: () => void
}

export const TermsAndConditions = ({
  open,
  onClose
}: TermsAndConditionsProps) => {
  if (!open) return null
  return (
    <div
      className={`${karla.variable} bg-black fixed inset-0 z-50 flex items-center justify-center bg-opacity-30`}
    >
      <div className='relative mx-2 w-full max-w-2xl rounded-2xl border border-[#C7D0DB] bg-[#F5F8FB] p-6 shadow-xl md:mx-0 md:max-w-3xl md:p-12'>
        <OrangeClose onClick={onClose} />
        <h1 className='mb-8 text-center font-karla font-bold text-[#FE2E00] md:mt-12 md:text-3xl'>
          TÉRMINOS Y CONDICIONES DE SCRUM LATAM
        </h1>
        <div className='flex max-h-[70vh] flex-col gap-8 overflow-y-auto px-2 md:mb-20 md:px-8'>
          <div>
            <h2 className='mb-2 font-karla font-bold text-[#082965] md:text-xl'>
              Bienvenida a SCRUM LATAM
            </h2>
            <p className='font-karla text-base text-[#082965] md:text-lg'>
              Estamos encantados de que te unas a nuestra comunidad. SCRUM LATAM
              es un espacio digital dedicado a la difusión y el aprendizaje en
              las buenas prácticas herramientas y técnicas en Agile. Aquí podrás
              compartir experiencias, recursos y conocimientos para fomentar el
              liderazgo ágil en las organizaciones.
            </p>
          </div>
          <div>
            <h2 className='mb-2 font-karla font-bold text-[#082965] md:text-xl'>
              Nuestra Misión y Visión
            </h2>
            <p className='mb-4 font-karla text-base text-[#082965] md:text-lg'>
              <strong>Misión:</strong> Compartir y fomentar el mindset agile a
              través del intercambio de conocimiento y buenas prácticas en la
              comunidad LATAM.
            </p>
            <p className='font-karla text-base text-[#082965] md:text-lg'>
              <strong>Visión:</strong> Convertirnos en el principal espacio de
              aprendizaje y crecimiento en Latinoamérica, generando un impacto
              positivo en las organizaciones a través de nuestros miembros.
            </p>
          </div>
          <div>
            <h2 className='mb-2 font-karla font-bold text-[#082965] md:text-xl'>
              Compromiso de Participación
            </h2>
            <p className='mb-4 font-karla text-base text-[#082965] md:text-lg'>
              Al unirte a SCRUM LATAM, te comprometes a:
            </p>
            <ul className='flex flex-col gap-2 pl-0'>
              <li className='flex items-start gap-2 font-karla text-base text-[#082965] md:text-lg'>
                <span className='mt-1'>
                  <OrangeCheck />
                </span>
                Participar activamente y con respeto en todas las actividades,
                discusiones y eventos.
              </li>
              <li className='flex items-start gap-2 font-karla text-base text-[#082965] md:text-lg'>
                <span className='mt-1'>
                  <OrangeCheck />
                </span>
                Mantener un comportamiento cortés y profesional en tus
                interacciones.
              </li>
              <li className='flex items-start gap-2 font-karla text-base text-[#082965] md:text-lg'>
                <span className='mt-1'>
                  <OrangeCheck />
                </span>
                Compartir contenido relevante en Buenas prácticas en Agilidad.
              </li>
              <li className='flex items-start gap-2 font-karla text-base text-[#082965] md:text-lg'>
                <span className='mt-1'>
                  <OrangeCheck />
                </span>
                Respetar los derechos de autor y la privacidad de los demás
                miembros.
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-2 font-karla font-bold text-[#082965] md:text-xl'>
              Registro y Creación de Cuenta
            </h2>
            <p className='font-karla text-base text-[#082965] md:text-lg'>
              Para formar parte de SCRUM LATAM, te pedimos que proporciones
              información verídica y actualizada. Tu compromiso nos ayuda a
              mantener una comunidad segura y colaborativa. Protege la
              privacidad de tu cuenta y recuerda que eres responsable de las
              actividades realizadas en ella.
            </p>
          </div>
          <div>
            <h2 className='mb-2 font-karla font-bold text-[#082965] md:text-xl'>
              Reglas de Contenido y Comportamiento
            </h2>
            <p className='mb-4 font-karla text-base text-[#082965] md:text-lg'>
              Queremos que este sea un espacio inclusivo y respetuoso. Por eso,
              te pedimos:
            </p>
            <ul className='flex flex-col gap-2 pl-0'>
              <li className='flex items-start gap-2 font-karla text-base text-[#082965] md:text-lg'>
                <span className='mt-1'>
                  <OrangeCheck />
                </span>
                <span>
                  <strong>Respeto y Profesionalismo:</strong> Mantén un
                  comportamiento cortés y profesional en todas tus
                  interacciones.
                </span>
              </li>
              <li className='flex items-start gap-2 font-karla text-base text-[#082965] md:text-lg'>
                <span className='mt-1'>
                  <OrangeCheck />
                </span>
                <span>
                  <strong>Contenido Relevante:</strong> Publica contenido
                  relacionado con metodologías ágiles y temas de desarrollo
                  profesional en agilidad.
                </span>
              </li>
              <li className='flex items-start gap-2 font-karla text-base text-[#082965] md:text-lg'>
                <span className='mt-1'>
                  <OrangeCheck />
                </span>
                <span>
                  <strong>No Publicidad Sin Autorización:</strong> Evita
                  promover productos o servicios pagos sin autorización. Los
                  Sponsor son los únicos autorizados.
                </span>
              </li>
              <li className='flex items-start gap-2 font-karla text-base text-[#082965] md:text-lg'>
                <span className='mt-1'>
                  <OrangeCheck />
                </span>
                <span>
                  <strong>Contenido Apropiado:</strong> No compartas contenido
                  que incite a la violencia, actividades ilegales o información
                  falsa.
                </span>
              </li>
              <li className='flex items-start gap-2 font-karla text-base text-[#082965] md:text-lg'>
                <span className='mt-1'>
                  <OrangeCheck />
                </span>
                <span>
                  <strong>Derechos de Autor:</strong> Respeta los derechos de
                  autor y no compartas contenido sin el permiso necesario.
                </span>
              </li>
              <li className='flex items-start gap-2 font-karla text-base text-[#082965] md:text-lg'>
                <span className='mt-1'>
                  <OrangeCheck />
                </span>
                <span>
                  <strong>Privacidad:</strong> No compartas información personal
                  o confidencial de otros sin su consentimiento.
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-2 font-karla font-bold text-[#082965] md:text-xl'>
              Privacidad y Protección de Datos
            </h2>
            <p className='font-karla text-base text-[#082965] md:text-lg'>
              En SCRUM LATAM, valoramos tu privacidad. No compartiremos tus
              datos personales con terceros sin tu consentimiento. Para más
              información, consulta nuestra Política de Privacidad.
            </p>
          </div>
          <div>
            <h2 className='mb-2 font-karla font-bold text-[#082965] md:text-xl'>
              Propiedad Intelectual
            </h2>
            <p className='font-karla text-base text-[#082965] md:text-lg'>
              El contenido original de SCRUM LATAM, como publicaciones y
              materiales educativos, es propiedad de la comunidad. Puedes
              compartir este contenido para fines personales y educativos,
              siempre y cuando respetes los derechos de autor.
            </p>
          </div>
          <div>
            <h2 className='mb-2 font-karla font-bold text-[#082965] md:text-xl'>
              Modificación de los Términos y Condiciones
            </h2>
            <p className='font-karla text-base text-[#082965] md:text-lg'>
              Podemos actualizar estos términos para mejorar la comunidad. Te
              notificaremos sobre cualquier cambio importante. Mantente
              informado revisando estos términos periódicamente.
            </p>
          </div>
          <div>
            <h2 className='mb-2 font-karla font-bold text-[#082965] md:text-xl'>
              Terminación de la Cuenta
            </h2>
            <p className='font-karla text-base text-[#082965] md:text-lg'>
              Queremos que todos disfruten de una experiencia positiva en SCRUM
              LATAM. Si alguien no sigue estas guías, podríamos suspender o
              cancelar su cuenta. Si tienes preguntas sobre una decisión,
              contáctanos en scrums.latam@gmail.com.
            </p>
          </div>
        </div>
        <div className='mt-10 text-center font-karla text-[16px] text-[#345081]'>
          Ultima actualizacion 2025
        </div>
      </div>
    </div>
  )
}
