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
  title: "에스프레소프트 | 건축 산업의 AI 혁신",
  description: "현장을 이해하는 AI, 건축 산업의 기준을 다시 정의합니다. 건축도면 법규 검토 자동화 기술을 개발하는 에스프레소프트입니다.",
  keywords: ["AI", "건축", "도면검토", "법규검토", "건설기술", "에스프레소프트"],
  openGraph: {
    title: "에스프레소프트 주식회사",
    description: "현장을 이해하는 AI, 건축 산업의 기준을 다시 정의합니다",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
