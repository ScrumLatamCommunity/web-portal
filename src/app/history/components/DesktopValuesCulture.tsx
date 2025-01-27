'use client'

import React, { useState } from 'react'
import { valuesCulture } from '@/data/data'
import { ChevronRight } from 'react-feather'

export const DesktopValuesCulture = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  return (
    <div className='mb-9 flex w-full flex-col gap-8 p-10 px-28'>
      {valuesCulture.map((item) => (
        <div key={item.id}>
          <div
            className='flex h-[82px] w-full items-center justify-between rounded-3xl border border-gray-200 px-4 py-3 font-darker-grotesque shadow-md'
            onClick={() => toggleAccordion(item.id)}
          >
            <div className='flex items-center gap-5'>
              <img alt={item.title} className='h-12 w-12' src={item.image} />
              <h2
                className='flex font-darker-grotesque text-[48px] font-black text-[#082965]'
                style={{
                  textShadow:
                    '0.35px 0.35px 0 #082965, -0.35px -0.35px 0 #082965',
                }}
              >
                {item.title}
              </h2>
            </div>
            <ChevronRight
              className={`h-8 w-8 transform transition-transform ${openAccordion === item.id ? 'rotate-90' : ''} justify-end text-red-400`}
            />
          </div>
          <div
            className={`overflow-hidden font-darker-grotesque shadow-xl transition-all duration-500 ease-in-out ${
              openAccordion === item.id ? 'h-auto' : 'max-h-0'
            }`}
          >
            <div className='overflow-hidden rounded-xl px-12 py-10 font-darker-grotesque text-xl transition-all duration-500 ease-in-out'>
              <ul
                className={`${
                  item.id === 1
                    ? 'marker:text-[#FE5833]'
                    : 'marker:text-[#95A3BD]'
                } grid grid-cols-1 gap-4 font-darker-grotesque md:grid-cols-3 md:items-start md:justify-items-start md:gap-28`}
              >
                {item.desktopTitle.map((title, index) => {
                  const words = title.split(' ') // Divide el título en palabras
                  const isSecondObject = item.id === 2

                  return (
                    <li
                      key={index}
                      className='flex items-start gap-2 font-darker-grotesque font-normal leading-7 text-blue-8'
                    >
                      <img
                        src={
                          isSecondObject
                            ? 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/History%2FValuesCulture%2FGroup%20633685.png?alt=media&token=ba1fc85a-e453-40e3-905b-22feabbc5b7c'
                            : 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/History%2FValuesCulture%2FGroup%20633689.png?alt=media&token=e236fe20-2de5-40ed-9244-220fba2bd6eb'
                        }
                        alt='Icon'
                        className='mt-[-1px] flex h-10 w-[5px]'
                      />
                      <div className='flex max-w-[280px] flex-col gap-4 font-darker-grotesque'>
                        {words.length >= 2 && words.length <= 3 ? (
                          <>
                            <span className='font-darker-grotesque text-[30px] font-bold'>
                              {words[0]}
                            </span>
                            <span className='font-darker-grotesque text-[30px] font-bold'>
                              {words.slice(1).join(' ')}
                            </span>
                          </>
                        ) : (
                          <span className='font-darker-grotesque text-[30px] font-bold'>
                            {title}
                          </span>
                        )}
                        <span className='font-karla text-[18px]'>
                          {item.desktopDescription[index]}
                        </span>
                      </div>
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
