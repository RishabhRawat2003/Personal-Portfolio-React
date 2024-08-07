import { useState } from 'react'
import Header from './Components/Header'
import MainBody from './Components/MainBody'
import About from './Components/About'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <>
      <div className='h-auto w-full bg-slate-100 dark:bg-slate-700'>
        <Header />
        <MainBody />
        <Analytics />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
