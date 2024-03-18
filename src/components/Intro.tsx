import Image from "next/image";
import table from "@/assets/table.svg";
import Table from "./Table";
import { GoPlus } from "react-icons/go";
import { FaEquals } from "react-icons/fa6";

export default function Intro() {
  const title = "toot: Onchain AI ERC-404";
  const detail =
    "toot is an experimental mixed ERC404 / erc7007 implementation with opML utilization.";
  const contentFirst = `Usually, a protocol asset of a protocol is the first instance or implementation of the protocol.`;
  const contentFinal = `People can capture the value of the protocol by holding the protocol asset. Holding toot is capturing the future of AI and NFT on Ethereum.`;
  const content = [
    `ORDI is the protocol asset of Ordinal protocol;`,
    `Pandora is the protocol asset of ERC-404;`,
    `TOOT is the protocol asset of ERC-7007.`,
  ];
  return (
    <div className="h-full w-5/6 flex flex-col items-center gap-14 justify-center pb-[200px]">
      <a className="text-[4vw]">{title}</a>
      <a className="whitespace-pre-wrap max-w-3xl text-center text-base">
        {detail}
      </a>
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
