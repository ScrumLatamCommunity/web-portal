'use client'
import { CheckBox } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'
import crown from '../imgs/crown.png'

interface PlansProps {
  title: string
  price: string
  description1: string
  description2: string
  description3: string
}

export default function Plans({
  title,
  price,
  description1,
  description2,
  description3,
}: PlansProps) {
  return (
    <div className='items-left mx-10 flex h-[553.03px] w-[340px] flex-col rounded-lg bg-gradient-to-b from-[#FD3600] to-[#FFFFFF] p-[2px] shadow-[0px_8px_15px_rgba(0,0,0,0.2)] md:mb-10 md:w-[380px]'>
      <div className='h-full rounded-[0.4rem] bg-white pl-12 pt-6'>
        <h1 className='mb-2 flex items-center text-[32px] font-darker-grotesque-4'>
          {title}
          {title.toLowerCase() === 'premium' && (
            <Image
              alt='Crown Icon'
              className='ml-2'
              height={24}
              src={crown}
              width={24}
            />
          )}
        </h1>
        <h1 className='mb-4 text-[50px] font-darker-grotesque-1'>{price}</h1>
        <button className='mb-6 h-[43px] w-[183px] rounded bg-[#FE5833] px-4 py-2 text-[18px] text-white'>
          Empezar
        </button>
        <div className='my-2 w-10/12 border-t-2 border-gray-300'></div>
        <div className='mb-10 mt-6 flex flex-row'>
          <CheckBox
            sx={{
              color: '#B299FF',
              transform: 'scale(1.3)',
              '& .MuiSvgIcon-root': {
                fontSize: '0.8rem',
              },
            }}
          />
          <p className='ml-2 pl-4 text-[18px] font-darker-grotesque-1'>
            {description1}
          </p>
        </div>
        <div className='mb-10 mt-6 flex flex-row'>
          <CheckBox
            sx={{
              color: '#B299FF',
              transform: 'scale(1.3)',
              '& .MuiSvgIcon-root': {
                fontSize: '0.8rem',
              },
            }}
          />
          <p className='ml-2 pl-4 text-[18px] font-darker-grotesque-1'>
            {description2}
          </p>
        </div>
        <div className='mb-10 mt-6 flex flex-row'>
          <CheckBox
            sx={{
              color: '#B299FF',
              transform: 'scale(1.3)',
              '& .MuiSvgIcon-root': {
                fontSize: '0.8rem',
              },
            }}
          />
          <p className='ml-2 pl-4 text-[18px] font-darker-grotesque-1'>
            {description3}
          </p>
        </div>
      </div>
    </div>
  )
}
