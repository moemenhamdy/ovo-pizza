"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt="Premium pizza background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#1A3E16]/60 to-[#0D1A0B]/90" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(74,124,68,0.2)_0%,_transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-8 max-w-4xl mx-auto">
        {/* Floating Logo */}
        <div className="animate-float mb-8">
          <Image
            src="/ovo_logo.png"
            alt="OVO Pizza Logo"
            width={160}
            height={160}
            className="drop-shadow-2xl w-28 h-28 sm:w-40 sm:h-40 rounded-full"
            priority
          />
        </div>

        {/* Tagline */}
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-white mb-4 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          {t("hero.tagline")}
        </h1>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-10 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {t("hero.subtitle")}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <button
            onClick={() => handleScroll("#menu")}
            className="btn-shimmer px-8 py-4 rounded-2xl text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer flex items-center gap-2"
          >
            <span className="material-icons-outlined">restaurant_menu</span>
            {t("hero.viewMenu")}
          </button>

          <a
            href="tel:+201108311385"
            className="px-8 py-4 rounded-2xl text-base sm:text-lg font-bold border-2 border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span className="material-icons-outlined">call</span>
            {t("hero.callUs")}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-white/50 text-xs font-medium tracking-widest uppercase">
          {t("hero.scrollDown")}
        </span>
        <span className="material-icons-outlined text-white/50 text-2xl">
          keyboard_arrow_down
        </span>
      </div>
    </section>
  );
}
