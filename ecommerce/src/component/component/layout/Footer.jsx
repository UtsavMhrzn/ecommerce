import { useState } from "react";
import rightA from "../../../assets/icons/rightA.svg";
import Iphone1 from "./Iphone";

const Footer = () => {
  const [isWomanOpen, setIsWomanOpen] = useState(false);
  const [isManOpen, setIsManOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row gap-12 px-75  ">
      {/* Left Menu */}
      <div className="flex flex-col font-semibold border-b lg:border-b-0 relative  lg:border-r border-gray-300 pt-[70px] lg:pr-10 gap-7 text-[16px] w-full lg:w-fit">
        
        {/* Woman’s Fashion */}
        <div className="relative">
          <div
            onClick={() =>{ setIsWomanOpen(!isWomanOpen);
    if (!isWomanOpen) setIsManOpen(false);}}
            className="flex justify-between w-full lg:w-[185px] gap-4 items-center cursor-pointer hover:text-[#DB4444]"
          >
            <span className=" hover:text-shadow-sm hover:shadow-[#a94343] hover:bg-transparent">Woman’s Fashion</span>
            <img src={rightA} alt="arrow" />
          </div>

          {isWomanOpen && (
            <div className="absolute left-full top-0 mt-2 bg-white shadow-md p-4 w-48 z-10 border rounded-sm">
              <span className="hover:text-[#DB4444] block">Dresses</span>
              <span className="hover:text-[#DB4444] block">Tops</span>
              <span className="hover:text-[#DB4444] block">Handbags</span>
              <span className="hover:text-[#DB4444] block">Shoes</span>
            </div>
          )}
        </div>

        {/* Men’s Fashion */}
        <div className="relative">
          <div
            onClick={() => {setIsManOpen(!isManOpen);
    if (!isManOpen) setIsWomanOpen(false);}}
            className="flex justify-between w-full lg:w-[185px] gap-4 items-center cursor-pointer hover:text-[#DB4444]"
          >
            <span className=" hover:text-shadow-sm hover:shadow-[#a94343] hover:bg-transparent">Men’s Fashion</span>
            <img src={rightA} alt="arrow" />
          </div>

          {isManOpen && (
            <div className="absolute left-full top-0 mt-2 bg-white shadow-md p-4 w-48 z-10 border rounded-sm">
              <span className="hover:text-[#DB4444] block">T-Shirts</span>
              <span className="hover:text-[#DB4444] block">Jackets</span>
              <span className="hover:text-[#DB4444] block">Pants</span>
              <span className="hover:text-[#DB4444] block">Shoes</span>
            </div>
          )}
        </div>

        {/* Static Items */}
        {[
          "Electronics",
          "Home & Lifestyle",
          "Medicine",
          "Sports & Outdoor",
          "Baby’s & Toys",
          "Groceries & Pets",
          "Health & Beauty",
        ].map((item, i) => (
          <span key={i} className="hover:text-[#DB4444] cursor-pointer">
            {item}
          </span>
        ))}
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-[1022px] h-auto mt-[45px] lg:ml-[50px] overflow-hidden">
        <div className="bg-black w-full h-[300px] md:h-[452px]">
          <Iphone1 />
        </div>
      </div>
    </div>
  );
};

export default Footer;
