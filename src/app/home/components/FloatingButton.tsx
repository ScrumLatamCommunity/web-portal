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

    <div
      className='fixed bottom-1/4 right-4 z-50 md:bottom-auto md:top-20'
      onMouseEnter={() => setIsHovered(true)} // Cambiar estado al entrar al hover
      onMouseLeave={() => setIsHovered(false)} // Cambiar estado al salir del hover
    >

      <div className='flex justify-end'>
        {isHovered ? (
          <Link href='/memberships'>
            <button
              className='flex h-16 items-center justify-center rounded-full bg-[#FE5833] px-4 shadow-lg transition-all duration-300 md:h-24'
              id='floating-button'
              onClick={() => setIsHovered(false)}
            >
              <span
                className='mr-3 text-[20px] font-darker-grotesque-600 text-[#FCFCFC] md:text-[38px] md:font-darker-grotesque-700'
                style={{
                  transition: 'opacity 0.3s ease-in-out'
                }}
              >
                Suscríbete
              </span>
              <FloatIconOutlined
                className='h-10 w-10 md:h-12 md:w-12'
                preserveAspectRatio='xMidYMid meet'
              />
            </button>
          </Link>
        ) : (
          <button
            className={`flex items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
              isHovered
                ? 'bg-[#FE7354] px-4'
                : 'h-16 w-16 border-2 bg-white shadow-[0px_4px_15px_rgba(100,100,100,0.5)] md:h-24 md:w-24'
            }`}
            id='floating-button'
            style={isHovered ? undefined : { borderColor: '#FE7354' }}
            onClick={(event) => handleInteraction(event)}
          >
            {isHovered && (
              <span
                className='mr-3 text-[20px] font-darker-grotesque-600 text-white md:text-[38px] md:font-darker-grotesque-700'
                style={{
                  transition: 'opacity 0.3s ease-in-out'
                }}
              >
                Suscríbete
              </span>
            )}
            {isHovered ? (
              <FloatIconOutlined
                className='h-10 w-10 md:h-12 md:w-12'
                preserveAspectRatio='xMidYMid meet'
              />
            ) : (
              <Link href='/memberships'>
                <FloatIcon
                  className='h-10 w-10 md:h-12 md:w-12'
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
