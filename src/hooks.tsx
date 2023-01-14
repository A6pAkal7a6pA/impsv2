import React, { useEffect, useState } from 'react'

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset)
    }
    window.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => window.removeEventListener('scroll', updatePosition)
  }, [])
  return scrollPosition
}

export const useIntersection = (
  element: React.MutableRefObject<HTMLInputElement>,
  rootMargin: string
) => {
  const [isVisible, setState] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting)
      },
      { rootMargin }
    )
    element.current && observer.observe(element.current)
    return () => observer.unobserve(element.current)
  }, [element, rootMargin])
  return isVisible
}
