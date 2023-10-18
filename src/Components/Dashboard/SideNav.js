import React from 'react'

export const SideNav = () => {
  return (
    <nav style={{width:"300px",background:"#040440",position:"fixed",height:"100%"}}>
    <div className="relative">
    <div>
    <div className="group relative flex   rounded-lg p-4 items-center" style={{color:"white"}}>
          
          <div className='w-60 text-center'>
            <a href="#" className="font-semibold " style={{color:"white",fontSize:"20px",display:"flex",gap:"10px",textAlign:"center",justifyContent:"center"}}>
                <svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />  <polygon points="12 15 17 21 7 21 12 15" /></svg>
             
              Dashboard
            </a>
          </div>
          
        </div> 
    </div>    
        


  {/* <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4"> */}
   
      <div className="p-4 " style={{display:"flex",flexDirection:"column",gap:"5px"}}>
        <div className="group relative flex   rounded-lg p-1 items-center" style={{background:"#2d2d69",color:"white"}}>
          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-transparent-50 ">
            <svg className="h-6 w-6 text-white-600 " fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
            </svg>
          </div>
          <div className='w-60'>
            <a href="#" className="font-semibold " style={{color:"white"}}>
              Dashboard
            </a>
          </div>
          <div>
          <svg className="w-6 h-3 text-gray-400 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
</svg>
          </div>
        </div>
        {/* <div className="group relative flex   rounded-lg p-1 items-center" style={{color:"white"}}>
          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-transparent-50 ">
            <svg className="h-6 w-6 text-white-600 " fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
            </svg>
          </div>
          <div className='w-60'>
            <a href="#" className="font-semibold " style={{color:"white"}}>
              Analytics
            </a>
          </div>
          <div>
          <svg className="w-6 h-3 text-gray-400 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
</svg>
          </div>
        </div> */}
        <div className="group relative flex   rounded-lg p-1 items-center" style={{color:"white"}}>
          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-transparent-50 ">
          <svg class="h-5 w-5 " style={{color:"grey"}}  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="9" cy="19" r="2" />  <circle cx="17" cy="19" r="2" />  <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" /></svg>
          </div>
          <div className='w-60'>
            <a href="#" className="font-semibold " style={{color:"grey"}}>
              Product
            </a>
          </div>
          <div>
          <svg className="w-3 h-3 text-gray-400 text-grey" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
</svg>
          </div>
        </div>
        <div className="group relative flex   rounded-lg p-1 items-center" style={{color:"white"}}>
          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-transparent-50 ">
          <svg class="h-5 w-5 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="9" cy="7" r="4" />  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />  <path d="M16 11h6m-3 -3v6" /></svg>
          </div>
          <div className='w-60'>
            <a href="#" className="font-semibold " style={{color:"grey"}}>
              Customer
            </a>
          </div>
          <div>
          <svg className="w-3 h-3 text-gray-400 text-grey" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
</svg>
          </div>
        </div>
        <div className="group relative flex   rounded-lg p-1 items-center" style={{color:"white"}}>
          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-transparent-50 ">
          <svg class="h-5 w-5 text-grey-500" style={{color:"grey"}} viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="19" y1="5" x2="5" y2="19" />  <circle cx="6.5" cy="6.5" r="2.5" />  <circle cx="17.5" cy="17.5" r="2.5" /></svg>
          </div>
          <div className='w-60'>
            <a href="#" className="font-semibold " style={{color:"grey"}}>
              Income
            </a>
          </div>
          <div>
          <svg className="w-3 h-3 text-gray-400 text-grey" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
</svg>
          </div>
        </div>
        <div className="group relative flex   rounded-lg p-1 items-center" style={{color:"white"}}>
          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-transparent-50 ">
          <svg class="h-5 w-5 text-grey-500" style={{color:"grey"}} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M7 11v 8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" /></svg>
          </div>
          <div className='w-60'>
            <a href="#" className="font-semibold " style={{color:"grey"}}>
              Promote
            </a>
          </div>
          <div>
          <svg className="w-3 h-3 text-gray-400 text-grey" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
</svg>
          </div>
        </div>
        <div className="group relative flex   rounded-lg p-1 items-center" style={{color:"white"}}>
          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-transparent-50 ">
          <svg class="h-5 w-5 text-grey-500" style={{color:"grey"}}  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M8 13.5v-8a1.5 1.5 0 0 1 3 0v6.5m0 -6.5v-2a1.5 1.5 0 0 1 3 0v8.5m0 -6.5a1.5 1.5 0 0 1 3 0v6.5m0 -4.5a1.5 1.5 0 0 1 3 0v8.5a6 6 0 0 1 -6 6h-2a7 6 0 0 1 -5 -3l-2.7 -5.25a1.4 1.4 0 0 1 2.75 -2l.9 1.75" /></svg>
          </div>
          <div className='w-60'>
            <a href="#" className="font-semibold " style={{color:"grey"}}>
              Help
            </a>
          </div>
          <div>
          <svg className="w-3 h-3 text-gray-400 text-grey" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
</svg>
          </div>
        </div>
        {/* <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 items-center">
          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <svg className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
            </svg>
          </div>
          <div>
            <a href="#" className="font-semibold text-gray-900">
              Engagement
            </a>
          </div>
        </div>
        <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 items-center">
          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <svg className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
            </svg>
          </div>
          <div>
            <a href="#" className="font-semibold text-gray-900">
              Security
            </a>
          </div>
        </div>
        <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 items-center">
          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <svg className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>
          <div>
            <a href="#" className="font-semibold text-gray-900">
              Integrations
            </a>
          </div>
        </div>
        <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 items-center">
          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <svg className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </div>
          <div>
            <a href="#" className="font-semibold text-gray-900">
              Automations
            </a>
          </div>
        </div> */}
      </div>
   
  
  {/* </div> */}
</div>
    </nav>)
}
