import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#0B1120",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://your-portfolio.com"),
  title: {
    default: "Data Center Network Specialist | Enterprise Network Engineer",
    template: "%s | Enterprise Network Portfolio"
  },
  description: "Professional engineering portfolio showcasing enterprise networking, modern data center architecture, automation, and infrastructure engineering.",
  keywords: ["Network Engineer", "Data Center", "Aruba AOS-CX", "EVPN", "VXLAN", "BGP", "Network Automation", "Python", "Zero Trust Campus"],
  authors: [{ name: "Enterprise Network Engineer", url: "https://your-portfolio.com" }],
  creator: "Enterprise Network Engineer",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Data Center Network Specialist | Enterprise Network Engineer",
    description: "Professional engineering portfolio showcasing enterprise networking, modern data center architecture, automation, and infrastructure engineering.",
    url: "https://your-portfolio.com",
    siteName: "Enterprise Network Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Enterprise Network Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Center Network Specialist | Enterprise Network Engineer",
    description: "Professional engineering portfolio showcasing enterprise networking, modern data center architecture, automation, and infrastructure engineering.",
    images: ["/og-image.jpg"],
    creator: "@yourhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Enterprise Network Engineer",
  "jobTitle": "Data Center Network Specialist",
  "url": "https://your-portfolio.com",
  "sameAs": [
    "https://linkedin.com/in/shelnerio",
    "https://github.com/shelner8"
  ],
  "knowsAbout": [
    "Data Center Networking",
    "Aruba AOS-CX",
    "EVPN-VXLAN",
    "Network Automation",
    "Spine-Leaf Architecture"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
