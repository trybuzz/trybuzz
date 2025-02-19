import type { Metadata } from "next";

import { Roboto_Flex } from "next/font/google";

import "./global.css";

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  fallback: [],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trybuzz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoFlex.className} antialiased`}>{children}</body>
    </html>
  );
}
