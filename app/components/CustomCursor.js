'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e
      if (cursorRef.current) {
        // center it on the pointer
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      }
    }

    document.addEventListener('mousemove', onMouseMove)
    return () => document.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <div
      ref={cursorRef}
      className="
        pointer-events-none
        fixed top-0 left-0
        h-32 w-32               /* size of the circle */
        -translate-x-1/2 -translate-y-1/2
        rounded-full
        bg-gradient-to-br from-teal-400 to-blue-500
        opacity-10
        blur-3xl
        transition-transform duration-150 ease-out
      "
    />
  )
}
