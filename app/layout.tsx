import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
// Site-wide SEO text is staff-editable in Power Hub → site → seo
import siteContent from "@/content/site.json";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const { seo, organization } = siteContent;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: ["Murray Partners 4 Prevention", "P4P", "Murray Utah", "Community Coalition", "Prevention", "Youth Empowerment", "Family Support"],
  authors: [{ name: organization.name }],
  icons: {
    icon: [
      { url: organization.logo, type: 'image/png' },
    ],
    apple: [
      { url: organization.logo, type: 'image/png' },
    ],
  },
  openGraph: {
    title: seo.socialTitle,
    description: seo.socialDescription,
    url: "https://murrayp4p.com",
    siteName: organization.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.socialTitle,
    description: seo.socialDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${openSans.variable} antialiased min-w-full`}>
        {/* Aurora Background */}
        <div className="aurora-bg" aria-hidden="true" />

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="min-w-full flex flex-col items-center relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
