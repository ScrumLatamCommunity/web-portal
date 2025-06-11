'use client'
import { useCounter } from '../hooks/useCounter'
import { counters } from '@/data/data'
const gea_icon =
  'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Counters%20icons%2FGea_icon.svg?alt=media&token=6af53d34-e4dd-4db3-9eb8-090c60e8dc95'

export const CounterToCommunity = () => {
  useCounter(counters)
  return (
    <section className='relative m-auto mt-8 font-darker-grotesque md:max-w-[1920px] md:pb-16'>
      <div className='absolute right-44 top-0 z-10 hidden h-[19dvw] w-screen rounded-full bg-red-300 opacity-15 blur-3xl md:block'></div>
      <div className='absolute bottom-1/4 left-40 z-10 hidden h-[19dvw] w-[19dvw] rounded-full bg-blue-5 opacity-15 blur-3xl md:block'></div>
      <div className='mt-8 flex flex-wrap items-center justify-center gap-4 pt-12'>
        <img className='w-8 md:w-10 xl:w-auto' src={gea_icon} alt='gea_icon' />
        <h3 className='m-0 text-6 font-black text-red-400 md:text-4xl xl:text-17'>
          Somos una gran comunidad
        </h3>
      </div>
      <div className='flex flex-wrap justify-center justify-items-center gap-x-20 md:gap-14 xl:mt-14 xl:gap-x-32'>
        {counters.map((counter) => (
          <div
            className='mt-6 flex flex-col items-center md:gap-7'
            key={counter.id}
          >
            <img
              alt={counter.text}
              className='w-12 max-w-[114px] pt-3 md:w-[8dvw]'
              src={counter.icon}
            />
            <h4
              className='text-center text-10 font-black text-red-500 md:text-5xl xl:text-7xl'
              id='counter'
            >
              {counter.number}
            </h4>
            <p className='font-black text-blue-8 md:text-7 xl:text-11'>
              {counter.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
