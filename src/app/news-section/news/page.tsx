'use client'
import React from 'react'
import { darkerGrotesque, karla } from '@/fonts'
import SearchBar from './components/search-bar'
import NewsCard from './components/news-card'
import { news } from '@/data/data'

export default function News() {
  return (
    <main
      className={`${darkerGrotesque.variable} ${karla.variable} relative z-10 w-screen pb-12`}
    >
      <div className='absolute -right-20 top-20 -z-[10] h-[400px] w-[400px] rounded-full bg-red-300 opacity-20 blur-3xl md:block'></div>
      <div className='absolute -left-20 top-96 -z-[10] h-[400px] w-[400px] rounded-full bg-blue-300 opacity-30 blur-3xl md:block'></div>
      <div className='absolute -right-20 bottom-[1000px] -z-[10] h-[400px] w-[400px] rounded-full bg-red-300 opacity-20 blur-3xl md:block'></div>
      <div className='absolute -left-20 bottom-[500px] -z-[10] h-[400px] w-[400px] rounded-full bg-blue-300 opacity-30 blur-3xl md:block'></div>
      <div className='flex w-full flex-col items-center font-darker-grotesque'>
        <h1 className='-mb-1 mr-44 mt-4 text-[38px] font-darker-grotesque-700 text-[#FE2E00]'>
          Noticias
        </h1>
      </div>
      <div className='w-screen'>
        <SearchBar />
      </div>
      <div className='z-[1] flex flex-col items-center'>
        {news.map((news) => (
          <NewsCard
            key={news.id}
            title={news.title}
            date={news.date}
            description={news.description}
            img={news.img}
          />
        ))}
      </div>
    </main>
  )
}
