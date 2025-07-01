import Image from 'next/image'
import React from 'react'

export default function CommunityActivities() {
  return (
    <div className='relative w-full'>
      <Image
        alt='members'
        className='z-10 w-full object-cover md:h-[800px] 2xl:h-[900px]'
        height={1600}
        priority
        quality={100}
        sizes='100vw'
        src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Home%2FWhatsApp%20Image%202025-06-20%20at%204.21.35%20PM.jpeg?alt=media&token=8f60d240-3374-4df6-b18f-b990b173b8c9'
        width={889}
      />
      <div className='absolute right-4 top-1/2 z-20 flex w-[75%] -translate-y-1/2 flex-col rounded-2xl bg-white bg-opacity-75 md:right-32 md:w-[35%] md:bg-opacity-50 2xl:right-60 2xl:w-[33%]'>
        <p className='px-6 font-darker-grotesque text-[22px] font-bold leading-1 text-[#082965] md:p-16 md:pb-2 md:pt-28 md:text-[55px] 2xl:p-16 2xl:pb-2 2xl:pt-28 2xl:text-[65px]'>
          Actividades en la comunidad
        </p>
        <p className='px-6 pb-6 font-darker-grotesque text-[14px] font-medium text-[#082965] md:p-16 md:pb-7 md:pt-6 md:text-[20px] 2xl:p-16 2xl:pb-10 2xl:pt-6 2xl:text-[26px]'>
          Organizamos talleres prácticos donde los miembros aprenden y aplican
          principios ágiles en situaciones simuladas, guiados por expertos.
        </p>
        <p className='px-6 pb-6 font-darker-grotesque text-[14px] font-medium text-[#082965] md:p-16 md:pb-28 md:pt-0 md:text-[20px] 2xl:p-16 2xl:pb-28 2xl:pt-0 2xl:text-[26px]'>
          Estos espacios fomentan la experimentación y la mejora continua en un
          entorno seguro.
        </p>
      </div>
    </div>
  )
}
