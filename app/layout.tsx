import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Second Nature Oils",
  description: "Certified organic oils from Ireland — sustainably crafted for purity & taste.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
