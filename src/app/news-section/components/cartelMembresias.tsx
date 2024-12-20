'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import group from './imgs/Group.png'
import vector from './imgs/Vector.png'
import { darkerGrotesque, karla } from '@/fonts'

export default function CartelMembresias({ onClose }: { onClose: () => void }) {
  const router = useRouter()

  return (
    <div
      className={`${darkerGrotesque.variable} ${karla.variable} mx-5 flex max-w-screen-md flex-col items-center justify-center rounded-[60px] bg-white`}
    >
      <div className='flex flex-col items-center rounded-xl pt-8'>
        <Image
          src={group}
          alt='group'
          width={405}
          height={500}
          className='relative z-10 -mt-1 h-[200px] w-[205px] md:h-[300px] md:w-[405px]'
        ></Image>
        <Image
          src={vector}
          alt='vector'
          width={400}
          height={400}
          className='z-1 absolute h-[197px] w-[220px] md:h-[297px] md:w-[420px]'
        ></Image>
      </div>
      <h1 className='mb-5 mt-5 font-darker-grotesque-700 text-[#FE2E00] md:text-[34px]'>
        No te pierdas este contenido único
      </h1>
      <div className='font-karla'>
        <p className='mb-5 flex px-10 text-center text-[14px] font-karla-400 text-[#061D48] md:px-24 md:text-[24px]'>
          Este contenido es exclusivo para miembros activos. Con tu membresía,
          accederás a información premium, recursos únicos y beneficios
          diseñados para ayudarte a crecer.
        </p>
        <p className='mb-7 text-center text-[14px] font-karla-400 text-[#061D48] md:mb-12 md:text-[24px]'>
          ¡Únete y desbloquea todo lo que tenemos para ti!
        </p>
      </div>
      <div className='font-darker-grotesque'>
        <button
          className='mb-1 rounded-lg bg-[#FE5833] px-6 pb-1 text-[20px] font-darker-grotesque-500 text-white hover:bg-red-300 md:mb-2 md:px-10 md:pb-2 md:text-[30px]'
          onClick={() => router.push('/memberships')}
        >
          Explorar membresías
        </button>
        <p
          className='mb-5 cursor-pointer text-center text-[20px] font-darker-grotesque-600 text-[#FE5833] md:text-[26px]'
          onClick={onClose}
        >
          Cerrar
        </p>
      </div>
    </div>
  )
}
