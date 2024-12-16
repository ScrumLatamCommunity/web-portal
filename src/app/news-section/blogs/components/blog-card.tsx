import React from 'react'
import { darkerGrotesque, karla } from '@/fonts'
import Image from 'next/image'

interface BlogI {
  title: string
  date: string
  description: string
  img: string
}

export default function BlogCard({ title, date, description, img }: BlogI) {
  return (
    <div
      className={`${darkerGrotesque.variable} ${karla.variable} relative z-[1] w-screen px-6 font-darker-grotesque`}
    >
      <div className='my-4 flex flex-col rounded-[15px] bg-white font-darker-grotesque shadow-[0px_8px_15px_rgba(0,0,0,0.2)]'>
        <p className='relative z-[1] w-screen px-10 pl-5 pt-3 text-left text-[14px] font-darker-grotesque-400 text-[#061D48]'>
          {date}
        </p>
        <div className='flex-fil flex'>
          <h1 className='w-[75%] pl-5 pt-1 text-left text-[20px] font-darker-grotesque-700 leading-[27.2px] text-[#FE2E00]'>
            {title}
          </h1>
          <Image
            src={img}
            alt={'meeting'}
            className='ml-2 mr-4 h-[50px] w-[71px]'
            width={1800}
            height={1800}
          />
        </div>
        <div
          className={`${darkerGrotesque.variable} ${karla.variable} font-karla`}
        >
          <p className='relative z-[1] line-clamp-2 overflow-hidden px-10 pl-5 pt-3 text-left text-[16px] font-darker-grotesque-400 text-[#061D48]'>
            {description}
          </p>
        </div>
        <div
          className={`${darkerGrotesque.variable} ${karla.variable} font-darker-grotesque`}
        >
          <button className='mb-6 ml-5 mt-6 h-[38px] w-[40%] rounded-[20px] bg-[#FE5833] pb-1 text-[17px] font-darker-grotesque-600 text-white'>
            Seguí leyendo
          </button>
        </div>
      </div>
    </div>
  )
}
