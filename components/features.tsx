"use client"

import { Zap, Users, Brain } from "lucide-react"
import { motion } from "framer-motion"

export function Features() {
  const features = [
    {
      icon: Zap,
      title: "Project-Based Learning",
      description:
        "Build real-world projects from day one. Learn by doing with hands-on challenges that mirror industry standards.",
      color: "from-primary to-secondary",
    },
    {
      icon: Brain,
      title: "AI Tutors",
      description:
        "Get personalized guidance from advanced AI tutors available 24/7. Instant feedback and explanations tailored to your pace.",
      color: "from-secondary to-accent",
    },
    {
      icon: Users,
      title: "Community Learning",
      description:
        "Connect with thousands of learners worldwide. Share knowledge, collaborate on projects, and grow together.",
      color: "from-accent to-primary",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section id="features" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Choose EduRevolution?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge AI technology with proven learning methodologies
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="relative p-8 rounded-xl bg-background border border-border hover:border-primary/50 transition group overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition duration-300 -z-10`}
                ></div>

                <motion.div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} p-2.5 mb-4`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Icon className="w-full h-full text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
