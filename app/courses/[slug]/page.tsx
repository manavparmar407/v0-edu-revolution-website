"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { coursesData } from "@/lib/courses-data"
import { CourseHero } from "@/components/course-hero"
import { ModulesSection } from "@/components/modules-section"

export default function CoursePage() {
  const params = useParams()
  const slug = params.slug as string

  const course = coursesData.find((c) => c.slug === slug)

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Course Not Found</h1>
          <Link href="/" className="text-primary hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/#courses"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Courses
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <CourseHero course={course} />

      {/* Modules Section */}
      <ModulesSection course={course} />

      {/* Footer */}
      <motion.footer
        className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground mb-8">All modules include certificates and real-world projects.</p>
          <Link href="/#courses">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium">
              Back to All Courses
            </button>
          </Link>
        </div>
      </motion.footer>
    </main>
  )
}
