```
import { useState, useEffect } from "react"
const isWindowAvailable = typeof window !== "undefined"

const getPosition = () => isWindowAvailable ? window.pageYOffset : undefined

const useWindowScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(getPosition())

  useEffect(() => {
    if (!isWindowAvailable) {
      return false
    }

    const handleScroll = () => {
      setScrollPosition(getPosition())
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return scrollPosition
}

export default useWindowScrollPosition
```
 - scroll 이벤트 감지 scrollY 만 사용
 - scrollX도 감지 하려면 
```
import { useState, useEffect } from "react"
const isWindowAvailable = typeof window !== "undefined"

const getPositionY = () => isWindowAvailable ? window.scrollY : undefined
const getPositionX = () => isWindowAvailable ? window.scrollX : undefined

const useWindowScrollPosition = () => {
  const [scrollYPosition, setScrollYPosition] = useState(getPositionY())
  const [scrollXPosition, setScrollXPosition] = useState(getPositionX())

  useEffect(() => {
    if (!isWindowAvailable) {
      return false
    }

    const handleScroll = () => {
      setScrollYPosition(getPositionY())
      setScrollXPosition(getPositionX())
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return [scrollYPosition, scrollXPosition]
}

export default useWindowScrollPosition
```