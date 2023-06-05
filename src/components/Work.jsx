import React from 'react'

import {data} from '../Data'

const Work = () => {

  const project = data;

  return (
    <div className='w-full md:h-screen mx-auto text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>/Check out some of my recent work/</p>
            </div>

            {/* container for projects */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

              
              {/* grid item */}
              
              {project.map((item,index)=>(


              <div key={index}
               style={{ backgroundImage: `url(${item.image})` }}
              className=' shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div'>

                {/* Hover Effect */}
                <div className=' opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font bold text-white tracking-wider'>
                  {item.name}
                  </span>
                  <div>
                    <a href={item.github}>
                      <button className='text-center rounded-lg px-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href={item.live}>
                      <button className='text-center rounded-lg px-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                  </div>
                </div>
              </div>
              ))}
            </div>
            

        </div>

        
    </div>
  )
}

export default Work