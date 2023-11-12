// import Image from "next/image"
import React from "react";

// import { redirect } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// import { AiFillInstagram } from "react-icons/ai";
import SwitchPageLeft from "@/components/SwitchPageLeft";
import SwitchPageRight from "@/components/SwitchPageRight";
import SectionRendering from "@/components/SectionRendering";

export default function Home() {
  //redirect("https://drive.google.com/drive/folders/14dnzkBAEB0tVMoJzzdY4wvrS_mRW2c3h?usp=sharing")
  return (
    <div className="flex flex-wrap min-h-screen h-full w-full justify-center text-white">
      <SwitchPageLeft/>
      <div className="main-wrapper w-10/12 h-full relative h-full flex flex-col items-stretch">

        <Header/>
        <div className="w-full h-10/12 flex items-center justify-center">
          <SectionRendering/>
        </div>
        <Footer/>
      </div>
      <SwitchPageRight/>
    </div>
  )
}
