// import Image from "next/image"
import React from "react";

import WebsiteUnderConstruction from "@/components/WebsiteUnderConstruction";
import { redirect } from "next/navigation";
// import { AiFillInstagram } from "react-icons/ai";

export default function Home() {
  redirect("https://drive.google.com/drive/folders/14dnzkBAEB0tVMoJzzdY4wvrS_mRW2c3h?usp=sharing")
  return (
    <main className="flex min-h-screen flex-col justify-between text-white">
      <WebsiteUnderConstruction/>
    </main>
  )
}
