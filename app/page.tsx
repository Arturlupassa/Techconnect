"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Verifica preferência do sistema
    const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)")
    setIsDark(darkModePreference.matches)

    // Listener para mudanças na preferência do sistema
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches)
    darkModePreference.addEventListener("change", handler)
    return () => darkModePreference.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    // Aplica ou remove a classe dark
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen">
      <Header onThemeChange={toggleTheme} />
      <main>
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
