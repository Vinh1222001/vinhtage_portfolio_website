'use client';

import { GetAllAnimation } from "@/Database/Controller/AnimationController";
import { GetAllMedias } from "@/Database/Controller/MediaController";
import { createContext, useContext, Dispatch, SetStateAction, useState, useEffect } from "react";

type DataType = {
    firstName: string
}

const LANGUAGE_CODE = {
    Vietnamese: "VNI",
    English: "ENG"
}

const PAGE_CODE = {
    Overview: "OVERVIEW",
    Profile: "PROFILE",
    Skills: "SKILLS",
    Projects: "PROJECTS",
}

interface ContextProps {
    userId: string,
    setUserId: Dispatch<SetStateAction<string>>,
    data: DataType[],
    setData: Dispatch<SetStateAction<DataType[]>>,

    language: string,
    setLanguage: Dispatch<SetStateAction<string>>,
    languageCodes: Record<string, string>,

    page: string,
    setPage: Dispatch<SetStateAction<string>>,
    pageCode: Record<string, string>

    pageIndex:number,
    setPageIndex: Dispatch<SetStateAction<number>>,

    media: any[],
    setMedia: Dispatch<SetStateAction<any[]>>,

    animations: any[],
    setAnimations: Dispatch<SetStateAction<any[]>>,
}

const GlobalContext = createContext<ContextProps>({
    userId: '',
    setUserId: (): string => '',
    data: [],
    setData: (): DataType[] => [],

    language: '',
    setLanguage: (): string => '',
    languageCodes: LANGUAGE_CODE,

    page: '',
    setPage: (): string => '',
    pageCode: PAGE_CODE,

    pageIndex: 0,
    setPageIndex: (): number => 0,

    media: [],
    setMedia: ():any[]=>[],

    animations:[],
    setAnimations: ():any[]=>[],
})

export const GlobalContextProvider = ({ children }) => {
    const [userId, setUserId] = useState('');
    const [data, setData] = useState<[] | DataType[]>([]);

    const[language, setLanguage] = useState(LANGUAGE_CODE.Vietnamese)
    const [languageCodes] = useState(LANGUAGE_CODE)

    const [page,setPage] =useState (PAGE_CODE.Overview)
    const [pageCode] = useState(PAGE_CODE)

    const[pageIndex,setPageIndex] =useState(0);

    const [media,setMedia]= useState<any[]>([])

    const [animations,setAnimations] =useState<any[]>([])

    useEffect(()=>{
        GetAllMedias(setMedia)
        GetAllAnimation(setAnimations)
    },[])
    
    return (
        <GlobalContext.Provider 

            value={{ 
                userId, setUserId, 
                data, setData,
                language,setLanguage,languageCodes, 
                page, setPage, pageCode,
                pageIndex,setPageIndex,
                media,setMedia,
                animations,setAnimations 
            }}
        
        >
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);