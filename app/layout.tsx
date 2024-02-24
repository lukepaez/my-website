import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Content from "@/components/Content";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luke | Personal Portfolio",
  description: "My website",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋🏼</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-stone-900">
        <Content>{children}</Content>
      </body>
    </html>
  );
}
