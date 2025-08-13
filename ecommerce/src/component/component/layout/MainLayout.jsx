import { Outlet } from "react-router-dom";


import Footer from "./Footer";

import Browse from "./Browse";
import Cat from "./Product3";
import Arrival from "./Arrivals";
import FlashSale from "./Cart1";
import Service from "./Service";


import Speak from "./Speaker";
import Cart2 from "./Cart2";
import Cart3 from "./Cart3";


const Mainlayout = () =>{
    return(<>
        <div>
        
    
        <Footer/>
   <FlashSale/>
        <Browse/>
        <Cart2/>
        <Speak/>
        <Cart3/>
        <Arrival/>
        <Service/>
        
        </div>
        </>
    )
}
export default Mainlayout;
