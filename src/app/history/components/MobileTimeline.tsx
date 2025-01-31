'use client'

import React from 'react'
import { ChevronDown } from 'react-feather'

export const MobileTimeline = () => {
  return (
    <div className='flex'>
      <div className='relative flex h-[1485px] w-full flex-col'>
        <div className='flex justify-center bg-[#F0F0F0] pt-4'>
          <h1 className='font-darker-grotesque text-6 font-black text-blue-6'>
            Logros de la comunidad
          </h1>
        </div>
        <div className='flex bg-[#F0F0F0] p-6'>
          <img
            alt='timeline'
            src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/History%2FTimeline%2FLinea%20de%20tiempo%20mobile.png?alt=media&token=d2a599dc-3a7e-4cd7-b3a4-e3f5535e1a7e'
          />
          <div className='relative flex-1'>
            <div className='absolute left-[10%] top-[60px]'>
              <h2 className='text-11 font-bold text-[#061D48]'>2020</h2>
              <p className='font-karla text-5 font-normal text-[#061D48]'>
                Se funda la comunidad SL. Se establecen los delegados
                representantes por país, quienes se encargan de invitar a las
                personas de su nación a los eventos de la comunidad. Se
                implementan los <strong>"Martes de Retrospectiva"</strong> y, a
                finales del año, se lanzan los primeros webinars.
              </p>
            </div>
            <div className='absolute left-[10%] top-[335px]'>
              <h2 className='text-11 font-bold text-[#061D48]'>2021</h2>
              <p className='font-karla text-5 font-normal text-[#061D48]'>
                Se crean los Squads, equipos que fortalecen la colaboración y el
                trabajo en grupo dentro de la comunidad.
              </p>
            </div>
            <div className='absolute left-[10%] top-[600px]'>
              <h2 className='text-11 font-bold text-[#061D48]'>2022</h2>
              <p className='font-karla text-5 font-normal text-[#061D48]'>
                Se lanzan los talleres, ofreciendo sesiones prácticas y
                formativas que enriquecen el aprendizaje y la participación de
                los miembros.
              </p>
            </div>
            <div className='absolute left-[10%] top-[880px]'>
              <h2 className='text-11 font-bold text-[#061D48]'>2023</h2>
              <p className='font-karla text-5 font-normal text-[#061D48]'>
                Se incorporan los aliados, fortaleciendo las asociaciones y el
                apoyo a la comunidad.
              </p>
            </div>
            <div className='absolute left-[10%] top-[1150px]'>
              <h2 className='text-11 font-bold text-[#061D48]'>2024</h2>
              <p className='font-karla text-5 font-normal text-[#061D48]'>
                Se lanzan las membresías para los miembros de la comunidad y se
                estrena el nuevo portal web, proporcionando una plataforma
                mejorada para la interacción y el acceso a recursos.
              </p>
            </div>
          </div>
        </div>
        <div className='flex h-10 items-center justify-center'>
          <ChevronDown />
        </div>
      </div>
    </div>
  )
}
