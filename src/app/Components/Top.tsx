import Link from 'next/link';
import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { PiNumberCircleTwoFill } from "react-icons/pi"; 


export default function Top ()  {
  return (
  <div  className="bg-[#F0F2F3] text-[#272343] font-thin">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-around space-x-96">
    <span className="ml-3 text-2xl font-extrabold"><Link href="/">Comforty</Link></span>
      
            <button className="items-center flex bg-white border-0 py-1 px-3 
            focus:outline-none hover:bg-gray-200 rounded text-black mt-4 md:mt-0">
      <IoCartOutline className='pr-2 size-8'/><Link href="/Cart">Cart </Link><PiNumberCircleTwoFill className='pl-2 size-8 text-[#007580]'/>
       </button>
    </div>
  </div>
  
  )
}
