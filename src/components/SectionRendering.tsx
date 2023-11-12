'use client'
import React from 'react'

//**************** IMPORT REACT ICON ******************//
import { useGlobalContext } from '@/Context/store';  
import Overview from './Overview';
import WebsiteUnderConstruction from './WebsiteUnderConstruction';
import Profile from './Profile';
import Skills from './Skills';
import Projects from './Projects';

const SectionRendering = () => {

//   const [language,setLanguage] = useState(languageCodes.English)

    const {page,pageCode} = useGlobalContext();

  switch (page) {
    case pageCode.Overview:
      return <Overview/>  
    case pageCode.Profile:
      return <Profile/>
    case pageCode.Skills:
      return <Skills/>
    case pageCode.Projects:
      return <Projects/>
  
    default:
      return (
        <WebsiteUnderConstruction/>
      )
  }
}

export default SectionRendering