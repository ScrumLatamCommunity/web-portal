'use client'

import React from 'react'
import { Database } from '../interfaces/databaseInterface'
import { darkerGrotesque, karla } from '@/fonts'

export default function DatabaseCards({
  category,
  date,
  description,
  title,
  subject,
  onReadMore
}: Database) {
  return (
    <div
      className={`${darkerGrotesque.variable} ${karla.variable} relative z-[1] w-screen px-6 font-darker-grotesque md:w-full`}
    >
      <div className='my-4 flex flex-col rounded-[15px] bg-white p-6 shadow-[0px_8px_15px_rgba(0,0,0,0.2)]'>
        <div className='flex items-center justify-between'>
          <h1 className='font-darker-grotesque-900 text-left text-[22px] font-extrabold text-[#082965] md:pb-0 md:text-[28px]'>
            {title}
          </h1>
          <p className='text-right text-[14px] font-darker-grotesque-400 text-[#061D48] md:text-[18px]'>
            {date}
          </p>
        </div>
        <p className='mt-3 text-left text-[15px] font-darker-grotesque-600 text-[#082965] md:text-[20px]'>
          {description}
        </p>
        <div className='mt-4 flex items-center justify-between'>
          <div className='flex gap-2'>
            <span className='flex items-center justify-center rounded-full bg-[#FFEAE6] px-3 py-1 text-center text-[15px] font-darker-grotesque-500 text-[#FE2E00]'>
              {category}
            </span>
            <span className='flex items-center justify-center rounded-full bg-[#FFEAE6] px-3 py-1 text-center text-[15px] font-darker-grotesque-500 text-[#FE2E00]'>
              {subject}
            </span>
          </div>

          <button
            className='rounded-[20px] px-6 py-2 text-[20px] font-darker-grotesque-600 text-[#FE2E00] md:bg-[#FE5833] md:text-white'
            onClick={onReadMore}
          >
            Acceder
          </button>
        </div>
      </div>
    </div>
  )
}
