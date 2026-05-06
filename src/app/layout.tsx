import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ovo-pizza-demo.vercel.app"),
  title: "OVO Pizza — IN CRUST WE TRUST 🍕💚",
  description:
    "أفضل بيتزا في كفر الشيخ. بيتزا مصنوعة يدوياً بشغف وتُقدم بحب. اطلب الآن! Handcrafted pizza made with passion in Kafr El-Sheikh. Explore our premium menu and order now!",
  keywords: [
    "OVO Pizza",
    "pizza",
    "Kafr El-Sheikh",
    "بيتزا",
    "كفر الشيخ",
    "delivery",
    "restaurant",
    "مطعم",
    "توصيل"
  ],
  authors: [{ name: "OVO Pizza" }],
  robots: "index, follow",
  openGraph: {
    title: "OVO Pizza — IN CRUST WE TRUST 🍕💚",
    description:
      "بيتزا مصنوعة يدوياً بشغف وتُقدم بحب. اكتشف الطعم اللي خلى كفر الشيخ مش قادرة تستغنى عنه.",
    url: "/",
    siteName: "OVO Pizza",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "OVO Pizza Banner",
      },
    ],
    locale: "ar_EG",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OVO Pizza — IN CRUST WE TRUST 🍕💚",
    description:
      "أفضل بيتزا في كفر الشيخ. بيتزا مصنوعة يدوياً بشغف وتُقدم بحب. اطلب الآن!",
    images: ["/banner.png"],
  },
  icons: {
    icon: "/ovo_logo.png",
    apple: "/ovo_logo.png",
  },
};

export const viewport = {
  themeColor: "#1A3E16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${inter.variable} ${cairo.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
