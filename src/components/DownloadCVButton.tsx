import React from 'react'
import { useGlobalContext } from '@/Context/store'

import { PiDownloadFill } from 'react-icons/pi'

const DownloadCVButton = ({style}:{style:string}) => {

    const {language,languageCodes} =useGlobalContext()
  return (
    <button className={`${style} w-full download-cv-btn flex flex-row items-stretch gap-3 text-md font-bold bg-seccondary drop-shadow-5xl`}>
        <a 
        className="flex flex-row items-center justify-center w-full px-5 py-3 gap-3" 
        href={language===languageCodes.Vietnamese?"./CV_ver1.4_attachHyperLink.pdf":"./Vinhtage-CV_ENG.pdf"} 
        download>
        {language===languageCodes.Vietnamese?"Tải CV của tôi":"Download My CV"} <PiDownloadFill className="text-xl"/>
        </a>
    
    </button>
  )
}

export default DownloadCVButton