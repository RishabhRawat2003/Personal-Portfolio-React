import React, { useState, useEffect, useMemo } from 'react'
import { BiSolidMoon } from "react-icons/bi";
import { LuSunDim } from "react-icons/lu";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";


function Header() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });
  const [bars, setBars] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = Math.floor(window.scrollY);
      if (scroll > 40) {
        setBars(false);
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    const debounceScroll = () => {
      let timeout;
      return () => {
        clearTimeout(timeout);
        timeout = setTimeout(handleScroll, 100);
      };
    };

    const debouncedHandleScroll = debounceScroll();
    window.addEventListener('scroll', debouncedHandleScroll);

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, []);

  useEffect(() => {
    const domElem = document.documentElement; 
    if (theme) {
      domElem.classList.add('dark');
    } else {
      domElem.classList.remove('dark');
    }
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const Links = useMemo(() => (
    <>
      <span className='text-sm hidden font-semibold cursor-pointer hover:text-blue-500 hover:underline-offset-8 hover:underline sm:inline font-mono sm:text-lg lg:text-xl dark:text-white dark:hover:text-blue-500'><a href="#About">About</a></span>
      <span className='text-sm hidden font-semibold cursor-pointer hover:text-blue-500 hover:underline-offset-8 hover:underline sm:inline font-mono sm:text-lg lg:text-xl dark:text-white dark:hover:text-blue-500'><a href="#Projects">Projects</a></span>
      <span className='text-sm hidden font-semibold cursor-pointer hover:text-blue-500 hover:underline-offset-8 hover:underline sm:inline font-mono sm:text-lg lg:text-xl dark:text-white dark:hover:text-blue-500'><a href="#Contact">Contact</a></span>
    </>
  ), []);

  return (
    <header className={sticky ? 'h-16 w-full flex justify-between sticky top-0 bg-slate-200 dark:bg-slate-600 items-center z-20 transition-all duration-200 lg:h-20' : 'h-16 w-full flex justify-between dark:bg-slate-700 transition-all duration-200 bg-slate-100 items-center lg:h-20'}>
      <div className='text-xl font-semibold ml-5 cursor-pointer font-newFont sm:text-2xl lg:ml-10 lg:text-3xl xl:ml-20 dark:text-white'><a href="#">Rishabh.Dev</a></div>
      <div className='flex gap-5 mr-5 sm:gap-8 lg:gap-14 lg:mr-10 xl:gap-20 xl:mr-20'>
        {Links}
        <span className='sm:hidden' onClick={() => setBars(!bars)}>{bars ? <IoCloseOutline className='cursor-pointer' size={20} color={theme ? 'white' : 'black'} /> : <FaBarsStaggered className="cursor-pointer" color={theme ? 'white' : 'black'} size={20} />}</span>
        <span onClick={() => setTheme(!theme)} className='h-5 w-5 flex items-center justify-center cursor-pointer hover:shadow-gray-400 rounded-full shadow-lg shadow-gray-300 dark:shadow-gray-900 sm:w-7 sm:h-7 lg:w-7.5 lg:h-7.5'>{theme ? <LuSunDim color={theme ? 'white' : 'black'} /> : <BiSolidMoon />}</span>
      </div>
      <div className={bars ? 'absolute h-36 w-32 bg-slate-100 border-[1px] shadow-md dark:bg-slate-600 dark:border-slate-600 dark:shadow-gray-700 shadow-gray-400 gap-2 right-10 top-14 rounded-xl flex flex-col duration-200' : 'hidden'}>
        <span className='text-lg font-semibold cursor-pointer mx-2 active:text-blue-500 my-1.5 rounded-2xl dark:text-white dark:active:text-blue-500'><a href="#About">About</a></span>
        <span className='text-lg font-semibold cursor-pointer mx-2 active:text-blue-500 my-1.5 dark:text-white dark:active:text-blue-500'><a href="#Projects">Projects</a></span>
        <span className='text-lg font-semibold cursor-pointer mx-2 active:text-blue-500 my-1.5 rounded-2xl dark:text-white dark:active:text-blue-500'><a href="#Contact">Contact</a></span>
      </div>
    </header>
  )
}

export default Header;
