import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { company } from "@/lib/content";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const description =
  "Rohi Energy is an integrated oil & gas company — exploring, producing, and delivering energy responsibly across the value chain.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rohienergy.com"),
  title: {
    default: `${company.name} — ${company.tagline}`,
    template: `%s · ${company.name}`,
  },
  description,
  keywords: [
    "Rohi Energy",
    "oil and gas",
    "energy",
    "exploration",
    "production",
    "midstream",
  ],
  openGraph: {
    type: "website",
    siteName: company.name,
    title: `${company.name} — ${company.tagline}`,
    description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — ${company.tagline}`,
    description,
  },
  icons: {
    icon: "/logo-mark.svg",
  },
};

export const viewport = {
  themeColor: "#05070d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="has-custom-cursor min-h-full flex flex-col bg-background text-foreground">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
