"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

// Chemin de ton logo (fichier dans public/, ex: /logo.png ou /images/logo.jpg)
const LOGO_SRC = "/images/logo.png"

const navLinks = [
  { label: "Fonctionnalites", href: "#fonctionnalites" },
  { label: "Modules", href: "#modules" },
  { label: "Temoignages", href: "#temoignages" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-card/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={LOGO_SRC}
            alt="TickTap"
            width={1000}
            height={1000}
            className="h-9 w-auto object-contain"
          />
          <span className="text-xl font-bold tracking-tight text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            TickTapPOS
              
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#f47920]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-[#f47920]"
          >
            Connexion
          </Button>
          <Button
            size="sm"
            className="bg-[#f47920] text-white shadow-[0_10px_24px_rgba(244,121,32,0.28)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#d8661d] hover:shadow-[0_14px_30px_rgba(244,121,32,0.4)]"
          >
            Commencer gratuitement
          </Button>
        </div>

        <button
          className="flex items-center justify-center md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-card px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-[#f47920]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-muted-foreground hover:text-[#f47920]"
            >
              Connexion
            </Button>
            <Button
              size="sm"
              className="w-full bg-[#f47920] text-white shadow-[0_10px_24px_rgba(244,121,32,0.28)] hover:bg-[#d8661d]"
            >
              Commencer gratuitement
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
