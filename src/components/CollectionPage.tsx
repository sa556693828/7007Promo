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
    <div className="flex h-full w-full flex-col items-center pt-12">
      <a className="text-[8vw] lg:text-[4vw]">toot</a>
      <div className="flex justify-center gap-12 pt-10">
        {dataArr.map((data, index) => (
          <div
            className="flex w-[20vw] flex-col items-center justify-end gap-4 text-center"
            key={index}
          >
            <a className="text-xl">{data.title}</a>
            <div className="buttonDashed flex h-[65px] w-[15vw] items-center justify-center text-lg">
              {data.content}
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-5/6 flex-col items-start justify-start gap-8 pt-[130px]">
        <a className="text-[2vw]">my collection</a>
        <div className="grid h-full w-full grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          <CollectCard />
        </div>
      </div>
      <div className="flex w-full justify-center gap-20 py-20">
        <a className="cursor-pointer hover:opacity-80">previous</a>
        <a className="cursor-pointer hover:opacity-80">next</a>
      </div>
    </div>
  );
}
