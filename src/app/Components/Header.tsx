import { AiOutlineExclamationCircle } from "react-icons/ai";
export default function Header() {
  return (
    <div className='bg-[#272343] text-white font-sans w-full h-[48px] flex justify-center pt-3 pb-3'>
      <span className='text-white'>Free shipping on all orders over $50
        <a className='mx-3 underline' href='/home'>Shop Now</a> </span>
      <select className='bg-[#272343] text-white mx-52'>
        <option value="English, Urdu" >Eng</option>
      </select>
      <span className="bg-[#272343] text-white">Faqs</span>
      <span className="text-white"> <AiOutlineExclamationCircle /></span>
      <span className="bg-[#272343] text-white">Need Help! </span>
    </div>
  )
}