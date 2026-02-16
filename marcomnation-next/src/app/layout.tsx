import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/client-wrapper";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcomnation | Tech Meets Cinema",
  description: "Next-generation digital production powered by AI and cinematic vision.",
};

import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexMono.variable} antialiased bg-brand-black text-white font-sans selection:bg-brand-tech selection:text-white`}
      >
        <ClientWrapper>
          {children}
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
