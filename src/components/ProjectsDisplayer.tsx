import React,{useState} from 'react'
import Image from 'next/image'
import { useGlobalContext } from '@/Context/store'

import {BsArrowUpCircleFill} from "react-icons/bs"
import DownloadCVButton from './DownloadCVButton'

const APPLICATION_LOGO: Record<string, string>={
    "Photoshop":"/icons_photoshop.svg",
    "Animate":"/adobe-animate.svg",
    "Figma":"/logos_figma.svg",
    "Illustrator":"/icons_illustrator.svg",
    "AEffect":"/icons_aftereffects.svg",
    "Premiere":"/icons_premiere.svg",
    "Giấy":"/solar_pallete-2-bold.svg"
    
}

type Media = {
    application: string;
    category: string;
    created_at: string;
    day_end: string;
    day_start: string;
    dimension: string;
    description: string;
    duration: string;
    id: number;
    link: string;
    name: string;
    project_id: number;
    status: string;
    type: string;
    view: number;
}

const ProjectsDisplayer = ({toggle,setToggle,media,type,setProjectDetailToggle,setProjectId}: {  toggle: boolean, setToggle: (value: boolean) => void,media:any,type:string,setProjectDetailToggle: (value: boolean) => void,setProjectId: (value: number) => void}) => {

    const {language,languageCodes,animations} =useGlobalContext()
    const [dimension,setDimension] =useState("2D")
    // console.log(animations.find((clip)=>
    //     clip.snippet.resourceId.videoId==="b3nH4xWCVPM"
    // ).snippet.thumbnails);

    // console.log(animations[0].snippet.resourceId.videoId);
    
    const getUniqueCategories = (): string[] => {
        const allCategories = media.reduce((categories: string[], item:Media) => {
            const itemCategories = item.category.split(';').map((category:any) => category.trim());
            return categories.concat(itemCategories);
        }, []);
    
        const uniqueCategories:string[] = Array.from(new Set(allCategories));
    
        return uniqueCategories;
    };
    
    const uniqueCategories = getUniqueCategories();
    // console.log(uniqueCategories);
    const [categorySelected,setCategorySelected]= useState("Tất cả")
  return (
    <div className='w-full h-1/3 flex flex-row'>

        <div id="sidebar" className='w-3/12 bg-background-darker-2 shadow-r-harder p-2 h-full flex flex-col justify-between'>
            <span className='flex justify-center'>
                <h1 className='text-primary font-extrabold text-2xl'>{type}</h1>
            </span>
            <span className='overflow-hidden'>
                <ul className={`w-double flex flex-row transition ${dimension==="2D"?"translate-x-0":"translate-x-left-1/2"}`}>
                    <li className='w-full text-center text-xl font-bold'>
                        <button 
                            className='w-full bg-seccondary active:scale-75 transition py-3'
                            onClick={()=>setDimension("3D")}
                        >2D</button>
                    </li>
                    <li className='w-full text-center text-xl font-bold'>
                        <button 
                            className='w-full bg-primary active:scale-75 transition py-3'
                            onClick={()=>setDimension("2D")}
                        >3D</button>
                    </li>
                </ul>
            </span>
            <span className='flex flex-col gap-4'>
                <span >
                    <p className='border-b-2 px-2 py-1 text-lg font-bold'>Loại</p>
                </span>
                <ul className="w-full pl-3">
                    <li key={`category-${0}`} className='w-full'>
                        <label className='flex w-full items-center gap-2'>
                            <input className="accent-seccondary" type="radio" name="category" id={`category-0`} onChange={()=>setCategorySelected("Tất cả")} checked={categorySelected==="Tất cả"}/>
                            Tất cả
                        </label>
                    </li>
                    {uniqueCategories.map((category,index)=>{
                        return(
                            <li key={`category-${index+1}`} className='w-full'>
                                <label className='flex w-full items-center gap-2'>
                                    <input className="accent-seccondary" type="radio" name="category" id={`category-${index+1}`} onChange={()=>setCategorySelected(category)}/>
                                    {category}
                                </label>
                            </li>
                        )
                    })}
                </ul>
            </span>
            <span className="bottom-button flex flex-col items-center gap-5 justify-center">
                <button className='flex flex-row gap-3 items-center hover:text-seccondary transition' onClick={()=>setToggle(false)}>
                    {language===languageCodes.Vietnamese?"Trở về":"Back"} <BsArrowUpCircleFill/>
                </button>
                <DownloadCVButton style=""/>
            </span>
            
        </div>
        <div id="project-list" className='w-9/12 h-full overflow-y-auto'>
            <div className="w-full h-full grid grid-cols-3 gap-5 px-2">
                {media.filter((item:any)=>categorySelected==="Tất cả"||item.category.split("; ").includes(categorySelected)).map((media:any,index:number)=>{
                    return(

                        <button key={`project-view-${index}`} className="project-view-box w-full aspect-square bg-accent-lighter-3 shadow-rb-harder rounded-md text-black">
                            <div className="w-full h-full relative overflow-hidden">

                                <Image
                                    className='object-cover drop-shadow-lg'
                                    src={
                                        type==="Animation"?
                                        animations.find((clip)=>
                                            clip.snippet.resourceId.videoId===media.link
                                        ).snippet.thumbnails.standard.url
                                        :
                                        media?.link
                                    }
                                    alt="Web is building"
                                    // sizes="100vw"
                                    // layout="fill"
                                    priority={false}
                                    sizes="(max-width: 640px) 100vw, (max-width: 750px) 75vw, 50vw"
                                    style={{ 
                                        objectFit: "contain", 
                                        width: '100%',
                                        
                                    }}
                                    fill={true}
                                    loading="lazy"
                                />

                                <div className="project-basic-infor-view w-full flex flex-col gap-2 absolute bottom-0 right-0 bg-white-opacity-7 shadow-t-lighter backdrop-blur-sm shadow-inner-xl p-2 text-background-darker-2 translate-y-full transition rounded-t-xl">
                                    
                                <button 
                                    className='w-full' 
                                    onClick={()=>{
                                        setProjectId(media.project_id)
                                        setProjectDetailToggle(true)
                                    }}
                                >
                                    <p className='text hover:underline hover:text-primary-lighter-2'>Xem chi tiết</p>
                                </button>
                                    
                                    <span className="project-basic-infor">
                                        <span className="project-name font-bold text-primary">
                                            <p>{media.name}</p>
                                        </span>
                                        <span className="project-duration">
                                            <p>Thời gian: {media.duration} giờ</p>
                                        </span>
                                    </span>
                                    <div className="w-full grid grid-cols-5 gap-2">
                                        {
                                            media.application.split("; ").map((app:string,index:any)=>{
                                                return(
                                                    <div key={`application-${index}`} className="w-full aspect-square relative">
                                                        <Image
                                                            className='object-cover drop-shadow-lg p-3'
                                                            src={APPLICATION_LOGO[app]}
                                                            alt="Web is building"
                                                            // sizes="100vw"
                                                            // layout="fill"
                                                            priority={false}
                                                            sizes="(max-width: 640px) 100vw, (max-width: 750px) 75vw, 50vw"
                                                            style={{ 
                                                                objectFit: "contain", 
                                                                width: '100%',
                                                                
                                                            }}
                                                            fill={true}
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            </div>
                            
                        </button>
                    )
                })}

            </div>
        </div>
    </div>
  )
}

export default ProjectsDisplayer