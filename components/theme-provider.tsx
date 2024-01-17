"use client"

import React, { useEffect } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps as ThemeProviderPropsBase } from "next-themes/dist/types"

interface ThemeProviderProps extends ThemeProviderPropsBase {
  radius?: "none" | "sm" | "md" | "lg" | "full"
}
export function ThemeProvider({
  children,
  radius,
  ...props
}: ThemeProviderProps) {
  // useEffect(() => {
  //   document.documentElement.setAttribute('data-radius', radius ?? 'md')
  // }, [])
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
