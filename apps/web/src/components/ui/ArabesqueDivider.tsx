'use client'

import { cn } from '@/lib/utils'

interface ArabesqueDividerProps {
  variant?: 'simple' | 'ornate' | 'arch'
  className?: string
  color?: string
}

export default function ArabesqueDivider({
  variant = 'ornate',
  className = '',
  color = '#C8963E',
}: ArabesqueDividerProps) {
  if (variant === 'simple') {
    return (
      <div className={cn('flex items-center justify-center py-4', className)}>
        <div className="gold-line flex-1 max-w-32" />
        <svg width="24" height="24" viewBox="0 0 24 24" className="mx-4" fill="none">
          <path d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8Z" fill={color} opacity="0.6" />
        </svg>
        <div className="gold-line flex-1 max-w-32" />
      </div>
    )
  }

  if (variant === 'arch') {
    return (
      <div className={cn('flex justify-center py-6', className)}>
        <svg width="200" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Moroccan arch shape */}
          <path
            d="M10 38C10 38 10 10 100 10C190 10 190 38 190 38"
            stroke={color}
            strokeWidth="0.8"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M30 38C30 38 30 18 100 18C170 18 170 38 170 38"
            stroke={color}
            strokeWidth="0.5"
            fill="none"
            opacity="0.3"
          />
          {/* Central ornament */}
          <circle cx="100" cy="10" r="3" fill={color} opacity="0.3" />
          <circle cx="100" cy="10" r="1.5" fill={color} opacity="0.5" />
          {/* Side dots */}
          <circle cx="50" cy="26" r="1" fill={color} opacity="0.2" />
          <circle cx="150" cy="26" r="1" fill={color} opacity="0.2" />
        </svg>
      </div>
    )
  }

  // ornate (default)
  return (
    <div className={cn('flex items-center justify-center py-6', className)}>
      <svg width="300" height="30" viewBox="0 0 300 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left decorative line */}
        <line x1="20" y1="15" x2="110" y2="15" stroke={color} strokeWidth="0.5" opacity="0.3" />
        {/* Left curl */}
        <path d="M110 15C110 15 120 5 130 15" stroke={color} strokeWidth="0.6" fill="none" opacity="0.4" />
        {/* Central star */}
        <path
          d="M150 5L154 12L162 12L156 17L158 24L150 20L142 24L144 17L138 12L146 12Z"
          fill={color}
          opacity="0.25"
        />
        <circle cx="150" cy="15" r="2" fill={color} opacity="0.5" />
        {/* Right curl */}
        <path d="M170 15C170 15 180 5 190 15" stroke={color} strokeWidth="0.6" fill="none" opacity="0.4" />
        {/* Right decorative line */}
        <line x1="190" y1="15" x2="280" y2="15" stroke={color} strokeWidth="0.5" opacity="0.3" />
        {/* End dots */}
        <circle cx="20" cy="15" r="1.5" fill={color} opacity="0.3" />
        <circle cx="280" cy="15" r="1.5" fill={color} opacity="0.3" />
      </svg>
    </div>
  )
}
