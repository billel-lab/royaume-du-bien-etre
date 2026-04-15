'use client'

import { motion, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BlurFadeProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  yOffset?: number
  inView?: boolean
}

const blurFadeVariants: Variants = {
  hidden: (custom: { yOffset: number }) => ({
    y: custom.yOffset,
    opacity: 0,
    filter: 'blur(6px)',
  }),
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
  },
}

export default function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.5,
  yOffset = 20,
  inView = true,
}: BlurFadeProps) {
  return (
    <motion.div
      className={cn(className)}
      custom={{ yOffset }}
      variants={blurFadeVariants}
      initial="hidden"
      {...(inView
        ? { whileInView: 'visible', viewport: { once: true, margin: '-50px' } }
        : { animate: 'visible' })}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  )
}
