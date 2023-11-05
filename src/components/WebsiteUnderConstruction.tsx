'use client'
import React,{useState} from 'react'
import Image from "next/image"

//**************** IMPORT REACT ICON ******************//
import { AiFillInstagram } from "react-icons/ai";

const LANGUAGE_CODE = {
    Vietnamese: "VNI",
    English: "ENG"
  }
  

const WebsiteUnderConstruction = () => {

  const [language,setLanguage] = useState(LANGUAGE_CODE.English)

  return (
    <div className="flex gap-5 flex-col items-center justify-between P-24">

        <div className="top-bar w-full px-10 py-5 flex justify-end">

            <div className="changing-language-toggle flex">

                <button className={`enlish-button font-bold px-3 py-1 rounded-sm ${language===LANGUAGE_CODE.English? "bg-accent":""}`} onClick={()=>setLanguage(LANGUAGE_CODE.English)}>
                    ENG
                </button>
                
                <button className={`enlish-button font-bold px-3 py-1 rounded-sm ${language===LANGUAGE_CODE.Vietnamese? "bg-accent":""}`} onClick={()=>setLanguage(LANGUAGE_CODE.Vietnamese)}>
                    VNI
                </button>
            </div>
        </div>
        
        <div className="main-content flex gap-5 flex-col items-center justify-between">

            <h1 className="text-4xl font-bold tracking-tight text-white-800 sm:text-4xl">
                
                {
                language===LANGUAGE_CODE.Vietnamese?"Cảm ơn bạn đã ghé xem Portfolio của tôi.":"Thank you for taking the time to look at it."
                }
            </h1>
            <Image
                src='/Web_is_building_banner_SVG.svg'
                alt="Web is building"
                width="0"  
                height={0}    
                sizes="100vw"
                style={{ width: '40%', height: 'auto' }}
                loading="lazy"
            />
            <h2 className="text-2xl text-white-500 sm:text-2xl">
                {
                language===LANGUAGE_CODE.Vietnamese?
                "Tuy nhiên, Website vẫn còn đang trong quá trình hoàn thiện.":
                "However, the website is still under construction."
                }
            </h2>
            <p className="flex items-center">
                {
                language===LANGUAGE_CODE.Vietnamese?
                "Thay vào đó, bạn có thể vào":
                "Instead, you can visit"
                }

                <a className="flex gap-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700 px-1 py-1 br-10 rounded-md" href="https://www.instagram.com/vinhtage_0_spices/" target="_blank"><AiFillInstagram className="text-2xl"/> 
                {
                    language===LANGUAGE_CODE.Vietnamese?
                    "Instagram của tôi":
                    "my Instagram"
                }
                
                </a> 
                
                {
                language===LANGUAGE_CODE.Vietnamese?
                "để xem các sản phẩm của tôi.":
                "to view all my products."
                }
            </p>
        </div>

    </div>
  )
}

export default WebsiteUnderConstruction