import React from 'react'
import Project1 from './Projects/Project1'
import Project2 from './Projects/Project2'
import Project3 from './Projects/Project3'
import Project4 from './Projects/Project4'

function Project() {
  return (
    <div id='Projects' className='w-[80%] h-auto py-5 mt-6 mx-auto shadow-lg rounded-xl shadow-gray-500 flex flex-col dark:shadow-gray-900'>
        <p className='mx-auto text-sm font-newFont text-gray-600 md:text-base dark:text-gray-300'>Browse My Recent</p>
        <p className='mx-auto text-3xl font-bold font-newFont md:text-4xl xl:text-5xl dark:text-white'>Projects</p>
        <div className='w-[90%] mx-auto h-auto flex flex-wrap gap-5 my-5 justify-center'>
            <Project4 />
            <Project1 />
            <Project2 />
            <Project3 />
        </div>
    </div>
  )
}

export default Project