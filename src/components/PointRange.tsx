import React from 'react'

import Image from 'next/image'

const POINT_RANGE:Record<number,string>={
    1:"/1.svg",
    2:"/2.svg",
    3:"/3.svg",
    4:"/4.svg",
    5:"/5.svg",
    6:"/6.svg",
    7:"/7.svg",
    8:"/8.svg",
    9:"/9.svg",
    10:"/10.svg",
}

const PointRange = ({ name, point }: { name: string; point: number }) => {
  return (
    <div className='w-full min-h-12 rounded-md bg-background-lighter-1 p-4 shadow-b-harder'>
        <div className="w-full">
            <h3 className='font-bold'>{name}</h3>
        </div>
        <div className="w-full min-h-12">
            <Image
                // className='rounded-full'
                src={POINT_RANGE[point]}
                alt="Point range"
                width="0"  
                height={0}    
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                loading="lazy"
                placeholder='blur'
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0..."
            />
        </div>
    </div>
  )
}

export default PointRange