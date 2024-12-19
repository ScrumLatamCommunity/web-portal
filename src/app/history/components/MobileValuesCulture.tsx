'use client'

import React, { useState } from 'react'
import { valuesCulture } from '@/data/data'
import { ChevronRight } from 'react-feather'

export const MobileValuesCulture = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }
  return (
    <div className='mb-9 flex w-full flex-col gap-4 p-10 px-3'>
      {valuesCulture.map((item) => (
        <div key={item.id}>
          <div
            className='flex h-[82px] w-full items-center justify-between rounded-3xl border border-gray-200 px-4 py-3 shadow-md'
            onClick={() => toggleAccordion(item.id)}
          >
            <div className='flex items-center gap-5'>
              <img alt={item.title} src={item.image} />
              <h1 className='flex text-10 font-black text-[#082965]'>
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
            <div className='overflow-hidden rounded-xl px-4 py-3 text-5 transition-all duration-500 ease-in-out'>
              <ul
                className={`${item.id === 1 ? 'marker:text-[#FE5833]' : 'marker:text-[#95A3BD]'} prose list-disc space-y-2 pl-5`}
              >
                {item.description.map((point, index) => {
                  const [boldPart, rest] = point.split(':')
                  return (
                    <li
                      key={index}
                      className='font-normal leading-7 text-blue-8'
                    >
                      <strong>{boldPart}:</strong>
                      {rest}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
