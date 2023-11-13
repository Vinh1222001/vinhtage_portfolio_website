'use client'
import React from 'react'

//**************** IMPORT REACT ICON ******************//
import {BiSolidRightArrow} from "react-icons/bi"

import { useGlobalContext } from '@/Context/store';  

const SwitchPageRight = () => {

//   const [language,setLanguage] = useState(languageCodes.English)

const {setPage, pageCode,pageIndex,setPageIndex} = useGlobalContext();

const pageCodeValue =Object.values(pageCode)

// console.log(pageIndex);

  return (
    <div className="switch-page-right w-1/12 h-full flex flex-row items-center justify-center">
    <button 
      className="switch-page-button h-10/12 w-full flex items-center justify-center cursor-pointer hover:bg-background-lighter-1 text-primary switch-page transition"
      onClick={()=>{
        if (pageIndex>=pageCodeValue.length-1) {
            setPageIndex(prev=>0)
            setPage(prev=>pageCodeValue[0])
        } else {
            setPageIndex(prev=>prev+1)
            setPage(prev=>pageCodeValue[pageIndex+1])
        }

      }}
    >
      
      <BiSolidRightArrow className="text-4xl text-background-lighter-2 drop-shadow-2xl"/>
    </button>
  </div>
  )
}

export default SwitchPageRight