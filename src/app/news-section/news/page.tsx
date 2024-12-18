'use client'
import React from 'react'
import { darkerGrotesque, karla } from '@/fonts'
import SearchBar from './components/search-bar'
import NewsCard from './components/news-card'
import { news } from '@/data/data'

export default function News() {
  return (
    <main
      className={`${darkerGrotesque.variable} ${karla.variable} relative z-10 w-full items-center pb-12`}
    >
      <div className='absolute -right-20 top-20 -z-[10] h-[400px] w-[400px] rounded-full bg-red-300 opacity-20 blur-3xl md:-top-20 md:left-4'></div>
      <div className='absolute -left-20 top-96 -z-[10] h-[400px] w-[400px] rounded-full bg-blue-300 opacity-30 blur-3xl md:-top-16 md:left-[1500px]'></div>
      <div className='absolute -right-20 bottom-[250px] -z-[10] h-[400px] w-[400px] rounded-full bg-red-300 opacity-20 blur-3xl md:left-4'></div>
      <div className='absolute -left-20 bottom-[250px] -z-[10] h-[400px] w-[400px] rounded-full bg-blue-300 opacity-30 blur-3xl md:left-[1500px]'></div>

      <header className='flex w-full flex-col font-darker-grotesque'>
        <h1 className='ml-5 mt-4 text-[40px] font-bold text-[#FE2E00] md:mb-6 md:ml-12 md:mt-8 md:text-[50px]'>
          Noticias
        </h1>
      </header>

      <section className='my-4 w-full px-3 md:mb-12'>
        <SearchBar />
      </section>

      <section className='z-[1] mx-auto grid max-w-screen-2xl grid-cols-1 place-items-center gap-1 md:grid-cols-3'>
        {news.map((news) => (
          <NewsCard
            key={news.id}
            title={news.title}
            date={news.date}
            description={news.description}
            img={news.img}
          />
        ))}
      </section>
    </main>
  )
}
