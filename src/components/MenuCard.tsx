"use client";

import { useLanguage } from "@/context/LanguageContext";
import { MenuItem } from "@/data/menu";

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

export default function MenuCard({ item, index }: MenuCardProps) {
  const { locale, t } = useLanguage();
  const name = locale === "ar" ? item.nameAr : item.nameEn;
  const description = locale === "ar" ? item.descriptionAr : item.descriptionEn;

  const sizes = [
    { key: "large" as const, label: t("menu.large") },
    { key: "xlarge" as const, label: t("menu.xlarge") },
    { key: "family" as const, label: t("menu.family") },
  ];

  const availableSizes = sizes.filter((s) => item.prices[s.key] !== undefined);

  return (
    <div
      className="group relative bg-surface rounded-2xl border border-border overflow-hidden hover:border-brand-400/50 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex flex-col"
      style={{
        animationDelay: `${index * 0.05}s`,
      }}
    >
      {/* NEW Badge */}
      {item.isNew && (
        <div className="absolute top-3 end-3 z-10">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gold-500 text-white animate-pulse-badge shadow-md">
            {t("menu.new")}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="p-5 pb-3 flex-1">
        <h3 className="text-lg font-bold text-text-primary mb-1.5 group-hover:text-brand-500 transition-colors duration-200">
          {name}
        </h3>
        {description && (
          <p className="text-sm text-text-muted leading-relaxed line-clamp-2">
            {description}
          </p>
        )}
      </div>

      {/* Prices — full width */}
      <div className="flex w-full border-t border-border">
        {availableSizes.map((size, i) => (
          <div
            key={size.key}
            className={`flex-1 flex flex-col items-center py-3 bg-brand-900/20 ${
              i !== availableSizes.length - 1 ? "border-e border-border" : ""
            }`}
          >
            <span className="text-[11px] font-medium text-text-muted uppercase tracking-wider">
              {size.label}
            </span>
            <span className="text-base font-bold text-brand-300">
              {item.prices[size.key]}
              <span className="text-[10px] font-normal text-text-muted ms-0.5">
                {t("menu.currency")}
              </span>
            </span>
          </div>
        ))}
      </div>

      {/* Bottom accent line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-500 via-gold-400 to-brand-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
    </div>
  );
}
