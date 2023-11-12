import { useGlobalContext } from '@/Context/store';
import React from 'react';

import Image from 'next/image';

import {AiFillEye} from 'react-icons/ai'
import {BsArrowUpCircleFill} from "react-icons/bs"

const APPLICATION_LOGO: Record<string, string>={
    "Photoshop":"/icons_photoshop.svg",
    "Animate":"/adobe-animate.svg",
    "Figma":"/logos_figma.svg",
    "Illustrator":"/icons_illustrator.svg",
    "AEffect":"/icons_aftereffects.svg",
    "Premiere":"/icons_premiere.svg",
    "Giấy":"/solar_pallete-2-bold.svg"
    
}

const ProjectDetailPopup = ({toggle,setToggle, projectId}: {  toggle: boolean, setToggle: (value: boolean) => void,projectId:number}) => {
    const {media,animations,language,languageCodes} =useGlobalContext()
    const currentProject=media.find((item)=>item.project_id===projectId)||{name:"Chưa có"}
    console.log(animations);
    
  return (
   <div className="w-full h-1/3 bg-accent-lighter-3 flex flex-row">

        <div id="project-displayer" className='h-full w-7/12  text-black'>
            <div className="w-full h-full relative overflow-hidden flex justify-center items-center">
                {currentProject.type!=="Animation"?
                
                    <Image
                        className='object-cover drop-shadow-lg'
                        src={
                            currentProject.link
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
                    />:
                    <iframe 
                        width={
                            animations.find(
                                (clip)=>
                                    clip.snippet.resourceId.videoId===currentProject.link
                                )?.snippet.thumbnails.standard.width
                        } 
                        height={
                            animations.find(
                                (clip)=>
                                    clip.snippet.resourceId.videoId===currentProject.link
                                )?.snippet.thumbnails.standard.height
                        } 
                        src={`https://www.youtube.com/embed/${currentProject.link}`} 
                        title={currentProject.name} 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">

                    </iframe>
                }
            </div>
        </div>
        <div id="project-detail" className='h-full w-5/12 bg-background-lighter-1 flex flex-col gap-10 rounded-l-4xl shadow-l-harder overflow-hidden'>

            <div className="detail w-full pl-10 pr-5 pt-10 flex flex-col gap-2">
                <span className='flex items-center justify-between'>
                    <p className='text-3xl font-bold text-primary w-9/12'>{currentProject.name}</p>
                    <button className='w-3/12 flex flex-row gap-3 items-center hover:text-seccondary transition justify-end' onClick={()=>setToggle(false)}>
                        {language===languageCodes.Vietnamese?"Trở lại":"Back"} <BsArrowUpCircleFill/>
                    </button>
                </span>
                <span>
                    <p className='flex items-center gap-2 text-xl'><AiFillEye className='text-accent'/>{currentProject.view}</p>
                </span>
            </div>
            <div className="w-full h-10/12 flex flex-col items-start gap-3  pl-10 pr-5 rounded-l-4xl bg-background-darker-2 pt-10">

                <div className="time">
                    <span className='flex flex-row gap-3 items-end'>
                        <p className='text-seccondary font-bold text-lg'>
                            Thời gian làm:
                        </p>
                        <p>{currentProject.duration} giờ</p>
                    </span>
                    <span className='flex flex-row gap-3 items-end'>
                        <p className='text-seccondary font-bold text-lg'>
                            Ngày bắt đầu:
                        </p>
                        <p>{currentProject.day_start} </p>
                    </span>
                    <span className='flex flex-row gap-3 items-end'>
                        <p className='text-seccondary font-bold text-lg'>
                            Ngày kết thúc:
                        </p>
                        <p>{currentProject.day_end}</p>
                    </span>
                </div>
                <div className="application w-full flex flex-col gap-2 items-start ">
                    <span>
                        <p className='text-seccondary font-bold text-lg'>
                            Ứng dụng sử dụng:
                        </p>
                    </span>
                    <div className="w-full grid grid-cols-7 gap-3">
                        {currentProject.application?.split("; ").map((app:any,index:number)=>{
                            return (
                                <div key={`app=${index}`} className="w-full relative aspect-square">

                                    <Image
                                        className='object-cover drop-shadow-lg'
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
                        })}
                    </div>
                </div>
                <div className="discription w-full flex flex-col ">
                    <span>
                        <p className='text-seccondary font-bold text-lg'>Mô tả:</p>
                    </span>
                    <span>
                        <p className='indent-5'>
                            {currentProject.discription}
                        </p>
                    </span>
                </div>
            </div>
        </div>
        
   </div>
  
  );
};

export default ProjectDetailPopup;
