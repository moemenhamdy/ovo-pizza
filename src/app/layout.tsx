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
  title: "OVO Pizza — IN CRUST WE TRUST 🍕💚",
  description:
    "Handcrafted pizza made with passion in Kafr El-Sheikh. Explore our premium menu of Classic, Meat, Chicken, Sea Food, and Four Season pizzas. Order now!",
  keywords: [
    "OVO Pizza",
    "pizza",
    "Kafr El-Sheikh",
    "بيتزا",
    "كفر الشيخ",
    "delivery",
    "restaurant",
  ],
  authors: [{ name: "OVO Pizza" }],
  openGraph: {
    title: "OVO Pizza — IN CRUST WE TRUST 🍕💚",
    description:
      "Handcrafted pizza made with passion in Kafr El-Sheikh. Order your favorite pizza now!",
    url: "https://ovo.pizza",
    siteName: "OVO Pizza",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "OVO Pizza Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OVO Pizza — IN CRUST WE TRUST 🍕💚",
    description:
      "Handcrafted pizza made with passion in Kafr El-Sheikh.",
    images: ["/banner.png"],
  },
  icons: {
    icon: "/ovo_logo.png",
    apple: "/ovo_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
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
