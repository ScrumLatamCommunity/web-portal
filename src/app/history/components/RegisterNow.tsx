'use client'

import React from 'react'

export const RegisterNow = () => {
  return (
    <div className='flex h-[650px] flex-col items-center justify-center gap-3 bg-[#FE5833] px-6 py-24 lg:h-[389px] lg:flex-row lg:gap-5 lg:py-16'>
      <img
        alt='gear'
        className='flex h-11 w-11 lg:self-start'
        src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/History%2FRegister%2FVector.png?alt=media&token=7ca037b6-88d7-4adf-8e97-250a37e46b6c'
      />
      <div className='flex flex-col lg:w-[545px] lg:justify-center lg:gap-3 lg:pb-[70px] lg:pt-[95px]'>
        <span className='text-center text-14 font-extrabold text-[#05173A] lg:text-[36px]'>
          ¡Únete a Nuestra Comunidad!
        </span>
        <p className='text-center text-xl font-semibold text-[#05173A] lg:text-[18px]'>
          Conéctate con profesionales ágiles de toda Latinoamérica, accede a
          recursos exclusivos, y participa en eventos y webinars que impulsarán
          tu crecimiento.
        </p>
        <br></br>
        <p className='text-center text-xl font-semibold text-[#05173A] lg:text-[18px]'>
          <strong>
            ¡Regístrate hoy y sé parte de nuestra transformación ágil!
          </strong>
        </p>
        <button className='hidden rounded-full border border-[#05173A] px-8 py-2 text-3 font-semibold text-[#05173A] lg:flex lg:w-48 lg:self-center'>
          Regístrate Ahora
        </button>
      </div>
      <img
        alt='gear'
        className='flex h-14 w-14 lg:hidden'
        src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/History%2FRegister%2FGoal.png?alt=media&token=9a243a4b-4952-45b5-bec5-af67664b7108'
      />
      <img
        alt='gear'
        className='hidden h-14 w-14 self-end lg:flex'
        src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/History%2FRegister%2FGoal%20(1).png?alt=media&token=f8a8a9e3-3805-4bc7-ae69-a8c1fc62e798'
      />
      <button className='flex rounded-full border border-[#05173A] px-8 py-2 font-semibold text-[#05173A] lg:hidden'>
        Regístrate Ahora
      </button>
    </div>
  )
}
