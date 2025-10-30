"use client"

import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { User, Mail, LogOut } from "lucide-react"

export default function ProfilePage() {
  const { user, logout, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Your Profile</h1>
          <p className="text-lg text-muted-foreground">Manage your EduRevolution account</p>
        </motion.div>

        <motion.div
          className="bg-card/50 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="space-y-6">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <User size={40} className="text-primary-foreground" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="pb-4 border-b border-border">
                <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                <p className="text-lg font-semibold text-foreground mt-1">{user.name}</p>
              </div>

              <div className="pb-4 border-b border-border">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Mail size={16} />
                  Email Address
                </label>
                <p className="text-lg font-semibold text-foreground mt-1">{user.email}</p>
              </div>

              <div className="pb-4 border-b border-border">
                <label className="text-sm font-medium text-muted-foreground">User ID</label>
                <p className="text-sm text-muted-foreground mt-1 font-mono">{user.id}</p>
              </div>
            </div>

            <div className="pt-6 space-y-3">
              <motion.button
                onClick={handleLogout}
                className="w-full bg-red-500/10 border border-red-500/30 text-red-500 font-semibold py-2 rounded-lg hover:bg-red-500/20 transition flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <LogOut size={18} />
                Logout
              </motion.button>

              <motion.button
                onClick={() => router.push("/")}
                className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold py-2 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Back to Home
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
