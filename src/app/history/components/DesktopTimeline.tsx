'use client'

import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'

export const DesktopTimeline = () => {
  const timelineRef = useRef<HTMLDivElement | null>(null)

  const scrollTimeline = (direction: 'left' | 'right'): void => {
    if (timelineRef.current) {
      const scrollAmount = 300
      timelineRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }
  return (
    <div className='relative flex h-[770px] w-full items-center justify-center overflow-hidden bg-[#F0F0F0]'>
      <div className='relative z-10 flex w-[3%] items-center justify-center'>
        <button
          onClick={() => scrollTimeline('left')}
          className='focus:outline-none'
        >
          <ChevronLeft className='cursor-pointer' />
        </button>
      </div>
      <div className='relative flex w-[94%] flex-col overflow-hidden bg-[#F0F0F0]'>
        <div className='flex justify-center'>
          <h1 className='font-darker-grotesque text-6 font-black text-blue-6'>
            Logros de la comunidad
          </h1>
        </div>
        <div
          // className='scrollbar-hide relative flex flex-col overflow-x-scroll whitespace-nowrap'
          className='relative flex overflow-x-auto'
          ref={timelineRef}
        >
          {/* <div className="flex relative object-left h-16">
                        <h2 className='text-18 font-bold text-[#061D48] absolute bottom-1 left-[100px]'>2020</h2>
                        <h2 className='text-18 font-bold text-[#061D48] absolute bottom-1 left-[430px]'>2021</h2>
                        <h2 className='text-18 font-bold text-[#061D48] absolute bottom-1 left-[750px]'>2022</h2>
                        <h2 className='text-18 font-bold text-[#061D48] absolute bottom-1 left-[1050px]'>2023</h2>
                        <h2 className='text-18 font-bold text-[#061D48] absolute bottom-1 left-[1330px]'>2024</h2>
                    </div> */}
          <div className='flex min-w-max'>
            <img
              alt='timeline'
              // className='h-[131px] w-[2000px] object-cover object-left'
              className='h-[131px] w-[2000px] object-cover object-left'
              src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/History%2FTimeline%2FLinea%20de%20tiempo%20desktop.png?alt=media&token=fec439d7-d9c1-40d8-be90-df27a3626dd7'
            />
          </div>
        </div>
      </div>
      <div className='z-10 flex w-[3%] items-center justify-center'>
        <button
          onClick={() => scrollTimeline('right')}
          className='focus:outline-none'
        >
          <ChevronRight className='cursor-pointer' />
        </button>
      </div>
    </div>
  )
}
