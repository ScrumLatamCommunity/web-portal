import React, { useState, useEffect } from 'react'
import SquadProfileCard from './SquadProfileCard'
import OrangeChevron from './OrangeChevron'

interface Profile {
  name: string
  title: string
  description: string
  imageUrl: string
  countryFlagUrl: string
  linkedinUrl: string
}

interface SquadProfileCarouselProps {
  profiles: Profile[]
}

const SquadProfileCarousel: React.FC<SquadProfileCarouselProps> = ({
  profiles
}) => {
  const [startIndex, setStartIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const maxVisible = isMobile ? 1 : 3
  const canGoLeft = startIndex > 0
  const canGoRight = startIndex + maxVisible < profiles.length

  // Si solo hay 1 tarjeta, no mostramos chevrons
  if (profiles.length <= maxVisible && maxVisible === 3) {
    return (
      <div className='mx-auto flex w-full max-w-6xl flex-row justify-center gap-8 md:gap-16'>
        {profiles.map((profile, idx) => (
          <SquadProfileCard key={idx} {...profile} />
        ))}
      </div>
    )
  }

  // Carrusel siempre en mobile, y en desktop si hay más de 3
  return (
    <div className='flex w-full items-center justify-center'>
      <button
        onClick={() => setStartIndex((prev) => Math.max(prev - 1, 0))}
        disabled={!canGoLeft}
        className={`mr-2 transition-opacity ${canGoLeft ? '' : 'cursor-not-allowed opacity-30'}`}
        aria-label='Anterior'
      >
        <OrangeChevron direction='left' />
      </button>
      <div className='flex w-[85%] flex-row justify-center gap-8 md:gap-16'>
        {profiles
          .slice(startIndex, startIndex + maxVisible)
          .map((profile, idx) => (
            <SquadProfileCard key={startIndex + idx} {...profile} />
          ))}
      </div>
      <button
        onClick={() =>
          setStartIndex((prev) =>
            Math.min(prev + 1, profiles.length - maxVisible)
          )
        }
        disabled={!canGoRight}
        className={`ml-2 transition-opacity ${canGoRight ? '' : 'cursor-not-allowed opacity-30'}`}
        aria-label='Siguiente'
      >
        <OrangeChevron direction='right' />
      </button>
    </div>
  )
}

export default SquadProfileCarousel
