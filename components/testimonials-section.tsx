import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Jean M.",
    role: "Proprietaire de Supermarche",
    quote:
      "Depuis que nous utilisons VentaPOS, notre gestion des stocks est devenue simple et efficace. Je recommande vivement cette solution.",
    initials: "JM",
  },
  {
    name: "Aline K.",
    role: "Gerante de Restaurant",
    quote:
      "Le systeme est rapide, intuitif et mes employes l'ont adopte immediatement. Le module cuisine est un vrai plus.",
    initials: "AK",
  },
  {
    name: "Patrick L.",
    role: "Boutique Mode",
    quote:
      "Les rapports detailles m'aident a prendre de meilleures decisions commerciales. Interface claire et professionnelle.",
    initials: "PL",
  },
  {
    name: "Marie T.",
    role: "Cafe & Boulangerie",
    quote:
      "Enfin un logiciel de caisse qui comprend les besoins des petits commerces. Simple, efficace et abordable.",
    initials: "MT",
  },
]

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="temoignages" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Temoignages
          </p>
          <h2
            className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ce que nos clients disent
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Des milliers de commercants nous font confiance au quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <StarRating />
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {'"'}{testimonial.quote}{'"'}
              </p>
              <div className="flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
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
