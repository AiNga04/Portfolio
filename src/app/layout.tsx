import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cvData } from "@/lib/data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ainga04.github.io"),
  title: `${cvData.name} | ${cvData.title}`,
  description: cvData.tagline,
  keywords: [
    "Trương Ái Nga",
    "Ai Nga",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Creative Developer",
    "Sinh viên HCMUTE",
    "Lập trình viên giao diện"
  ],
  openGraph: {
    title: `${cvData.name} | ${cvData.title}`,
    description: cvData.tagline,
    url: cvData.contact.github, // Fallback since domain isn't fully set
    siteName: `${cvData.name} Portfolio`,
    images: [
      {
        url: cvData.avatar,
        width: 1200,
        height: 630,
        alt: `${cvData.name} Portfolio`,
      },
    ],
    locale: "vi_VN",
    type: "website",
    emails: cvData.contact.email,
    phoneNumbers: cvData.contact.phone,
    countryName: "Việt Nam",
  },
  twitter: {
    card: "summary_large_image",
    title: `${cvData.name} | ${cvData.title}`,
    description: cvData.tagline,
    images: [cvData.avatar],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: cvData.name,
    url: cvData.contact.github,
    image: cvData.avatar,
    sameAs: [
      cvData.contact.linkedin,
      cvData.contact.github,
      "https://www.facebook.com/truong.ai.nga.2025/",
      "https://www.instagram.com/ainga_76"
    ],
    jobTitle: cvData.title,
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
