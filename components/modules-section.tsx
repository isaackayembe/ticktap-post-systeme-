import Image from "next/image"
import { BarChart3, Settings, UtensilsCrossed, Monitor } from "lucide-react"

const modules = [
  {
    icon: BarChart3,
    title: "Dashboard Analytics",
    description:
      "Accedez a vos donnees detaillees depuis n'importe quel appareil connecte. Suivez vos KPIs en temps reel.",
    image: "/images/dashboard-analytics.jpg",
    imageAlt: "Tableau de bord analytique TicktapPOS",
  },
  {
    icon: Settings,
    title: "Back Office",
    description:
      "Gerez produits, categories, employes et parametres depuis une interface web complete et intuitive.",
    image: "/images/dashboard-analytics.jpg",
    imageAlt: "Interface Back Office TicktapPOS",
  },
  {
    icon: UtensilsCrossed,
    title: "Ecran Cuisine (KDS)",
    description:
      "Optimisez la communication entre la caisse et la cuisine. Les commandes s'affichent instantanement.",
    image: "/images/kitchen-display.jpg",
    imageAlt: "Systeme d'affichage cuisine KDS TicktapPOS",
  },
  {
    icon: Monitor,
    title: "Affichage Client",
    description:
      "Ameliorez l'experience client avec un ecran secondaire affichant le detail des achats en cours.",
    image: "/images/kitchen-display.jpg",
    imageAlt: "Ecran d'affichage client TicktapPOS",
  },
]

export function ModulesSection() {
  return (
    <section id="modules" className="border-t border-border bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#f47920]">
            Modules
          </p>
          <h2
            className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Des modules complementaires pour chaque besoin
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Etendez les capacites de votre systeme avec nos applications dediees.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {modules.map((mod) => (
            <div
              key={mod.title}
              className="group overflow-hidden rounded-2xl border border-border/70 bg-background transition-all hover:-translate-y-1 hover:border-[#f47920]/40 hover:shadow-xl hover:shadow-[#f47920]/10"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={mod.image}
                  alt={mod.imageAlt}
                  width={600}
                  height={340}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0b2f52]/12">
                    <mod.icon className="h-5 w-5 text-[#f47920]" />
                  </div>
                  <h3
                    className="text-lg font-semibold text-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {mod.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {mod.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
