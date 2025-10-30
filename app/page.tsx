import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Courses } from "@/components/courses"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { ApplySection } from "@/components/apply-section"
import { AdvancedCourses } from "@/components/advanced-courses"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Courses />
      <AdvancedCourses />
      <ApplySection />
      <Testimonials />
      <Footer />
    </main>
  )
}
