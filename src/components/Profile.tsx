// 'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import {PiArrowFatRightFill,PiDownloadFill} from "react-icons/pi"
import {AiFillMail,AiFillPhone,AiOutlineArrowRight } from "react-icons/ai";
import {FaBirthdayCake,FaVolleyballBall,FaGuitar} from "react-icons/fa"
import {FaLocationDot} from "react-icons/fa6"
import {BiSolidPalette,BiSolidMoviePlay} from "react-icons/bi"
import {TbSportBillard} from "react-icons/tb"

import { useGlobalContext } from '@/Context/store'
import DownloadCVButton from './DownloadCVButton';

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

const Profile = () => {
  const {language,languageCodes,setPage,pageCode,setPageIndex} =useGlobalContext();
  const [section,setSection] = useState("basic-information")

  const AutoCrolltoSection=(section:string)=>{
    const element = document.getElementById(section);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth', // 'auto' nếu bạn không muốn hiệu ứng cuộn mượt
            block: 'start', // 'center', 'end', hoặc 'nearest'
            inline: 'start' // 'center', 'end', hoặc 'nearest'
        });
    }

  }
  return (
    <div id='profile-page' className='w-full flex flex-row h-full px-10'>
        <div className="sidebar w-1/5 flex flex-col justify-between h-full bg-background-darker-2 p-3 shadow-r-harder">
            <span className='section-list w-full'>
                <ul className='w-full cursor-pointer flex flex-col gap-3'>
                    <li 
                        className={`${section==="basic-information"?"section-active":""} transition-all w-full flex justify-between items-center text-md border-b-2 border-background-darker-2 py-1 px-1`}
                        onClick={()=>{
                            setSection("basic-information")
                            AutoCrolltoSection("basic-information")}}
                    >
                        Thông tin cơ bản <AiOutlineArrowRight/></li>
                    <li 
                        className={`${section==="work-experiment"?"section-active":""} w-full flex justify-between items-center text-md border-b-2 border-background-darker-2 py-1 px-1`}
                        onClick={()=>{
                            setSection("work-experiment")
                            AutoCrolltoSection("work-experiment")}}
                    >
                        Kinh nghiệm làm việc <AiOutlineArrowRight/></li>
                    <li 
                        className={`${section==="education-background"?"section-active":""} w-full flex justify-between items-center text-md border-b-2 border-background-darker-2 py-1 px-1`}
                        onClick={()=>{
                            setSection("education-background")
                            AutoCrolltoSection("education-background")}}
                    >
                        Trình độ học vấn <AiOutlineArrowRight/></li>
                    <li 
                        className={`${section==="hobbies"?"section-active":""} w-full flex justify-between items-center text-md border-b-2 border-background-darker-2 py-1 px-1`}
                        onClick={()=>{
                            setSection("hobbies")
                            AutoCrolltoSection("hobbies")}}
                    >
                        Sở thích <AiOutlineArrowRight/></li>
                    <li 
                        className={`${section==="point-of-view"?"section-active":""} w-full flex justify-between items-center text-md border-b-2 border-background-darker-2 py-1 px-1`}
                        onClick={()=>{
                            setSection("point-of-view")
                            AutoCrolltoSection("point-of-view")}}
                    >
                        Quan điểm sống <AiOutlineArrowRight/></li>
                </ul>
            </span>
            <span className="bottom-button flex flex-col items-start gap-5">
                <button className="view-products flex flex-row items-center gap-1 text-md text-primary border-b-2 border-primary"
                    onClick={()=>{
                    setPage(prev=>pageCode.Projects)
                    setPageIndex(prev=>3)
                    }}
                >
                    Go to view Projects
                    <PiArrowFatRightFill/>
                </button>
                <DownloadCVButton style=""/>
            </span>
        </div>

        <div className="h-full w-4/5 overflow-y-auto">

            <div className="content-wrapper w-full flex flex-col justify-start gap-10 pl-2">
                <section id="basic-information" className='w-full flex flex-col gap-5 p-5 bg-background-darker-2 shadow-b-harder'>
                    <div className="section-title w-fit">
                        <h2>Thông tin cơ bản</h2>
                    </div>
                    <div className="content w-full flex justify-start">

                        <div className="avatar-photo w-3/12 flex items-center justify-start">
                            <Image
                            // className='rounded-full'
                            src='/avatar.jpg'
                            alt="Web is building"
                            width="0"  
                            height={0}    
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                            loading="lazy"
                            />
                        </div>

                        <div className="information w-9/12 flex flex-col gap-10 pl-5">
                            <span id="name" className='w-full'>
                                <p className="text-5xl font-extrabold tracking-wide">Nguyễn Tuấn Vinh</p>
                            </span>
                            <div className="personal-infor w-full flex flex-col gap-2">

                                <span id="phone" className="flex items-start gap-2 text-xl tracking-wide">
                                    <AiFillPhone className="text-2xl text-primary"/>
                                    <p>0793191854</p>
                                </span>
                                <span id="email" className="flex items-start gap-2 text-xl tracking-wide">
                                    <AiFillMail className="text-2xl text-primary"/>
                                    <p>nguyentuanvinh1222@gmail.com</p>
                                </span>
                                <span id="birthday" className="flex items-start gap-2 text-xl tracking-wide">
                                    <FaBirthdayCake className="text-2xl text-primary"/>
                                    <p>12/02/2001</p>
                                </span>
                                <span id="address" className="flex items-start gap-2 text-xl tracking-wide">
                                    <FaLocationDot className="text-2xl text-primary"/>
                                    <p>168/20 đường Hậu Giang, phường 12, quận 6, Tp. Hồ Chí Minh</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="job-tags-wrapper flex flex-wrap gap-3">
                        {
                            JOB_TAG.map((tag,index)=>{
                                return(
                                    <div key={`job-tag-${index}`} id={`job-tag-${index}`} className="job-tag px-7 py-3 rounded-full bg-accent-lighter-3">
                                        <p className='text-primary font-bold text-lg'>{tag}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>

                <section id="work-experiment" className='w-full flex flex-col gap-5 p-5 bg-background-darker-2 shadow-b-harder'>
                    <div className="section-title w-fit">
                        <h2>Kinh nghiệm làm việc</h2>
                    </div>
                    <div className="content w-full flex justify-start">
                        {JOBS.map((job,index)=>{
                            return(
                                <div key={`job-${index}`} className="w-full flex bg-background-lighter-1 shadow-b-harder">

                                    <div className="business-photo w-4/12 flex items-center justify-center bg-white">
                                        <Image
                                        // className='rounded-full bg-white'
                                        src={job.Logo}
                                        alt={job.BusinessName}
                                        width="0"  
                                        height="0"    
                                        sizes="100vw"
                                        style={{ width: '80%', height: 'auto' }}
                                        loading="lazy"
                                        />
                                    </div>

                                    <div className="information w-8/12 flex flex-col gap-10 p-3">
                                        <span id="bussiness-name" className='w-full flex justify-center items-center py-2 bg-accent-lighter-3 rounded-full'>
                                            <p className="text-2xl tracking-wide text-background">{job.Form} tại <b className='font-bold text-primary'>{job.BusinessName}</b></p>
                                        </span>
                                        <div className="personal-infor w-full flex flex-col gap-2">

                                            <span id="position" className="flex w-full items-start gap-2 text-xl tracking-wide">
                                                <p className="w-1/4">
                                                    Vi trí:
                                                </p>
                                                <p className='w-3/4'>
                                                    <b className='text-primary'>{job.Position}</b> (thuộc {job.Team})
                                                </p>
                                            </span>
                                            <span id="duration" className="flex items-start gap-2 text-xl tracking-wide">
                                                <p className="w-1/4">
                                                    Thời gian:
                                                </p>
                                                <p className='w-3/4'>
                                                    <b className='text-primary'>{job.Duration}</b>, từ {job.DayStart} đến {job.DayEnd}
                                                </p>
                                            </span>
                                            <span id="leader" className="flex items-start gap-2 text-xl tracking-wide">
                                                <p className="w-1/4">
                                                    Leader:
                                                </p>
                                                <p className='w-3/4'>
                                                    {job.Leader}
                                                </p>
                                            </span>
                                            <span id="feedback" className="flex items-start gap-2 text-xl tracking-wide">
                                                <p className="w-1/4">
                                                    Nhận xét
                                                </p>
                                                <p className='w-3/4'>
                                                    {job.Feedback}
                                                </p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    
                </section>
                
                <section id="education-background" className='w-full flex flex-col gap-5 p-5 bg-background-darker-2 shadow-b-harder'>
                    <div className="section-title w-fit">
                        <h2>Trình độ học vấn</h2>
                    </div>
                    <div className="content w-full flex flex-col justify-start gap-3">
                        {
                            EDUCATION_BACKGROUND.map((education,index)=>{
                                return(
                                    <div key={`education-${index}`} id={`education-${index}`} className='w-full flex items-center bg-background-lighter-2 p-2 shadow-b-harder'>

                                        <div className="avatar-photo w-6/12 flex items-center justify-start">
                                            <Image
                                            // className='rounded-full'
                                            src={education.Photo}
                                            alt="eduction photo"
                                            width="0"  
                                            height={0}    
                                            sizes="100vw"
                                            style={{ width: '100%', height: 'auto' }}
                                            loading="lazy"
                                            />
                                        </div>

                                        <div className="information w-6/12 flex flex-col gap-10 pl-5">
                                            <span id="education-content" className='w-full'>
                                                <p className="tracking-wide text-xl">{education.content}</p>
                                            </span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>

                <section id="hobbies" className='w-full flex flex-col gap-5 p-5 bg-background-darker-2 shadow-b-harder'>
                    <div className="section-title w-fit">
                        <h2>Sở thích</h2>
                    </div>
                    <div className="content w-full flex justify-start gap-3">
                        <div className="hobbie flex items-center text-xl gap-2 px-5 py-2 bg-accent-lighter-3 text-background rounded-full border-primary border-2">
                            <BiSolidPalette/>
                            Vẽ
                        </div>
                        <div className="hobbie flex items-center text-xl gap-2 px-5 py-2 bg-accent-lighter-3 text-background rounded-full border-primary border-2">
                            <FaGuitar/>
                            Guitar
                        </div>
                        <div className="hobbie flex items-center text-xl gap-2 px-5 py-2 bg-accent-lighter-3 text-background rounded-full border-primary border-2">
                            <FaVolleyballBall/>
                            Bóng chuyền
                        </div>
                        <div className="hobbie flex items-center text-xl gap-2 px-5 py-2 bg-accent-lighter-3 text-background rounded-full border-primary border-2">
                            <BiSolidMoviePlay/>
                            Xem phim
                        </div>
                        <div className="hobbie flex items-center text-xl gap-2 px-5 py-2 bg-accent-lighter-3 text-background rounded-full border-primary border-2">
                            <TbSportBillard/>
                            Billard
                        </div>
                    </div>

                </section>
                
                <section id="point-of-view" className='w-full flex flex-col gap-5 p-5 bg-background-darker-2 shadow-b-harder'>
                    <div className="section-title w-fit">
                        <h2>Quan điểm sống</h2>
                    </div>
                    <div className="content w-full flex justify-start gap-3">
                        {POINT_OF_VIEW.map((quote,index)=>{
                            return(

                                <div key={`quote-${index}`} id={`quote-${index}`} className="hobbie flex items-center text-xl gap-2 px-5 py-2 bg-accent-lighter-3 text-background rounded-full border-primary border-2">
                                    <p>{`"${quote}"`}</p>
                                </div>
                            )
                        })}
                    </div>

                </section>
            </div>
        </div>
    </div>
  )
}

export default Profile