'use client'

import { useEffect } from 'react'

interface ThemeProviderProps {
  children?: React.ReactNode
}

export default function ThemeProvider({ children = null }: Partial<ThemeProviderProps>) {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return <>{children}</>
}
