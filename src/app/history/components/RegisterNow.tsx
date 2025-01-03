'use client'

import React from 'react'

export const RegisterNow = () => {
  return (
    <div className='flex h-[650px] flex-col items-center justify-center gap-3 bg-[#FE5833] px-6 py-24'>
      <img
        alt='gear'
        className='flex h-11 w-11'
        src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/History%2FRegister%2FVector.png?alt=media&token=7ca037b6-88d7-4adf-8e97-250a37e46b6c'
      />
      <span className='text-center text-14 font-extrabold text-[#05173A]'>
        ¡Únete a Nuestra Comunidad!
      </span>
      <p className='text-center text-xl font-semibold text-[#05173A]'>
        Conéctate con profesionales ágiles de toda Latinoamérica, accede a
        recursos exclusivos, y participa en eventos y webinars que impulsarán tu
        crecimiento.
      </p>
      <br></br>
      <p className='text-center text-xl font-semibold text-[#05173A]'>
        <strong>
          ¡Regístrate hoy y sé parte de nuestra transformación ágil!
        </strong>
      </p>
      <img
        alt='gear'
        className='flex h-14 w-14'
        src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/History%2FRegister%2FGoal.png?alt=media&token=9a243a4b-4952-45b5-bec5-af67664b7108'
      />
      <button className='flex rounded-full border border-[#05173A] px-8 py-2 font-semibold text-[#05173A]'>
        Regístrate Ahora
      </button>
    </div>
  )
}
