import type { Metadata } from "next";
import "./globals.css";
import { cvData } from "@/lib/data";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://ainga2k4.vercel.app/"),
  title: `${cvData.name} | ${cvData.title}`,
  description: cvData.tagline,
  keywords: [
    "Trương Ái Nga",
    "Ai Nga",
    "Fullstack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Portfolio",
    "Creative Developer",
  ],
  openGraph: {
    title: `${cvData.name} | ${cvData.title}`,
    description: cvData.tagline,
    url: cvData.contact.github, // Fallback since domain isn't fully set
    siteName: `${cvData.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
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
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    (function() {
      try {
        var storageKey = "portfolio-theme";
        var theme = localStorage.getItem(storageKey) || "light";
        if (theme !== "light" && theme !== "dark" && theme !== "system") theme = "light";
        var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        var resolved = theme === "system" ? (systemDark ? "dark" : "light") : theme;
        var root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(resolved);
        root.dataset.theme = theme;
        root.style.colorScheme = resolved;
      } catch (error) {}
    })();
  `;

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
      "https://www.instagram.com/ainga_76",
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
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="font-sans antialiased bg-background text-foreground"
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
