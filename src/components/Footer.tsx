'use client'
import Link from 'next/link';
import React,{useState} from 'react'

//**************** IMPORT REACT ICON ******************//
import { AiFillInstagram, AiFillFacebook,AiFillYoutube,AiFillLinkedin} from "react-icons/ai";
import {FaGoogleDrive,FaRegCopyright} from "react-icons/fa"

const Footer = () => {

  return (
    <footer className="flex w-full h-1/12 items-center justify-between px-10">
      <div className="social-media flex gap-2">

        <Link href="https://www.instagram.com/vinhtage_0_spices/" target='_blank'>
          <AiFillInstagram className="text-2xl"/> 
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100010865471081" target='_blank'>
          <AiFillFacebook className="text-2xl"/>
        </Link>
        <Link href="https://www.youtube.com/channel/UCJyYbhK8-ZItTtupmtpQJfw" target='_blank'>
          <AiFillYoutube className="text-2xl"/>
        </Link>
        <Link href="https://www.linkedin.com/in/vinh-nguyễn-tuấn-07549029a" target='_blank'>
          <AiFillLinkedin className="text-2xl"/>
        </Link>
        <Link href="https://drive.google.com/drive/folders/14dnzkBAEB0tVMoJzzdY4wvrS_mRW2c3h?usp=sharing" target='_blank'>
          <FaGoogleDrive className="text-2xl"/>
        </Link>
        
      </div>

      <div className="bottom-bar flex justify-center items-end">

              <p className="copyright flex item-end gap-2 font-light text-slate-300 italic">

                  Copyright <FaRegCopyright/> 2023 <b>Nguyen Tuan Vinh</b>          
              </p>
      </div>

    </footer>
  )
}

export default Footer