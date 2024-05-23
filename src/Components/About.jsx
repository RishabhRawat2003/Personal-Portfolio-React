import React from 'react'
import { RiUserStarFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
const About = () => {
    return (
        <div className='w-[80%] h-auto py-5 mt-6 mx-auto shadow-lg rounded-xl shadow-gray-500 flex flex-col'>
            <div className='mx-auto font-newFont text-gray-700 text-sm '>Get To Know More</div>
            <div className='mx-auto font-newFont text-3xl font-bold md:text-4xl xl:text-5xl'>About Me</div>
            <div className='w-full h-auto flex flex-col md:flex-row md:justify-around my-5'>
                <div className='w-full h-auto md:w-[70%] flex items-center'><img src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="laptop Image" className='w-[80%] mx-auto rounded-2xl md:w-[60%]' /></div>
                <div className='w-full h-auto flex justify-around items-center mt-5'>
                    <div className='w-32 h-28 border-2 border-gray-700 flex flex-col rounded-3xl sm:w-52 md:w-44 lg:w-56 lg:h-32 xl:w-60 2xl:w-72 2xl:h-36'>
                        <RiUserStarFill className='mx-auto mt-2 xl:mt-3 2xl:mt-4' size={30} />
                        <p className='mx-auto font-bold font-newFont mt-2 lg:text-lg xl:text-xl 2xl:mt-3'>Experience</p>
                        <p className='mx-auto text-xs text-gray-600 font-newFont sm:text-base lg:text-lg xl:text-xl 2xl:mt-1'>Fresher</p>
                    </div>
                    <div className='w-32 h-28 border-2 border-gray-700 flex flex-col rounded-3xl sm:w-52 md:w-44 lg:w-56 lg:h-32 xl:w-60 2xl:w-72 2xl:h-36'>
                        <FaUsers className='mx-auto mt-2 xl:mt-3 2xl:mt-4' size={30} />
                        <p className='mx-auto font-bold font-newFont mt-2 lg:text-lg xl:text-xl 2xl:mt-3'>Education</p>
                        <p className='mx-auto text-xs text-gray-600 font-newFont sm:text-base lg:text-lg xl:text-xl 2xl:mt-1'>Bca Bachelor Degree</p>
                    </div>
                </div>
            </div>
            <div className='text-lg font-bold font-newFont w-[90%] mx-auto sm:text-2xl lg:text-3xl'>A Dedicated Front-end Developer based in New Delhi, India </div>
            <div className='text-sm font-newFont my-2 w-[90%] mx-auto text-gray-600 sm:text-base md:text-lg xl:text-xl'>As a Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, Javascript, React and TailwindCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collabrating with cross-functional teams to produce outstanding web applications.</div>
        </div>
    )
}

export default About