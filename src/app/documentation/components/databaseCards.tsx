'use client'

import React from 'react'
import { Database } from '../interfaces/databaseInterface'
import { darkerGrotesque, karla } from '@/fonts'

export default function DatabaseCards({
  title,
  date,
  description,
  category,
  subject,
  onReadMore,
}: Database) {
  return (
    <div
      className={`${darkerGrotesque.variable} ${karla.variable} relative z-[1] w-screen px-6 font-darker-grotesque md:w-[85%]`}
    >
      {/* Contenido principal */}
      <div className='my-4 flex flex-col rounded-[15px] bg-white p-6 font-darker-grotesque shadow-[0px_8px_15px_rgba(0,0,0,0.2)]'>
        <p className='text-left text-[14px] font-darker-grotesque-400 text-[#061D48] md:text-[18px] md:font-darker-grotesque-700'>
          {date}
        </p>
        <h1 className='mt-2 text-left text-[20px] font-darker-grotesque-700 leading-[27.2px] text-[#FE2E00] md:pb-4 md:text-[36px]'>
          {title}
        </h1>
        <p className='mt-3 text-left text-[16px] font-darker-grotesque-400 text-[#061D48]'>
          {description}
        </p>
        <div className='mt-4 flex items-center justify-between'>
          <div className='flex gap-2'>
            <span className='rounded-full bg-[#FFEAE6] px-3 py-1 text-sm font-darker-grotesque-400 text-[#061D48]'>
              {category}
            </span>
            <span className='rounded-full bg-[#FFEAE6] px-3 py-1 text-sm font-darker-grotesque-400 text-[#061D48]'>
              {subject}
            </span>
          </div>
          <button
            className='rounded-[20px] bg-[#FE5833] px-6 py-2 text-[17px] font-darker-grotesque-600 text-white'
            onClick={onReadMore}
          >
            Acceder
          </button>
        </div>
      </div>
    </div>
  )
}
