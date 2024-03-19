import Image from "next/image";

export default function CollectCard() {
  return (
    <div className="collectCard w-full flex flex-col h-full justify-between items-center min-h-[20vw] p-4 gap-2">
      <div className="w-full justify-end flex">
        <a>{"Legendary"}</a>
      </div>
      <div className="collectCard h-52 w-52 object-contain flex justify-center items-center my-2">
        NFT image
      </div>
      <div className="flex flex-col items-center gap-2 my-2">
        <a>{"NFT ID"}</a>
        <button className="border rounded-lg py-2 w-[200px] h-[50px] ">
          claim
        </button>
      </div>
    </div>
  );
}
