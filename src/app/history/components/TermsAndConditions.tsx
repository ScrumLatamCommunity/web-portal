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
          Términos y Condiciones
        </h1>
        <div className='flex flex-col gap-8 px-2 md:mb-20 md:px-8'>
          <div>
            <h2 className='mb-2 font-karla font-bold text-[#082965] md:text-xl'>
              Bienvenida
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
              Compromiso de Participación
            </h2>
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
              Privacidad y Protección de Datos
            </h2>
            <p className='font-karla text-base text-[#082965] md:text-lg'>
              En SCRUM LATAM, valoramos tu privacidad. No compartiremos tus
              datos personales con terceros sin tu consentimiento.
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
