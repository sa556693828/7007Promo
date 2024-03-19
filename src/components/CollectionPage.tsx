import Image from "next/image";
import CollectCard from "./Card/CollectCard";

export default function CollectionPage() {
  const dataArr = [
    { title: "total oao calls", content: "1125" },
    { title: "your OAO Calls", content: "25" },
    { title: "circulating toot", content: "7007" },
    { title: "legendary toot", content: "112" },
  ];
  return (
    <div className="h-full w-full flex flex-col items-center">
      <a className="text-[4vw]">toot</a>
      <div className="flex justify-center gap-12 pt-10">
        {dataArr.map((data) => (
          <div className="flex flex-col items-center justify-end text-center gap-4 w-[20vw]">
            <a className="text-xl">{data.title}</a>
            <div className="buttonDashed w-[15vw] h-[65px] flex justify-center text-lg items-center">
              {data.content}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-start flex-col items-start gap-8 w-5/6 pt-[130px]">
        <a className="text-[2vw]">my collection</a>
        <div className="w-full h-full grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          <CollectCard />
        </div>
      </div>
      <div className="w-full flex justify-center gap-20 py-20">
        <a className="cursor-pointer hover:opacity-80">previous</a>
        <a className="cursor-pointer hover:opacity-80">next</a>
      </div>
    </div>
  );
}
