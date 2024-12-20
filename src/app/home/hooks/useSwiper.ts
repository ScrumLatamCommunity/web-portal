import { useRef } from 'react'

interface UseSwiperProps {
  currentIndex: number
  setCurrentIndex: (index: number) => void
  totalItems: number
}

export const useSwiper = ({
  currentIndex,
  setCurrentIndex,
  totalItems,
}: UseSwiperProps) => {
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return

    const diffX = touchStartX.current - touchEndX.current

    // Detect swipe direction
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        // Swipe left
        handleNext()
      } else {
        // Swipe right
        handlePrev()
      }
    }

    // Reset touch values
    touchStartX.current = null
    touchEndX.current = null
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < totalItems - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return {
    handlePrev,
    handleNext,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  }
}
