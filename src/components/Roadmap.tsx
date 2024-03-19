import Image from "next/image";
import table from "@/assets/table.svg";
import Table from "./Table";
import { GoPlus } from "react-icons/go";
import { FaEquals } from "react-icons/fa6";
import Circle from "./Circle/Circle";
import CircleMobile from "./Circle/CircleM";

export default function Roadmap() {
  const title = "roadmap";

  return (
    <div className="flex h-full w-5/6 flex-col items-start justify-center gap-14 pb-[200px] lg:items-center">
      <a className="text-titleM w-full lg:text-title">{title}</a>
      <div className="hidden h-full w-full items-center justify-between gap-8 lg:flex">
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
      <div className="flex h-full w-full items-center justify-between gap-8 lg:hidden">
        <div className="flex w-full flex-col items-center gap-6">
          <CircleMobile
            title="1"
            detail="Genesis of toot"
            size={32}
            right="32"
          />
          <CircleMobile title="2" detail="Toot contest" size={44} right="24" />
          <CircleMobile
            title="3"
            detail="MIDAS 721 migration"
            size={56}
            right="[72px]"
          />
          <CircleMobile
            title="7007"
            detail="toot ecosystem"
            size={64}
            right="[57px]"
          />
        </div>
      </div>
    </div>
  );
}
