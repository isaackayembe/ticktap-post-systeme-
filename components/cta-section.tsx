import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b2f52] via-[#0d3c6c] to-[#0b2f52] px-6 py-16 text-center sm:px-12 lg:px-24 lg:py-24 shadow-[0_25px_60px_rgba(11,47,82,0.35)]">
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2
              className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="text-balance">
                Pret a moderniser votre commerce ?
              </span>
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-lg leading-relaxed text-white/80">
              Rejoignez des milliers d{"'"}entrepreneurs qui utilisent deja
              TicktapPOS pour developper leur activite.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-[#f47920] text-white shadow-[0_16px_38px_rgba(244,121,32,0.45)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#d8661d] hover:shadow-[0_22px_50px_rgba(244,121,32,0.55)]"
              >
                Creer un compte gratuit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/35 !bg-white/10 !text-white/75 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5 hover:!bg-white/15 hover:!text-white hover:border-white/55"
              >
                Contacter les ventes
              </Button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f47920]/25 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-48 w-48 translate-x-1/3 translate-y-1/3 rounded-full bg-white/10 blur-2xl" />
        </div>
      </div>
    </section>
  )
}
