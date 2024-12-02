'use client'
import React from 'react'
import { CheckBox } from '@mui/icons-material'

interface BenefitsInterface {
  text: string
  checkFree: boolean
  checkFlex: boolean
  checkPremium: boolean
}

export default function Benefits({
  text,
  checkFree,
  checkFlex,
  checkPremium,
}: BenefitsInterface) {
  return (
    <div
      style={{
        width: '1326px',
      }}
      className='flex flex-col'
    >
      <div className='my-2 w-full border-t-2 border-gray-600'></div>
      <div className='flex-fil flex'>
        <p
          style={{
            width: '304px',
            height: '48px',
            marginRight: '248px',
            fontSize: '18px',
          }}
          className='font-darker-grotesque-2 my-3 ml-8'
        >
          {text}
        </p>
        <div className='flex flex-row pt-5'>
          <CheckBox
            sx={{
              transform: 'scale(1.1)',
              '& .MuiSvgIcon-root': {
                fontSize: '0.8rem',
              },
              color: '#B299FF',
              visibility: checkFree ? 'visible' : 'hidden',
            }}
          />
          <CheckBox
            style={{ marginLeft: '288px' }}
            sx={{
              transform: 'scale(1.1)',
              '& .MuiSvgIcon-root': {
                fontSize: '0.8rem',
              },
              color: '#B299FF',
              visibility: checkFlex ? 'visible' : 'hidden',
            }}
          />
          <CheckBox
            style={{ marginLeft: '298px' }}
            sx={{
              transform: 'scale(1.1)',
              '& .MuiSvgIcon-root': {
                fontSize: '0.8rem',
              },
              color: '#B299FF',
              visibility: checkPremium ? 'visible' : 'hidden',
            }}
          />
        </div>
      </div>
    </div>
  )
}
