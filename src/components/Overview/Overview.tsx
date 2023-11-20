import React from 'react'
import Image from 'next/image'

import {PiArrowFatRightFill,PiDownloadFill} from "react-icons/pi"
import {AiFillMail,AiFillPhone } from "react-icons/ai";

import { useGlobalContext } from '@/Context/store'
import DownloadCVButton from '../DownloadCVButton';
const Overview = () => {
  const {language,languageCodes,setPage,pageCode,setPageIndex} =useGlobalContext();
  const handleEmailClick = () => {
    const mailtoLink = `mailto:nguyentuanvinh1222@gmail.com`;
    window.open(mailtoLink, '_blank');
  };
  return (
    <div id='overview-page' className='w-full flex flex-row flex-wrap lg:px-10 h-full overflow-y-auto'>
      <div id='overview-page-container' className='w-full flex flex-row flex-wrap md:items-center'>
        <div className="avatar-photo w-full sm:w-2/5 flex flex-row sm:flex-col items-center sm:items-start md:items-start justify-center md:justify-center gap-1">
          
          <Image
            className='rounded-full w-5/12 sm:w-11/12'
            src='/avatar.jpg'
            alt="Web is building"
            width="0"  
            height={0}    
            sizes="100vw"
            placeholder='blur'
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgAB..."
            // style={{ width: '90%', height: 'auto' }}
            // loading="lazy"
            priority={true}
          />
          <div className="bottom-button w-full flex md:hidden items-end justify-center sm:justify-start gap-2 flex-wrap">
            <div className="basis-68 xl:basis-72">

              <DownloadCVButton style='text-sm sm:text-lg xl:text-2xl'/>
            </div>
            
            <button className="basis-52 view-products flex flex-row items-center gap-1 text-sm sm:text-lg xl:text-xl text-primary hover:text-accent justify-center"
              onClick={()=>{
                setPage(prev=>pageCode.Projects)
                setPageIndex(prev=>3)
              }}
            >
              <p className='border-b-2 border-primary'>Go to view Projects</p>
              <PiArrowFatRightFill/>
            </button>
          </div>


        </div>
        <div className="paragrahp w-full sm:w-3/5 flex flex-col justify-center gap-5 xl:gap-10">
          <h1 className="hightlight text-5xl xl:text-7xl font-bold">
            Hi! I am Vinh.
          </h1>
          <span className="introdution xl:text-xl lg:text-lg text-md tracking-normal flex flex-col gap1 xl:gap-3">
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
          <div className="w-full bottom-button hidden md:flex items-end gap-5 flex-wrap">
            <div className="basis-70 xl:basis-72">

              <DownloadCVButton style='xl xl:text-2xl'/>
            </div>
            
            <button className="basis-52 view-products flex flex-row items-center gap-1 text-lg xl:text-xl text-primary hover:text-accent"
              onClick={()=>{
                setPage(prev=>pageCode.Projects)
                setPageIndex(prev=>3)
              }}
            >
              <p className='border-b-2 border-primary'>Go to view Projects</p>
              <PiArrowFatRightFill/>
            </button>
          </div>
          <span className="contact flex flex-col gap-2 text-sm sm:text-lg xl:text-xl font-normal">
            <span className='hidden xl:block'>
              <p>Contact me:</p>
            </span>
            <div className="w-full contact flex flex-col sm:gap-2 md:text-md lg:text-xl font-normal">

              <div className="email flex gap-2 items-center">
                <AiFillMail/>
                nguyentuanvinh1222@gmail.com
              </div>
              <div className="phone flex gap-2 items-center">
                <AiFillPhone/>
                0793191854
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Overview