// import React from 'react'
// import Project4image from './Images/Project4.png'

// function Project4() {
//   return (
//     <div className='w-80 h-auto border-2 border-gray-700 rounded-2xl flex flex-col justify-center dark:border-gray-300'>
//       <img src={Project4image} alt="Project 1 Image" className='w-[90%] mx-auto my-5 rounded-xl md:hover:opacity-85'/>
//       <p className='w-[90%] mx-auto text-2xl font-semibold text-center font-newFont lg:text-3xl dark:text-white'>GYM Site</p>
//       <div className='w-[90%] mx-auto h-auto flex justify-around items-center my-5'>
//         <a href="https://powerplaygym.vercel.app/" target='_blank' className='py-2.5 w-24 border-2 border-gray-700 font-semibold active:bg-gray-700 active:text-white md:hover:bg-gray-700 md:hover:text-white cursor-pointer rounded-full text-center lg:py-3 lg:w-28 dark:active:bg-gray-700 dark:active:text-white dark:border-gray-300 dark:text-white md:dark:hover:bg-gray-400 md:dark:hover:text-black'>Live</a>
//         <a href="https://github.com/RishabhRawat2003/Gym-Site-React" target='_blank' className='py-2.5 w-24 border-2 border-gray-700 font-semibold active:bg-gray-700 active:text-white md:hover:bg-gray-700 md:hover:text-white cursor-pointer rounded-full text-center lg:py-3 lg:w-28 dark:active:bg-gray-700 dark:active:text-white dark:border-gray-300 dark:text-white md:dark:hover:bg-gray-400 md:dark:hover:text-black'>Github</a>
//       </div>
//     </div>
//   )
// }

// export default Project4


import React, { useRef } from 'react';
import Chat from './Images/Chat.mp4';

function Project4() {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='w-80 h-auto border-2 border-gray-700 rounded-2xl flex flex-col justify-between hover:shadow-xl dark:hover:shadow-2xl dark:border-gray-300 cursor-pointer'>
      <div>
        <video
          ref={videoRef}
          src={Chat}
          alt="Project 2 Image"
          className='w-full mb-5 rounded-t-2xl md:hover:opacity-85'
          muted
        />
        <p className='w-full px-2 text-2xl font-semibold font-newFont dark:text-white'>
          Social Media (MERN Stack)
        </p>
        <p className='w-full px-2 text-sm text-gray-700 lg:text-lg dark:text-white my-2'>I created a Social Media app using the MERN stack, incorporating JWT for authentication, Cloudinary for media storage, and Tailwind CSS for styling.</p>
      </div>
      <div className='w-full px-2 h-auto flex justify-around items-center my-5'>
        <a
          href="https://drive.google.com/file/d/1bbMiz8qpFNKB4q7op_zqtr_fdFaH8fV3/view?usp=drive_linkhttps://powerplaygym.vercel.app/"
          target='_blank'
          rel='noopener noreferrer'
          className='py-2.5 w-24 border-2 border-gray-700 font-semibold active:bg-gray-700 active:text-white md:hover:bg-gray-700 md:hover:text-white cursor-pointer rounded-full text-center lg:py-3 lg:w-28 dark:active:bg-gray-700 dark:active:text-white dark:border-gray-300 dark:text-white md:dark:hover:bg-gray-400 md:dark:hover:text-black'
        >
          Video
        </a>
        <a
          href="https://github.com/RishabhRawat2003/Chat-App-MERN-STACK-"
          target='_blank'
          rel='noopener noreferrer'
          className='py-2.5 w-24 border-2 border-gray-700 font-semibold active:bg-gray-700 active:text-white md:hover:bg-gray-700 md:hover:text-white cursor-pointer rounded-full text-center lg:py-3 lg:w-28 dark:active:bg-gray-700 dark:active:text-white dark:border-gray-300 dark:text-white md:dark:hover:bg-gray-400 md:dark:hover:text-black'
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default Project4;
