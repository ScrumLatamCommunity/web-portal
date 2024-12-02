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
    <div
      style={{
        width: '420px',
        height: '553.03px',
        borderRadius: '1rem',
        background: 'linear-gradient(180deg, #FD3600, #FFFFFF)',
        padding: '3px',
        boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
      }}
      className='items-left mx-10 mb-10 flex flex-col'
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '0.8rem',
          backgroundColor: '#FFFFFF',
        }}
        className='pl-12 pt-6'
      >
        <h1
          style={{ fontSize: '32px' }}
          className='mb-2 flex items-center font-darker-grotesque-4'
        >
          {title}
          {title.toLowerCase() === 'premium' && (
            <Image
              src={crown}
              alt='Crown Icon'
              width={24}
              height={24}
              style={{
                marginLeft: '8px',
              }}
            />
          )}
        </h1>
        <h1
          style={{ fontSize: '50px' }}
          className='mb-4 font-darker-grotesque-1'
        >
          {price}
        </h1>
        <button
          style={{
            width: '183px',
            height: '43px',
            fontSize: '18px',
            backgroundColor: '#FE5833',
          }}
          className='mb-6 rounded px-4 py-2 text-white'
        >
          Empezar
        </button>
        <div className='my-2 w-10/12 border-t-2 border-gray-300'></div>
        <div className='mb-10 mt-6 flex flex-row'>
          <CheckBox
            sx={{
              transform: 'scale(1.3)',
              '& .MuiSvgIcon-root': {
                fontSize: '0.8rem',
              },
              color: '#B299FF',
            }}
          />
          <p
            style={{
              fontSize: '18px',
            }}
            className='ml-2 pl-4 font-darker-grotesque-1'
          >
            {description1}
          </p>
        </div>
        <div className='mb-10 mt-6 flex flex-row'>
          <CheckBox
            sx={{
              transform: 'scale(1.3)',
              '& .MuiSvgIcon-root': {
                fontSize: '0.8rem',
              },
              color: '#B299FF',
            }}
          />
          <p
            style={{
              fontSize: '18px',
            }}
            className='ml-2 pl-4 font-darker-grotesque-1'
          >
            {description2}
          </p>
        </div>
        <div className='mb-10 mt-6 flex flex-row'>
          <CheckBox
            sx={{
              transform: 'scale(1.3)',
              '& .MuiSvgIcon-root': {
                fontSize: '0.8rem',
              },
              color: '#B299FF',
            }}
          />
          <p
            style={{
              fontSize: '18px',
            }}
            className='ml-2 pl-4 font-darker-grotesque-1'
          >
            {description3}
          </p>
        </div>
      </div>
    </div>
  )
}
