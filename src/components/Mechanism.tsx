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
    <div className="h-full w-5/6 flex flex-col items-center gap-14 justify-center pb-[200px]">
      <div className="flex flex-col w-full">
        <a className="text-title">{title}</a>
        <a className="whitespace-pre-wrap w-full text-base">{detail}</a>
      </div>
      <div className="w-full flex items-center gap-8">
        <Image src={mechanism} alt="mechanism" width={638} height={752} />
        <div className="w-full h-fit p-8 relative">
          <a className="underline">
            AI NFT is (re)generated when trading as ERC-20.
          </a>
          <div className="px-8 pt-8 space-y-4">
            {content.map((item, index) => (
              <div key={index} className="flex gap-4">
                <a>{index === 0 ? `a.` : `b.`}</a>
                <div>
                  <a>{item}</a>
                </div>
              </div>
            ))}
          </div>
          <div className="lineH absolute w-full h-[1px] top-0 left-0" />
          <div className="lineH absolute w-full h-[1px] bottom-0 left-0" />
          <div className="lineV absolute w-[1px] h-full left-0 top-0" />
          <div className="lineV absolute w-[1px] h-full right-0 top-0" />
        </div>
      </div>
    </div>
  );
}
