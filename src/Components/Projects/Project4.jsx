import React from 'react'
import Project4image from './Images/Project4.png'

function Project4() {
  return (
    <div className='w-80 h-auto border-2 border-gray-700 rounded-2xl flex flex-col justify-center dark:border-gray-300'>
      <img src={Project4image} alt="Project 1 Image" className='w-[90%] mx-auto my-5 rounded-xl md:hover:opacity-85'/>
      <p className='w-[90%] mx-auto text-2xl font-semibold text-center font-newFont lg:text-3xl dark:text-white'>GYM Site</p>
      <div className='w-[90%] mx-auto h-auto flex justify-around items-center my-5'>
        <a href="https://powerplaygym.vercel.app/" target='_blank' className='py-2.5 w-24 border-2 border-gray-700 font-semibold active:bg-gray-700 active:text-white md:hover:bg-gray-700 md:hover:text-white cursor-pointer rounded-full text-center lg:py-3 lg:w-28 dark:active:bg-gray-700 dark:active:text-white dark:border-gray-300 dark:text-white md:dark:hover:bg-gray-400 md:dark:hover:text-black'>Live</a>
        <a href="https://github.com/RishabhRawat2003/Gym-Site-React" target='_blank' className='py-2.5 w-24 border-2 border-gray-700 font-semibold active:bg-gray-700 active:text-white md:hover:bg-gray-700 md:hover:text-white cursor-pointer rounded-full text-center lg:py-3 lg:w-28 dark:active:bg-gray-700 dark:active:text-white dark:border-gray-300 dark:text-white md:dark:hover:bg-gray-400 md:dark:hover:text-black'>Github</a>
      </div>
    </div>
  )
}

export default Project4