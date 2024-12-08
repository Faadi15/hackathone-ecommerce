import Link from 'next/link'
import React from 'react'
const Nav = () => {
  return (
<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-baseline">
    <nav className="flex lg:w-2/5 flex-wrap text-Black md:ml-auto pl-4">
      <Link href={"/"} className="mr-5 text-[#636270]">Home</Link>
      <Link href={"/Shop"}className="mr-5 hover:text-[#636270]">Shop</Link>
      <Link href={"/Product"}className="mr-5  hover:text-[#636270]">Product</Link>
      <Link href={"/Pages"} className="mr-5 hover:text-[#636270]">Pages</Link>
      <Link href={"/About"} className="mr-5 hover:text-[#636270]">About</Link>
    </nav>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      Conatct (808) 555-0111
      </div>
  </div>
</header>

  )
}

export default Nav