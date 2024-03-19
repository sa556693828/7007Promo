import Image from "next/image";
import ETH from "@/assets/ETH.svg";

export default function TimeRow() {
  const timeArr = [{ days: 13 }, { hrs: 17 }, { mis: 60 }, { secs: 60 }];
  return (
    <div className="flex h-[60px] max-w-lg">
      {timeArr.map((time, index) => {
        return (
          <div key={index} className="flex w-full justify-around">
            <div className="flex flex-col items-center">
              <a className="text-lg lg:text-3xl">{Object.values(time)[0]}</a>
              <a className="text-xs lg:text-base">{Object.keys(time)[0]}</a>
            </div>
            <div
              className={`h-full w-[1px] bg-white ${index !== timeArr.length - 1 ? "" : "invisible"}`}
            />
          </div>
        );
      })}
    </div>
  );
}
