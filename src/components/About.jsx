import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen mx-auto bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'> 
                        <p>Hello Everyone, I am Blal, I am React Js developer with 1 years of experience. </p>
                    </div>
                    <div>
                        <p>I have expertise in React Js, React Redux, Hooks, Context Api, Reactstrap, Html, CSS, TailwindCss,<b/>I can develop any kind of front end using React Js according to your business requirements.</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About