import React, { useState , useEffect} from 'react'
import { BiSolidMoon } from "react-icons/bi";
import { LuSunDim } from "react-icons/lu";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

function Header() {
    const [theme , setTheme ] = useState(false)
    const [bars , setBars] = useState(false)

    useEffect(()=>{
        const themes = JSON.parse(localStorage.getItem('theme'))
        if(themes) setTheme(themes)
        else return
      },[])
    
    
      useEffect(()=>{
        const domElem = document.querySelector('html')
        if (theme){
          domElem.classList.add('dark')
          localStorage.setItem('theme',JSON.stringify(theme))
        }else{
          domElem.classList.remove('light','dark')
          localStorage.setItem('theme',JSON.stringify(theme))
        }
    
      },[theme])

  return (
    <header className='h-16 w-full flex justify-between items-center lg:h-20'>
        <div className='text-xl font-semibold ml-5 cursor-pointer font-newFont sm:text-2xl lg:ml-10 lg:text-3xl xl:ml-20'>Rishabh.Dev</div>
        <div className='flex gap-5 mr-5 sm:gap-8 lg:gap-14 lg:mr-10 xl:gap-20 xl:mr-20'>
            <span className='text-sm hidden font-semibold cursor-pointer sm:inline font-mono sm:text-lg lg:text-xl '>About</span>
            <span className='text-sm hidden font-semibold cursor-pointer sm:inline font-mono sm:text-lg lg:text-xl'>Projects</span>
            <span className='text-sm hidden font-semibold cursor-pointer sm:inline font-mono sm:text-lg lg:text-xl'>Contact</span>
            <span className='sm:hidden' onClick={()=>setBars(!bars)}>{bars ? <IoCloseOutline className='cursor-pointer' size={20}/>: <FaBarsStaggered className="cursor-pointer" size={20}/> }</span>
            <span onClick={()=>setTheme(!theme)} className='h-5 w-5 flex items-center justify-center cursor-pointer hover:shadow-gray-400 rounded-full shadow-lg shadow-gray-300 sm:w-7 sm:h-7 lg:w-7.5 lg:h-7.5'>{theme ? <LuSunDim /> :<BiSolidMoon />}</span>
        </div>
        <div className={bars ? 'absolute h-36 w-32 bg-slate-100 border-[1px] shadow-md shadow-gray-400 gap-2 right-10 top-14 rounded-xl flex flex-col duration-200' :'hidden'}>
        <span className='text-lg font-semibold cursor-pointer mx-2 my-1.5 rounded-2xl'>About</span>
            <span className='text-lg font-semibold cursor-pointer mx-2 my-1.5'>Projects</span>
            <span className='text-lg font-semibold cursor-pointer mx-2 my-1.5 rounded-2xl'>Contact</span>
        </div>
    </header>
  )
}

export default Header