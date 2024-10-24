'use client';
import React, {  useState } from 'react'
import Avatar from '@/public/testimonial/Avatar_1.png'
import Avatar2 from '@/public/testimonial/Avatar_2.png'
import Lourice from '@/public/testimonial/Lourice.png'
import PMB from '@/public/testimonial/PMB.png'
import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface format{
    img:StaticImageData,
    msg:string,
    company_name:string,
    designation:string

};
const data:format[]=[
    {
        img:Avatar,
        msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quis quaerat accusantium. Natus exercitationem provident earum consequatur magni explicabo quod repudiandae dolor. Sit reprehenderit tempora, quo tempore ipsa tenetur? A?",
        company_name:"Mark Vergel de Dios",
        designation:"Owner, MVD Auto Works"
    },
    {
        img:Avatar2,
        msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quis quaerat accusantium. Natus exercitationem provident earum consequatur magni explicabo quod repudiandae dolor. Sit reprehenderit tempora, quo tempore ipsa tenetur? A?",
        company_name:"Felipe Estrella",
        designation:"CFO, AC industrials (Ayala)"
    },
    {
        img:Lourice,
        msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quis quaerat accusantium. Natus exercitationem provident earum consequatur magni explicabo quod repudiandae dolor. Sit reprehenderit tempora, quo tempore ipsa tenetur? A?",
        company_name:"PMB",
        designation:"Quezon City"
    },
    {
        img:PMB,
        msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quis quaerat accusantium. Natus exercitationem provident earum consequatur magni explicabo quod repudiandae dolor. Sit reprehenderit tempora, quo tempore ipsa tenetur? A?",
        company_name:"Lourice Tradi",
        designation:"Quezon City"
    }
]
const Testimonials = () => {
    const [currIndex,setcurrIndex]=useState<number>(0);
    //const [hovered,sethovered]=useState<boolean>(false);
    const nexttest=():void=>{
        setcurrIndex((prev)=>(prev+1)%data.length);

    }
    const prevtest=():void=>{
        setcurrIndex((prev)=>(prev-1+data.length)%data.length);

    }


  
    


  return (

    <div className='relative mt-[70px]'>

        <p className='text-2xl font-bold mb-5 text-center'>Testimonials</p>
      
 <div className="overflow-hidden">
        <div className="flex transition-transform 
                        duration-1000 ease-in-out" 
                        style={{ transform: `translateX(-${currIndex * 100}%)` }}>
          {data.map((msg, index) => (
            <div key={index} className="flex-shrink-0 w-full p-8">
              <div className="bg-white
                              
                              hover:transition-shadow
                              duration-300 p-6">
                
                
                <div className="w-32 h-32 rounded-full mx-auto overflow-hidden">
                  <Image
                    src={msg.img}
                    alt="Logo"
                    width={0} height={0}
                    className="w-20 h-20 rounded-full"/>
                </div>
                <div className="mt-4 text-gray-600 
                                text-center italic">
                  <p className=" jsx-171ee85898469d43 my-4 font-medium sm:text-2xl sm:w-1/2 mx-auto clamp-3-lines">&quot;{msg.msg}&quot;</p>
                </div>
                <div className=' flex flex-col sm:flex-row items-center justify-center gap-4'>
                <p className="jsx-171ee85898469d43 text-black font-bold sm:mr-4 text-xl">{msg.company_name}
                               </p>
                <p className="text-center text-sm
                              font-semibold text-gray-500">
                  <span className="jsx-171ee85898469d43 text-gray-500 sm:mt-0 mt-2">{msg.designation}

                  </span>
                </p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* Previous button */}
    <div className='flex item-center gap-8 align-center mx-auto justify-center'>
      <div className="">
        <button
          className="font-bold text-8"
          onClick={prevtest}
        >
         &larr;
        </button>
      </div>

      {/* Next button absolute top-1/2 
                      right-0 transform -translate-y-1/2" */}
      <div className="flex flex-row">
        <button
          className=""
          onClick={nexttest}
        >
            &rarr;
            
          
        </button>
      </div>
    
      </div>




        

    
    </div>
    
  )
}

export default Testimonials
