import { useState, useEffect } from "react"
const isWindowAvailable = typeof window !== "undefined"

const getPositionY = () => isWindowAvailable ? window.scrollY : undefined

const useWindowScrollPosition = () => {
  const [scrollYPosition, setScrollYPosition] = useState(getPositionY())

  useEffect(() => {
    if (!isWindowAvailable) {
      return false
    }

    const handleScroll = () => {
      setScrollYPosition(getPositionY())
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return scrollYPosition
}

export default useWindowScrollPosition