'use client'
import React, { useState } from 'react'
import { darkerGrotesque, karla } from '@/fonts'
import SearchBar from './components/search-bar'
import { blogs } from '@/data/data'
import CartelMembresias from '../components/cartelMembresias'
import BlogCard from './components/blog-card'

export default function Blogs() {
  const [query, setQuery] = React.useState<string>('')
  const [showPopup, setShowPopup] = useState(false)

  const filteredBlogs = query
    ? blogs.filter((blogs) =>
        blogs.title.toLowerCase().includes(query.toLowerCase())
      )
    : blogs

  const handleReadMore = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }
  return (
    <main
      className={`${darkerGrotesque.variable} ${karla.variable} relative z-10 w-screen overflow-hidden pb-12`}
    >
      <div className='absolute -right-20 top-20 -z-[10] h-[400px] w-[400px] rounded-full bg-red-300 opacity-20 blur-3xl md:-top-20 md:left-4'></div>
      <div className='absolute -left-20 top-96 -z-[10] h-[400px] w-[400px] rounded-full bg-blue-300 opacity-30 blur-3xl md:-top-16 md:left-[1500px]'></div>
      <div className='absolute -right-20 bottom-[250px] -z-[10] h-[400px] w-[400px] rounded-full bg-red-300 opacity-20 blur-3xl md:left-4'></div>
      <div className='absolute -left-20 bottom-[250px] -z-[10] h-[400px] w-[400px] rounded-full bg-blue-300 opacity-30 blur-3xl md:left-[1500px]'></div>
      <div className='flex w-full flex-col font-darker-grotesque'>
        <h1 className='ml-5 mt-4 text-[40px] font-bold text-[#FE2E00] md:mb-6 md:ml-36 md:mt-8 md:text-[50px]'>
          Blog
        </h1>
      </div>
      <section className='my-4 flex w-full justify-center px-3 md:mb-12'>
        <div className='w-full max-w-screen-xl'>
          <SearchBar setQuery={setQuery} />
        </div>
      </section>
      <div className='z-[1] flex flex-col items-center'>
        {filteredBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            date={blog.date}
            description={blog.description}
            img={blog.img}
            onReadMore={handleReadMore}
          />
        ))}
      </div>
      {showPopup && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div
            className='absolute inset-0 bg-black-8 opacity-75'
            onClick={handleClosePopup}
          ></div>
          <div className='relative z-10'>
            <CartelMembresias onClose={handleClosePopup} />
          </div>
        </div>
      )}
    </main>
  )
}
