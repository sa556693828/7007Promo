import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const isMobile = useBreakpointValue({ base: true, lg: false });
  const urlPath = useRouter().pathname;
  const router = useRouter();

  return (
    <>
      <Header urlPath={urlPath} />
      <main
        className="max-w-[100vw]"
        style={{
          minHeight: "calc(100vh - 80px)",
        }}
      >
        {children}
      </main>
      {/* <Footer urlPath={urlPath} /> */}
    </>
  );
}
