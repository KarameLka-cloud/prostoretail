import type { Metadata } from "next";
import React from "react";
import HeaderHome from "./_components/Header/Header";
import NavHome from "./_components/Nav/Nav";
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
      <NavHome />
      <MainHome>{children}</MainHome>
      <FooterHome />
    </>
  );
}
