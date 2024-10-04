import React, { useRef } from 'react';
import GYM from './Images/Gym.mp4';

function Project3() {
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
          src={GYM}
          alt="Project 2 Image"
          className='w-full mb-5 rounded-t-2xl md:hover:opacity-85'
          muted
        />
        <p className='w-full px-2 text-2xl font-semibold font-newFont dark:text-white'>
          GYM Site
        </p>
        <p className='w-full px-2 text-sm text-gray-700 lg:text-lg dark:text-white my-2'>I created a gym website based on a design from Figma, using React, Tailwind CSS, and React Router DOM for seamless navigation and responsive UI.</p>
      </div>
      <div className='w-full px-2 h-auto flex justify-around items-center my-5'>
        <a
          href="https://powerplaygym.vercel.app/"
          target='_blank'
          rel='noopener noreferrer'
          className='py-2.5 w-24 border-2 border-gray-700 font-semibold active:bg-gray-700 active:text-white md:hover:bg-gray-700 md:hover:text-white cursor-pointer rounded-full text-center lg:py-3 lg:w-28 dark:active:bg-gray-700 dark:active:text-white dark:border-gray-300 dark:text-white md:dark:hover:bg-gray-400 md:dark:hover:text-black'
        >
          Live
        </a>
        <a
          href="https://github.com/RishabhRawat2003/Gym-Site-React"
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

export default Project3;
