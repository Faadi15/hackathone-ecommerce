import About from "./Aboutus/page";
import { PFooter } from "./Components/PFooter";
import Product from "./Product/page";
import SingleProduct from "./SingleProduct/page";


export default function Home() {
    return (
      <div>
        <SingleProduct/>
        <Product />
       <About />
       <PFooter/>
           </div>
    );
  }
  