import { useState } from 'react'
import Header from './Components/Header'
import MainBody from './Components/MainBody'
import About from './Components/About'


function App() {

  return (
    <>
      <div className='h-auto w-full bg-slate-100'>
        <Header />
        <MainBody />
        <About />
      </div>
    </>
  )
}

export default App
