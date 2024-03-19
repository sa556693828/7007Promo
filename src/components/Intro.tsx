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
    <div className="flex h-full w-5/6 flex-col items-center justify-center gap-14 pb-[200px]">
      <a className="text-[8vw] lg:text-[4vw]">{title}</a>
      <a className="max-w-3xl whitespace-pre-wrap text-center text-base">
        {detail}
      </a>
      <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-0">
        <Table />
        <div className="relative flex w-2/5 flex-col items-center justify-center gap-10">
          <div className="borderButton flex h-[70px] w-[200px] items-center justify-center">
            erc-404
          </div>
          <GoPlus size={35} />
          <div className="borderButton flex h-[70px] w-[200px] items-center justify-center">
            erc-7007
          </div>
          <FaEquals className="rotate-90" size={25} />
          <div className="borderButton flex h-[70px] w-[200px] items-center justify-center">
            toot
          </div>
        </div>
      </div>
    </div>
  );
}
