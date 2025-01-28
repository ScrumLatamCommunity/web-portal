import { useEffect } from 'react'

interface Counter {
  number: number
}

export const useCounter = (counters: Counter[]): void => {
  const updateCounters = (): void => {
    const countersElement = document.querySelectorAll<HTMLElement>('#counter')
    const maxNumber = Math.max(...counters.map((counter) => counter.number))
    const duration = 3000
    const increment = maxNumber / (duration / 100)

    let count = 0
    const interval = setInterval(() => {
      if (count < maxNumber) {
        count += increment
        countersElement.forEach((counter, index) => {
          counter.textContent = Math.ceil(
            count * (counters[index].number / maxNumber)
          ).toString()
        })
      } else {
        clearInterval(interval)
        countersElement.forEach((counter, index) => {
          counter.textContent = counters[index].number.toString()
        })
      }
    }, 100)
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateCounters()
          observer.unobserve(entry.target)
        }
      })
    })

    const container = document.querySelector<HTMLElement>('#counter')
    if (container) {
      observer.observe(container)
    }

    return () => observer.disconnect()
  }, [counters])
}
