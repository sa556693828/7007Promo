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
    <div className="flex h-full w-5/6 flex-col items-center justify-center gap-14 pb-[200px]">
      <a className="text-titleM lg:text-title">{title}</a>
      <a className="max-w-3xl whitespace-pre-wrap text-center text-base">
        {detail}
      </a>
      <div className="relative flex h-full w-full">
        <div className="relative flex w-[33%] flex-col items-center justify-center gap-4 text-3xl">
          <Image src={logo} width={150} height={150} alt="logo" />
          <a className="pt-6">toot</a>
          <a>{`{erc - 7007}`}</a>
          <div className="lineV absolute right-0 top-0 h-full w-[1px]" />
        </div>
        <div className="relative flex w-[67%] flex-col items-center gap-4 px-10 py-14 text-lg">
          <a>{contentFirst}</a>
          <ul className="flex list-disc flex-col gap-4 pl-4">
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
        <div className="lineH absolute left-0 top-0 h-[1px] w-full" />
        <div className="lineH absolute bottom-0 left-0 h-[1px] w-full" />
        <div className="lineV absolute left-0 top-0 h-full w-[1px]" />
        <div className="lineV absolute right-0 top-0 h-full w-[1px]" />
      </div>
    </div>
  );
}
