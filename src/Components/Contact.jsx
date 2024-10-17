import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { useEffect } from 'react';

function Contact() {

    useEffect(() => {
        const form = document.forms['submit-to-google-sheet']
        const scriptURL = 'https://script.google.com/macros/s/AKfycbynE-azuI77zXMIibwVs65pP1MH7NJJk893RJyhV_Tnxh_5CYwAi7ZwtouGzhog5X5C/exec'
        const msg = document.getElementById('text')
        form.addEventListener('submit', e => {
            e.preventDefault();
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    msg.innerHTML = "Message sent successfully "
                    setTimeout(() => {
                        msg.innerHTML = ""
                    }, 5000);
                    form.reset()
                })
                .catch(error => console.error('Error!', error.message));
        })
    },[])

    return (
        <div id='Contact' className='w-[80%] h-auto py-5 mt-6 mx-auto shadow-lg rounded-xl shadow-gray-500 flex flex-col dark:shadow-gray-900'>
            <p className='w-full h-auto text-center text-sm font-newFont text-gray-700 md:text-base dark:text-gray-300'>Get in Touch</p>
            <p className='w-full h-auto text-center text-3xl font-newFont font-semibold md:text-4xl xl:text-5xl dark:text-white'>Contact Me</p>
            <form name='submit-to-google-sheet' className='w-full h-auto flex flex-col'>
                <div className='w-full h-auto flex flex-col mt-4 gap-3 md:flex-row md:w-[90%] md:mx-auto lg:w-[85%]'>
                    <input type="text" name='Name' placeholder='Your Name' className='border-[1px] border-gray-700 bg-slate-100 w-[85%] mx-auto px-3 h-9 outline-none rounded-lg md:text-lg lg:h-10 dark:border-white dark:bg-gray-300' required />
                    <input type="email" name='Email' placeholder='Your Email' className='border-[1px] border-gray-700 bg-slate-100 w-[85%] mx-auto px-3 h-9 outline-none rounded-lg md:text-lg lg:h-10 dark:border-white dark:bg-gray-300' required />
                </div>
                <textarea placeholder='Your Message' name='Message' className='border-[1px] border-gray-700 bg-slate-100 w-[85%] mt-4 min-h-60 py-2 mx-auto md:text-lg px-3 outline-none rounded-lg md:max-h-56 dark:border-white dark:bg-gray-300 resize-none'></textarea>
                <p className='w-[85%] mx-auto my-3 text-gray-700 font-newFont text-sm md:text-base xl:text-lg dark:text-white'><span className='font-bold text-black'>Note :</span> The message will be sent to the owner of this page.</p>
                <div className='w-[85%] h-auto my-3 mx-auto'>
                    <button className='w-32 h-10 border-2 border-gray-700 text-black font-semibold font-newFont active:text-white active:bg-gray-700 md:hover:text-white md:hover:bg-gray-700 rounded-full dark:active:bg-gray-700 dark:active:text-white dark:border-gray-300 dark:text-white md:dark:hover:bg-gray-400 md:dark:hover:text-black'>Submit</button>
                </div>
            </form>
            <p className='w-[85%] mx-auto text-[#61b752]' id='text'></p>
            <div className='w-full h-auto flex justify-center my-5'>
                <div className='h-24 w-[80%] border-2 border-gray-500 flex flex-col justify-center items-center rounded-3xl gap-2 md:flex-row md:w-auto md:px-4 lg:gap-4 xl:gap-6 dark:border-gray-300'>
                    <p className='flex items-center'>
                        <span className='mx-2 dark:text-white'><IoMdMail size={30} /></span>
                        <span className='group text-xs sm:text-base lg:text-xl dark:text-white'><a href="mailto:rajputrishabh359@gmail.com">rajputrishabh359@gmail.com</a></span>
                    </p>
                    <p className='flex items-center'>
                        <span className='mx-2 dark:text-white'><FaLinkedin size={30} /></span>
                        <span className='text-base lg:text-xl dark:text-white'><a href="https://www.linkedin.com/in/rishabh-rawat-371453228">Linkedin</a></span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact