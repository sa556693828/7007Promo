import Image from "next/image";
import mechanism from "@/assets/mechanismTable.svg";
import Table from "./Table";
import { GoPlus } from "react-icons/go";
import { FaEquals } from "react-icons/fa6";

export default function Mechanism() {
  const title = "mechanism";
  const detail = "on chain inferences for each transfer";
  const contentFirst = `Usually, a protocol asset of a protocol is the first instance or implementation of the protocol.`;
  const contentFinal = `People can capture the value of the protocol by holding the protocol asset. Holding toot is capturing the future of AI and NFT on Ethereum.`;
  const content = [
    `ORDI is the protocol asset of Ordinal protocol;`,
    `Pandora is the protocol asset of ERC-404;`,
    `TOOT is the protocol asset of ERC-7007.`,
  ];
  return (
    <div className="h-full w-5/6 flex flex-col items-center gap-14 justify-center pb-[200px]">
      <div className="flex flex-col w-full">
        <a className="text-title">{title}</a>
        <a className="whitespace-pre-wrap w-full text-base">{detail}</a>
      </div>
      <Image src={mechanism} alt="mechanism" />
    </div>
  );
}
