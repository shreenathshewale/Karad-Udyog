import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'ghost'
  size?: 'default' | 'lg'
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'default',
  className = '',
  type = 'button',
  onClick,
  disabled = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-sans font-bold uppercase tracking-[0.18em] text-[11px] transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] disabled:opacity-50 disabled:pointer-events-none rounded-md'

  const variants = {
    primary:
      'bg-[#2563EB] text-white border border-[#2563EB] hover:bg-[#1D4ED8] hover:border-[#1D4ED8] shadow-sm',
    secondary:
      'bg-[#0F172A] text-white border border-[#0F172A] hover:bg-[#1E293B] hover:border-[#1E293B]',
    outline:
      'bg-transparent border-2 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white',
    whatsapp:
      'bg-[#25D366] text-white border border-[#25D366] hover:bg-[#20BA57] shadow-sm',
    ghost:
      'bg-transparent text-[#0F172A] hover:text-[#2563EB]',
  }

  const sizes = {
    default: 'px-6 py-3',
    lg: 'px-8 py-3.5 text-[12px]',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  )
}
