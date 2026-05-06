"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const socials = [
  {
    icon: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61585906410125",
    color: "#1877F2",
    gradient: "from-[#1877F2]/20 to-transparent",
  },
  {
    icon: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/ovo__pizza",
    color: "#E4405F",
    gradient: "from-[#E4405F]/20 to-transparent",
  },
  {
    icon: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@ovo_pizza",
    color: "#ff0050",
    gradient: "from-[#ff0050]/20 to-transparent",
  },
];

export default function ContactSection() {
  const { t } = useLanguage();
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
    <section id="contact" ref={sectionRef} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 reveal max-w-7xl mx-auto relative z-10">
        <h2 className="section-divider text-3xl sm:text-4xl md:text-5xl font-black text-text-primary mb-4">
          <span className="px-4">{t("contact.title")}</span>
        </h2>
        <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto">{t("contact.subtitle")}</p>
      </div>

      {/* Bento Grid */}
      <div className="reveal max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        
        {/* Hotline Card (Spans 2 columns on tablet/desktop) */}
        <a href="tel:+201108311385" className="block md:col-span-2 group relative rounded-[2rem] overflow-hidden border border-border bg-surface hover:border-brand-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-500/10 p-8 sm:p-10 flex flex-col justify-center text-center sm:text-start">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-brand-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-[100%]" />
          
          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-10">
            <div className="shrink-0 w-20 h-20 rounded-3xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-500 group-hover:rotate-3 transition-all duration-500">
              <span className="material-icons-outlined text-brand-400 text-4xl group-hover:text-white transition-colors duration-500">call</span>
            </div>
            <div>
              <span className="text-sm font-bold text-brand-400 uppercase tracking-widest block mb-3">{t("contact.hotline")}</span>
              <div className="flex flex-col gap-2">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-text-primary group-hover:text-brand-400 transition-colors tracking-tight" dir="ltr">011 0831 1385</span>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-text-secondary group-hover:text-brand-400/80 transition-colors tracking-tight" dir="ltr">015 0883 8511</span>
              </div>
            </div>
          </div>
        </a>

        {/* WhatsApp Card */}
        <a href="https://wa.me/201108311385" target="_blank" rel="noopener noreferrer" className="block md:col-span-1 group relative rounded-[2rem] overflow-hidden border border-border bg-surface hover:border-[#25D366]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#25D366]/10 p-8 sm:p-10 flex flex-col justify-center items-center text-center">
          <div className="absolute inset-0 bg-gradient-to-t from-[#25D366]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-3xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#25D366] transition-all duration-500">
              <svg className="w-10 h-10 text-[#25D366] group-hover:text-white transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            </div>
            <span className="text-sm font-bold text-[#25D366] uppercase tracking-widest block mb-2 text-center">{t("contact.whatsapp")}</span>
            <span className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-white transition-colors text-center">
              {t("contact.chatWithUs")}
            </span>
          </div>
        </a>

        {/* Social Media Card (Spans all 3 columns) */}
        <div className="md:col-span-3 rounded-[2rem] border border-border bg-surface p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-white/10 transition-colors duration-500">
          <div className="text-center md:text-start">
            <h3 className="text-2xl font-bold text-text-primary mb-2">{t("contact.followUs")}</h3>
            <p className="text-text-secondary">{t("contact.socialSubtitle")}</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-4 rounded-2xl bg-background border border-border hover:border-transparent transition-all duration-300 relative overflow-hidden`}
                aria-label={s.label}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10 flex items-center gap-3">
                  {s.icon === "facebook" && (
                    <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" style={{ color: s.color }} fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  )}
                  {s.icon === "instagram" && (
                    <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" style={{ color: s.color }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                  )}
                  {s.icon === "tiktok" && (
                    <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" style={{ color: s.color }} fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
                  )}
                  <span className="font-bold text-text-primary">{s.label}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
