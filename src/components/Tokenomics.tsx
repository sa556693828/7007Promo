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

      <div className="w-full justify-center flex">
        <Table />
        <div className="flex flex-col w-2/5 relative items-center justify-center gap-10">
          <div className="borderButton w-[200px] h-[70px] flex justify-center items-center">
            erc-404
          </div>
          <GoPlus size={35} />
          <div className="borderButton w-[200px] h-[70px] flex justify-center items-center">
            erc-7007
          </div>
          <FaEquals className="rotate-90" size={25} />
          <div className="borderButton w-[200px] h-[70px] flex justify-center items-center">
            toot
          </div>
        </div>
      </div>
    </div>
  );
}
