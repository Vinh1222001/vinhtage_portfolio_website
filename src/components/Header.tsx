'use client'
import React,{useState,useRef, useEffect} from 'react'

//**************** IMPORT REACT ICON ******************//
import { useGlobalContext } from '@/Context/store';  

import {ImMenu} from 'react-icons/im'

const Header = () => {

//   const [language,setLanguage] = useState(languageCodes.English)

    const {language,setLanguage,languageCodes, page, setPage, pageCode,setPageIndex} = useGlobalContext();

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
    <header className="flex gap-5 flex w-10/12 h-1/12 items-center justify-baseline">
        
        <div ref={popupRef} className="hamberger-menu sm:hidden">
            
            <button onClick={()=>setMenuToggle(!menuToggle)}>
                <ImMenu className="text-3xl"/>
            </button>
            <div                 
                className="overflow-hidden page-list flex flex-col bg-accent-lighter-3 text-background absolute z-1000 py-2 gap-3 rounded-b-lg rounded-tr-lg drop-shadow-2xl"
                style={menuToggle?{
                    
                    opacity:"1",
                    transform:"translateY(0)",
                    transition:"all 0.4s ease",
                }:{
                    transform:"translateY(-200%)",
                    opacity:"0",
                    transition:"all 0.4s ease",
                }}
            >
                <div className={`${page===pageCode.Overview?"page-active-toggle":""} page-toggle w-fit px-10 px-5 cursor-pointer`} 
                    onClick={()=>{
                        setPageIndex(prev=>0)
                        setPage(pageCode.Overview)
                    }}>
                    <p className="page-name text-lg text-background-lighter-3">
                        Overview
                    </p>
                </div>
                <div className={`${page===pageCode.Profile?"page-active-toggle":""} page-toggle w-fit px-10 px-5 cursor-pointer`} 
                    onClick={()=>{
                        setPageIndex(prev=>1)
                        setPage(pageCode.Profile)
                    }}>
                    <p className="page-name text-lg text-background-lighter-3">
                        Profile
                    </p>
                </div>
                <div className={`${page===pageCode.Skills?"page-active-toggle":""} page-toggle w-fit px-10 px-5 cursor-pointer`} 
                    onClick={()=>{
                        setPageIndex(prev=>2)
                        setPage(pageCode.Skills)
                    }}>
                    <p className="page-name text-lg text-background-lighter-3">
                        Skills
                    </p>
                </div>
                <div className={`${page===pageCode.Projects?"page-active-toggle":""} page-toggle w-fit px-10 px-5 cursor-pointer`} 
                    onClick={()=>{
                        setPageIndex(prev=>3)
                        setPage(pageCode.Projects)
                    }}>
                    <p className="page-name text-lg text-background-lighter-3">
                        Projects
                    </p>
                </div>
            </div>
        </div>

        <div className="page-list hidden sm:flex ">
            <div className={`${page===pageCode.Overview?"page-active":""} page w-fit px-10 px-5 cursor-pointer`} 
                onClick={()=>{
                    setPageIndex(prev=>0)
                    setPage(pageCode.Overview)
                }}>
                <p className="page-name text-lg text-background-lighter-3">
                    Overview
                </p>
            </div>
            <div className={`${page===pageCode.Profile?"page-active":""} page w-fit px-10 px-5 cursor-pointer`} 
                onClick={()=>{
                    setPageIndex(prev=>1)
                    setPage(pageCode.Profile)
                }}>
                <p className="page-name text-lg text-background-lighter-3">
                    Profile
                </p>
            </div>
            <div className={`${page===pageCode.Skills?"page-active":""} page w-fit px-10 px-5 cursor-pointer`} 
                onClick={()=>{
                    setPageIndex(prev=>2)
                    setPage(pageCode.Skills)
                }}>
                <p className="page-name text-lg text-background-lighter-3">
                    Skills
                </p>
            </div>
            <div className={`${page===pageCode.Projects?"page-active":""} page w-fit px-10 px-5 cursor-pointer`} 
                onClick={()=>{
                    setPageIndex(prev=>3)
                    setPage(pageCode.Projects)
                }}>
                <p className="page-name text-lg text-background-lighter-3">
                    Projects
                </p>
            </div>
        </div>

        <div className="top-bar w-full flex justify-end">

            <div className="changing-language-toggle flex">

                <button className={`enlish-button font-bold px-3 py-1 rounded-sm ${language===languageCodes.English? "bg-primary":""}`} onClick={()=>setLanguage(languageCodes.English)}>
                    ENG
                </button>
                
                <button className={`enlish-button font-bold px-3 py-1 rounded-sm ${language===languageCodes.Vietnamese? "bg-primary":""}`} onClick={()=>setLanguage(languageCodes.Vietnamese)}>
                    VNI
                </button>
            </div>
        </div>

    </header>
  )
}

export default Header