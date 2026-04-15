'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

interface NumberTickerProps {
  value: number
  direction?: 'up' | 'down'
  delay?: number
  suffix?: string
  prefix?: string
  className?: string
}

export default function NumberTicker({
  value,
  direction = 'up',
  delay = 0,
  suffix = '',
  prefix = '',
  className,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(direction === 'down' ? value : 0)
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 })
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [displayValue, setDisplayValue] = useState(value) // SSR: show target value
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    // Reset to 0 on mount for animation
    if (!hasAnimated) {
      setDisplayValue(direction === 'down' ? value : 0)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      const timer = setTimeout(() => {
        motionValue.set(direction === 'down' ? 0 : value)
      }, delay * 1000)
      return () => clearTimeout(timer)
    }
  }, [motionValue, isInView, delay, value, direction, hasAnimated])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest))
    })
    return unsubscribe
  }, [springValue])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue.toLocaleString('fr-FR')}
      {suffix}
    </span>
  )
}
