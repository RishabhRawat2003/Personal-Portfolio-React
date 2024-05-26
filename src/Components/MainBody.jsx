import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function MainBody() {

    const openPDF = () => {
        window.open('../../Rishabh_CV.pdf', '_blank');
    };

    return (
        <div className='w-[80%] h-auto py-5 mt-6 mx-auto shadow-lg rounded-xl shadow-gray-500 flex flex-col'>
            <div className='w-full h-auto flex flex-col sm:flex-row-reverse'>
                <div className='w-full h-auto mt-5'>
                    <img src="https://pics.craiyon.com/2023-10-09/527a59dafdb64eaba41c0e3e1cc632c3.webp" alt="Image" className='h-40 rounded-full mx-auto lg:h-48 xl:h-56' />
                </div>
                <div className='w-full h-auto flex flex-col lg:my-8'>
                    <p className='mx-auto mt-4 font-newFont sm:text-lg lg:text-xl'>Hello, I'm</p>
                    <p className='mx-auto mt-1 text-3xl font-medium font-newFont text-blue-500 sm:text-4xl lg:text-5xl'>Rishabh Rawat</p>
                    <p className='mx-auto font-bold text-lg font-newFont text-gray-500 sm:text-xl'>Frontend Developer</p>
                    <p className='mx-auto mt-4 font-newFont font-medium w-[95%] text-lg lg:text-xl xl:text-2xl xl:w-[80%]'><span className='text-blue-500 font-semibold'>Web & Frontend Developer</span> with a passion for building creative solutions with aesthetic interfaces.</p>
                </div>
            </div>
            <div className='w-full h-auto flex flex-col md:items-center mt-8 md:flex-row lg:mb-5'>
                <div className='w-full h-auto flex justify-center items-center gap-5 sm:gap-10 md:justify-start md:w-[150%] md:pl-10 lg:pl-20 lg:gap-14 lg:w-[100%]'>
                    <div className='p-3 rounded-full font-medium font-newFont border-2 border-black cursor-pointer active:text-white active:bg-gray-800 sm:px-4 md:hover:bg-gray-800 sm:text-lg lg:px-6 md:hover:text-white' onClick={openPDF}>Download CV</div>
                    <a href='#Contact' className='p-3 rounded-full font-medium font-newFont border-2 text-white bg-gray-800 border-black active:text-white cursor-pointer sm:px-4 active:bg-black md:hover:bg-black sm:text-lg lg:px-6 md:hover:text-white'>Contact Info</a>
                </div>
                <div className='w-full h-auto mt-8 gap-5 flex justify-center items-center md:gap-10 md:mt-0 lg:gap-14'>
                    <a href="https://github.com/RishabhRawat2003" target='_blank'><FaGithub className='cursor-pointer active:text-blue-500 md:hover:text-blue-500' size={35} /></a>
                    <a href="https://x.com/simpleman2003" target='_blank'><FaXTwitter className='cursor-pointer active:text-blue-500 md:hover:text-blue-500' size={35} /></a>
                    <a href="https://www.linkedin.com/in/rishabh-rawat-371453228" target='_blank'><FaLinkedin className='cursor-pointer active:text-blue-500 md:hover:text-blue-500' size={35} /></a>
                </div>
            </div>
        </div>
    )
}

export default MainBody