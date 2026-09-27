import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import { profile } from "@/content/site";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} | Software Developer`,
  description: profile.intro,
  openGraph: {
    title: `${profile.name} | Software Developer`,
    description: profile.intro,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Skip the intro splash on repeat visits and for reduced motion, before first paint. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem("splash-seen")==="1"||matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.dataset.splash="skip"}catch(e){}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
