"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const services = [
  { icon: "restaurant", key: "dineIn" },
  { icon: "takeout_dining", key: "takeaway" },
  { icon: "delivery_dining", key: "delivery" },
];

export default function BranchesSection() {
  const { t, locale } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="branches" ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12 reveal">
        <h2 className="section-divider text-3xl sm:text-4xl md:text-5xl font-black text-text-primary mb-4">
          <span className="px-4">{t("branches.title")}</span>
        </h2>
        <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto">{t("branches.subtitle")}</p>
      </div>

      <div className="max-w-2xl mx-auto reveal">
        <div className="relative bg-surface rounded-3xl border border-border overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500">
          <div className="h-2 bg-gradient-to-r from-brand-700 via-gold-400 to-brand-700" />
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-900/50 flex items-center justify-center">
                <span className="material-icons-outlined text-brand-600 text-2xl">storefront</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary">OVO Pizza</h3>
                <p className="text-sm text-text-muted">{t("branches.kafrelsheikh")}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-6 p-4 rounded-2xl bg-brand-900/20">
              <span className="material-icons-outlined text-brand-500 mt-0.5">location_on</span>
              <p className="text-text-secondary text-sm leading-relaxed">{t("branches.address")}</p>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">{t("branches.services")}</h4>
              <div className="flex flex-wrap gap-3">
                {services.map((s) => (
                  <div key={s.key} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-900/30 border border-brand-800/40">
                    <span className="material-icons-outlined text-brand-500 text-lg">{s.icon}</span>
                    <span className="text-sm font-medium text-text-primary">{t(`branches.${s.key}`)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-gold-500/10 border border-gold-500/20 mb-6">
              <span className="material-icons-outlined text-gold-500">schedule</span>
              <div>
                <span className="text-xs font-semibold text-text-muted uppercase tracking-wider block">{t("branches.workingHours")}</span>
                <span className="text-sm font-medium text-text-primary">{t("branches.hours")}</span>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/yzDhkk1vVikuF2RN7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-white text-[#1a1a1a] font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-white/10 group"
            >
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn5uDUFPgf7p8SojaD68ZbRm5bGqrR94Ps-A&s" 
                alt="Google Maps" 
                className="w-6 h-6 object-contain group-hover:scale-110 transition-transform"
              />
              <span>{locale === "ar" ? "عرض على خرائط جوجل" : "View on Google Maps"}</span>
              <span className="material-icons-outlined text-sm ms-auto opacity-70 group-hover:translate-x-1 group-hover:opacity-100 transition-all rtl:rotate-180">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
