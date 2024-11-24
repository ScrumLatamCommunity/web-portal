'use client'

import { images } from '@/data/images_url'
export const Intro = () => {
  return (
    <div className='flex w-full px-14 py-16'>
      <div className='flex w-full flex-col justify-start gap-8'>
        <h1 className='flex font-karla text-3xl font-bold text-red-500'>
          Historia
        </h1>
        <div className='flex'>
          <div className='flex w-3/5 flex-col'>
            <p className='text-xl text-blue-8'>
              En enero de 2020, <strong>Rubén Darío Romero Chica</strong>, junto
              a Jacqueline Díaz, Jorge Abad, Lucho Salazar y Nakary Carrillo,
              fundaron la comunidad Scrum Latam desde Colombia. La idea era
              simple:{' '}
              <strong>
                crear un grupo de WhatsApp para el intercambio de ideas y
                conocimientos sobre Scrum,
              </strong>{' '}
              reuniendo tanto a principiantes como a expertos.
              <br></br>
              <br></br>
              Durante la pandemia de COVID-19, la comunidad creció rápidamente.
              Creamos espacios llamados Retro, encuentros semanales donde los
              miembros compartían conocimientos y experiencias sobre agilidad.
              Pronto, evolucionamos a webinars y charlas de gran interés,
              abarcando otras metodologías ágiles, técnicas y herramientas.
              <br></br>
              <br></br>
              En mayo de 2020, formamos un staff con{' '}
              <strong>16 delegados de Latinoamérica y 1 de Europa,</strong> para
              coordinar actividades, vincular miembros y crear alianzas
              institucionales. Nuestra filosofía es el{' '}
              <strong>aprendizaje colaborativo,</strong> con un{' '}
              <strong>
                enfoque en feedback profesional, trabajo en equipo, y
                transparencia.
              </strong>{' '}
              Hoy, conectamos personas y compartimos experiencias a nivel
              internacional, transformando profesionales y organizaciones.
            </p>
          </div>
          <div className='flex w-2/5'>
            <img
              alt='history'
              className='h-[416px] w-[508px]'
              src={images.history}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
