import React,{useState} from 'react'
import PointRange from '../PointRange'

type Skill = {
    name: string;
    point: number;
};

type SkillList = {
    SoftSkills: Skill[];
    Applications: Skill[];
    Languages: Skill[];
};

const SKILL_LIST: SkillList ={
    SoftSkills:[
        {
            name:"Kỹ năng giao tiếp",
            point:7,
        },
        {
            name:"Khả năng tự học/ Tự tìm hiểu",
            point:9,
        },
        {
            name:"Mắt thẩm mĩ/ Óc quan sát",
            point:9,
        },
        {
            name:"Khả năng chịu áp lực",
            point:9,
        },
        {
            name:"Khả năng quản lý thời gian",
            point:8,
        },
        {
            name:"Tính tỉ mỉ/ cẩn thận",
            point:9,
        },
    ],

    Applications:[
        {
            name:"Figma",
            point:8,
        },
        {
            name:"Adobe After Effect",
            point:5,
        },
        {
            name:"Adobe Illustrator",
            point:6,
        },
        {
            name:"Adobe Animate CC",
            point:8,
        },
        {
            name:"Adobe Photoshop",
            point:7,
        },
        {
            name:"Blender",
            point:6,
        },
    ],

    Languages:[
        {
            name:"HTML/CSS",
            point:8,
        },
                {
            name:"JavaScript",
            point:8,
        },
                {
            name:"ReactJs",
            point:8,
        },
                {
            name:"NextJs",
            point:8,
        },
                {
            name:"Tailwind",
            point:8,
        },
    ],
}

const Skills = () => {

    const [section,setSection] = useState("0%")

    const AutoCrolltoSection=(section:string)=>{
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth', 
                block: 'start', 
                inline: 'start' 
            });
        }

    }


  return (
    <div id='skill-page' className='w-full flex flex-col h-full lg:px-10'>
        
        <div id="side-bar" className="hidden md:flex w-full h-1/12 relative">
            <div className="w-1/3 h-full bg-background-darker-2 rounded-t-xl"
                style={{
                    transform: `translateX(${section})`,
                    transition: 'all 0.35s ease-in-out',
                }}
            >

            </div>
            <div id="section-list" className="w-full h-full flex absolute left-0 top-0">
                <ul className='w-full h-full grid grid-cols-3 menu'>
                    <li 
                        className='flex justify-center w-full h-full items-center'
                    >
                        <button 
                            className='w-full h-full flex whitespace-nowrap justify-center items-center rounded-full cursor-pointer font-bold'
                            onClick={()=>{
                                setSection("0%")
                                AutoCrolltoSection("soft-skills")}}
                        >Kỹ năng mềm</button>
                    </li>
                    <li 
                        className='flex justify-center w-full h-full items-center'
                    >
                        <button 
                            className='w-full h-full flex whitespace-nowrap justify-center items-center rounded-full cursor-pointer font-bold'
                            onClick={()=>{
                                setSection("100%")
                                AutoCrolltoSection("applications")}}
                        >Ứng dung/ Phần mềm</button>
                    </li>
                    <li 
                        className='flex justify-center w-full h-full items-center'
                    >
                        <button 
                            className='w-full h-full flex whitespace-nowrap justify-center items-center rounded-full cursor-pointer font-bold'
                            onClick={()=>{
                                setSection("200%")
                                AutoCrolltoSection("languages")}}
                        >Ngôn ngữ</button>
                    </li>
                </ul>
            </div>
        </div>
        <div id="content-wrapper" className="w-full h-11/12 overflow-y-auto relative">
            <div className="content-wrapper w-full h-triple flex flex-col justify-start gap-10">
                <section id="soft-skills" className='w-full min-h-1/3 flex flex-col gap-5 p-5 bg-background-darker-2 shadow-b-harder'>
                        <div className="section-title w-fit">
                            <h2>Kỹ năng mềm</h2>
                        </div>
                        <div className="content w-full flex flex-wrap justify-between">
                            {
                                SKILL_LIST.SoftSkills.map((skill,index)=>{
                                    return (
                                        <div key={`soft-skill-${index}`} className="w-full sm:w-1/2 p-2">
                                            <PointRange name={skill.name} point={skill.point}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                </section>
                <section id="applications" className='w-full min-h-1/3 flex flex-col gap-5 p-5 bg-background-darker-2 shadow-b-harder'>
                        <div className="section-title w-fit">
                            <h2>Ứng dung/ Phần mềm</h2>
                        </div>
                        <div className="content w-full flex flex-wrap justify-start">
                            {
                                SKILL_LIST.Applications.map((skill,index)=>{
                                    return (
                                        <div key={`application-${index}`} className="w-full sm:w-1/2 p-2">
                                            <PointRange name={skill.name} point={skill.point}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                </section>
                <section id="languages" className='w-full min-h-1/3 flex flex-col gap-5 p-5 bg-background-darker-2 shadow-b-harder'>
                        <div className="section-title w-fit">
                            <h2>Ngôn ngữ/ Thư viện/ Frame work</h2>
                        </div>
                        <div className="content w-full flex flex-wrap justify-start">
                            {
                                SKILL_LIST.Languages.map((skill,index)=>{
                                    return (
                                        <div key={`languages-${index}`} className="w-full sm:w-1/2 p-2">
                                            <PointRange name={skill.name} point={skill.point}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default Skills