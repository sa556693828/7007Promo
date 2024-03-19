import React, { useState } from "react";
import Image from "next/image";
import ora from "@/assets/ora.svg";
import { footerArr } from "@/constant";
interface Props {
  urlPath?: string;
}

export default function Desktop({ urlPath }: Props) {
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <div className="hidden w-11/12 items-center justify-between relative py-16 lg:flex text-xl">
      <div className="lineH absolute w-full h-[1px] top-0 left-0" />
      <Image src={ora} width={90} height={90} alt="TOOT" />
      <div className="grid grid-cols-2 gap-8 text-start ">
        {footerArr.map((item: any) => {
          return (
            <div
              key={item.id}
              className="flex justify-start h-full px-6 cursor-pointer hover:opacity-80"
              onClick={item.link ? () => openLink(item.link) : () => {}}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
