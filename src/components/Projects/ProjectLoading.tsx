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

const ProjectsLoading = () => {

    return (
    <div className="w-full h-full overflow-hidden lg:px-10">
        <div className="w-full h-triple flex flex-col">

            <div className="w-full h-1/3 flex flex-col items-center justify-center">

                <div className="w-full h-full md:h-7/12 lg:h-10/12 grid gap-4 grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1">
                    {
                        PROJECT_TYPE.map((type,index)=>{
                            return(

                                <div 
                                    className='w-full min-h-full h-full overflow-hidden relative border-4 border-primary-lighter-2 rounded-md bg-background-lighter-1 animate-pulse' key={`project-type-${index}`}
                                >
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default ProjectsLoading