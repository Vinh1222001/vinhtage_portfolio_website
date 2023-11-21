import React from 'react'
// import Image from 'next/image'
const OverviewLoading = () => {

  return (
    <div id='overview-page' className='w-full flex flex-row flex-wrap lg:px-10 h-full overflow-y-auto'>
      <div id='overview-page-container' className='w-full flex flex-row flex-wrap md:items-center'>
        <div className="avatar-photo w-full sm:w-2/5 flex flex-row sm:flex-col items-center sm:items-start md:items-start justify-center md:justify-center gap-1">
          
          <div className="animate-pulse rounded-full w-5/12 sm:w-11/12 aspect-square bg-background-lighter-1"></div>
          
          <div className="bottom-button w-full flex md:hidden items-end justify-center sm:justify-start gap-2 flex-wrap">
            <div className="animate-pulse bg-background-lighter-1 min-h-11 basis-68 xl:basis-72">

            </div>
            
            <button className="animate-pulse bg-background-lighter-1 rounded-full min-h-11 basis-52 view-products flex flex-row items-center gap-1 text-sm sm:text-lg xl:text-xl text-primary hover:text-accent justify-center">

            </button>
          </div>


        </div>
        <div className="paragrahp w-full sm:w-3/5 flex flex-col justify-center gap-5 xl:gap-10">
          <div className="animate-pulse bg-background-lighter-1 rounded-full min-h-16 hightlight text-5xl xl:text-7xl font-bold">
            
          </div>
          <div className="introdution xl:text-xl lg:text-lg text-md tracking-normal flex flex-col gap-1 xl:gap-3">
            <div className="expected-position animate-pulse bg-background-lighter-1 rounded-full min-h-11">
            
            </div>
            <div className="experiment animate-pulse bg-background-lighter-1 rounded-full min-h-11">
            
            </div>
            <div className="project-types animate-pulse bg-background-lighter-1 rounded-full min-h-11">
            
            </div>
          </div>
          <div className="w-full bottom-button hidden md:flex items-end gap-5 flex-wrap">
            <div className="basis-70 xl:basis-72 animate-pulse bg-background-lighter-1 min-h-16">

            </div>
            
            <div className="animate-pulse bg-background-lighter-1 rounded-full min-h-11 basis-52 view-products flex flex-row items-center gap-1 text-lg xl:text-xl text-primary hover:text-accent">

            </div>
          </div>
          <div className="contact flex flex-col gap-2 text-sm sm:text-lg xl:text-xl font-normal">
            <div className='w-3/12 hidden xl:block animate-pulse bg-background-lighter-1 rounded-full min-h-11'>
              
            </div>
            <div className="w-full contact flex flex-col sm:gap-2 md:text-md lg:text-xl font-normal gap-1">

              <div className="w-5/12 animate-pulse bg-background-lighter-1 rounded-full min-h-11 email flex gap-2 items-center">
                
              </div>
              <div className="w-5/12 animate-pulse bg-background-lighter-1 rounded-full min-h-11 phone flex gap-2 items-center">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewLoading