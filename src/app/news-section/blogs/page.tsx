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
      <div className='absolute -right-20 top-20 -z-[10] h-[400px] w-[400px] rounded-full bg-red-300 opacity-20 blur-3xl md:-top-20 md:left-4'></div>
      <div className='absolute -left-20 top-96 -z-[10] h-[400px] w-[400px] rounded-full bg-blue-300 opacity-30 blur-3xl md:-top-16 md:left-[1500px]'></div>
      <div className='absolute -right-20 bottom-[250px] -z-[10] h-[400px] w-[400px] rounded-full bg-red-300 opacity-20 blur-3xl md:left-4'></div>
      <div className='absolute -left-20 bottom-[250px] -z-[10] h-[400px] w-[400px] rounded-full bg-blue-300 opacity-30 blur-3xl md:left-[1500px]'></div>
      <div className='flex w-full flex-col font-darker-grotesque'>
        <h1 className='ml-5 mt-4 text-[38px] font-bold text-[#FE2E00] md:ml-32 md:mt-16 md:text-[48px]'>
          Blog
        </h1>
      </div>
      <div className='my-4 w-full md:my-12'>
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
