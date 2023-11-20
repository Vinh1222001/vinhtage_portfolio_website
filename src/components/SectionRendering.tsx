'use client'
import React, { Suspense } from 'react'

//**************** IMPORT REACT ICON ******************//
import { useGlobalContext } from '@/Context/store';  
import Overview from './Overview/Overview';
import WebsiteUnderConstruction from './WebsiteUnderConstruction';
import Profile from './Profile/Profile';
import Skills from './Skills';
import Projects from './Projects';
import OverviewLoading from './Overview/OverviewLoading';
import ProfileLoading from './Profile/ProfileLoading';

const SectionRendering = () => {

//   const [language,setLanguage] = useState(languageCodes.English)

  const {page,pageCode} = useGlobalContext();
  switch (page) {
    case pageCode.Overview:
      return (
        <Suspense fallback={<OverviewLoading/>}>
          <Overview/>
        </Suspense>
      )
    case pageCode.Profile:
      return (
        <Suspense fallback={<ProfileLoading/>}>
          <Profile/>
        </Suspense>
      )
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