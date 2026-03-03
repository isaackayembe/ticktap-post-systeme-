import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Est-ce que le logiciel est gratuit ?",
    answer:
      "Oui, nous proposons une version gratuite avec les fonctionnalites essentielles pour demarrer. Des plans premium sont disponibles pour acceder aux fonctionnalites avancees comme le multi-magasins, les rapports detailles et le support prioritaire.",
  },
  {
    question: "Comment installer TicktapPOS ?",
    answer:
      "Aucune installation complexe n'est necessaire. TicktapPOS fonctionne directement depuis votre navigateur web ou via notre application dediee pour tablette et smartphone. Creez un compte et commencez a vendre en quelques minutes.",
  },
  {
    question:
      "Est-ce compatible avec les imprimantes et scanners ?",
    answer:
      "Oui, TicktapPOS est compatible avec la majorite des imprimantes thermiques de recus, scanners de codes-barres et tiroirs-caisse disponibles sur le marche. Consultez notre liste de materiel compatible pour plus de details.",
  },
  {
    question: "Peut-on utiliser TicktapPOS hors connexion ?",
    answer:
      "Oui, notre systeme fonctionne hors ligne et synchronise automatiquement toutes les donnees des que la connexion internet revient. Vous ne perdez jamais une vente.",
  },
  {
    question: "Quels pays et langues sont supportes ?",
    answer:
      "TicktapPOS est une solution cloud disponible partout dans le monde. L'interface est disponible en francais, anglais, espagnol et arabe. Les devises et taxes locales sont configurables pour chaque pays.",
  },
  {
    question: "Mes donnees sont-elles securisees ?",
    answer:
      "Absolument. Toutes vos donnees sont chiffrees et stockees sur des serveurs securises avec des sauvegardes automatiques quotidiennes. Nous respectons les normes de securite les plus strictes du secteur.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="border-t border-border bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="mb-12 text-center lg:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#f47920]">
            FAQ
          </p>
          <h2
            className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Questions frequentes
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Trouvez rapidement les reponses a vos questions.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="overflow-hidden rounded-xl border border-border/70 bg-card transition-all hover:-translate-y-0.5 hover:border-[#f47920]/35 hover:shadow-md hover:shadow-[#f47920]/8"
            >
              <AccordionTrigger className="px-4 text-left text-base font-medium text-foreground hover:no-underline data-[state=open]:text-[#f47920] data-[state=open]:bg-[#0b2f52]/3">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
