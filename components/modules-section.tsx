"use client"

import { motion } from "framer-motion"
import { Clock } from "lucide-react"
import type { Course } from "@/lib/courses-data"

interface ModulesSectionProps {
  course: Course
}

export function ModulesSection({ course }: ModulesSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Advanced":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Learning Modules</h2>
          <p className="text-lg text-muted-foreground">
            Master {course.modules.length} comprehensive modules with hands-on projects
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {course.modules.map((module, index) => (
            <motion.div
              key={module.id}
              variants={itemVariants}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
              whileHover={{ y: -5 }}
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{module.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{module.description}</p>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(module.difficulty)} whitespace-nowrap ml-4`}
                  >
                    {module.difficulty}
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{module.duration}</span>
                  </div>
                </div>

                <motion.button
                  className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Learning
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
