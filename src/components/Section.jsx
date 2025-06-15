import React from "react";
import SectionContent from "./SectionContent";
import { SiJavascript, SiSap, SiMongodb, SiUnrealengine, SiCss3, SiHtml5, SiNodedotjs, SiVite, SiReact, SiAdobe, SiBlender} from "react-icons/si";

function Section() {

  return (
    <div className="grid grid-cols-6 gap-4">
      <SectionContent colSpan={6}>
        <p className="text-xl">About me</p>
        <p className="font-thin">Passionate Software Developer with a strong background in
          front-end development and graphic design. I have evolved into
          specializing in complex full-stack applications, gaining a
          comprehensive understanding of back-end architecture and
          technology.</p>
      </SectionContent>
      <SectionContent colSpan={3}>
        <p className="text-xl">Javacript</p>
        <SiSap></SiSap>
      </SectionContent>
      <SectionContent colSpan={3}>
        <p className="text-xl">Esempio 2</p>
        <SiNodedotjs></SiNodedotjs>
      </SectionContent>
      <SectionContent colSpan={6}>
        <p className="text-xl">Bio</p>
        <p className="font-thin">Ciao come stai molto bene grazie</p>
      </SectionContent>
      <SectionContent colSpan={6}>
        <p className="text-xl">Bio</p>
        <p className="font-thin">Ciao come stai molto bene grazie</p>
      </SectionContent>
      <SectionContent colSpan={6}>
        <p className="text-xl">Bio</p>
        <p className="font-thin">Ciao come stai molto bene grazie</p>
      </SectionContent>
      <SectionContent colSpan={6}>
        <p className="text-xl">Bio</p>
        <p className="font-thin">Ciao come stai molto bene grazie</p>
      </SectionContent>
    </div>
  )
}

export default Section