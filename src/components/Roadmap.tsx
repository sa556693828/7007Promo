import Image from "next/image";
import table from "@/assets/table.svg";
import Table from "./Table";
import { GoPlus } from "react-icons/go";
import { FaEquals } from "react-icons/fa6";
import Circle from "./Circle";

export default function Roadmap() {
  const title = "roadmap";

  return (
    <div className="h-full w-5/6 flex flex-col items-center gap-14 justify-center pb-[200px]">
      <a className="text-title w-full">{title}</a>
      <div className="w-full flex gap-8 h-full items-center justify-between">
        <Circle title="1" detail="Genesis of toot" size={32} bottom="32" />
        <Circle title="2" detail="Toot contest" size={44} bottom="24" />
        <Circle
          title="3"
          detail="MIDAS 721 migration"
          size={56}
          bottom="[72px]"
        />
        <Circle
          title="7007"
          detail="toot ecosystem"
          size={64}
          bottom="[57px]"
        />
      </div>
    </div>
  );
}
