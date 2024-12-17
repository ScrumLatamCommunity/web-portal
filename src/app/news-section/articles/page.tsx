'use client'
import React from 'react'
import { darkerGrotesque, karla } from '@/fonts'
import SearchBar from './components/search-bar'
import ArticlesCard from './components/article-card'
import { articles } from '@/data/data'

export default function Articles() {
  return (
    <main
      className={`${darkerGrotesque.variable} ${karla.variable} relative z-10 w-full pb-12`}
    >
      <div className='absolute -right-20 top-20 -z-[10] h-[400px] w-[400px] rounded-full bg-red-300 opacity-20 blur-3xl md:-top-20 md:left-4'></div>
      <div className='absolute -left-20 top-96 -z-[10] h-[400px] w-[400px] rounded-full bg-blue-300 opacity-30 blur-3xl md:-top-16 md:left-[1500px]'></div>
      <div className='absolute -right-20 bottom-[250px] -z-[10] h-[400px] w-[400px] rounded-full bg-red-300 opacity-20 blur-3xl md:left-4'></div>
      <div className='absolute -left-20 bottom-[250px] -z-[10] h-[400px] w-[400px] rounded-full bg-blue-300 opacity-30 blur-3xl md:left-[1500px]'></div>

      <header className='flex w-full flex-col font-darker-grotesque'>
        <h1 className='ml-5 mt-4 text-[38px] font-bold text-[#FE2E00] md:ml-16 md:mt-16 md:text-[48px]'>
          Artículos
        </h1>
      </header>

      <section className='my-4 w-full md:mb-12'>
        <SearchBar />
      </section>

      <section className='z-[1] mx-auto grid grid-cols-1 place-items-center gap-3 md:grid-cols-3'>
        {articles.map((articles) => (
          <ArticlesCard
            key={articles.id}
            title={articles.title}
            date={articles.date}
            description={articles.description}
            img={articles.img}
          />
        ))}
      </section>
    </main>
  )
}
