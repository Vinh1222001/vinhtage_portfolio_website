import React from 'react'
import Image from 'next/image'

import {PiArrowFatRightFill,PiDownloadFill} from "react-icons/pi"
import {AiFillMail,AiFillPhone } from "react-icons/ai";

import { useGlobalContext } from '@/Context/store'
import DownloadCVButton from './DownloadCVButton';
const Overview = () => {
  const {language,languageCodes,setPage,pageCode,setPageIndex} =useGlobalContext();
  return (
    <div id='overview-page' className='w-full flex flex-row px-10'>
      <div className="paragrahp w-3/5 flex flex-col justify-center gap-10">
        <h1 className="hightlight text-8xl font-bold">
          Hi! I am Vinh.
        </h1>
        <span className="introdution text-2xl tracking-normal flex flex-col gap-3">
          <p className="expected-position">
          I am a <b className='text-seccondary'>Web designer</b>, <b className='text-seccondary'>Character designer</b> and <b className='text-seccondary'>Game artist</b>. 
          </p>
          <p className="experiment">
          I have <b className='text-seccondary'>One year of experience</b> in designing websites, animated characters and game environments.
          </p>
          <p className="project-types">
          I am capable of doing both <b className='text-seccondary'>2d and 3d projects</b>.
          </p>
        </span>
        <span className="bottom-button flex items-end gap-5">
          <div className="w-2/4">

            <DownloadCVButton style='text-2xl'/>
          </div>
          
          <button className="view-products flex flex-row items-center gap-1 text-2xl text-primary border-b-2 border-primary"
            onClick={()=>{
              setPage(prev=>pageCode.Projects)
              setPageIndex(prev=>3)
            }}
          >
            Go to view Projects
            <PiArrowFatRightFill/>
          </button>
        </span>
        <span className="contact flex flex-col gap-2 text-xl font-normal">

          <div className="email flex gap-2 items-center">
            <AiFillMail/>
            nguyentuanvinh1222@gmail.com
          </div>
          <div className="phone flex gap-2 items-center">
            <AiFillPhone/>
            0793191854
          </div>
        </span>
      </div>
      <div className="avatar-photo w-2/5 flex items-center justify-end">
        <Image
          className='rounded-full'
          src='/avatar.jpg'
          alt="Web is building"
          width="0"  
          height={0}    
          sizes="100vw"
          style={{ width: '90%', height: 'auto' }}
          // loading="lazy"
          priority={true}
        />
      </div>
    </div>
  )
}

export default Overview