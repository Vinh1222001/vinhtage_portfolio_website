'use client'
import React from 'react'

//**************** IMPORT REACT ICON ******************//
import { useGlobalContext } from '@/Context/store';  

const Header = () => {

//   const [language,setLanguage] = useState(languageCodes.English)

    const {language,setLanguage,languageCodes, page, setPage, pageCode,setPageIndex} = useGlobalContext();

  return (
    <header className="flex gap-5 flex w-full h-1/12 items-center justify-baseline px-10">

        <div className="page-list flex">
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