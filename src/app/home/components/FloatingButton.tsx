'use client'

import React, { useState, useEffect } from 'react'
import FloatIcon from '@/assets/FloatIcon'
import FloatIconOutlined from '@/assets/FloatIconOutlined'
import Link from 'next/link'

const FloatingButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleInteraction = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isHovered) {
      event.preventDefault() // Evita la redirección en el primer clic
      setIsHovered(true)
    }
  }

  const handleOutsideClick = (event: MouseEvent) => {
    if (isHovered) {
      const button = document.getElementById('floating-button')
      if (button && !button.contains(event.target as Node)) {
        setIsHovered(false)
      }
    }
  }

  const handleScroll = () => {
    if (isHovered) {
      setIsHovered(false)
    }
  }

  useEffect(() => {
    if (isHovered) {
      document.addEventListener('click', handleOutsideClick)
      document.addEventListener('scroll', handleScroll)

      return () => {
        document.removeEventListener('click', handleOutsideClick)
        document.removeEventListener('scroll', handleScroll)
      }
    }
  }, [isHovered])

  return (
    <div className='fixed inset-x-0 bottom-1/4 z-50 translate-y-1/2 transform md:right-0 md:top-20 md:w-full'>
      <div className='mx-auto flex max-w-screen-2xl justify-end pr-4'>
        {isHovered ? (
          <Link href='/memberships'>
            <button
              className='flex items-center justify-center rounded-full bg-[#FE7354] px-4 shadow-lg transition-all duration-300'
              id='floating-button'
              onClick={() => setIsHovered(false)}
            >
              <span
                className='mr-3 text-[20px] text-white md:text-[30px]'
                style={{
                  transition: 'opacity 0.3s ease-in-out',
                }}
              >
                Suscríbete
              </span>
              <FloatIconOutlined
                className='h-6 w-6 md:h-8 md:w-8'
                preserveAspectRatio='xMidYMid meet'
              />
            </button>
          </Link>
        ) : (
          <button
            className={`flex items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
              isHovered
                ? 'bg-[#FE7354] px-4'
                : 'h-8 w-8 border-2 bg-white md:h-12 md:w-12'
            }`}
            id='floating-button'
            style={isHovered ? undefined : { borderColor: '#FE7354' }}
            onClick={(event) => handleInteraction(event)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered && (
              <span
                className='mr-3 text-[20px] text-white md:text-[30px]'
                style={{
                  transition: 'opacity 0.3s ease-in-out',
                }}
              >
                Suscríbete
              </span>
            )}
            {isHovered ? (
              <FloatIconOutlined
                className='h-6 w-6 md:h-8 md:w-8'
                preserveAspectRatio='xMidYMid meet'
              />
            ) : (
              <Link href='/memberships'>
                <FloatIcon
                  className='h-6 w-6 md:h-8 md:w-8'
                  preserveAspectRatio='xMidYMid meet'
                />
              </Link>
            )}
          </button>
        )}
      </div>
    </div>
  )
}

export default FloatingButton
