'use client'
import React from 'react'
import { darkerGrotesque, karla } from '@/fonts'
import SearchBar from './components/search-bar'
import ArticlesCard from './components/article-card'
import { articles } from '@/data/data'

export default function Articles() {
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
          Artículos
        </h1>
      </div>
      <div className='w-screen'>
        <SearchBar />
      </div>
      <div className='z-[1] flex flex-col items-center'>
        {articles.map((articles) => (
          <ArticlesCard
            key={articles.id}
            title={articles.title}
            date={articles.date}
            description={articles.description}
            img={articles.img}
          />
        ))}
      </div>
    </main>
  )
}
