"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = [
  { id: "home", href: "#home" },
  { id: "menu", href: "#menu" },
  { id: "branches", href: "#branches" },
  { id: "contact", href: "#contact" },
];

export default function Navbar() {
  const { locale, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle PWA Install Prompt
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setDeferredPrompt(null);
    }
  };

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-lg"
            : "bg-transparent"
        }`}
        style={{ height: "var(--navbar-height)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-2 group"
          >
            <Image
              src="/ovo_logo.png"
              alt="OVO Pizza"
              width={44}
              height={44}
              className="rounded-lg transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-lg font-bold tracking-wide text-text-primary hidden sm:block">
              OVO<span className="text-brand-500"> PIZZA</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-4 py-2 rounded-xl text-sm font-medium text-text-secondary hover:text-brand-500 hover:bg-brand-900/30 transition-all duration-200"
              >
                {t(`nav.${link.id}`)}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Install App Button */}
            {deferredPrompt && (
              <button
                onClick={handleInstallClick}
                className="hidden sm:flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-bold bg-brand-500 text-white hover:bg-brand-400 transition-colors shadow-lg shadow-brand-500/20"
              >
                <span className="material-icons-outlined text-[18px]">download</span>
                <span>{locale === "ar" ? "تثبيت التطبيق" : "Install App"}</span>
              </button>
            )}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-semibold text-text-secondary hover:text-brand-500 hover:bg-brand-900/30 transition-all duration-200"
              aria-label="Toggle language"
            >
              <span className="material-icons-outlined text-[18px]">translate</span>
              <span>{locale === "en" ? "AR" : "EN"}</span>
            </button>


            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-xl text-text-secondary hover:text-brand-500 hover:bg-brand-900/30 transition-all"
              aria-label="Toggle menu"
            >
              <span className="material-icons-outlined text-[24px]">
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-[var(--navbar-height)] left-0 right-0 glass shadow-xl transition-all duration-300 ${
            mobileOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-4 py-3 rounded-xl text-base font-medium text-text-primary hover:text-brand-500 hover:bg-brand-900/30 transition-all duration-200"
              >
                {t(`nav.${link.id}`)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
