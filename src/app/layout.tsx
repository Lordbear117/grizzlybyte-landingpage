import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GrizzlyByte Solutions",
  description:
    "GrizzlyByte Solutions is a software development company.",
  openGraph: {
    url: "https://www.grizzlybyte.me/",
    title: "YutbelyInk - Artista de Tatuajes en Culiacán, Sinaloa",
    description:
      "GrizzlyByte Solutions is a software development company.",
    images: [
      {
        url: "https://www.grizzlybyte.me/grizzlybyte-bear-logo.svg",
        alt: "Logo of GrizzlyByte Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GrizzlyByte Solutions",
    description:
      "GrizzlyByte Solutions is a software development company.",
    images: ["https://www.grizzlybyte.me/grizzlybyte-bear-logo.svg"],
  },
  alternates: {
    canonical: "https://www.grizzlybyte.me/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = "width=device-width, initial-scale=1.0";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
