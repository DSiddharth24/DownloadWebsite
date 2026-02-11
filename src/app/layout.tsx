import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "CrewLeaf | Smart Plantation & Labour Management",
  description: "Experience the future of plantation management with CrewLeaf. Digital mechanization, labor coordination, and smart analytics in one powerful app.",
  keywords: ["CrewLeaf", "Plantation Management", "Labour Management", "Agricultural Mechanization", "Smart Farming", "APK Download"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
