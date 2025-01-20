'use client'

import React from 'react'
import { history } from '@/data/data'

export const DesktopMisionVision = () => {
  return (
    <div className='flex w-full max-w-[1980px] flex-wrap justify-center gap-10 bg-black-4 px-2 py-20 lg:gap-16'>
      {history.map((item) => (
        <div key={item.id} className='flex w-96 flex-col items-center gap-6'>
          <img alt={item.title} className='flex h-28 w-28' src={item.image} />
          <h1
            className={
              item.id === 2
                ? 'flex text-14 font-bold text-blue-7'
                : 'flex text-14 font-bold text-red-500'
            }
          >
            {item.title}
          </h1>
          {item.id === 1 ? (
            <ul className='list-disc'>
              {item.description.map((i, index) => {
                const [boldPart, rest] = i.split(':')
                return (
                  <li key={index} className='font-medium text-blue-8'>
                    <strong>{boldPart}:</strong>
                    {rest}
                  </li>
                )
              })}
            </ul>
          ) : (
            item.description.map((i, index) => (
              <span key={index} className='font-medium text-blue-8'>
                {i}
              </span>
            ))
          )}
        </div>
      ))}
    </div>
  )
}
