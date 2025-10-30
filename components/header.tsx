"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun, LogOut, User } from "lucide-react"
import { motion } from "framer-motion"
import { useAuth } from "@/lib/auth-context"
import Link from "next/link"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { user, logout } = useAuth()

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const html = document.documentElement
    html.classList.toggle("dark")
    setIsDark(!isDark)
    localStorage.setItem("theme", isDark ? "light" : "dark")
  }

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/#courses" },
    { label: "AI Tools", href: "/#features" },
    { label: "Community", href: "/#testimonials" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">E</span>
          </div>
          <span className="text-xl font-bold text-foreground">EduRevolution</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="text-foreground hover:text-primary transition font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Theme Toggle, Auth Buttons and Mobile Menu */}
        <div className="flex items-center gap-4">
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-card transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          {user ? (
            <div className="relative">
              <motion.button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border hover:border-primary transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <User size={18} />
                <span className="text-sm font-medium hidden sm:inline">Hi, {user.name}</span>
              </motion.button>

              {showUserMenu && (
                <motion.div
                  className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-foreground hover:bg-background transition flex items-center gap-2"
                  >
                    <User size={16} />
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      logout()
                      setShowUserMenu(false)
                    }}
                    className="w-full text-left px-4 py-2 text-foreground hover:bg-background transition flex items-center gap-2"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </motion.div>
              )}
            </div>
          ) : (
            <div className="hidden sm:flex gap-2">
              <Link
                href="/login"
                className="px-4 py-2 text-foreground border border-border rounded-lg hover:border-primary transition"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground hover:text-primary transition font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              {!user && (
                <div className="flex gap-2 pt-4 border-t border-border">
                  <Link href="/login" className="flex-1 px-4 py-2 text-center border border-border rounded-lg">
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="flex-1 px-4 py-2 text-center bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}
