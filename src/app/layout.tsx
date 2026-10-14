import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Espressoft | AI for the Construction Industry",
  description: "AI that understands the field, redefining the standard of construction. Espressoft builds AI for BIM analysis and automated building code review.",
  keywords: ["AI", "BIM", "IFC", "Architecture", "Building Code Review", "Construction Tech", "Espressoft"],
  openGraph: {
    title: "Espressoft Inc.",
    description: "AI that understands the field, redefining the standard of construction",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
