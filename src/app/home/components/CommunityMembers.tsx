import Image from 'next/image'
import React from 'react'

export default function CommunityMembers() {
  return (
    <div className='relative w-full'>
      <Image
        alt='members'
        className='z-10 w-full object-cover md:h-[900px] 2xl:h-[1000px]'
        height={1600}
        priority
        quality={100}
        sizes='100vw'
        src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Home%2FWhatsApp%20Image%202025-06-17%20at%206.17.40%20PM.jpeg?alt=media&token=e7f2704f-8d7c-422a-82f3-655f0d645a31'
        width={889}
      />
      <div className='absolute left-1/2 top-1/2 z-20 flex w-[75%] -translate-x-1/2 -translate-y-1/2 flex-col rounded-2xl bg-white bg-opacity-75 md:left-[30%] md:w-[35%] md:bg-opacity-50 2xl:md:left-[30%] 2xl:w-[33%] 2xl:bg-opacity-50'>
        <p className='px-6 pb-2 font-darker-grotesque text-[22px] font-bold leading-1 text-[#082965] md:p-16 md:pb-6 md:pt-20 md:text-[55px] 2xl:p-16 2xl:pb-10 2xl:pt-24 2xl:text-[65px]'>
          Miembros de la comunidad
        </p>
        <p className='px-6 font-darker-grotesque text-[14px] font-medium text-[#082965] md:px-16 md:text-[20px] 2xl:px-16 2xl:text-[26px]'>
          Has llegado al lugar donde los que cuestionan, aprenden y transforman
          se reúnen. Aquí no venimos a repetir lo de siempre… venimos a romper
          esquemas, liderar con propósito y generar impacto real.
        </p>
        <p className='px-6 pb-6 font-darker-grotesque text-[14px] font-medium text-[#082965] md:p-16 md:pb-20 md:pt-6 md:text-[22px] 2xl:p-16 2xl:pb-28 2xl:pt-6 2xl:text-[28px]'>
          <strong>¿Estás listo para dejar tu huella ágil?</strong>
        </p>
      </div>
    </div>
  )
}
