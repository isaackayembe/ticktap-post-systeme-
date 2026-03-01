import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-16 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-secondary px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-xs font-medium text-secondary-foreground">
                Nouveau : Gestion multi-magasins disponible
              </span>
            </div>

            <h1
              className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="text-balance">
                Le logiciel de caisse{" "}
                <span className="text-primary">intelligent</span> pour booster votre commerce
              </span>
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              TickTapPOS est une solution SaaS moderne de gestion de point de vente
              pour les commerces, restaurants,boutiques, Super marcher, Pharmacie et plus  . Vendez plus vite,
              gerez vos stocks en temps reel et analysez vos performances.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Commencer gratuitement
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
                <Play className="mr-2 h-4 w-4" />
                Decouvrir les fonctionnalites
              </Button>
            </div>

            <div className="mt-2 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-muted-foreground">Gratuit pour commencer</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-muted-foreground">Sans engagement</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/5">
              <Image
                src="/images/pos-hero.jpg"
                alt="Interface du logiciel de caisse VentaPOS sur tablette et smartphone"
                width={700}
                height={500}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-border bg-card p-4 shadow-lg lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">+32%</p>
                  <p className="text-xs text-muted-foreground">Ventes ce mois</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
