'use client'
import React from 'react'
import { darkerGrotesque, karla } from '@/fonts'
import Image from 'next/image'

interface ArticlesI {
  title: string
  date: string
  description: string
  img: string
}

export default function ArticlesCard({
  title,
  date,
  description,
  img,
}: ArticlesI) {
  return (
    <div
      className={`${darkerGrotesque.variable} ${karla.variable} relative z-[1] w-screen px-10`}
    >
      <div className='my-4 flex flex-col rounded-[15px] bg-white font-darker-grotesque shadow-[0px_8px_15px_rgba(0,0,0,0.2)]'>
        <Image
          src={img}
          alt={'meeting'}
          className='h-[200px] rounded-t-[15px]'
          width={1600}
          height={1600}
        />
        <p className='w-full pr-4 pt-3 text-right text-[14px] font-darker-grotesque-400 text-[#061D48]'>
          {date}
        </p>
        <h1 className='w-[80%] pl-5 pt-1 text-left text-[23px] font-darker-grotesque-700 leading-[27.2px] text-[#FE2E00]'>
          {title}
        </h1>
        <p className='w-[90%] px-5 py-4 text-left text-[20px] font-darker-grotesque-400 leading-[18.7px] text-[#061D48]'>
          {description}
        </p>
        <button className='mb-6 ml-5 mt-2 h-[38px] w-[40%] rounded-[20px] bg-[#FE5833] pb-1 text-[17px] font-darker-grotesque-600 text-white'>
          Seguí leyendo
        </button>
      </div>
    </div>
  )
}
