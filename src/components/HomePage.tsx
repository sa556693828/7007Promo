import Image from "next/image";
import ETH from "@/assets/ETH.svg";

export default function HomePage() {
  return (
    <div className="h-fullPage w-full flex justify-center gap-[100px] px-12">
      <div className="flex flex-col justify-center gap-4">
        <a className="text-title">toot</a>
        <a className="text-xl">ERC7007 is the AI NFT standard for Ethereum</a>
        <div className="h-[60px]">timeRow</div>
        <button className="border rounded-full w-[200px] h-[58px]">
          claim
        </button>
      </div>
      <Image src={ETH} width={200} height={340} alt="ethereum" />
    </div>
  );
}
