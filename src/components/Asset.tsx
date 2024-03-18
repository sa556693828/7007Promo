import Image from "next/image";
import logo from "@/assets/logo.svg";

export default function Asset() {
  const title = "protocol asset";
  const detail =
    "A canonical tokenized asset with most social consensus preference of a community protocol or ERC standard.";
  const contentFirst = `Usually, a protocol asset of a protocol is the first instance or implementation of the protocol.`;
  const contentFinal = `People can capture the value of the protocol by holding the protocol asset. Holding toot is capturing the future of AI and NFT on Ethereum.`;
  const content = [
    `ORDI is the protocol asset of Ordinal protocol;`,
    `Pandora is the protocol asset of ERC-404;`,
    `TOOT is the protocol asset of ERC-7007.`,
  ];
  return (
    <div className="h-full w-5/6 flex flex-col items-center gap-14 justify-center pb-[200px]">
      <a className="text-title">{title}</a>
      <a className="whitespace-pre-wrap max-w-3xl text-center text-base">
        {detail}
      </a>
      <div className="flex w-full h-full relative">
        <div className="w-[33%] flex flex-col text-3xl justify-center gap-4 items-center relative">
          <Image src={logo} width={150} height={150} alt="logo" />
          <a className="pt-6">toot</a>
          <a>{`{erc - 7007}`}</a>
          <div className="lineV absolute w-[1px] h-full right-0 top-0" />
        </div>
        <div className="w-[67%] flex flex-col text-lg gap-4 items-center relative py-14 px-10">
          <a>{contentFirst}</a>
          <ul className="flex flex-col gap-4 list-disc pl-4">
            {content.map((item, index) => {
              return (
                <li key={index} className="">
                  {item}
                </li>
              );
            })}
          </ul>

          <a>{contentFinal}</a>
        </div>
        <div className="lineH absolute w-full h-[1px] top-0 left-0" />
        <div className="lineH absolute w-full h-[1px] bottom-0 left-0" />
        <div className="lineV absolute w-[1px] h-full left-0 top-0" />
        <div className="lineV absolute w-[1px] h-full right-0 top-0" />
      </div>
    </div>
  );
}
