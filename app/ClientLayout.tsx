"use client"

import type React from "react"

import { Analytics } from "@vercel/analytics/next"
import { useEffect, useState } from "react"
import { AuthProvider } from "@/lib/auth-context"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <AuthProvider>
      {children}
      <Analytics />
    </AuthProvider>
  )
}
