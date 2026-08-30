import { ReactNode } from 'react'

interface SectionLabelProps {
  text?: string
  children?: ReactNode
  className?: string
}

export function SectionLabel({ text, children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-[#C5A059] block ${className}`}
    >
      {text || children}
    </span>
  )
}
