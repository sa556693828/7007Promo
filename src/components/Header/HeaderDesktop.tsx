import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaXTwitter } from "react-icons/fa6";
import logo from "@/assets/logo.svg";
import Image from "next/image";

interface Props {
  urlPath: string;
  openLink: (link: string) => void;
  headerArr: any;
}

export default function Desktop({ urlPath, openLink, headerArr }: Props) {
  const router = useRouter();
  const [hoverTG, setHoverTG] = useState(false);
  const [hoverX, setHoverX] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 2000);
  }, []);

  return (
    <>
      <div className="z-50 hidden h-[80px] items-center justify-between px-10 lg:flex">
        <Image src={logo} width={36} height={36} alt="TOOT" />
        <div className="flex">
          {headerArr.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center h-full px-6 cursor-pointer text-base"
                onMouseEnter={() => setHoverTG(true)}
                onMouseLeave={() => setHoverTG(false)}
                onClick={() => router.push(item.link)}
              >
                {item.name}
              </div>
            );
          })}
          <FaXTwitter size={24} />
        </div>
      </div>
    </>
  );
}
