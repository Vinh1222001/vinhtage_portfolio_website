// import Image from "next/image"
import WebsiteUnderConstruction from "@/components/WebsiteUnderConstruction";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const SectionRendering = dynamic(()=>import('@/components/SectionRendering'),{ssr:false})

// import { redirect } from "next/navigation";

export default function Home() {
  //redirect("https://drive.google.com/drive/folders/14dnzkBAEB0tVMoJzzdY4wvrS_mRW2c3h?usp=sharing")
  return (
    <Suspense fallback={<WebsiteUnderConstruction/>}>
      <SectionRendering/>
    </Suspense>
  )
}
