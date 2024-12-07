import React from 'react'
export const Upperheader = () => {
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
export const Header = () => {
  return (<header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
        <span className="ml-3 text-xl font-extrabold">EXCLUSIVE</span>
      </a>
      <nav className='w-80 justify-end'>
        <a className="justify-center">Home</a>
        <a className=" ">Contact</a>
        <a className=" ">About</a>
        <a className=" ">Sing Up</a>
      </nav>
    </div>
  </header>

  )
};
