'use client'

import React, { useState } from 'react'
import { ChevronRight } from 'react-feather'
import { history } from '@/data/data'

export const MobileMisionVision = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  return (
    <div className='mb-9 flex w-full flex-col gap-4 px-3'>
      {history.map((item) => (
        <div key={item.id}>
          <div
            className='flex w-full items-center justify-between rounded-3xl border border-gray-200 px-4 py-3 shadow-md'
            onClick={() => toggleAccordion(item.id)}
          >
            <div className='flex items-center gap-5'>
              <img alt={item.title} src={item.image} />
              <h1
                className={
                  item.id === 2
                    ? 'flex font-medium text-blue-7'
                    : 'flex font-medium text-red-500'
                }
              >
                {item.title}
              </h1>
            </div>
            <ChevronRight
              className={`transform transition-transform ${openAccordion === item.id ? 'rotate-90' : ''} justify-end text-red-400`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openAccordion === item.id ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <div className='overflow-hidden rounded-xl px-4 py-3 transition-all duration-500 ease-in-out'>
              <ul
                className={`${item.id === 3 ? '' : 'list-disc'} space-y-2 pl-5`}
              >
                {item.description.map((point, index) => (
                  <li key={index} className='font-medium text-blue-8'>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
