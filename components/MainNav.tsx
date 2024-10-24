'use client';
import React,{useState} from 'react'
//import Dropdown from "./Dropdown";
import Image from 'next/image';

import dropdown from "@/public/Dropdown.png"
import logo1 from "@/public/logo1.png"
export interface MenuItem {
  title: string;
  route?: string;
  children?: MenuItem[];
}

const list1:{title:string,route:string}[]=[
  {
    title: "Home",
    route: "",
  },
  {
    title: "Products",
    route: "",
  },
  {
    title: "About",
    route: "",
  },
  {
    title: "Contact",
    route: "",
  },
]
const menuItems: MenuItem[] = [
 
  {
    title: "product",
    children: [
      {
        title: "Home",
        route: "",
      },
      {
        title: "Products ",
        route: "",
      },
      {
        title: "About",
        route: "",
      },
      {
        title: "Contact",
        route: "",
      },
    ],
  },
];

const MainNav = () => {

 
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => {
        setIsOpen(old => !old);
    }

    const transClass = isOpen
        ?
        "flex"
        :
        "hidden";
  return (
    <div className=' bg-white px-2 py-2.5 w-full dark:border-gray-700 dark:bg-gray-800 sm:px-4 md:w-[330] sticky top-0 z-40'>
        <div className='flex flex-wrap  gap-[50px] items-center mt-[30px] t-0 py-2 '>
           <a href="" className='flex   items-baseline'>
           <Image className='w-[100px]' width={100} height={0} src={logo1} alt="" />
           </a>
           
        
        <ul className=' hidden md:flex flex flex-row gap-[30px] items-center'>
            <li><a href="" className='text-[15px]'>Home</a></li>
            <li><a href="" className='text-[15px]'>Products</a></li>
            <li><a href="" className='text-[15px]'>About</a></li>
            <li><a href="" className='text-[15px]'>Contact</a></li>
        </ul>
            <div className=' flex gap-2 items-center md:order-2 ml-auto cursor-pointer hover:text-[#57009C] focus:text-[#57009C]'>
                <a href="" className='hidden md:flex text-[16px]'>Login</a>
                <button className='hidden md:flex bg-purple-800 text-white px-[7px] py-[5px] rounded-lg '>Inquire now</button>
            </div>
           
    
            <header className="flex gap-10 items-center ">
                 
                  <div className="flex gap-8 items-center text-white">
                    {menuItems.map((item,id) => {
                      return item.hasOwnProperty("children") ? (
                        // <Dropdown item={item}  />
                        <div  key={id}className="  fit-content  px-4 ">
                <a
                    className="static hover:text-blue-400 md:hidden  inline-block  "
                    onClick={toggle}
                ><Image src={dropdown}className='w-[30px] h=[20px]' width={30}
                height={20} alt="logo" /></a>
                
               
            
              </div>
                      ) : (
                        <a className="hover:text-blue-500" href={item?.route || ""}>
                          {item.title}
                        </a>
                      );
                    })}
                  </div>
            </header>
            
            </div>
            <div className={`relative  ml-0 left-0 fit-content  z-30 w-full min-h-[100px] mx-[-100px]  flex-col py-2 bg-white rounded-md ${transClass}`}>
                    {
                        list1.map((item,index) =>
                            <a
                                key={item.route||index}
                                className=" flex hover:bg-white-300 hover:text-black px-4 py-2 pr-4 font-medium "
                                href=""
                                onClick={toggle}
                            >{item.title}</a>
                        )
                    }
                    <button type="button" className="group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,
                    text-decoration-color,fill,box-shadow] focus:z-10 focus:outline-none text-white bg-[#3600D1] border border-transparent enabled:hover:bg-[#3600D1] focus:ring-0 
                    focus:ring-transparent dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:focus:ring-purple-900 rounded-lg w-full my-4"><span className="flex items-stretch transition-all
                     duration-200 rounded-md px-4 py-2 text-sm"><a href="/contact">Inquire Now</a></span></button>
                    <a href="/app/login" type="button" className="group relative flex items-stretch justify-center p-0.5 text-center font-medium 
                    transition-[color,background-color,border-color,text-decoration-color,fill,box-shadow] focus:z-10 focus:outline-none
                     focus:ring-0 focus:ring-transparent rounded-lg w-full text-gray-700"><span className="flex items-stretch transition-all duration-200
                      rounded-md px-4 py-2 text-sm">Login</span></a>
                </div>

              
                
          
            {
                isOpen
                    ?
                    <div
                        className="fixed top-0 right-0 bottom-0 left-0 "
                        onClick={()=>setIsOpen(!isOpen)}
                    ></div>
                    :
                    <></>
            }
       
      
    </div>
  )
}

export default MainNav
