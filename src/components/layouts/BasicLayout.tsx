import { useRouter } from "next/router";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import bg from "@/assets/Toot.png";
import Image from "next/image";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const isMobile = useBreakpointValue({ base: true, lg: false });
  const urlPath = useRouter().pathname;
  const router = useRouter();

  return (
    <div className="relative">
      <Image
        src={bg.src}
        width={1920}
        height={1080}
        alt="bg"
        className="absolute top-0 -z-10 h-full"
      />
      <Header urlPath={urlPath} />
      <main
        className="max-w-[100vw]"
        style={{
          minHeight: "calc(100vh - 80px)",
        }}
      >
        {children}
      </main>
      <Footer urlPath={urlPath} />
    </div>
  );
}
