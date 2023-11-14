import { useGlobalContext } from '@/Context/store';
import React, { useState } from 'react';

import Image from 'next/image';

import {AiFillEye,AiFillCaretDown} from 'react-icons/ai'
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
    // console.log(animations);

    const [detailToggle,setDetailToggle]=useState(true)
    
  return (
   <div className="w-full h-1/3 bg-accent-lighter-3 flex flex-col sm:flex-row relative">

        <div id="project-displayer" className='h-full w-full sm:w-7/12 pb-20 sm:pb-0 text-black'>
            <div className="w-full h-full relative overflow-hidden flex justify-center items-center">
                {currentProject.type!=="Animation"?
                
                    <Image
                        className='object-cover drop-shadow-lg p-2'
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
        <div id="project-detail" className='hidden h-full w-full sm:w-5/12 bg-background-lighter-1 sm:flex flex-col rounded-t-xl sm:rounded-l-xl shadow-l-harder overflow-hidden'>

            <div className="detail w-full p-5 flex flex-col gap-2">
                <div className="w-full hidden sm:flex justify-end">

                    <button className='w-5/12 flex flex-row gap-3 items-center justify-center hover:text-seccondary transition justify-end border-2 rounded-md' onClick={()=>setToggle(false)}>
                        {language===languageCodes.Vietnamese?"Trở lại":"Back"} <BsArrowUpCircleFill/>
                    </button>
                </div>
                <div className="w-full flex flex-col">

                    <div className='w-full flex items-center justify-center'>
                        <p className='text-2xl lg:text-3xl font-bold text-primary w-full text-center sm:text-left'>{currentProject.name}</p>
                    </div>
                    <div className='w-full flex justify-center'>
                        <p className='flex items-center gap-2 text-xl text-center sm:text-left'><AiFillEye className='text-accent'/>{currentProject.view}</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-10/12 flex items-start rounded-t-xl sm:rounded-l-xl bg-background-darker-2 p-5 shadow-t-harder">
                <div className="w-full h-full overflow-y-auto">

                    <div className="w-full flex flex-col items-start gap-3">

                        <div className="time">
                            <span className='flex flex-row gap-3 items-end'>
                                <p className='text-seccondary font-bold text-sm lg:text-lg'>
                                    Thời gian làm:
                                </p>
                                <p>{currentProject.duration} giờ</p>
                            </span>
                            <span className='flex flex-row gap-3 items-end'>
                                <p className='text-seccondary font-bold text-sm lg:text-lg'>
                                    Ngày bắt đầu:
                                </p>
                                <p>{currentProject.day_start} </p>
                            </span>
                            <span className='flex flex-row gap-3 items-end'>
                                <p className='text-seccondary font-bold text-sm lg:text-lg'>
                                    Ngày kết thúc:
                                </p>
                                <p>{currentProject.day_end}</p>
                            </span>
                        </div>
                        <div className="application w-full flex flex-col gap-2 items-start ">
                            <span>
                                <p className='text-seccondary font-bold text-sm lg:text-lg'>
                                    Ứng dụng sử dụng:
                                </p>
                            </span>
                            <div className="w-full grid grid-cols-5 gap-3">
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
                                <p className='text-seccondary font-bold text-sm lg:text-lg'>Mô tả:</p>
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
        </div>

        <div 
            id="project-detail-toggle" 
            className='absolute bottom-0 left-0 sm:hidden h-11/12 w-full sm:w-5/12 bg-background-lighter-3 flex flex-col justify-between rounded-t-xl sm:rounded-l-xl shadow-l-harder overflow-hidden'
            style={
                detailToggle?{
                    transform:"translateY(0)",
                    transition:"all 0.4s ease",
                }:{
                    transform:"translateY(85%)",
                    transition:"all 0.4s ease",
                }
            }
        >

            <div className="w-full flex justify-center">

                <button 
                    className='w-full flex flex-row gap-3 items-center justify-center hover:text-seccondary bg-background-lighter-3 transition justify-end' onClick={()=>setToggle(false)}
                    style={
                        detailToggle?{
                            display:"none",
                            // height:"0px",
                        }:{
                            display:"flex",
                        }
                    }
                >
                    {language===languageCodes.Vietnamese?"Trở lại":"Back"} <BsArrowUpCircleFill/>
                </button>
            </div>
            <div className={`detail w-full ${detailToggle?"h-full":"h-11/12"} pt-1 flex flex-col justify-between gap-2 bg-background-lighter-2 rounded-t-xl shadow-t-harder transition`}>
                <div className="w-full">
                    <button className='w-full text-xl flex gap-2 items-end justify-center rounded-t-xl' onClick={()=>setDetailToggle(!detailToggle)}>
                        <p className='text-sm'>{detailToggle?"Thu gọn":"Xem thông tin"}</p>
                        <AiFillCaretDown
                            className="border-t-2"
                            style={
                                detailToggle?{
                                    transform:"rotate(0deg)",
                                    transition:"all 0.4s ease",
                                    // borderTop:"solid 2px white"
                                }:{
                                    transform:"rotate(180deg)",
                                    transition:"all 0.4s ease",
                                    // borderBottom:"solid 2px white"

                                }
                            }
                        />
                    </button>
                </div>
                
                <div className="w-full flex flex-col">

                    <div className='w-full flex items-center justify-center'>
                        <p className='text-2xl lg:text-3xl font-bold text-primary w-full text-center sm:text-left'>{currentProject.name}</p>
                    </div>
                    <div className='w-full flex justify-center'>
                        <p className='flex items-center gap-2 text-xl text-center sm:text-left'><AiFillEye className='text-accent'/>{currentProject.view}</p>
                    </div>
                </div>
                <div className="w-full h-10/12 flex items-start rounded-t-xl sm:rounded-l-xl bg-background-darker-2 p-5 shadow-t-harder">
                    <div className="w-full h-full overflow-y-auto">

                        <div className="w-full flex flex-col items-start gap-3">

                            <div className="time">
                                <span className='flex flex-row gap-3 items-end'>
                                    <p className='text-seccondary font-bold text-sm lg:text-lg'>
                                        Thời gian làm:
                                    </p>
                                    <p>{currentProject.duration} giờ</p>
                                </span>
                                <span className='flex flex-row gap-3 items-end'>
                                    <p className='text-seccondary font-bold text-sm lg:text-lg'>
                                        Ngày bắt đầu:
                                    </p>
                                    <p>{currentProject.day_start} </p>
                                </span>
                                <span className='flex flex-row gap-3 items-end'>
                                    <p className='text-seccondary font-bold text-sm lg:text-lg'>
                                        Ngày kết thúc:
                                    </p>
                                    <p>{currentProject.day_end}</p>
                                </span>
                            </div>
                            <div className="application w-full flex flex-col gap-2 items-start ">
                                <span>
                                    <p className='text-seccondary font-bold text-sm lg:text-lg'>
                                        Ứng dụng sử dụng:
                                    </p>
                                </span>
                                <div className="w-full grid grid-cols-5 gap-3">
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
                                    <p className='text-seccondary font-bold text-sm lg:text-lg'>Mô tả:</p>
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
            </div>
        </div>
        
   </div>
  
  );
};

export default ProjectDetailPopup;
