"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { key: "home", href: "#home" },
    { key: "menu", href: "#menu" },
    { key: "branches", href: "#branches" },
    { key: "contact", href: "#contact" },
  ];

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="h-1 bg-gradient-to-r from-brand-700 via-gold-400 to-brand-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Logo + Slogan */}
          <div className="flex flex-col items-center gap-3">
            <Image src="/ovo_logo.png" alt="OVO Pizza" width={56} height={56} className="rounded-xl" />
            <p className="text-sm font-semibold text-text-secondary">{t("footer.slogan")}</p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                className="text-sm text-text-muted hover:text-brand-500 transition-colors duration-200"
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center gap-1">
            <p className="text-xs text-text-muted">{t("footer.rights")}</p>
            <p className="text-xs text-text-muted">{t("footer.madeWith")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
