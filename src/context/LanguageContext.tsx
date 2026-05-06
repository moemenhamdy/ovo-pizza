"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import en from "@/dictionaries/en.json";
import ar from "@/dictionaries/ar.json";

type Locale = "en" | "ar";

type NestedDict = {
  [key: string]: string | NestedDict;
};

const dictionaries: Record<Locale, NestedDict> = { en, ar };

interface LanguageContextType {
  locale: Locale;
  dir: "ltr" | "rtl";
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getNestedValue(obj: NestedDict, path: string): string {
  const keys = path.split(".");
  let current: NestedDict | string = obj;
  for (const key of keys) {
    if (typeof current === "string") return path;
    current = current[key];
    if (current === undefined) return path;
  }
  return typeof current === "string" ? current : path;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ar");

  const dir = locale === "ar" ? "rtl" : "ltr";

  const toggleLanguage = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  const t = useCallback(
    (key: string): string => {
      return getNestedValue(dictionaries[locale], key);
    },
    [locale]
  );

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  return (
    <LanguageContext.Provider value={{ locale, dir, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
