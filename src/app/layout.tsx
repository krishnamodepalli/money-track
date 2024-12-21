import type { Metadata } from "next";
import React from "react";

import CategoryContextProvider from "@/contexts/categories/Provider";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "Money Track",
  description: "This is a NextJS built web-application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main className="mx-auto max-w-[1000px]">
          <CategoryContextProvider>{children}</CategoryContextProvider>
        </main>
      </body>
    </html>
  );
}
