"use client"

import { motion } from "framer-motion"
import { Brain, Cloud, Palette, BarChart3, Shield, Smartphone } from "lucide-react"

export function AdvancedCourses() {
  const courses = [
    {
      icon: Brain,
      title: "AI & Machine Learning Mastery",
      description: "Learn how to build intelligent systems using Python, TensorFlow, and PyTorch.",
      level: "Intermediate to Advanced",
      duration: "16 weeks",
      color: "from-purple-500 to-purple-600",
      borderColor: "border-purple-500/30",
      hoverBorder: "hover:border-purple-500/60",
      accentBg: "bg-purple-500/10",
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud Engineering",
      description: "Master CI/CD, Docker, Kubernetes, AWS, and scalable deployments.",
      level: "Intermediate",
      duration: "10 weeks",
      color: "from-blue-500 to-blue-600",
      borderColor: "border-blue-500/30",
      hoverBorder: "hover:border-blue-500/60",
      accentBg: "bg-blue-500/10",
    },
    {
      icon: Palette,
      title: "UI/UX Design Essentials",
      description: "Learn Figma, design systems, accessibility, and user-centric design thinking.",
      level: "Beginner to Intermediate",
      duration: "8 weeks",
      color: "from-pink-500 to-pink-600",
      borderColor: "border-pink-500/30",
      hoverBorder: "hover:border-pink-500/60",
      accentBg: "bg-pink-500/10",
    },
    {
      icon: BarChart3,
      title: "Data Science & Analytics",
      description: "Explore data visualization, Pandas, NumPy, Power BI, and storytelling with data.",
      level: "Beginner to Advanced",
      duration: "12 weeks",
      color: "from-teal-500 to-teal-600",
      borderColor: "border-teal-500/30",
      hoverBorder: "hover:border-teal-500/60",
      accentBg: "bg-teal-500/10",
    },
    {
      icon: Shield,
      title: "Cybersecurity Fundamentals",
      description: "Understand networks, vulnerabilities, and ethical hacking basics.",
      level: "Beginner",
      duration: "10 weeks",
      color: "from-red-500 to-red-600",
      borderColor: "border-red-500/30",
      hoverBorder: "hover:border-red-500/60",
      accentBg: "bg-red-500/10",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Build cross-platform apps using React Native and Flutter.",
      level: "Beginner to Advanced",
      duration: "12 weeks",
      color: "from-green-500 to-green-600",
      borderColor: "border-green-500/30",
      hoverBorder: "hover:border-green-500/60",
      accentBg: "bg-green-500/10",
    },
  ]

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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section
      id="advanced-courses"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Expand Your Skillset</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master the most in-demand technologies and stay ahead in the tech revolution.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {courses.map((course, index) => {
            const Icon = course.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`group relative p-8 rounded-xl bg-card border ${course.borderColor} ${course.hoverBorder} transition-all duration-300 overflow-hidden`}
              >
                {/* Glowing background effect */}
                <div
                  className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-20 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-all duration-500 blur-3xl`}
                ></div>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br ${course.color} p-3 mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-full h-full text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 relative z-10">{course.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed relative z-10 text-sm md:text-base">
                  {course.description}
                </p>

                {/* Level and Duration */}
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

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-4 bg-gradient-to-r ${course.color} text-white rounded-lg font-medium relative z-10 transition-all duration-300 hover:shadow-lg hover:shadow-current/50`}
                >
                  Explore Course
                </motion.button>

                {/* Border glow effect on hover */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                ></div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
