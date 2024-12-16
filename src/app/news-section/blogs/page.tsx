'use client'
import React from 'react'
import { darkerGrotesque, karla } from '@/fonts'
import SearchBar from './components/search-bar'
import { blogs } from '@/data/data'
import BlogCard from './components/blog-card'

export default function Blogs() {
  return (
    <main
      className={`${darkerGrotesque.variable} ${karla.variable} relative z-10 w-screen pb-12`}
    >
      <div className='absolute -right-20 top-20 -z-[10] h-[400px] w-[400px] rounded-full bg-red-300 opacity-10 blur-3xl md:block'></div>
      <div className='absolute -left-20 top-96 -z-[10] h-[400px] w-[400px] rounded-full bg-blue-300 opacity-20 blur-3xl md:block'></div>
      <div className='absolute -right-20 bottom-[1000px] -z-[10] h-[400px] w-[400px] rounded-full bg-red-300 opacity-10 blur-3xl md:block'></div>
      <div className='absolute -left-20 bottom-[500px] -z-[10] h-[400px] w-[400px] rounded-full bg-blue-300 opacity-20 blur-3xl md:block'></div>
      <div className='flex w-full flex-col items-center font-darker-grotesque'>
        <h1 className='-mb-1 mr-44 mt-4 text-[38px] font-darker-grotesque-700 text-[#FE2E00]'>
          Blogs
        </h1>
      </div>
      <div className='w-screen'>
        <SearchBar />
      </div>
      <div className='z-[1] flex flex-col items-center'>
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            date={blog.date}
            description={blog.description}
            img={blog.img}
          />
        ))}
      </div>
    </main>
  )
}
