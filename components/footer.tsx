"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Mail, Phone, Heart } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/manavparmar0407", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/manavparmar407", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com/im.manavvvv", label: "Instagram" },
    { icon: Mail, href: "mailto:manavparmar0407@gmail.com", label: "Email" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">E</span>
              </div>
              <span className="font-bold text-foreground">EduRevolution</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Transforming web development education with AI and modern tools.
            </p>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs font-semibold text-foreground mb-2">Founder & Lead Developer</p>
              <p className="text-sm font-semibold text-foreground mb-1">Manav Parmar</p>
              <p className="text-xs text-muted-foreground mb-3">Creator of EduRevolution</p>
              <div className="space-y-1">
                <a
                  href="mailto:manavparmar0407@gmail.com"
                  className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition"
                >
                  <Mail size={14} />
                  manavparmar0407@gmail.com
                </a>
                <a
                  href="tel:+917203920632"
                  className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition"
                >
                  <Phone size={14} />
                  +91 7203920632
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/courses" className="text-muted-foreground hover:text-foreground transition">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition">
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-foreground transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Made with <Heart size={16} className="text-red-500 fill-red-500" /> by Manav Parmar
            </p>

            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-10 h-10 rounded-lg bg-background border border-border hover:border-primary hover:text-primary transition flex items-center justify-center text-muted-foreground"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
