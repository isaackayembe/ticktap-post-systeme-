import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-16 text-center sm:px-12 lg:px-24 lg:py-24">
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2
              className="mb-4 text-3xl font-bold tracking-tight text-background md:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="text-balance">
                Pret a moderniser votre commerce ?
              </span>
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-lg leading-relaxed text-background/70">
              Rejoignez des milliers d{"'"}entrepreneurs qui utilisent deja
              VentaPOS pour developper leur activite.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Creer un compte gratuit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-background/20 bg-transparent text-background hover:bg-background/10"
              >
                Contacter les ventes
              </Button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10" />
          <div className="absolute bottom-0 right-0 h-48 w-48 translate-x-1/3 translate-y-1/3 rounded-full bg-primary/10" />
        </div>
      </div>
    </section>
  )
}
