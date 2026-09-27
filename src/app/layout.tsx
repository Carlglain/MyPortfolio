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
        {/* Before first paint: restore the saved theme (light by default) and skip
            the intro splash on repeat visits or for reduced motion. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var d=document.documentElement;d.dataset.theme=localStorage.getItem("theme")==="dark"?"dark":"light";if(sessionStorage.getItem("splash-seen")==="1"||matchMedia("(prefers-reduced-motion: reduce)").matches)d.dataset.splash="skip"}catch(e){}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
