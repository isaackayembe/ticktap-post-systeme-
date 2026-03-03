import {
  ShoppingCart,
  CreditCard,
  Package,
  BarChart3,
  Users,
  Heart,
  Building2,
  Plug,
} from "lucide-react"

const features = [
  {
    icon: ShoppingCart,
    title: "Point de Vente Rapide",
    description:
      "Encaissez vos clients en quelques secondes, imprimez ou envoyez des recus digitaux, gerez les remises et taxes facilement.",
  },
  {
    icon: CreditCard,
    title: "Paiements Flexibles",
    description:
      "Acceptez les paiements en especes, carte bancaire, mobile money et autres solutions digitales.",
  },
  {
    icon: Package,
    title: "Gestion des Stocks",
    description:
      "Suivez automatiquement vos niveaux de stock en temps reel, recevez des alertes de rupture et gerez vos fournisseurs.",
  },
  {
    icon: BarChart3,
    title: "Rapports & Analyses",
    description:
      "Visualisez vos ventes, profits, produits les plus vendus et performances quotidiennes via un tableau de bord clair.",
  },
  {
    icon: Users,
    title: "Gestion des Employes",
    description:
      "Controlez les acces, suivez les performances et limitez les permissions selon les roles de chaque employe.",
  },
  {
    icon: Heart,
    title: "Fidelite & CRM",
    description:
      "Fidélisez vos clients avec un systeme de points, historique d'achats et campagnes promotionnelles.",
  },
  {
    icon: Building2,
    title: "Multi-Magasins",
    description:
      "Gerez plusieurs points de vente depuis un seul compte centralise avec synchronisation en temps reel.",
  },
  {
    icon: Plug,
    title: "API & Integrations",
    description:
      "Connectez votre POS a d'autres outils : comptabilite, e-commerce, ERP et bien plus encore.",
  },
]

export function FeaturesSection() {
  return (
    <section id="fonctionnalites" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#f47920]">
            Fonctionnalites
          </p>
          <h2
            className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Tout ce dont vous avez besoin pour gerer votre commerce
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Une suite complete d{"'"}outils pour optimiser chaque aspect de votre
            activite, de la vente a la gestion des stocks.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-6 transition-all hover:-translate-y-1 hover:border-[#f47920]/40 hover:shadow-xl hover:shadow-[#f47920]/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0b2f52]/10 transition-colors group-hover:bg-[#0b2f52]/18">
                <feature.icon className="h-6 w-6 text-[#f47920]" />
              </div>
              <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
