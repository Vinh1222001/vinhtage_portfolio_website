import React,{useState} from 'react'
import Image from 'next/image'
import { useGlobalContext } from '@/Context/store'
import ProjectsDisplayer from '../ProjectsDisplayer';
import ProjectDetailPopup from '../ProjectDetailPopup';

type TYPE = {
    name: string;
    type: string;
    // point: number;
};

const PROJECT_TYPE:TYPE[] =[
    {
        name:"Mobile",
        type:"Mobile",
    },
    {
        name:"Web",
        type:"Website",
    },
    {
        name:"Animation",
        type:"Animation",
    },
    {
        name:"Artwork",
        type:"Artwork",
    }
]

const blurDataURLGenerator = (imageUrl: string): string => {
    // Chuỗi base64 của ảnh mờ PNG (giá trị mặc định)
    let blurDataURL: string = 'data:image/png;base64,iVBORw0KGgoAAAANS...';
  
    // Kiểm tra định dạng thực của ảnh và cập nhật blurDataURL
    if (imageUrl.endsWith('.jpg') || imageUrl.endsWith('.jpeg')) {
      blurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgAB...';
    } else if (imageUrl.endsWith('.svg')) {
      blurDataURL = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0...';
    }
  
    return blurDataURL;
  };

const Projects = () => {

    const {animations,projects} = useGlobalContext()

    const [projectListToggle,setProjectListToggle] = useState(false)  
    const [projectDetailToggle,setProjectDetailToggle]=useState(false)
    const [projectType,setProjectType]= useState("")
    const [projectId,setProjectId] =useState(1000)
    if (projects.length === 0 || !projects[0]?.link) {
        return <div>Loading...</div>; // Or any other loading indicator
    }

    // console.log(projects);
    
    return (
    <div className="w-full h-full overflow-hidden lg:px-10">
        <div className={`w-full h-triple flex flex-col ${projectListToggle?"translate-y-up-1/3":""} ${projectDetailToggle?"translate-y-up-2/3":""} transition`}>

            <div className="w-full h-1/3 flex flex-col items-center justify-center">

                <div className="w-full h-full md:h-7/12 lg:h-10/12 grid gap-4 grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1">
                    {
                        PROJECT_TYPE.map((type,index)=>{
                            return(

                                <button 
                                    className='w-full h-full overflow-hidden relative border-4 border-primary-lighter-2 rounded-md' key={`project-type-${index}`}
                                    onClick={()=>{
                                        setProjectListToggle(prev=>true)
                                        setProjectType(prev=>type.type)
                                    }}
                                >
                                    <div className="w-full h-full blur-sm bg-center bg-fill brightness-40" style={{backgroundImage:`url(${type.type==="Animation"?animations[0]?.snippet.thumbnails.standard.url:projects.filter(project=>project.type===type.type)[0]?.link})`,}}></div>
                                    
                                    <Image
                                        className='object-cover brightness-40'
                                        src={type.type==="Animation"?(animations[0]?.snippet.thumbnails.standard.url||"/avatar.jpg")||"":projects?.filter(project=>project.type===type.type)[0]?.link||""}
                                        alt="Project type"
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
                                        placeholder="blur"
                                        blurDataURL={blurDataURLGenerator(type.type==="Animation"?(animations[0]?.snippet.thumbnails.standard.url||"/avatar.jpg")||"":projects?.filter(project=>project.type===type.type)[0]?.link||"")}
                                    />
                                    
                                    <div className="w-full h-full absolute top-0 right-0 z-50">
                                        <div className="w-full h-full flex items-center justify-center">

                                            <p className="w-full text-center font-extrabold text-3xl text-primary drop-shadow-2xl">
                                                {type.name}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            )
                        })
                    }
                </div>
            </div>

            <ProjectsDisplayer 
                toggle={projectListToggle} setToggle={setProjectListToggle} 
                projects={projects.filter(type=>type.type===projectType)} 
                type={projectType} 
                setProjectDetailToggle={setProjectDetailToggle}
                setProjectId={setProjectId}
            />
            <ProjectDetailPopup toggle={projectDetailToggle} setToggle={setProjectDetailToggle} projectId={projectId}/>
        </div>
    </div>
  )
}

export default Projects