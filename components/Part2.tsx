import React from 'react'
import Image from 'next/image'
import car1 from "@/public/car1.png"
import circle from "@/public/check-circle.png"
import car2 from "@/public/car2.png"
const Part2 = () => {
  return (
    <div className='relative'>
        <div className='flex flex-col sm:flex-row w-full bg-gray-50 sm:py-16 py-5 py-4 px-4 sm:px-0 gap-12'>
            <div className=' flex-none order-2 sm:order-1 mb-2 sm:mb-[150px] '>
                <Image src={car1}alt="" className='  sm:w-[466px] xl:w-[800px]' width={0} height={0}  />
            </div>
            <div className='flex-1 order-1 md:order:2  '>
                <div className='w-full '>
                <h1 className='text-black text-2xl sm:text:3xl md:text-4xl font-bold' >Car Financing</h1>
                <p className='text-black text-lg sm:text-xl md:text:2xl font-semibold mt-8 mb-4'>Dealer Inventory Loans</p>
                <p className='text-gray-500 font-light text-sm sm:text-base md:text-lg pr-4'>OneLot’s working capital loans allow car dealers to buy more cars and 
                    capitalize on opportunities you would otherwise have missed.
                     We transfer the money to your account within 6 hours.</p>
                <hr className='my-7'/>
                <div className='pr-4'>
                    <div className='flex gap-2 items-center'>
                        <Image src={circle} alt="" className='w-4 h-4' width={4} height={4} />
                        <p className='font-semi-bold text-black text-sm sm:text-base md:text:lg'>Interest as low as 1.8% per month with daily calculation of interest</p>
                    </div>
                    <div  className='flex gap-2 items-center'>
                        <Image  src={circle}alt="" className='w-4 h-4'  width={4} height={4}/>
                        <p className=' text-black text-sm sm:text-base md:text:lg'>Financing up to 70% of the vehicle purchase</p>
                    </div>
                    <div  className='flex gap-2 items-center'>
                        <Image  src={circle} alt="" className='w-4 h-4'  width={4} height={4}/>
                        <p className=' text-black text-sm sm:text-base md:text:lg' >Financing period up to 90 days with a flexible repayment schedule at any point</p>
                    
                    </div>
                    </div>
                    <hr className='my-7'/>
    
                    <p className='text-gray-500 font-light text-sm sm:text-base md:text-lg'>Use OneLot&apos;s financing solution today, grow the number of cars in your lot, and increase your profits.</p>
                    <button type="button" className="group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,
                    border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none text-white bg-[#3600D1] border border-transparent
                     enabled:hover:bg-[#3600D1] focus:ring-0 focus:ring-transparent dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:focus:ring-purple-900 
                     rounded-lg mt-6 mb-4 sm:mb-0"><span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm">
                        <a href=''>View Loans &rarr; </a></span></button>
               
                </div>
               
             </div>
        </div>
  
        <div>
            <div className='flex flex-col sm:flex-row bg-gray-50 sm:py-16 py-5 pb-4 px-4 sm:px-0'>
            
                <div className='flex-1 order-1 md:order-2'>
                    <div className=' md-w-3/4 md:ml-24 pr-20'>
                    <h1 className='text-black text-2xl sm:text:3xl md:text-4xl font-bold mb-4'>Dealership Management System</h1>
                    
                    <p  className='text-gray-500 font-light text-sm sm:text-base md:text-lg pr-2'>OneLot’s digital platform is built with a single goal: to help used car dealers operate their business more efficiently.</p>
                     <hr className='my-6' />
                    <div className='font-medium pr-2'>
                        <div className='flex gap-2 items-center'>
                        <Image  src={circle} alt="" className='w-4 h-4'  width={4} height={4}/>
                            <p className=' text-black text-sm sm:text-base md:text:lg'><span className='font-bold'>Inventory Management:</span> Track all details about your cars and sales in one place - from car details to buyers. All you need to know in one place.</p>
                        </div>
                    
                        <div  className='flex gap-2 items-center'>
                        <Image  src={circle} alt="" className='w-4 h-4'  width={4} height={4}/>
                        <p className=' text-black text-sm sm:text-base md:text:lg'><span className='font-bold'>Marketing Tools:</span> Promote your cars across all platforms. Write a marketing text and upload on
                        Facebook Marketplace, Groups, Pages, and Instagram with a single click.</p>
                            </div>
                        
                        <div  className='flex gap-2 items-center'>
                        <Image src={circle}alt="" className='w-4 h-4 '  width={4} height={4}/>
                        <p className=' text-black text-sm sm:text-base md:text:lg'><span className='font-bold'>Marketing Insights (Coming Soon):</span> Get insights on prices and 
                            volumes for all cars in the market. We provide you with all the data by combining information from various 
                            sources with a single click.</p>
                            
                        </div>
                        
                    </div>
                    <hr className='my-6'/>
                    <p className='text-gray-500 font-light text-sm sm:text-base md:text-lg'>Sign up for OneLot&apos;s dealer platform today, and make managing your cars easier.</p>
                    <button type="button" className="group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,
                    border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none text-white bg-[#3600D1] border border-transparent
                     enabled:hover:bg-[#3600D1] focus:ring-0 focus:ring-transparent dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:focus:ring-purple-900 
                     rounded-lg mt-6 mb-4 sm:mb-0"><span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm">
                     
                    Explore Now &rarr;</span></button>
                    </div>

                </div>
                    <div className=' flex-none order-3 sm:order-3 mb-4 sm:mb-0'>
                    <Image src={car2} alt="" className='object-contain md:w-[466px] xl:w-[800px]'width={0} height={0} />
                </div>
                
            </div>
            
          
        </div>
    </div>
  )
}

export default Part2
