import { useState, useEffect } from 'react'

const useIsLargeScreen = (widthThreshold: number = 480) => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () =>
      setIsLargeScreen(window.innerWidth > widthThreshold)

    if (typeof window !== 'undefined') {
      setIsLargeScreen(window.innerWidth > widthThreshold)
      window.addEventListener('resize', handleResize)
    }

    return () => window.removeEventListener('resize', handleResize)
  }, [widthThreshold])

  return isLargeScreen
}

export default useIsLargeScreen
