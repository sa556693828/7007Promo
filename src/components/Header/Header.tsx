import React, { useContext } from "react";
import Desktop from "./HeaderDesktop";
import Mobile from "./HeaderMobile";
import { headerArr } from "@/constant";

interface Props {
  urlPath: string;
}

export default function Header({ urlPath }: Props) {
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <header className="z-50 h-full w-full overflow-hidden transition-all">
      <Desktop urlPath={urlPath} openLink={openLink} headerArr={headerArr} />
      <Mobile urlPath={urlPath} openLink={openLink} />
    </header>
  );
}
