'use client'

import 'tailwindcss/tailwind.css'
import React from 'react'
import Link from 'next/link'

export const DiscoverCommunity: React.FC = () => (
  <div className='relative mb-[152px] mt-[72px] flex w-full flex-col items-center gap-16 md:max-w-[1920px]'>
    <div className='absolute left-[-4rem] top-[-16rem] hidden h-[473px] w-[473px] sm:flow-root'>
      <img
        alt='ellipse'
        src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/DiscoverCommunity%2FEllipse%2010.svg?alt=media&token=ba52aa7c-1cd0-433f-8ced-93442b38c647'
      />
    </div>
    <div className='absolute bottom-[-18rem] left-[880px] hidden sm:flow-root'>
      <img
        alt='ellipse2'
        className='h-[516px] w-[600px]'
        src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/DiscoverCommunity%2FEllipse%2011.svg?alt=media&token=9a4c6557-3de7-4595-95fb-153d5877ee04'
      />
    </div>

    <div className='flex flex-col items-center gap-5'>
      <span className='text-center font-darker-grotesque text-[35px] font-extrabold text-blue-6 sm:text-3xl md:text-5xl'>
        Descubra más de la comunidad
      </span>
      <div className='flex w-fit justify-center rounded-lg bg-[#345081] bg-opacity-10 px-4 py-2'>
        <span className='font-darker-grotesque text-lg font-semibold text-[#082965] sm:text-2xl'>
          ¿Qué es lo que hacemos?
        </span>
      </div>
    </div>

    <div className='flex w-auto flex-wrap justify-center gap-6 md:gap-24'>
      <Link href='/community/squads'>
        <div className='flex cursor-pointer flex-col items-center gap-6'>
          <div className='relative'>
            <img
              alt='Miembros'
              className='h-[114px] w-[114px]'
              src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/DiscoverCommunity%2FMiembros%20icon.svg?alt=media&token=af8eaf2f-80e9-4b52-93ba-bbe20f369487'
            />
          </div>
          <span className='font-darker-grotesque text-3xl font-bold text-red-500'>
            Miembros
          </span>
          <p className='w-[380px] text-center font-karla text-lg leading-6'>
            Nuestra comunidad reúne a profesionales ágiles de toda
            Latinoamérica. Facilitamos el intercambio de experiencias y
            conocimientos a través de foros, grupos de trabajo y eventos de
            networking, fomentando la colaboración y el desarrollo continuo.
          </p>
        </div>
      </Link>

      <Link href='/activities#talleres'>
        <div className='flex cursor-pointer flex-col items-center gap-6'>
          <div className='relative'>
            <img
              alt='Talleres'
              className='h-[114px] w-[114px]'
              src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/DiscoverCommunity%2FGroup%20633070.svg?alt=media&token=d98687ce-ce78-48f9-9ef2-eabfff0d37aa'
            />
          </div>
          <span className='font-darker-grotesque text-3xl font-bold text-blue-6'>
            Talleres
          </span>
          <p className='w-[380px] text-center font-karla text-lg leading-6'>
            Organizamos talleres donde los miembros aprenden y aplican
            principios ágiles en situaciones simuladas, guiados por expertos.
            Estos espacios permiten experimentar y mejorar continuamente en un
            entorno seguro.
          </p>
        </div>
      </Link>

      <Link href='#'>
        <div className='flex cursor-pointer flex-col items-center gap-6'>
          <div className='relative'>
            <img
              alt='Webinars'
              className='h-[114px] w-[114px]'
              src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/DiscoverCommunity%2FGroup%20633071.svg?alt=media&token=745a53da-bf6c-4c31-a1f4-cf99f5dd2bb0'
            />
          </div>
          <span className='font-darker-grotesque text-3xl font-bold text-red-500'>
            Webinar
          </span>
          <p className='w-[380px] text-center font-karla text-lg leading-6'>
            Ofrecemos webinars en vivo con líderes en metodologías ágiles.
            Abordamos desde conceptos básicos hasta estrategias avanzadas, y
            mostramos casos prácticos de implementación ágil en diversas
            industrias.
          </p>
        </div>
      </Link>
    </div>
  </div>
)
