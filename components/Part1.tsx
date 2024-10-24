import React from 'react'
import Image from 'next/image'
import dealer from '@/public/dealer-loans-icon.png'
import dmsicon from '@/public/dmsicon.png'
import layout1 from "@/public/layout1.png";
import regulated from "@/public/Regulated.png"
const Part1 = () => {
  return (
    <div className=' relative z-20 justify-center mt-[40px] '>
        
        <div className='text-center'>
                <h1 className='sm:text-5xl text-3xl sm:mb-8 mb-4 font-bold px-4 sm:px-20 xl:px-20 2xl:px-72 text-black '>Grow your dealership with car loans <br/>and digital tools for dealers</h1>
                <p className="text-gray-500 font-light px-12 sm:px-20 2xl:px-20 sm:w-2/3 2xl:w-1/2 mx-auto sm:text-xl mt-[20px]">We enable dealers to buy more cars through our inventory 
                loan solutions and sell cars more efficiently through our Dealership Management System with its inventory management, marketing solutions and market insights</p>
           
                <button type="button" className="group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,
                text-decoration-color,fill,box-shadow] focus:z-10 focus:outline-none 
                text-white bg-[#3600D1] border border-transparent enabled:hover:bg-[#3600D1] focus:ring-0 focus:ring-transparent dark:bg-purple-600 
                dark:enabled:hover:bg-purple-700 dark:focus:ring-purple-900 rounded-lg mx-auto mt-6 mb-5"><span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm"><a href="/app/signup/dealer">Inquire now</a></span></button>
            
     
        </div >

        <Image src={layout1}alt="" className=' mx-auto object-contain' width={0} height={0}/>
        <div>
            <p className='mx-auto text-center text-gray-500 mt-6 '>Regulated by</p>
            <Image src={regulated} alt="" fetchPriority='high' decoding='async' className='justify-center w-[190px] mx-auto ' width={190} height={0} />

        </div>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 sm:px-8 md:px-20 2xl:px-42 mt-10 mx-4 py-2 border-t border-b justify-center'>
            <div className='sm:pr-8 md:pr-4 sm:pt-10'>
            <div className='mt-10 '>
                <h2 className='font-bold text-2xl sm:text-3xl md:text-3xl'>
                Everything You Need to Grow Your Business
                </h2>
                <p className='text-gray-500 text-sm sm:text-base md:text-lg mt-4 sm:mt-6 md:mt-10 font-light' >
                OneLot is your trusted lending and financing partner, exclusively tailored for used car dealerships. 
                We also offer digital tools for streamlined operations and growth of your dealership.
                </p>
            </div>
            </div>
            <div>
                <ul className='flex flex-col gap-8 sm:gap-6 md:gap-8 2xl:pr-32'>
                    <li >

                        <div className='flex items-center mb-4 gap-2'>
                            <Image width={0} height={0} src={dealer} alt="" />
                            <h2 className='font-bold text-lg sm:text-xl'>Dealer Inventory Loans</h2>
                        </div>

                        <div className=''>
                            <p className='mb-4 my-4 sm:ml-10 font-medium text-[#7E3AF2]'>Accelerate your growth with tailored loan solutions.</p>
                            <p className='mb-4 text-gray-500 text-sm sm:ml-10 sm:text-base md:text-lg'>Get comprehensive car financing solutions, unlock the potential of your dealership,
                                 and take it to new heights</p>
                            
                            <p className='sm:ml-10 mt-4 font-medium font-[#57009C]'><a href="">Learn More  &rarr;</a></p>
                        </div>

                    </li>
                    <li>
                        <div className='flex items-center mb-4 gap-2'>
                            <Image width={0} height={0} src={dmsicon} alt="" />
                            <h2  className='font-bold text-lg sm:text-xl'>Dealership Management System</h2>
                        </div>

                        <p className='mb-4 my-4 sm:ml-10 font-medium text-[#7E3AF2]'>Enhance Efficiency and Sales with Free Digital Tools for Car Dealerships.</p>
                        <p className='mb-4 text-gray-500 text-sm sm:ml-10 sm:text-base md:text-lg'>OneLot offers a suite of powerful digital tools designed to optimize 
                            your dealership&apos;s operations.</p>
                        <p className='sm:ml-10 mt-4 font-medium font-[#57009C]'> <a href="">Learn More  &rarr;</a></p>
                       

                    </li>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Part1


// h-[1000px] w-[1300px]
