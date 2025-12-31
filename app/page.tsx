"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ProfileAbout } from "@/components/profile-about"
import { Skills } from "@/components/skills"
import { TechExperience } from "@/components/tech-experience"
import { MediaExperience } from "@/components/media-experience"
import { FocusSection } from "@/components/focus-section"

import { TechnicalProjects } from "@/components/technical-projects"
import { CreativeWorks } from "@/components/creative-works"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { About } from "@/components/about"
import { TechMarquee } from "@/components/tech-marquee"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { SectionBlend } from "@/components/section-blend"

type PortfolioType = 'tech' | 'media' | null

export default function Home() {
  const [portfolioType, setPortfolioType] = useState<PortfolioType>(null)

  const handlePortfolioChange = (type: 'tech' | 'media') => {
    setPortfolioType(type)
    // Smooth scroll to content
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })
    }, 100)
  }

  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main className="relative">
        {/* Hero Section - Always visible */}
        <Hero onPortfolioChange={handlePortfolioChange} />
        <SectionBlend />

        {/* About Section - Always visible */}
        <div id="about">
          <ProfileAbout />
        </div>

        {/* Skills Section - Always visible */}
        <Skills />

        {/* Conditionally show Tech or Media Portfolio */}
        {portfolioType === 'tech' && (
          <>
            <div id="experience">
              <TechExperience />
            </div>
            <div id="projects">
              <TechnicalProjects />
            </div>
            <FocusSection />
            <About />
            <Services />
            <TechMarquee />
          </>
        )}

        {portfolioType === 'media' && (
          <>
            <div id="experience">
              <MediaExperience />
            </div>
            <div id="projects">
              <CreativeWorks />
            </div>
            <FocusSection />
            <About />
            <Services />
            <TechMarquee />
          </>
        )}

        {/* Show default content if no selection */}
        {portfolioType === null && (
          <>
            <About />
            <div id="experience">
              <TechExperience />
              <MediaExperience />
            </div>
            <div id="projects">
              <TechnicalProjects />
            </div>
            <div id="creative-showcase">
              <CreativeWorks />
            </div>
            <Services />
            <TechMarquee />
          </>
        )}

        {/* Contact - Always visible */}
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  )
}


