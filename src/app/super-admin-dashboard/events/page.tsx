'use client'

import { darkerGrotesque, inter, karla } from '@/fonts'
import React from 'react'

export default function EventsPage() {
  return (
    <section
      className={`${darkerGrotesque.variable} ${karla.variable} ${inter.variable} mb-8`}
    >
      <h1
        className={`items-left max-w-[2180px] font-darker-grotesque text-[30px] font-darker-grotesque-700 text-[#082965]`}
      >
        Eventos de la Comunidad
      </h1>
      <div
        className={`mb-6 w-full rounded-[20px] border-[0.5px] border-black-13 p-4`}
      >
        <div className='grid grid-cols-6 gap-4 rounded-[20px] border-[0.5px] border-black-9 p-2'>
          <button className='font-darker-grotesque text-[21px] font-darker-grotesque-700'>
            Nombre del Evento
          </button>
          <button className='font-darker-grotesque text-[21px] font-darker-grotesque-700'>
            Fecha de Creacion
          </button>
          <button className='font-darker-grotesque text-[21px] font-darker-grotesque-700'>
            Fecha del evento
          </button>
          <button className='font-darker-grotesque text-[21px] font-darker-grotesque-700'>
            Cupos
          </button>
          <button className='font-darker-grotesque text-[21px] font-darker-grotesque-700'>
            Creador del Evento
          </button>
          <p className='flex items-center justify-center font-darker-grotesque text-[21px] font-darker-grotesque-700'>
            Acción
          </p>
        </div>
        <div className='custom-scrollbar h-full max-h-[650px] overflow-y-scroll'></div>
      </div>
    </section>
  )
}
