'use client'
import React, { Suspense } from 'react'

//**************** IMPORT REACT ICON ******************//
import { useGlobalContext } from '@/Context/store';  
import Overview from './Overview/Overview';
import WebsiteUnderConstruction from './WebsiteUnderConstruction';
import Profile from './Profile/Profile';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import OverviewLoading from './Overview/OverviewLoading';
import ProfileLoading from './Profile/ProfileLoading';
import SkillsLoading from './Skills/SkillLoading';
import ProjectsLoading from './Projects/ProjectLoading';

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
      return (
        <Suspense fallback={<SkillsLoading/>}>
          <Skills/>
        </Suspense>
      )
    case pageCode.Projects:
      return(
        <Suspense fallback={<ProfileLoading/>}>

          <Projects/>
        </Suspense>
      ) 
  
    default:
      return (
        <WebsiteUnderConstruction/>
      )
  }
}

export default SectionRendering