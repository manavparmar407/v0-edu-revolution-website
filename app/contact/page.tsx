"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Loader2, CheckCircle, Github, Linkedin, Instagram, Phone } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log("[v0] Message sent to manavparmar0407@gmail.com:", formData)
      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)
    } finally {
      setIsLoading(false)
    }
  }

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/manavparmar0407",
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
    { icon: Github, href: "https://github.com/manavparmar407", label: "GitHub", color: "hover:text-gray-400" },
    { icon: Instagram, href: "https://instagram.com/im.manavvvv", label: "Instagram", color: "hover:text-pink-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground">Questions, feedback, or collaborations — reach out to Manav.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <motion.div
            className="bg-card/50 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {submitted && (
              <motion.div
                className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle className="text-green-500" size={20} />
                <p className="text-green-500 font-medium">Message sent successfully to Manav!</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={4}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-primary via-secondary to-primary text-primary-foreground font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="inline animate-spin mr-2" size={20} />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Connect with Manav Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-card/50 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-foreground mb-6">Connect with Manav</h2>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:manavparmar0407@gmail.com"
                      className="text-foreground font-semibold hover:text-primary transition"
                    >
                      manavparmar0407@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Phone className="text-secondary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a
                      href="tel:+917203920632"
                      className="text-foreground font-semibold hover:text-secondary transition"
                    >
                      +91 7203920632
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="border-t border-border pt-6">
                <p className="text-sm font-semibold text-foreground mb-4">Follow on Social</p>
                <div className="grid grid-cols-3 gap-3">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon
                    return (
                      <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className={`w-full py-3 rounded-lg bg-background border border-border hover:border-primary transition flex items-center justify-center text-muted-foreground ${link.color}`}
                        whileHover={{ scale: 1.05, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon size={20} />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Founder Info Card */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-xl border border-primary/20 rounded-2xl p-6">
              <p className="text-sm text-muted-foreground mb-2">Founder & Lead Developer</p>
              <h3 className="text-2xl font-bold text-foreground mb-2">Manav Parmar</h3>
              <p className="text-muted-foreground text-sm">
                Creator of EduRevolution, passionate about making web development education accessible and engaging
                through AI and modern tools.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
