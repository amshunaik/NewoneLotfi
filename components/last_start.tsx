import React from 'react'

const last_start = () => {
  return (
    <div className=' relative text-center px-8 py-20 flex flex-col justify-center items-center'>
        <p className='text-3xl sm:text-4xl font-bold mb-8'>Get Started Today</p>
        <p className="text-md px-8 font-light text-gray-500 sm:w-1/2 mx-auto sm:text-[10px]">We look forward to serving the needs of used car dealers across the Philippines and helping them thrive in this dynamic market.</p>
        <button type="button" className="group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,box-shadow] focus:z-10 focus:outline-none text-white bg-[#3600D1] border border-transparent enabled:hover:bg-[#3600D1] focus:ring-0 focus:ring-transparent dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:focus:ring-purple-900 rounded-lg mt-9">
            <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm"><a href="/contact" className="text-white">Inquire Now</a></span></button>
      
    </div>
  )
}

export default last_start
