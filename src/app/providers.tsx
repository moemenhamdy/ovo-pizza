"use client";

import { useEffect } from "react";
import { LanguageProvider } from "@/context/LanguageContext";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").catch((err) => {
          console.log("Service Worker registration failed: ", err);
        });
      });
    }
  }, []);

  return (
    <LanguageProvider>{children}</LanguageProvider>
  );
}
