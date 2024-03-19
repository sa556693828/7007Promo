import Image from "next/image";
import mechanism from "@/assets/mechanismTable.svg";
import Table from "./Table";
import { GoPlus } from "react-icons/go";
import { FaEquals } from "react-icons/fa6";

export default function Mechanism() {
  const title = "mechanism";
  const detail = "on chain inferences for each transfer";
  const content = [
    `If holding of TOOT unchanged, AI NFT will be regenerated at the same tier.`,
    `If holding of TOOT changed, AI NFT will be upgraded or downgraded, then regenerated.`,
  ];
  return (
    <div className="flex h-full w-5/6 flex-col items-center justify-center gap-14 pb-[200px]">
      <div className="flex w-full flex-col">
        <a className="text-titleM lg:text-title">{title}</a>
        <a className="w-full whitespace-pre-wrap text-xs lg:text-base">
          {detail}
        </a>
      </div>
      <div className="flex w-full flex-col items-center gap-8 lg:flex-row">
        <Image
          src={mechanism}
          alt="mechanism"
          width={638}
          height={752}
          className="w-full lg:w-1/2"
        />
        <div className="relative h-fit w-full p-8 lg:w-1/2">
          <a className="underline">
            AI NFT is (re)generated when trading as ERC-20.
          </a>
          <div className="space-y-4 px-8 pt-8">
            {content.map((item, index) => (
              <div key={index} className="flex gap-4">
                <a>{index === 0 ? `a.` : `b.`}</a>
                <div>
                  <a>{item}</a>
                </div>
              </div>
            ))}
          </div>
          <div className="lineH absolute left-0 top-0 h-[1px] w-full" />
          <div className="lineH absolute bottom-0 left-0 h-[1px] w-full" />
          <div className="lineV absolute left-0 top-0 h-full w-[1px]" />
          <div className="lineV absolute right-0 top-0 h-full w-[1px]" />
        </div>
      </div>
    </div>
  );
}
