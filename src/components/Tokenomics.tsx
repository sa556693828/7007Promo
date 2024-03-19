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
    <div className="h-full w-5/6 flex flex-col items-center gap-14 justify-center pb-[200px]">
      <a className="text-title w-full">{title}</a>

      <div className="w-full justify-center h-fit flex gap-12 items-center">
        <div className="h-fit space-y-5 text-lg">
          {info.map((item, index) => {
            return (
              <div key={index} className="flex w-full gap-10">
                {Object.keys(item)[0]}: {Object.values(item)[0]}
              </div>
            );
          })}
        </div>
        <div className="circleDashed w-[30vw] h-[30vw] text-2xl rounded-full flex justify-center items-center">
          community owned
        </div>
      </div>
    </div>
  );
}
