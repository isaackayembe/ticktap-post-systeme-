import { Globe, Store, Users } from "lucide-react"

const stats = [
  { icon: Store, value: "10 000+", label: "Commerces equipes" },
  { icon: Globe, value: "15+", label: "Pays" },
  { icon: Users, value: "50 000+", label: "Utilisateurs actifs" },
]

export function SocialProof() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <p
          className="mb-8 text-center text-lg font-semibold text-foreground md:text-xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Des milliers de commerces nous font confiance
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0b2f52]/10">
                <stat.icon className="h-6 w-6 text-[#f47920]" />
              </div>
              <p className="text-3xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
