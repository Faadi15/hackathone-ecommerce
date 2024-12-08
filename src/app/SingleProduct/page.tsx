import React from 'react'
import { IoCartOutline } from 'react-icons/io5'
export default function SingleProduct() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

            <h1 className="text-gray-900 text-3xl title-font font-bold mb-1">
              The Stool <br></br>Chair
            </h1>
            <button className="flex ml-auto text-white bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:[#029FAE] rounded">
              200 USD $
            </button>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Inventore ratione quam vitae expedita natus neque
              dolore, voluptatem nam commodi consectetur culpa? Reiciendis modi animi, deserunt quos laborum doloribus perspiciatis vitae.
              orts keytar banjo tattooed umami cardigan.
            </p>
          </div>
          <button className="flex ml-auto text-white bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            <IoCartOutline className='pr-2 size-8' /> Add to cart
          </button>
        </div>
      </div>

    </section>


  )
}
