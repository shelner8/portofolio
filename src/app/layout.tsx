import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { navigation } from "@/data/navigation";
import { footer } from "@/data/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Data Center Network Specialist & Enterprise Network Engineer",
  description: "Professional portfolio showcasing enterprise networking, modern data center architecture, automation, and infrastructure engineering.",
  keywords: ["Network Engineer", "Data Center", "Aruba AOS-CX", "EVPN", "VXLAN", "BGP", "Network Automation", "Python", "Zero Trust Campus"],
  authors: [{ name: "Enterprise Network Engineer" }],
  openGraph: {
    title: "Data Center Network Specialist & Enterprise Network Engineer",
    description: "Professional portfolio showcasing enterprise networking, modern data center architecture, automation, and infrastructure engineering.",
    type: "website",
    locale: "en_US",
    siteName: "Enterprise Network Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Center Network Specialist & Enterprise Network Engineer",
    description: "Professional portfolio showcasing enterprise networking, modern data center architecture, automation, and infrastructure engineering.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          <div className="flex min-h-screen flex-col relative">
            <Navbar navigation={navigation} />
            <main className="flex-1 pt-[72px]">
              {children}
            </main>
            <Footer footer={footer} />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
