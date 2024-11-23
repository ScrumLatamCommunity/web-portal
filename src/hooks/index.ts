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

export const useTypeScreen = () => {
  const [screen, setScreen] = useState<string>('')

  const handleResize = () => {
    const width = window.innerWidth

    if (width < 768) {
      setScreen('sm')
    } else if (width >= 768 && width < 1024) {
      setScreen('md')
    } else if (width >= 1024 && width < 1280) {
      setScreen('lg')
    } else {
      setScreen('xl')
    }
  }

  useEffect(() => {
    // Escuchar el evento de cambio de tamaño de la pantalla
    window.addEventListener('resize', handleResize)

    // Ejecutar una vez para establecer el tamaño inicial
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return screen
}

export default useIsLargeScreen
