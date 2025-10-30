import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Frontend Developer",
      company: "Tech Startup",
      content:
        "EduRevolution transformed my career. In just 3 months, I went from zero to landing my first dev job. The AI tutors are incredible!",
      rating: 5,
      avatar: "👩‍💻",
    },
    {
      name: "Marcus Johnson",
      role: "Full-Stack Engineer",
      company: "Fortune 500",
      content:
        "The project-based approach is game-changing. I actually understand what I'm building instead of just memorizing syntax.",
      rating: 5,
      avatar: "👨‍💼",
    },
    {
      name: "Priya Patel",
      role: "Junior Developer",
      company: "Startup",
      content:
        "The community support is amazing. Whenever I got stuck, there was always someone ready to help. Highly recommend!",
      rating: 5,
      avatar: "👩‍🔬",
    },
    {
      name: "Alex Rodriguez",
      role: "Backend Developer",
      company: "Tech Company",
      content:
        "Best investment I've made in my education. The curriculum is up-to-date with modern tools and practices.",
      rating: 5,
      avatar: "👨‍💻",
    },
  ]

  return (
    <section id="testimonials" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Loved by Learners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful developers who transformed their careers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-background border border-border hover:border-primary/50 transition"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>

              <div className="flex items-center gap-3">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
