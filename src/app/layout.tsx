import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "알지티 과제전형",
  description: "next 이용",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
