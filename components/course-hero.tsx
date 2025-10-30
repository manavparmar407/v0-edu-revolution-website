"use client"

import { motion } from "framer-motion"
import { Clock, Zap } from "lucide-react"
import type { Course } from "@/lib/courses-data"

interface CourseHeroProps {
  course: Course
}

export function CourseHero({ course }: CourseHeroProps) {
  const Icon = course.icon

  return (
    <motion.section
      className={`relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${course.gradient} overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-72 h-72 rounded-full opacity-20 blur-3xl"
          style={{ background: "rgba(255,255,255,0.1)" }}
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "rgba(255,255,255,0.1)" }}
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-md p-3 flex items-center justify-center">
            <Icon className="w-8 h-8 text-white" />
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {course.title}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {course.description}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
            <Zap className="w-5 h-5 text-white" />
            <span className="text-white font-medium">{course.level}</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
            <Clock className="w-5 h-5 text-white" />
            <span className="text-white font-medium">{course.duration}</span>
          </div>
        </motion.div>

        <motion.button
          className="px-8 py-4 bg-white text-gray-900 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enroll Now
        </motion.button>
      </div>
    </motion.section>
  )
}
