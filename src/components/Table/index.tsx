import { GoDotFill } from "react-icons/go";
import { TbCircleDotted } from "react-icons/tb";

function TableRow({ label, other, our }: any) {
  return (
    <div className="relative flex h-24 w-full">
      <div className="relative flex w-[40%] items-center p-3 lg:p-6">
        <a>{label}</a>
        <div className="lineV absolute right-0 top-0 h-full w-[1px]" />
      </div>
      <div className="relative flex w-[30%] items-center justify-center p-6">
        {other ? <GoDotFill size={35} /> : <TbCircleDotted size={25} />}
        <div className="lineV absolute right-0 top-0 h-full w-[1px]" />
      </div>
      <div className="relative flex w-[30%] items-center justify-center p-6">
        {our ? <GoDotFill size={35} /> : <TbCircleDotted size={25} />}
      </div>
      <div className="lineH absolute bottom-0 left-0 h-[1px] w-full" />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="relative flex h-24 w-full">
      <div className="relative flex w-[40%] items-center justify-center text-center">
        <a>FEATURE / COMPATIBILITY</a>
        <div className="lineV absolute right-0 top-0 h-full w-[1px]" />
      </div>
      <div className="relative flex w-[30%] items-center justify-center p-2 text-center lg:p-6">
        <a>erc-404</a>
        <div className="lineV absolute right-0 top-0 h-full w-[1px]" />
      </div>
      <div className="relative flex w-[30%] items-center justify-center p-2 text-center lg:p-6">
        <a>erc-7007</a>
      </div>
      <div className="lineH absolute bottom-0 left-0 h-[1px] w-full" />
    </div>
  );
}

export default function Table() {
  return (
    <div className="relative flex w-full flex-col text-xs lg:w-3/5 lg:text-sm">
      <TableHeader />
      <TableRow label={`FRACTIONA\nLIZATION`} other={true} our={false} />
      <TableRow
        label={`NFT PROTOCOL INTEROPERA\nBILITY`}
        other={true}
        our={true}
      />
      <TableRow label="NATIVE LIQUIDITY" other={true} our={false} />
      <TableRow label="Verifiable AI model" other={false} our={true} />
      <TableRow label="ai nft standard" other={false} our={true} />
      <div className="lineH absolute left-0 top-0 h-[1px] w-full" />
      <div className="lineH absolute bottom-0 left-0 h-[1px] w-full" />
      <div className="lineV absolute left-0 top-0 h-full w-[1px]" />
      <div className="lineV absolute right-0 top-0 h-full w-[1px]" />
    </div>
  );
}
