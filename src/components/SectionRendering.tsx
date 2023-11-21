'use client'
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic';

//**************** IMPORT REACT ICON ******************//
import { useGlobalContext } from '@/Context/store';  

const Overview =dynamic(()=>import('./Overview/Overview'))
const WebsiteUnderConstruction =dynamic(()=>import('./WebsiteUnderConstruction')) 
const Profile =dynamic(()=>import('./Profile/Profile')) 
const Skills =dynamic(()=>import('./Skills/Skills')) 
const Projects =dynamic(()=>import('./Projects/Projects')) 
const OverviewLoading =dynamic(()=>import('./Overview/OverviewLoading')) 
const ProfileLoading =dynamic(()=>import('./Profile/ProfileLoading')) 
const SkillsLoading =dynamic(()=>import('./Skills/SkillLoading')) 

const Header =dynamic(()=>import('./Header')) 
const Footer =dynamic(()=>import('./Footer')) 
const SwitchPageLeft =dynamic(()=>import('./SwitchPageLeft')) 
const SwitchPageRight =dynamic(()=>import('./SwitchPageRight')) 


const Generator=()=>{
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

const SectionRendering = () => {

  return(
    <div className="flex flex-wrap min-h-screen h-full w-full justify-center text-white">
      <SwitchPageLeft/>
      <div className="main-wrapper w-10/12 h-full relative h-full flex flex-col items-stretch">

        <Header/>
        <div className="w-full h-10/12 flex items-center justify-center">
          {Generator()}
        </div>
        <Footer/>
      </div>
      <SwitchPageRight/>
    </div>

  )
}

export default SectionRendering