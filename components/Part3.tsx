import React from 'react'
import trust from "@/public/trust.png"
import high_amt from "@/public/high_amount.png"
import fast from "@/public/fast.png"
import easy from "@/public/easy.png"
import flexible from "@/public/flexible.png"
import Image from 'next/image'
const Part3 = () => {
  return (
    <div className='relative'>
             <div className='  bg-white text-center px-16 sm:py-12 py-8 border-t border-b '>
        <p className='text-4xl font-extrabold mb-8'>Why Onelot?</p>
        </div>
        <div className='flex flex-col gap-4 sm:flex-row sm:justify-center items-center'>
        <div className="bg-white dark:border-gray-700 dark:bg-gray-800 flex flex-col 
            items-center border border-gray-200 rounded-lg overflow-hidden w-80 h-80 shadow-sm"><div className="flex 
            h-full flex-col justify-center gap-4 p-5"><div className="h-1/3 flex items-center justify-center mb-0"><div
            className="p-0"><Image alt="image" loading="lazy" className='w-16 h-16 bg-transparent'  decoding="async" data-nimg="1"
             src={trust} width={0} height={0}/></div></div><div className="flex flex-col justify-center items-center p-0 h-1/3 w-full"><p className="text-lg 
             font-semibold mx-4 text-black text-center mb-2 w-full min-h-12" >Trust</p><p className="text-sm 
             text-gray-500 text-center px-4">Regulated by Securities and Exchange Commission (SEC) Philippines</p></div></div></div>

            <div className="bg-white dark:border-gray-700 dark:bg-gray-800 flex flex-col 
            items-center border border-gray-200 rounded-lg overflow-hidden w-80 h-80 shadow-sm"><div className="flex 
            h-full flex-col justify-center gap-4 p-5"><div className="h-1/3 flex items-center justify-center mb-0"><div
            className="p-0"><Image alt="image" loading="lazy" className='w-16 h-16 bg-transparent'  decoding="async" data-nimg="1"
             src={high_amt} width={0} height={0}/></div></div><div className="flex flex-col justify-center items-center p-0 h-1/3 w-full"><p className="text-lg 
             font-semibold mx-4 text-black text-center mb-2 w-full min-h-12" >High Amount</p><p className="text-sm 
             text-gray-500 text-center px-4">Get the highest loan amounts compared to other banks and lenders</p></div></div></div>

           <div className="bg-white dark:border-gray-700 dark:bg-gray-800 flex flex-col 
            items-center border border-gray-200 rounded-lg overflow-hidden w-80 h-80 shadow-sm"><div className="flex 
            h-full flex-col justify-center gap-4 p-5"><div className="h-1/3 flex items-center justify-center mb-0"><div
            className="p-0"><Image alt="image" loading="lazy" className='w-16 h-16 bg-transparent'  decoding="async" data-nimg="1"
             src={fast} width={0} height={0}/></div></div><div className="flex flex-col justify-center items-center p-0 h-1/3 w-full"><p className="text-lg 
             font-semibold mx-4 text-black text-center mb-2 w-full min-h-12" >Fast</p><p className="text-sm 
             text-gray-500 text-center px-4">Get the money within a few hours on the same day</p></div></div></div>

             <div className="bg-white dark:border-gray-700 dark:bg-gray-800 flex flex-col 
            items-center border border-gray-200 rounded-lg overflow-hidden w-80 h-80 shadow-sm"><div className="flex 
            h-full flex-col justify-center gap-4 p-5"><div className="h-1/3 flex items-center justify-center mb-0"><div
            className="p-0"><Image alt="image" loading="lazy" className='w-16 h-16 bg-transparent'  decoding="async" data-nimg="1"
             src={flexible} width={0} height={0}/></div></div><div className="flex flex-col justify-center items-center p-0 h-1/3 w-full"><p className="text-lg 
             font-semibold mx-4 text-black text-center mb-2 w-full min-h-12" >Flexible</p><p className="text-sm 
             text-gray-500 text-center px-4">Loans are tailored to your needs</p></div></div></div>

            <div className="bg-white dark:border-gray-700 dark:bg-gray-800 flex flex-col 
            items-center border border-gray-200 rounded-lg overflow-hidden w-80 h-80 shadow-sm"><div className="flex 
            h-full flex-col justify-center gap-4 p-5"><div className="h-1/3 flex items-center justify-center mb-0"><div
            className="p-0"><Image alt="image" loading="lazy" className='w-16 h-16 bg-transparent'  decoding="async" data-nimg="1"
             src={easy} width={0} height={0}/></div></div><div className="flex flex-col justify-center items-center p-0 h-1/3 w-full"><p className="text-lg 
             font-semibold mx-4 text-black text-center mb-2 w-full min-h-12" >Easy</p><p className="text-sm 
             text-gray-500 text-center px-4">Run through an easy process and get your first loans within days</p></div></div></div>
        </div>
      
    </div>
   
  )
}

export default Part3
