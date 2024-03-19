import Asset from "@/components/Asset";
import HomePage from "@/components/HomePage";
import Intro from "@/components/Intro";
import Mechanism from "@/components/Mechanism";
import Roadmap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center">
      <HomePage />
      <Asset />
      <Intro />
      <Roadmap />
      <Mechanism />
      <Tokenomics />
    </div>
  );
}
