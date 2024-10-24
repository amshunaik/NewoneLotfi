'use client';
import { useState } from 'react';
interface Question{
    ques:string,
    ans:string
}
const ques:Question[]=[
    {
        ques:"What is OneLot?",
        ans:"OneLot is a digital auto financier providing short-term loans for used car dealers in the Philippines. Our vision is to empower dealers to expand their inventory, increase sales, and facilitate smoother business operations through tailored financial solutions."
    },
    {
        ques:"What kind of financing does one lot do?",
        ans:"OneLot offers collateralized short term loans to used car dealers, allowing them to leverage their inventory for growth. We differ from services such as AsiaLink and Global Dominion, since our financing options are for car dealers themselves, not the customers of car dealers."
    },
    {
        ques:"Is oneLot a bank?",
        ans:"No, OneLot is not a traditional bank. We are a dedicated financial institution that understands the unique requirements of used car dealers and offers short-term collateralized lending solutions to address their working capital needs. OneLot Financing Corporation is a duly registered corporate entity and is regulated by the Securities and Exchange Commission (SEC)."
    },
    {
        ques:"What is the role ?",
        ans:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut corporis dolore exercitationem omnis repudiandae! Ipsum, nam veniam suscipit eaque distinctio laudantium beatae dolor aliquid omnis fugit esse quisquam? Earum, soluta?"
    },
    {
        ques:"About culture?",
        ans:"OneLot offers Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut corporis dolore exercitationem omnis repudiandae! Ipsum, nam veniam suscipit eaque distinctio laudantium beatae dolor aliquid omnis fugit esse quisquam? Earum, soluta?."
    },
]

const Questions = () => {
    const [all,setall]=useState<boolean>(false);
    const [openIndex, setOpenIndex] = useState<number|null>(null);

  const toggleDropdown  = (index:number|null) => {
    setOpenIndex(openIndex == index ? null : index);
  };
  return (
    <div className='bg-gray-50 px-8 py-20 text-gray-500'>
        <p className='text-4xl font-bold mb-8 text-center text-black'>Frequently asked questions

        </p>
        
   
    <div >
    {ques.slice(0,2).map((item, index) => (
      <div key={index} className="divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700 rounded-lg sm:w-1/2 mx-auto border-0">
        <button type="button"className="w-full justify-between p-5 text-left font-medium first:rounded-t-lg last:rounded-b-lg hover:bg-gray-100 
        dark:hover:bg-gray-800 text-gray-900 dark:text-white flex items-center" onClick={() => toggleDropdown(index)}>
          <span>{item.ques}</span>
          <span>{openIndex === index ? '▲' : '▼'}</span>
        </button>
        {openIndex === index && (
          <div className="p-5 first:rounded-t-lg last:rounded-b-lg dark:bg-gray-900">
            <p>{item.ans}</p>
          </div>
        )}
      </div>
    ))}
    {all==false&&<button onClick={()=>setall(!all)} className='bg-blue-800 text-white p-2 px-4 rounded-lg items-stretch justify-center mx-auto block '>See All &rarr;</button>}
    {all==true&&
    <>{ques.slice(2,5).map((item, index) => (
        <div key={index+2} className="divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700 rounded-lg sm:w-1/2 mx-auto border-0">
          <button type="button"className="w-full justify-between p-5 text-left font-medium first:rounded-t-lg last:rounded-b-lg hover:bg-gray-100 
          dark:hover:bg-gray-800 text-gray-900 dark:text-white flex items-center" onClick={() => toggleDropdown(index+2)}>
            <span>{item.ques}</span>
            <span>{openIndex === index+2 ? '▲' : '▼'}</span>
          </button>
          {openIndex === index+2 && (
            <div className="p-5 first:rounded-t-lg last:rounded-b-lg dark:bg-gray-900">
              <p>{item.ans}</p>
            </div>
          )}
        </div>
      ))}</>
     
    }

    </div>
    </div>
  )
}

export default Questions;
