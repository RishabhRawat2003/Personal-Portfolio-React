import React, { useMemo } from 'react';
import { RiUserStarFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import Skills from './Skills';

const About = () => {
    const aboutHeading = useMemo(() => (
        <>
            <div className='mx-auto font-newFont text-gray-700 text-sm md:text-base dark:text-gray-300'>Get To Know More</div>
            <div className='mx-auto font-newFont text-3xl font-bold md:text-4xl xl:text-5xl dark:text-white'>About Me</div>
        </>
    ), []);

    const descriptionText = useMemo(() => (
        <p className='text-sm font-newFont my-2 w-[90%] mx-auto text-gray-600 sm:text-base md:text-lg xl:text-xl dark:text-white'>
            As a MERN Stack Developer, I bring a strong command of MongoDB, Express, React, and Node.js, alongside expertise in HTML, CSS, JavaScript, and TailwindCSS.
            I excel in building full-stack applications with smooth, responsive user experiences. My skill set includes implementing authentication systems using JWT
            and Bcrypt for security, as well as integrating Cloudinary for seamless image management. I thrive in writing clean, optimized code and collaborating with
            cross-functional teams to deliver dynamic, high-performing web applications.
        </p>
    ), []);

    const imageSection = useMemo(() => (
        <div className='w-full h-auto md:w-[70%] flex items-center'>
            <img 
                src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                alt="Laptop Image" 
                className='w-[80%] mx-auto rounded-2xl md:w-[60%]' 
                loading="lazy"
            />
        </div>
    ), []);

    return (
        <div id='About' className='w-[80%] h-auto py-5 mt-6 mx-auto shadow-lg rounded-xl shadow-gray-500 flex flex-col dark:shadow-gray-900'>
            {aboutHeading}
            <div className='w-full h-auto flex flex-col md:flex-row md:justify-around my-5'>
                {imageSection}
                <div className='w-full h-auto flex justify-around items-center mt-5'>
                    <InfoCard
                        Icon={RiUserStarFill}
                        title="Experience"
                        text="Fresher"
                    />
                    <InfoCard
                        Icon={FaUsers}
                        title="Education"
                        text="BCA Passout (2024)"
                    />
                </div>
            </div>
            <div className='text-lg font-bold font-newFont w-[90%] mx-auto sm:text-2xl lg:text-3xl'>
                A Dedicated MERN Stack Developer based in New Delhi, India
            </div>
            {descriptionText}
            <Skills />
        </div>
    );
};

const InfoCard = ({ Icon, title, text }) => (
    <div className='w-32 h-28 border-2 border-gray-700 flex flex-col rounded-3xl sm:w-52 md:w-44 lg:w-56 lg:h-32 xl:w-60 2xl:w-72 2xl:h-36 dark:border-gray-400'>
        <Icon className='mx-auto mt-2 xl:mt-3 2xl:mt-4' size={30} />
        <p className='mx-auto font-bold font-newFont mt-2 lg:text-lg xl:text-xl 2xl:mt-3'>{title}</p>
        <p className='mx-auto text-xs text-gray-600 font-newFont sm:text-base lg:text-lg xl:text-xl 2xl:mt-1 dark:text-white'>{text}</p>
    </div>
);

export default About;
