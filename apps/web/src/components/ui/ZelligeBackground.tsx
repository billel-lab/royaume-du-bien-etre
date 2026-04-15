'use client'

interface ZelligeBackgroundProps {
  variant?: 'light' | 'dark' | 'gold'
  opacity?: number
  className?: string
}

export default function ZelligeBackground({
  variant = 'light',
  opacity = 0.04,
  className = '',
}: ZelligeBackgroundProps) {
  const strokeColor =
    variant === 'dark' ? '#FFF9F5' :
    variant === 'gold' ? '#C8963E' :
    '#2C1810'

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} style={{ opacity }}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={`zellige-${variant}`}
            x="0" y="0"
            width="80" height="80"
            patternUnits="userSpaceOnUse"
          >
            {/* 8-pointed star (khatam) — authentic Moroccan pattern */}
            <path
              d="M40 8L48 24L64 24L52 36L56 52L40 44L24 52L28 36L16 24L32 24Z"
              fill="none"
              stroke={strokeColor}
              strokeWidth="0.4"
            />
            {/* Inner diamond */}
            <path
              d="M40 20L50 32L40 44L30 32Z"
              fill="none"
              stroke={strokeColor}
              strokeWidth="0.3"
            />
            {/* Corner squares */}
            <rect x="0" y="0" width="8" height="8" fill="none" stroke={strokeColor} strokeWidth="0.2" />
            <rect x="72" y="0" width="8" height="8" fill="none" stroke={strokeColor} strokeWidth="0.2" />
            <rect x="0" y="72" width="8" height="8" fill="none" stroke={strokeColor} strokeWidth="0.2" />
            <rect x="72" y="72" width="8" height="8" fill="none" stroke={strokeColor} strokeWidth="0.2" />
            {/* Connecting lines */}
            <line x1="8" y1="4" x2="32" y2="24" stroke={strokeColor} strokeWidth="0.15" />
            <line x1="72" y1="4" x2="48" y2="24" stroke={strokeColor} strokeWidth="0.15" />
            <line x1="8" y1="76" x2="28" y2="52" stroke={strokeColor} strokeWidth="0.15" />
            <line x1="72" y1="76" x2="52" y2="52" stroke={strokeColor} strokeWidth="0.15" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#zellige-${variant})`} />
      </svg>
    </div>
  )
}
