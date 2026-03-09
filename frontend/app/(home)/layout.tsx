import type { Metadata } from "next";
import React from "react";
import HeaderHome from "./_components/Header/Header";
import FooterHome from "./_components/Footer/Footer";
import MainHome from "./_components/Main/Main";

export const metadata: Metadata = {
  title: "Prostoretail - магазин электроники",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderHome />
      <MainHome>{children}</MainHome>
      <FooterHome />
    </>
  );
}
