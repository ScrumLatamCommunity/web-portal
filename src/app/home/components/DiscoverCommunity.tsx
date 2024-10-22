'use client'

import 'tailwindcss/tailwind.css'
import React from 'react'

export const DiscoverCommunity: React.FC = () => (
  <div className='relative flex flex-col items-center gap-16 mb-[152px]'>
    <div className='absolute top-[-16rem] left-[-4rem] w-[473px] h-[473px] hidden sm:flow-root'>
      <img
        alt='ellipse'
        src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/DiscoverCommunity%2FEllipse%2010.svg?alt=media&token=ba52aa7c-1cd0-433f-8ced-93442b38c647'
      />
    </div>
    <div className='absolute bottom-[-18rem] right-[-5rem] w-[516px] h-[516px] hidden sm:flow-root'>
      <img
        alt='ellipse2'
        src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/DiscoverCommunity%2FEllipse%2011.svg?alt=media&token=9a4c6557-3de7-4595-95fb-153d5877ee04'
      />
    </div>

    <div className='flex flex-col items-center gap-3'>
      <span className='sm:text-4xl text-xl font-extrabold font-darker-grotesque text-[#082965]'>
        Descubra más de la comunidad
      </span>
      <div className='bg-[#345081] bg-opacity-10 rounded-[8%] w-80 flex justify-center'>
        <span className='text-xl font-semibold font-darker-grotesque text-[#082965] py-2'>
          ¿Qué es lo que hacemos?
        </span>
      </div>
    </div>

    <div className='flex flex-wrap gap-10 justify-center w-auto'>
      <div className='flex flex-col items-center gap-10'>
        <div className='relative'>
          <img
            alt='Miembros'
            className='w-[114px] h-[114px]'
            src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/DiscoverCommunity%2FMiembros%20icon.svg?alt=media&token=af8eaf2f-80e9-4b52-93ba-bbe20f369487'
          />
        </div>
        <span className='text-3xl font-bold text-red-500 font-karla'>
          Miembros
        </span>
        <p className='text-center text-lg leading-6 font-karla w-[380px]'>
          Nuestra comunidad reúne a profesionales ágiles de toda Latinoamérica.
          Facilitamos el intercambio de experiencias y conocimientos a través de
          foros, grupos de trabajo y eventos de networking, fomentando la
          colaboración y el desarrollo continuo.
        </p>
      </div>

      <div className='flex flex-col items-center gap-10'>
        <div className='relative'>
          <img
            alt='Talleres'
            className='w-[114px] h-[114px]'
            src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/DiscoverCommunity%2FGroup%20633070.svg?alt=media&token=d98687ce-ce78-48f9-9ef2-eabfff0d37aa'
          />
        </div>
        <span className='text-3xl font-bold font-karla text-blue-6'>
          Talleres
        </span>
        <p className='text-center text-lg leading-6 font-karla w-[380px]'>
          Organizamos talleres donde los miembros aprenden y aplican principios
          ágiles en situaciones simuladas, guiados por expertos. Estos espacios
          permiten experimentar y mejorar continuamente en un entorno seguro.
        </p>
      </div>

      <div className='flex flex-col items-center gap-10'>
        <div className='relative'>
          <img
            alt='Webinars'
            className='w-[114px] h-[114px]'
            src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/DiscoverCommunity%2FGroup%20633071.svg?alt=media&token=745a53da-bf6c-4c31-a1f4-cf99f5dd2bb0'
          />
        </div>
        <span className='text-3xl font-bold font-karla text-red-500'>
          Webinar
        </span>
        <p className='text-center text-lg leading-6 font-karla w-[380px]'>
          Ofrecemos webinars en vivo con líderes en metodologías ágiles.
          Abordamos desde conceptos básicos hasta estrategias avanzadas, y
          mostramos casos prácticos de implementación ágil en diversas
          industrias.
        </p>
      </div>
    </div>
  </div>
)
