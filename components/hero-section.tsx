"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

const HERO_VIDEO_SRC = "/video/video.mp4"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error)
      })
    }
  }, [])

  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-black text-white">
      {/* Video de fond */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          className="h-full w-full scale-[1.08] object-cover object-[50%_45%] opacity-68 blur-[2px]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        {/* Voile sombre pour lisibilite du texte */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#041627]/92 via-[#0b2f52]/86 to-[#f47920]/32" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-2 lg:px-8 lg:pb-14 lg:pt-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            
            <h1
              className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="text-balance">
                Le logiciel de caisse{" "}
                <span className="text-[#f47920]">intelligent</span> pour booster votre commerce
              </span>
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-white/80">
              TickTapPOS est une solution SaaS moderne de gestion de point de vente
              pour les commerces, restaurants,boutiques, Super marcher, Pharmacie et plus  . Vendez plus vite,
              gerez vos stocks en temps reel et analysez vos performances.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="bg-[#f47920] text-white shadow-[0_10px_30px_rgba(244,121,32,0.35)] transition-transform transition-shadow duration-300 hover:-translate-y-0.5 hover:bg-[#d8661d] hover:shadow-[0_16px_44px_rgba(244,121,32,0.55)]"
              >
                Commencer gratuitement
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/45 !bg-white/5 !text-white/70 backdrop-blur-sm transition-transform transition-shadow duration-300 hover:-translate-y-0.5 hover:!bg-white/12 hover:!text-white hover:border-white/65 hover:shadow-[0_12px_28px_rgba(13,35,62,0.35)] [&>svg]:!text-white/70 hover:[&>svg]:!text-white"
              >
                <Play className="mr-2 h-4 w-4" />
                Decouvrir les fonctionnalites
              </Button>
            </div>

            <div className="mt-2 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-[#f47920]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-white/75">Gratuit pour commencer</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-[#f47920]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-white/75">Sans engagement</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/5">
              <Image
                src="/images/logo.png"
                alt="Interface du logiciel de caisse TicktapPOS sur tablette et smartphone"
                width={700}
                height={500}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
           
          </div>
        </div>
      </div>
    </section>
  )
}
