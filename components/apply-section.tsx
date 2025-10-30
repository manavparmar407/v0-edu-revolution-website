"use client"

import { motion } from "framer-motion"
import { BookOpen, Lightbulb, Award, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const cards = [
  {
    id: 1,
    title: "Core Courses",
    description: "A mandatory course that must be studied; without it, a degree cannot be considered complete.",
    icon: BookOpen,
    buttons: [{ label: "View", variant: "default" }],
  },
  {
    id: 2,
    title: "Non-Core Courses",
    description:
      "Courses not directly related to the main field but that help build extra skills (e.g. communication, soft skills, open minors).",
    icon: Lightbulb,
    buttons: [{ label: "View", variant: "default" }],
  },
  {
    id: 3,
    title: "Duty Leave",
    description: "Duty Leaves shall be extended for hackathons, competitions, and recruitment exams.",
    icon: Award,
    buttons: [
      { label: "10% Attendance", variant: "outline" },
      { label: "Duty Leave", variant: "default" },
    ],
  },
  {
    id: 4,
    title: "Earn Extra Credits",
    description: "Earn additional credits through certifications and recognized extracurricular activities.",
    icon: TrendingUp,
    buttons: [{ label: "Apply Now", variant: "default" }],
  },
  {
    id: 5,
    title: "Student Referral Program",
    description: "Be a changemaker. Earn rewards for referring new learners to EduRevolution.",
    icon: Users,
    buttons: [{ label: "Apply Now", variant: "default" }],
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function ApplySection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-primary/5">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-4">
            Apply for{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              EDU Revolution
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore opportunities to enhance your learning journey with our comprehensive programs and initiatives.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Glassmorphism Card */}
                <div className="relative h-full p-6 rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-primary/50 via-secondary/30 to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="mb-4 inline-block p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20"
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-foreground">{card.title}</h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{card.description}</p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {card.buttons.map((btn, idx) => (
                        <Button
                          key={idx}
                          variant={btn.variant as "default" | "outline"}
                          size="sm"
                          className={
                            btn.variant === "default"
                              ? "bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                              : "border-primary/50 hover:border-primary hover:bg-primary/10"
                          }
                        >
                          {btn.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Footer Element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl backdrop-blur-xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-white/20 dark:border-white/10"
        >
          <div>
            <p className="text-lg font-semibold text-foreground">Upcoming Term</p>
            <p className="text-muted-foreground">July – Dec 2025</p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 rounded-full px-8"
            >
              View Applied Application Details
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
