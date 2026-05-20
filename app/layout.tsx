import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Lumina",
    template: "%s | Lumina",
  },
  description: "Lumina — illuminate your world with clarity and purpose.",
  openGraph: {
    title: "Lumina",
    description: "Lumina — illuminate your world with clarity and purpose.",
    siteName: "Lumina",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina",
    description: "Lumina — illuminate your world with clarity and purpose.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
