import { GoDotFill } from "react-icons/go";
import { TbCircleDotted } from "react-icons/tb";

function TableRow({ label, other, our }: any) {
  return (
    <div className="flex w-full h-24 relative">
      <div className="relative p-6 w-[40%] flex items-center">
        <a>{label}</a>
        <div className="lineV absolute w-[1px] h-full right-0 top-0" />
      </div>
      <div className="relative p-6 w-[30%] flex justify-center items-center">
        {other ? <GoDotFill size={35} /> : <TbCircleDotted size={25} />}
        <div className="lineV absolute w-[1px] h-full right-0 top-0" />
      </div>
      <div className="relative p-6 w-[30%] flex justify-center items-center">
        {our ? <GoDotFill size={35} /> : <TbCircleDotted size={25} />}
      </div>
      <div className="lineH absolute h-[1px] w-full bottom-0 left-0" />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="flex w-full h-24 relative">
      <div className="relative p-6 w-[40%]">
        <a>FEATURE / COMPATIBILITY</a>
        <div className="lineV absolute w-[1px] h-full right-0 top-0" />
      </div>
      <div className="relative p-6 w-[30%] flex justify-center items-center">
        <a>erc-404</a>
        <div className="lineV absolute w-[1px] h-full right-0 top-0" />
      </div>
      <div className="relative p-6 w-[30%] flex justify-center items-center">
        <a>erc-7007</a>
      </div>
      <div className="lineH absolute h-[1px] w-full bottom-0 left-0" />
    </div>
  );
}

export default function Table() {
  return (
    <div className="flex w-3/5 relative flex-col text-sm">
      <TableHeader />
      <TableRow label="FRACTIONALIZATION" other={true} our={false} />
      <TableRow label="NFT PROTOCOL INTEROPERABILITY" other={true} our={true} />
      <TableRow label="NATIVE LIQUIDITY" other={true} our={false} />
      <TableRow label="Verifiable AI model" other={false} our={true} />
      <TableRow label="ai nft standard" other={false} our={true} />
      <div className="lineH absolute w-full h-[1px] top-0 left-0" />
      <div className="lineH absolute w-full h-[1px] bottom-0 left-0" />
      <div className="lineV absolute w-[1px] h-full left-0 top-0" />
      <div className="lineV absolute w-[1px] h-full right-0 top-0" />
    </div>
  );
}
