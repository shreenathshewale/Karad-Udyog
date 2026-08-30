import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer' | 'nav'
}

export function Container({
  children,
  className = '',
  as: Tag = 'div',
}: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-16 ${className}`}>
      {children}
    </Tag>
  )
}
