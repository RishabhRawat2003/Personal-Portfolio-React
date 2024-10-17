import React, { useRef, useCallback } from 'react';
import OTT from './Images/Ott.mp4';

function Project2() {
  const videoRef = useRef(null);

  const handleMouseEnter = useCallback(() => {
    videoRef.current?.play();
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  const ButtonLink = ({ href, children }) => (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`py-2.5 w-24 border-2 border-gray-700 font-semibold 
        active:bg-gray-700 active:text-white md:hover:bg-gray-700 
        md:hover:text-white cursor-pointer rounded-full text-center 
        lg:py-3 lg:w-28 dark:active:bg-gray-700 dark:active:text-white 
        dark:border-gray-300 dark:text-white md:dark:hover:bg-gray-400 
        md:dark:hover:text-black`}
    >
      {children}
    </a>
  );

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='w-80 h-auto border-2 border-gray-700 rounded-2xl 
                 flex flex-col justify-between hover:shadow-xl 
                 dark:hover:shadow-2xl dark:border-gray-300 cursor-pointer'
    >
      <div>
        <video
          ref={videoRef}
          src={OTT}
          className='w-full mb-5 rounded-t-2xl md:hover:opacity-85'
          muted
          aria-label="Preview of OTT Platform project"
        />
        <p className='px-2 text-2xl font-semibold font-newFont dark:text-white'>
          OTT Platform
        </p>
        <p className='px-2 text-sm text-gray-700 lg:text-lg dark:text-white my-2'>
          I built an OTT platform using React, React Redux, React Router DOM, Tailwind CSS, and various APIs to fetch movie and series details.
        </p>
      </div>
      <div className='w-full px-2 flex justify-around items-center my-5'>
        <ButtonLink href="https://cinamania.netlify.app/">Live</ButtonLink>
        <ButtonLink href="https://github.com/RishabhRawat2003/Movie-APP-JS.git">Github</ButtonLink>
      </div>
    </div>
  );
}

export default Project2;
