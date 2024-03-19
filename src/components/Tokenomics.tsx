import Image from "next/image";
import table from "@/assets/table.svg";
import Table from "./Table";
import { GoPlus } from "react-icons/go";
import { FaEquals } from "react-icons/fa6";

export default function Tokenomics() {
  const title = "tokenomics";
  const info = [
    { Token: "Toot" },
    { "Max Supply": "7007" },
    { "MAX NFT Supply": "7007" },
    { Standard: "ERC-404 (ERC-20 & ERC-721) + ERC-7007" },
    { Network: "Ethereum Mainnet" },
    { "Contract Address": "" },
  ];
  return (
    <div className="flex h-full w-5/6 flex-col items-center justify-center gap-14 pb-[200px]">
      <a className="text-titleM w-full lg:text-title">{title}</a>

      <div className="flex h-fit w-full items-center justify-center gap-12">
        <div className="h-fit space-y-5 text-lg">
          {info.map((item, index) => {
            return (
              <div key={index} className="flex w-full gap-10">
                {Object.keys(item)[0]}: {Object.values(item)[0]}
              </div>
            );
          })}
        </div>
        <div className="circleDashed flex h-[30vw] w-[30vw] items-center justify-center rounded-full text-center text-2xl">
          community owned
        </div>
      </div>
    </div>
  );
}
