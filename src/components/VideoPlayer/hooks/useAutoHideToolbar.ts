import React, { useEffect, useState } from 'react'

export function useAutoHideToolbar() {
  const [isControlActive, setIsControlActive] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const onMouseEnter = () => {
      setIsControlActive((prev: boolean) => {
        if (prev === false) {
          if (timeout) {
            clearTimeout(timeout)
          }
          timeout = setTimeout(() => setIsControlActive(false), 4000)
        }
        return true
      })
    }
    const onMouseLeave = () => {
      if (timeout) {
        clearTimeout(timeout)
      }
      setIsControlActive(false)
    }
    document.addEventListener('mousemove', onMouseEnter)
    document.addEventListener('mouseleave', onMouseLeave)
    return () => {
      document.removeEventListener('mousemove', onMouseEnter)
      document.removeEventListener('mouseleave', onMouseLeave)
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [setIsControlActive])

  return isControlActive
}
