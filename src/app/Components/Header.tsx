import React from 'react'
export const Upperheader = ()=> {
  return (
    <div className='bg-black text-white font-sans w-full h-[48px] flex justify-center pt-3 pb-3'>
      <span className='text-white'>Summer Sale for All Swim Suits and
        Free Express Delivery - OFF 50%!
        <a className='mx-3 underline' href='/home'>Shop Now</a> </span>
      <select className='bg-black text-white mx-6'>
        <option value="English, Urdu" >English</option>
      </select>
    </div>
  )
};
export const Header = ()=> {
  return (<header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
       <span className="ml-3 text-xl font-extrabold">EXCLUSIVE</span>
      </a>
      <nav className=" md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-black	flex 
      flex-wrap jsutify items-center text-base">
        <a className="mr-5 mx-56 ">Home</a>
        <a className="mr-5 ">Contact</a>
        <a className="mr-5 ">About</a>
        <a className="mr-5 ">Sing Up</a>
      </nav>
      
    </div>
  </header>
  
  )
};
