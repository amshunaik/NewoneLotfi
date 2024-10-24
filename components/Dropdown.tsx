"use client";
import React, { useState } from 'react'
import dropdown from "@/public/Dropdown.png"
import Image from 'next/image';
export interface MenuItem {
    title: string;
    route?: string;
    children?: MenuItem[];
  }
  

interface Props {
    item: MenuItem;
}

export default function Dropdown(props: Props) {
    const { item } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuItems = item?.children ? item.children : [];

    const toggle = () => {
        setIsOpen(old => !old);
    }

    const transClass = isOpen
        ?
        "flex"
        :
        "hidden";

    return (
        <>
            <div className=" fixed fit-content  px-4 ">
                <a
                    className="static hover:text-blue-400 md:hidden  inline-block  "
                    onClick={toggle}
                ><Image src={dropdown} width={20} height={20} className='w-[20px] h-[20px] 'alt="logo" /></a>
                
               
            
              </div>
              <div className={`relative top-12 ml-auto left-0 fit-content  z-30 w-[500px] min-h-[100px] mx-[-100px]  flex-col py-2 bg-yellow-400 rounded-md ${transClass}`}>
                    {
                        menuItems.map((item,index) =>
                            <a
                                key={item.route||index}
                                className=" flex hover:bg-white-300 hover:text-black px-4 py-1"
                                href=""
                                onClick={toggle}
                            >{item.title}</a>
                        )
                    }
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
        </>
    )
}