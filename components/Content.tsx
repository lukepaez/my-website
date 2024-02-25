"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";

const Content = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <body className="dark:bg-stone-900">
      <ThemeProvider enableSystem={false} attribute="class">
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </body>
  );
};

export default Content;
