"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="inline-block mb-6 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full"
          variants={itemVariants}
        >
          <span className="text-accent font-semibold text-sm">🚀 The Future of Learning</span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-balance"
          variants={itemVariants}
        >
          Revolutionizing How You Learn{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Web Development.
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance"
          variants={itemVariants}
        >
          Join EduRevolution — the AI-powered platform helping students master full-stack skills through real projects.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
          <motion.button
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-semibold flex items-center justify-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Learning Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
          </motion.button>
          <motion.button
            className="px-8 py-3 border border-border text-foreground rounded-lg hover:bg-card transition font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-4 md:gap-8 mt-16 pt-16 border-t border-border"
          variants={itemVariants}
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary">10K+</div>
            <p className="text-muted-foreground text-sm md:text-base">Active Learners</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-secondary">500+</div>
            <p className="text-muted-foreground text-sm md:text-base">Projects Built</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent">95%</div>
            <p className="text-muted-foreground text-sm md:text-base">Success Rate</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
