import React, { useState,useEffect,useRef } from 'react'
import Image from 'next/image'

import {PiArrowFatRightFill} from "react-icons/pi"
import {AiFillMail,AiFillPhone,AiOutlineArrowRight,AiOutlineRight } from "react-icons/ai";
import {FaBirthdayCake,FaVolleyballBall,FaGuitar} from "react-icons/fa"
import {FaLocationDot} from "react-icons/fa6"
import {BiSolidPalette,BiSolidMoviePlay} from "react-icons/bi"
import {TbSportBillard} from "react-icons/tb"

import { useGlobalContext } from '@/Context/store'
import DownloadCVButton from '../DownloadCVButton';

const JOB_TAG=["2D Artist", "3D Artist", "Web designer", "Figma", "Character Designer", "UI/UX Designer", "2D/3D Animator"]

const JOBS=[
    {
        Form: "Thực tập",
        BusinessName:"Công ty TNHH Spring Production",
        Logo:"/logo-top.svg",
        Position:"Web designer Intern",
        Team: "Degital team",
        Duration: "3 tháng",
        DayStart:"17/06/2023",
        DayEnd:"17/09/2023",
        Leader:"Nguyễn Kim Ha",
        Feedback:"Được mọi người nhận xét là tỉ mĩ, cẩn thận, hoàn thành tốt công việc được giao trong thời gian ngắn.",
    }
]

const  POINT_OF_VIEW=[
    "Không gì là không thể.",
    "Không có kẻ thiên tài - Chỉ có người chăm chỉ hoặc không."
]

const EDUCATION_BACKGROUND=[
    {
        Photo:"/01_logobachkhoatoi.png",
        content:"Đã là sinh viên trường Đại học Bách Khoa thành phố Hồ Chí Minh từ năm 2019",
    },
    {
        Photo:"/Toiec.jpg",
        content:"Toiec Reading - Listening: 785",
    }
]

const ProfileLoading = () => {
  
  return (
    <div id='profile-page' className='w-full flex flex-row h-full lg:px-10'>
        <div className="w-full flex flex-row h-full overflow-hidden relative">

            <div className="sidebar hidden w-1/5 2xl:flex flex-col justify-between h-full bg-background-darker-2 p-3 shadow-r-harder"
            >
                <div className='section-list w-full'>
                    <ul className='w-full cursor-pointer flex flex-col gap-3'>
                        <li className={`w-full animate-pulse bg-background-lighter-1 rounded-full min-h-11`}>
                            </li>
                        <li className={`w-full animate-pulse bg-background-lighter-1 rounded-full min-h-11`}>
                            </li>
                        <li className={`w-full animate-pulse bg-background-lighter-1 rounded-full min-h-11`}>
                            </li>
                        <li className={`w-full animate-pulse bg-background-lighter-1 rounded-full min-h-11`}>
                            </li>
                        <li className={`w-full animate-pulse bg-background-lighter-1 rounded-full min-h-11`}>
                            </li>
                    </ul>
                </div>
                <div className="bottom-button flex flex-col items-start gap-5">
                    <div className="w-full animate-pulse bg-background-lighter-1 rounded-full min-h-11">

                    </div>

                    <div className="w-full animate-pulse bg-background-lighter-1 min-h-16"></div>

                </div>
            </div>

            <div className="h-full w-full 2xl:w-4/5 overflow-y-auto">

                <div className="content-wrapper w-full flex flex-col justify-start gap-10 pl-2">
                    <section id="basic-information" className='w-full flex flex-col gap-5 p-5 bg-background-darker-2 shadow-b-harder'>
                        <div className="animate-pulse bg-background-lighter-1 rounded-full min-h-14 w-5/12">
                            
                        </div>
                        <div className="content w-full flex flex-col sm:flex-row items-center justify-start">

                            <div className="avatar-photo w-7/12 sm:w-4/12 lg:w-3/12 flex items-start justify-start">
                                <div className="w-full animate-pulse bg-background-lighter-1 rounded-full aspect-square">

                                </div>
                            </div>

                            <div className="information w-full sm:w-8/12 lg:w-9/12 flex flex-col gap-5 sm:gap-10 pt-3 sm:pt-0 sm:pl-5">
                                <div id="name" className='animate-pulse bg-background-lighter-1 rounded-full min-h-14'>
                                    
                                </div>
                                <div className="personal-infor w-full flex flex-col gap-2">

                                    <div id="phone" className="animate-pulse bg-background-lighter-1 rounded-full min-h-8 w-5/12">
                                        
                                    </div>
                                    <div id="email" className="animate-pulse bg-background-lighter-1 rounded-full min-h-8 w-5/12">
                                        
                                    </div>
                                    <div id="birthday" className="animate-pulse bg-background-lighter-1 rounded-full min-h-8 w-5/12">
                                        
                                    </div>
                                    <div id="address" className="animate-pulse bg-background-lighter-1 rounded-full min-h-8 w-5/12">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="job-tags-wrapper flex flex-wrap gap-3">
                            {
                                JOB_TAG.map((tag,index)=>{
                                    return(
                                        <div key={`job-tag-${index}`} id={`job-tag-${index}`} className="animate-pulse bg-background-lighter-1 rounded-full min-h-11 w-2/12">
                                            
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>

                    <section id="work-experiment" className='w-full flex flex-col gap-5 p-5 bg-background-darker-2 shadow-b-harder'>
                        <div className="animate-pulse bg-background-lighter-1 rounded-full min-h-14 w-5/12">
                           
                        </div>
                        <div className="content w-full flex justify-start">
                            {JOBS.map((job,index)=>{
                                return(
                                    <div key={`job-${index}`} className="w-full flex flex-col items-center lg:items-stretch lg:flex-row bg-background-lighter-1 shadow-b-harder">

                                        <div className="business-photo w-8/12 lg:w-4/12 py-3 lg:py-0 animate-pulse bg-background-lighter-2 w-full aspect-square">
                                           
                                        </div>

                                        <div className="information w-full lg:w-8/12 flex flex-col gap-10 p-3">
                                            <div id="bussiness-name" className='w-full flex justify-center items-center py-2 animate-pulse bg-background-lighter-2 rounded-full w-full min-h-14'>
                                                
                                            </div>
                                            <div className="personal-infor w-full flex flex-col gap-2">

                                                <div id="position" className="flex w-full items-start gap-2 text-sm sm:text-lg 2xl:text-xl tracking-wide">
                                                    <p className="w-1/4 animate-pulse bg-background-lighter-2 rounded-full min-h-11">
                                                        
                                                    </p>
                                                    <p className='w-3/4 animate-pulse bg-background-lighter-2 rounded-full min-h-11'>
                                                        
                                                    </p>
                                                </div>
                                                <div id="duration" className="flex items-start gap-2 text-sm sm:text-lg 2xl:text-xl tracking-wide">
                                                    <p className="w-1/4 animate-pulse bg-background-lighter-2 rounded-full min-h-11">
                                                        
                                                    </p>
                                                    <p className='w-3/4 animate-pulse bg-background-lighter-2 rounded-full min-h-11'>
                                                        
                                                    </p>
                                                </div>
                                                <div id="leader" className="flex items-start gap-2 text-sm sm:text-lg 2xl:text-xl tracking-wide">
                                                    <p className="w-1/4 animate-pulse bg-background-lighter-2 rounded-full min-h-11">
                                                        
                                                    </p>
                                                    <p className='w-3/4 animate-pulse bg-background-lighter-2 rounded-full min-h-11'>
                                                        
                                                    </p>
                                                </div>
                                                <div id="feedback" className="flex items-start gap-2 text-sm sm:text-lg 2xl:text-xl tracking-wide">
                                                    <p className="w-1/4 animate-pulse bg-background-lighter-2 rounded-full min-h-11">
                                                        
                                                    </p>
                                                    <p className='w-3/4 animate-pulse bg-background-lighter-2 rounded-full min-h-11'>
                                                       
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        
                    </section>
                    
                    <section id="education-background" className='w-full flex flex-col gap-5 p-5 bg-background-darker-2 shadow-b-harder'>
                        <div className="animate-pulse bg-background-lighter-1 rounded-full min-h-14 w-5/12">
                            
                        </div>
                        <div className="content w-full flex flex-col justify-start gap-3">
                            {
                                EDUCATION_BACKGROUND.map((education,index)=>{
                                    return(
                                        <div key={`education-${index}`} id={`education-${index}`} className='w-full flex items-center bg-background-lighter-2 p-2 shadow-b-harder'>

                                            <div className="avatar-photo w-3/12 flex items-center justify-start">
                                               <div className="w-full animate-pulse bg-background-lighter-1 aspect-square"></div>
                                            </div>

                                            <div className="information w-9/12 flex flex-col gap-10 pl-5">
                                                <div id="education-content" className='animate-pulse bg-background-lighter-1 rounded-full min-h-11'>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>

                    <section id="hobbies" className='w-full flex flex-col gap-5 p-5 bg-background-darker-2 shadow-b-harder'>
                        <div className="animate-pulse bg-background-lighter-1 rounded-full min-h-14 w-5/12">
                            
                        </div>
                        <div className="content w-full flex flex-wrap justify-start gap-3">
                            <div className="animate-pulse bg-background-lighter-1 rounded-full min-h-12 w-2/12">
                                
                            </div>
                            <div className="animate-pulse bg-background-lighter-1 rounded-full min-h-12 w-2/12">
                                
                            </div>
                            <div className="animate-pulse bg-background-lighter-1 rounded-full min-h-12 w-2/12">
                                
                            </div>
                            <div className="animate-pulse bg-background-lighter-1 rounded-full min-h-12 w-2/12">
                                
                            </div>
                            <div className="animate-pulse bg-background-lighter-1 rounded-full min-h-12 w-2/12">
                              
                            </div>
                        </div>

                    </section>
                    
                    <section id="point-of-view" className='w-full flex flex-col gap-5 p-5 bg-background-darker-2 shadow-b-harder'>
                        <div className="animate-pulse bg-background-lighter-1 rounded-full min-h-14 w-5/12">
                            
                        </div>
                        <div className="content w-full flex flex-wrap justify-start gap-3">
                            {POINT_OF_VIEW.map((quote,index)=>{
                                return(

                                    <div key={`quote-${index}`} id={`quote-${index}`} className="animate-pulse bg-background-lighter-1 rounded-full min-h-12 w-5/12">
                                        
                                    </div>
                                )
                            })}
                        </div>

                    </section>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileLoading