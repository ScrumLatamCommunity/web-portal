import Image from 'next/image'
import React from 'react'
import mainActivity from '../homeAssets/mainActivity.jpg'

export default function MainActivity() {
  return (
    <div className='relative flex h-[500px] w-full flex-col rounded-[30px] shadow-2xl'>
      <Image
        alt='homeActivity'
        className='h-full w-full rounded-[30px] object-cover'
        height={1200}
        src={mainActivity}
        width={1000}
      />
      <div className='absolute bottom-0 left-0 w-full rounded-b-[30px] bg-[#082965] p-6 opacity-70'>
        <h1 className='font-darker-grotesque text-[24px] font-bold text-white'>
          Nueva acvitidad:
        </h1>
        <h2 className='pb-4 font-darker-grotesque text-[24px] font-bold text-white'>
          Optimización de sprints
        </h2>
        <p className='pb-6 font-darker-grotesque text-[20px] leading-[20px] text-white'>
          Únete a nuestro webinar el 15 de julio a las 18:00 (hora Bogotá) y
          descubre cómo optimizar tus sprints con expertos en Scrum. ¡Aprende y
          haz networking!
        </p>
      </div>
    </div>
  )
}
