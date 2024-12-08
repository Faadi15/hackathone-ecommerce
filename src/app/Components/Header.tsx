import Link from "next/link";
import { AiOutlineExclamationCircle } from "react-icons/ai";
export default function Header() {
  return (
    <div className='bg-[#272343] text-white font-sans w-full h-[48px] flex justify-center pt-3 pb-3'>
      <span className='text-white'>Free shipping on all orders over $50
        <a className='mx-3 underline' href='/home'>Shop Now</a> </span>
      <select className='bg-[#272343] text-white ml-[30%]'>
        <option value="English, Urdu" >Eng</option>
      </select>
      <span className="bg-[#272343] text-white pl-6"><Link href="/Faq">Faqs</Link></span>
      <span className="text-white pl-3 pt-1"> <AiOutlineExclamationCircle /></span>
      <span className="bg-[#272343] text-white pl-3"><Link href ={"/ContactUs"}>Need Help!</Link></span>
    </div>
  )
}