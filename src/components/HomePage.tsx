import Image from "next/image";
import ETH from "@/assets/ETH.svg";
import TimeRow from "./TimeRow/TimeRow";

export default function HomePage() {
  return (
    <div className="flex h-fullPage w-full flex-col justify-center gap-[100px] px-12 lg:flex-row">
      <div className="flex flex-col justify-center gap-4">
        <a className="text-titleM lg:text-title">toot</a>
        <a className="text-md lg:text-xl">
          ERC7007 is the AI NFT standard for Ethereum
        </a>
        <TimeRow />
        <button className="h-[58px] w-[200px] rounded-full border">
          claim
        </button>
      </div>
      <Image src={ETH} width={200} height={340} alt="ethereum" />
    </div>
  );
}
