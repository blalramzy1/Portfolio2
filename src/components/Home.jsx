import React from 'react'
import { HiArrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px]  mx-auto px-8 justify-center flex flex-col h-full'>
        <p className='text-pink-600 py-1'>Hi. my name is</p>
        <h1 className='text-4xl py-1 sm:text-7xl font-bold text-[#ccd6f6]'>Blal Ramzy</h1>
        <h2 className='text-4xl py-1 sm:text-7xl font-bold text-[#8892b0]'>I'm a ReactJS Devoloper</h2>
        <p className='text-[#8892b0] py-4 mx-w-[700px]'>I'm a Frontend Web Developer, I mastered React Js, HTML, CSS, JavaScript, TailwindCss. I can convert your design into pixel perfect frontend website. I provide well structured.</p>
        <div>
          <button className='text-white group border-2 px-4 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 '>View Work
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowRight className=' ml-4'/>
          </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home