'use client'

import { darkerGrotesque, inter, karla } from '@/fonts'
import React from 'react'

export default function MembershipsPage() {
  return (
    <section
      className={`${darkerGrotesque.variable} ${karla.variable} ${inter.variable} mb-8`}
    >
      <h1
        className={`items-left max-w-[2180px] font-darker-grotesque text-[30px] font-darker-grotesque-700 text-[#082965]`}
      >
        Registro de Membresías
      </h1>
      <div
        className={`mb-6 w-full rounded-[20px] border-[0.5px] border-black-13 p-4`}
      >
        <div className='grid grid-cols-5 gap-4 rounded-[20px] border-[0.5px] border-black-9 p-2'>
          <button className='font-darker-grotesque text-[21px] font-darker-grotesque-700'>
            Nombre
          </button>
          <button className='font-darker-grotesque text-[21px] font-darker-grotesque-700'>
            Membresía desde
          </button>
          <button className='font-darker-grotesque text-[21px] font-darker-grotesque-700'>
            Tipo de Membresía
          </button>
          <button className='font-darker-grotesque text-[21px] font-darker-grotesque-700'>
            Método de Pago
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
