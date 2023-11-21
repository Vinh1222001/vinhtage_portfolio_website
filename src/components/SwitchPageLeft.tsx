import React from 'react'

//**************** IMPORT REACT ICON ******************//
import {BiSolidLeftArrow} from "react-icons/bi"

import { useGlobalContext } from '@/Context/store';  

const SwitchPageLeft = () => {

//   const [language,setLanguage] = useState(languageCodes.English)

    const {setPage, pageCode,pageIndex,setPageIndex} = useGlobalContext();

    const pageCodeValue =Object.values(pageCode)

    // console.log(pageIndex);
    
  return (
    <div className="switch-page-left w-1/12 h-full flex flex-row items-center justify-center">
        <button 
          className="switch-page-button h-10/12 w-full flex items-center justify-center cursor-pointer hover:bg-background-lighter-1 text-primary switch-page transition"
          onClick={()=>{
            if (pageIndex<=0) {
                setPageIndex(prev=>pageCodeValue.length-1)
                setPage(prev=>pageCodeValue[pageCodeValue.length-1])
            } else {
                setPageIndex(prev=>prev-1)
                setPage(prev=>pageCodeValue[pageIndex-1])
            }
            
          }}
        >
          
          <BiSolidLeftArrow className="text-4xl text-background-lighter-2 drop-shadow-2xl"/>
        </button>
    </div>
  )
}

export default SwitchPageLeft