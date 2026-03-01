import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SocialProof } from "@/components/social-proof"
import { FeaturesSection } from "@/components/features-section"
import { PosSystemSection } from "@/components/pos-system-section"
import { ModulesSection } from "@/components/modules-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>
        <AnimatedSection delay={80}>
          <SocialProof />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <FeaturesSection />
        </AnimatedSection>
        <AnimatedSection delay={110}>
          <PosSystemSection />
        </AnimatedSection>
        <AnimatedSection delay={120}>
          <ModulesSection />
        </AnimatedSection>
        <AnimatedSection delay={80}>
          <TestimonialsSection />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <FaqSection />
        </AnimatedSection>
        <AnimatedSection delay={120}>
          <CtaSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  )
}
