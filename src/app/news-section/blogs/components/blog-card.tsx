'use client'
import React from 'react'
import { darkerGrotesque, karla } from '@/fonts'
import Image from 'next/image'

interface BlogI {
  title: string
  date: string
  description: string
  img: string
  onReadMore: () => void
}

export default function BlogCard({
  title,
  date,
  description,
  img,
  onReadMore
}: BlogI) {
  return (
    <div
      className={`${darkerGrotesque.variable} ${karla.variable} relative z-[1] w-screen px-6 font-darker-grotesque md:w-[85%]`}
    >
      <div className='my-4 flex flex-row rounded-[15px] bg-white font-darker-grotesque shadow-[0px_8px_15px_rgba(0,0,0,0.2)] md:pl-8'>
        <div className='flex flex-col'>
          <p className='relative z-[1] pl-5 pt-3 text-left text-[14px] font-darker-grotesque-400 text-[#061D48] md:text-[18px] md:font-darker-grotesque-700'>
            {date}
          </p>
          <div className='flex-fil flex'>
            <h1 className='w-[90%] pl-5 pt-1 text-left text-[20px] font-darker-grotesque-700 leading-[27.2px] text-[#FE2E00] md:pb-4 md:text-[36px]'>
              {title}
            </h1>
          </div>
          <div
            className={`${darkerGrotesque.variable} ${karla.variable} font-karla`}
          >
            <p className='relative z-[1] line-clamp-2 overflow-hidden pl-5 pt-3 text-left text-[16px] font-darker-grotesque-400 text-[#061D48] md:line-clamp-none md:w-[90%]'>
              {description}
            </p>
          </div>
          <div
            className={`${darkerGrotesque.variable} ${karla.variable} font-darker-grotesque`}
          >
            <button
              className='mb-6 ml-5 mt-6 h-[38px] w-[60%] rounded-[20px] bg-[#FE5833] pb-1 text-[17px] font-darker-grotesque-600 text-white md:w-[15%]'
              onClick={onReadMore}
            >
              Seguí leyendo
            </button>
          </div>
        </div>
        <Image
          alt={'meeting'}
          className='ml-2 mr-6 mt-10 h-[50px] w-[71px] md:ml-0 md:mr-0 md:mt-0 md:h-auto md:max-h-[260px] md:w-screen md:max-w-[28%] md:rounded-r-xl'
          height={1800}
          src={img}
          width={1800}
        />
      </div>
    </div>
  )
}
