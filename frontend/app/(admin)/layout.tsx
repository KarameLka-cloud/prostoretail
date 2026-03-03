import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Prostoretail - панель администрирования",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>Nav admin</nav>
      <main>{children}</main>
      <footer>Footer admin</footer>
    </>
  );
}
