import { useState } from 'react'
import Header from './Components/Header'
import MainBody from './Components/MainBody'


function App() {

  return (
    <>
      <div className='h-screen w-full bg-slate-100'>
        <Header />
        <MainBody />
      </div>
    </>
  )
}

export default App
