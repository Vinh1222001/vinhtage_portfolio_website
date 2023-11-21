import Link from 'next/link';
import React,{useState,useRef,useEffect} from 'react'

//**************** IMPORT REACT ICON ******************//
import { AiFillInstagram, AiFillFacebook,AiFillYoutube,AiFillLinkedin} from "react-icons/ai";
import {FaGoogleDrive,FaRegCopyright} from "react-icons/fa"
import {IoShareSocialSharp} from "react-icons/io5"

const Footer = () => {
  const [menuToggle,setMenuToggle] =useState(false)
  const popupRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
          setMenuToggle(false);
        }
      };
  
      if (menuToggle) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [menuToggle]);
  return (
    <footer className="flex w-full h-1/12 items-center justify-between lg:px-10 relative">

      <div ref={popupRef} className="social-media-toggle fixed bottom-10 right-7 sm:hidden">
        <button 
          className='absolute bottom-0 right-0 p-3 text-2xl bg-accent-lighter-3 rounded-full text-seccondary z-50 shadow-5xl'
          onClick={()=>setMenuToggle(!menuToggle)}
        >
          <IoShareSocialSharp/>
        </button>
        <button className='absolute bottom-0 right-0 p-3 text-2xl bg-accent-lighter-3 rounded-full text-seccondary animate-ping'>
          <IoShareSocialSharp/>
        </button>

        <div 
          
          className="overflow-hidden social-media-list flex flex-col items-center pt-3 gap-2 sm:hidden absolute right-0 bottom-0 w-12 rounded-full bg-accent-lighter-1 z-40"
          style={
            menuToggle?{
              opacity:"1",
              height:"14rem",
              transition:"all 0.4s ease",
            }:{
              opacity:"0",
              height:"3rem",
              transition:"all 0.3s ease",
            }
          }
        >

          <Link href="https://www.instagram.com/vinhtage_0_spices/" target='_blank'>
            <AiFillInstagram className="text-2xl text-primary"/> 
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100010865471081" target='_blank'>
            <AiFillFacebook className="text-2xl text-primary"/>
          </Link>
          <Link href="https://www.youtube.com/channel/UCJyYbhK8-ZItTtupmtpQJfw" target='_blank'>
            <AiFillYoutube className="text-2xl text-primary"/>
          </Link>
          <Link href="https://www.linkedin.com/in/vinh-nguyễn-tuấn-07549029a" target='_blank'>
            <AiFillLinkedin className="text-2xl text-primary"/>
          </Link>
          <Link href="https://drive.google.com/drive/folders/14dnzkBAEB0tVMoJzzdY4wvrS_mRW2c3h?usp=sharing" target='_blank'>
            <FaGoogleDrive className="text-2xl text-primary"/>
          </Link>

        </div>

      </div>

      <div className="social-media sm:flex gap-2 hidden">

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