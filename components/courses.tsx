"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { coursesData } from "@/lib/courses-data"

export function Courses() {
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

  return (
    <section id="courses" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Explore Our Courses</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            9 comprehensive learning paths designed for every skill level and career goal
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {coursesData.map((course, index) => {
            const Icon = course.icon
            return (
              <motion.div key={course.id} variants={itemVariants}>
                <Link href={`/courses/${course.slug}`}>
                  <div className="h-full p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-primary/20">
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${course.color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}
                    ></div>

                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${course.color} p-2.5 mb-4 relative z-10`}>
                      <Icon className="w-full h-full text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-2 relative z-10">{course.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed relative z-10 line-clamp-2">
                      {course.description}
                    </p>

                    <div className="space-y-2 mb-6 relative z-10">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Level:</span>
                        <span className="text-foreground font-medium">{course.level}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="text-foreground font-medium">{course.duration}</span>
                      </div>
                    </div>

                    <button className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium relative z-10">
                      Explore Course
                    </button>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
