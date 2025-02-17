import ArrowUpRight from '@/assets/arrowUpright'
import { darkerGrotesque, karla } from '@/fonts'
import Image from 'next/image'
import React from 'react'

interface Offert {
  offertImage: string
  offertTitle: string
  offertDescription: string
  offertDate: string
  offertTime: string
  offertPlace: string
  offertGoTo: string
  offertDiscount: string
  offertLink: string
}

export default function OffertCard({
  offertImage,
  offertTitle,
  offertDescription,
  offertDate,
  offertTime,
  offertPlace,
  offertGoTo,
  offertDiscount,
  offertLink
}: Offert) {
  return (
    <div
      className={`${darkerGrotesque.variable} ${karla.variable} mb-5 flex w-[85%] flex-col rounded-lg bg-white pb-3 md:w-[80%]`}
    >
      <Image
        className='mb-5 rounded-t-lg shadow-[0px_25px_25px_rgba(0,0,0,0.10)]'
        src={offertImage}
        alt={'banner'}
        width={1000}
        height={200}
      />
      <h1 className='px-5 pb-2 font-darker-grotesque text-[26px] font-darker-grotesque-700 leading-[30px] text-[#FE2E00]'>
        {offertTitle}
      </h1>
      <h2 className='px-5 pb-2 font-darker-grotesque text-[20px] font-darker-grotesque-700 leading-[30px] text-[#061D48]'>
        {offertDiscount}
      </h2>
      <p className='px-5 font-karla text-[16px] font-karla-400'>
        {offertDescription}
      </p>
      <p className='px-5'>
        <strong>Fecha: </strong> {offertDate}
      </p>
      <p className='px-5'>
        <strong>Hora:</strong> {offertTime}
      </p>
      <p className='px-5'>
        <strong>Lugar:</strong> {offertPlace}
      </p>
      <p className='px-5'>
        <strong>Dirigido a:</strong> {offertGoTo}
      </p>
      <div className='mt-4 flex flex-row items-center px-5'>
        <ArrowUpRight />
        <button
          onClick={() => {
            const url = offertLink.startsWith('http')
              ? offertLink
              : `https://${offertLink}`
            window.open(url, '_blank', 'noopener,noreferrer')
          }}
          className='cursor-pointer pb-2 font-darker-grotesque text-[24px] font-darker-grotesque-600 text-[#FE5833] hover:underline'
        >
          Inscribirse ahora
        </button>
      </div>
    </div>
  )
}
