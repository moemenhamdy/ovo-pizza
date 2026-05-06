"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { menuData } from "@/data/menu";
import MenuCard from "./MenuCard";

export default function MenuSection() {
  const { locale, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);
  const tabsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const activeItems = menuData.find((c) => c.id === activeCategory)?.items ?? [];

  // Scroll-reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Scroll active tab into view
  const scrollTabIntoView = (id: string) => {
    const tab = tabsRef.current?.querySelector(`[data-tab="${id}"]`) as HTMLElement | null;
    if (tab && tabsRef.current) {
      const container = tabsRef.current;
      const scrollLeft = tab.offsetLeft - container.offsetWidth / 2 + tab.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  };

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-12 reveal">
        <h2 className="section-divider text-3xl sm:text-4xl md:text-5xl font-black text-text-primary mb-4">
          <span className="px-4">{t("menu.title")}</span>
        </h2>
        <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto">
          {t("menu.subtitle")}
        </p>
      </div>

      {/* Category Tabs */}
      <div className="mb-10 reveal">
        <div
          ref={tabsRef}
          className="scroll-tabs flex gap-2 overflow-x-auto pb-2 px-1"
        >
          {menuData.map((category) => {
            const isActive = category.id === activeCategory;
            return (
              <button
                key={category.id}
                data-tab={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  scrollTabIntoView(category.id);
                }}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-brand-600 text-white shadow-md shadow-brand-600/30"
                    : "bg-surface text-text-secondary border border-border hover:border-brand-400/50 hover:text-brand-500"
                }`}
              >
                <span className="material-icons-outlined text-[18px]">
                  {category.icon}
                </span>
                {locale === "ar" ? category.nameAr : category.nameEn}
              </button>
            );
          })}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {activeItems.map((item, index) => (
          <MenuCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
