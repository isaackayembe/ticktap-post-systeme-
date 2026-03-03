"use client"

import { useState } from "react"
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

type PosSectionId =
  | "pos"
  | "payments"
  | "inventory"
  | "analytics"
  | "employees"
  | "crm"
  | "multistore"
  | "integrations"

type PosSection = {
  id: PosSectionId
  label: string
  title: string
  description: string
  bullets: string[]
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const SECTIONS: PosSection[] = [
  {
    id: "pos",
    label: "Point de vente",
    title: "Transformez votre smartphone ou tablette en caisse enregistreuse",
    description:
      "ticktapPOS vous permet d'encaisser rapidement, de garder un historique clair de chaque ticket et de servir vos clients sans friction, meme aux heures de pointe.",
    bullets: [
      "Emettre des recus imprimes ou electroniques en un clic",
      "Appliquer des remises, promotions et remboursements en toute simplicite",
      "Continuer a enregistrer les ventes meme en cas de coupure internet",
      "Connecter tiroir-caisse, imprimante de tickets et lecteur de codes-barres compatibles",
    ],
    icon: ShoppingCart,
  },
  {
    id: "payments",
    label: "Paiements",
    title: "Acceptez tous les moyens de paiement que vos clients preferent",
    description:
      "Offrez une experience de paiement fluide : especes, cartes bancaires ou solutions de paiement mobiles, tout est centralise dans ticktapPOS.",
    bullets: [
      "Enregistrer rapidement les paiements en especes et cartes bancaires",
      "Support des paiements mobiles (Mobile Money, wallets, etc.) selon vos partenaires",
      "Repartir un ticket sur plusieurs modes de paiement si necessaire",
      "Reduire les erreurs de caisse grace a un suivi clair des encaissements",
    ],
    icon: CreditCard,
  },
  {
    id: "inventory",
    label: "Stocks",
    title: "Gardez toujours le controle sur vos niveaux de stock",
    description:
      "Suivez vos produits en temps reel, recevez des alertes quand un article arrive en rupture et anticipez vos commandes fournisseurs.",
    bullets: [
      "Suivi automatique des sorties de stock a chaque vente",
      "Alertes de seuils bas pour eviter les ruptures critiques",
      "Gestion des entrees : livraisons, inventaires, pertes et ajustements",
      "Vue centralisee de vos stocks pour un ou plusieurs points de vente",
    ],
    icon: Package,
  },
  {
    id: "analytics",
    label: "Analyses",
    title: "Comprenez vos chiffres pour prendre de meilleures decisions",
    description:
      "ticktapPOS transforme vos donnees de ventes en tableaux de bord clairs pour suivre l'evolution de votre activite jour apres jour.",
    bullets: [
      "Consulter le chiffre d’affaires, le panier moyen et le nombre de tickets",
      "Identifier les produits les plus performants et les categories fortes",
      "Comparer les performances par jour, semaine, employe ou point de vente",
      "Exporter vos donnees pour les partager avec votre comptable ou vos partenaires",
    ],
    icon: BarChart3,
  },
  {
    id: "employees",
    label: "Employes",
    title: "Gerez vos equipes et securisez l'acces a votre caisse",
    description:
      "Creez des profils pour chaque collaborateur, suivez leurs performances et limitez ce qu'ils peuvent voir ou modifier dans ticktapPOS.",
    bullets: [
      "Creation de comptes employes avec identifiants dedies",
      "Definition de roles et niveaux d'acces (caissier, manager, administrateur, etc.)",
      "Suivi des ventes par employe pour identifier les meilleurs performeurs",
      "Reduction des erreurs et du risque de fraude grace a des droits limites",
    ],
    icon: Users,
  },
  {
    id: "crm",
    label: "CRM & fidelite",
    title: "Fidelisez vos meilleurs clients et suivez leurs habitudes",
    description:
      "ticktapPOS vous aide a mieux connaitre vos clients pour leur proposer des offres adaptees et les faire revenir plus souvent.",
    bullets: [
      "Enregistrer les coordonnees et l'historique d'achats de chaque client",
      "Mettre en place un programme de points ou de remise fidelite",
      "Identifier vos clients les plus rentables et leurs produits favoris",
      "Préparer facilement des campagnes promotionnelles ciblees",
    ],
    icon: Heart,
  },
  {
    id: "multistore",
    label: "Multi-magasins",
    title: "Pilotez plusieurs points de vente depuis un seul compte",
    description:
      "Que vous ayez une boutique, un food‑truck et un stand de marche, ou plusieurs magasins, ticktapPOS centralise tout au meme endroit.",
    bullets: [
      "Vue globale des ventes et stocks pour tous vos points de vente",
      "Comparaison des performances entre magasins ou canaux de vente",
      "Transferts de stock d'un magasin a un autre de maniere tracee",
      "Parametrage de prix et catalogues adaptes a chaque point de vente",
    ],
    icon: Building2,
  },
  {
    id: "integrations",
    label: "Integrations",
    title: "Connectez ticktapPOS aux autres outils de votre activite",
    description:
      "Integrez votre caisse a vos logiciels comptables, votre boutique en ligne ou d'autres services pour automatiser encore plus votre gestion.",
    bullets: [
      "Synchronisation possible avec des outils de comptabilite ou de facturation",
      "Connexion a des solutions e‑commerce pour unifier ventes en ligne et en magasin",
      "Export simple des donnees pour vos partenaires et prestataires",
      "Base solide pour des integrations sur mesure via API (selon votre configuration)",
    ],
    icon: Plug,
  },
]

export function PosSystemSection() {
  const [activeId, setActiveId] = useState<PosSectionId>("pos")
  const activeSection = SECTIONS.find((section) => section.id === activeId) ?? SECTIONS[0]
  const ActiveIcon = activeSection.icon

  return (
    <section id="pos-system" className="bg-muted/40 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#f47920]">
            ticktapPOS
          </p>
          <h2
            className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Systeme de caisse pour faire reussir votre entreprise
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Regroupez toutes vos operations de vente, de paiement, de gestion de stock et d’analyse dans
            une seule plateforme intuitive. Choisissez simplement le module qui vous interesse pour voir
            comment ticktapPOS peut vous aider au quotidien.
          </p>
        </div>

        <div className="mb-8 flex w-full flex-wrap justify-center gap-2 border-b border-border pb-4">
          {SECTIONS.map((section) => {
            const Icon = section.icon
            const isActive = section.id === activeId
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => setActiveId(section.id)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#f47920] text-white shadow-[0_10px_24px_rgba(244,121,32,0.28)]"
                    : "border border-border/70 bg-card text-muted-foreground hover:text-foreground hover:border-[#f47920]/40"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{section.label}</span>
              </button>
            )
          })}
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 space-y-4 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0b2f52]/10 px-3 py-1 text-xs font-semibold text-[#0b2f52]">
              <ActiveIcon className="h-3 w-3" />
              <span>{activeSection.label}</span>
            </div>
            <h3
              className="text-2xl font-bold tracking-tight text-foreground md:text-3xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {activeSection.title}
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              {activeSection.description}
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {activeSection.bullets.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#f47920]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-sm sm:p-6">
              <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-[#0b2f52]/18 via-[#0d3c6c]/10 to-[#f47920]/18 dark:from-[#0b2f52]/22 dark:via-[#0d3c6c]/14 dark:to-[#f47920]/22" />
              <p className="mt-4 text-xs text-muted-foreground sm:text-sm">
                Illustration de la fonctionnalite <span className="font-semibold">{activeSection.label}</span> dans
                ticktapPOS. Remplacez ce bloc par une capture d&apos;ecran de votre application si vous le souhaitez.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
