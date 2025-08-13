import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { useRef, useState } from 'react';

import Apple from "../../../assets/icons/Apple.svg";
import Aright from "../../../assets/icons/Aright.svg";

const Iphone1 = () => {
  const slides = [
    { title: "iPhone 12 Series", subtitle: "Up to 30% off Voucher", button: "Shop Now", image: "/Assets/iphone12.png" },
    { title: "iPhone 13 Series", subtitle: "Up to 25% off Voucher", button: "Shop Now", image: "/Assets/iphone13.png" },
    { title: "iPhone 14 Series", subtitle: "Up to 20% off Voucher", button: "Shop Now", image: "/Assets/iphone14.png" },
    { title: "iPhone 15 Series", subtitle: "Up to 15% off Voucher", button: "Shop Now", image: "/Assets/iphone15.png" },
    { title: "iPhone 16 Series", subtitle: "Up to 10% off Voucher", button: "Shop Now", image: "/Assets/iphone16.png" }
  ];

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-black text-white flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-12 md:py-20 gap-6">
              {/* Left Content */}
              <div className="flex flex-col gap-5 max-w-full md:max-w-none">
                <div className="flex items-center gap-3">
                  <img className="h-[49px] w-[40px]" src={Apple} alt="apple" />
                  <span className="text-[16px] mt-2 font-extralight">{slide.title}</span>
                </div>
                <div className="text-[28px] md:text-[42px] font-semibold w-[260px] md:w-[300px]">{slide.subtitle}</div>
                <div className="underline underline-offset-4 w-[120px] flex justify-between cursor-pointer">
                  <span>{slide.button}</span>
                  <img src={Aright} alt="arrow" />
                </div>
              </div>

              {/* Right Image */}
              <img
                src={slide.image}
                alt="iPhone"
                className="object-contain w-full max-w-[500px] h-auto md:h-[310px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dots */}
      <div className="absolute bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => swiperRef.current?.slideToLoop(index)}
            className={`w-[14px] h-[14px] rounded-full transition-all duration-300 cursor-pointer
              ${activeIndex === index
                ? "bg-[#DB4444] border-white border-[3px]"
                : "bg-gray-300 border border-black"
              }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Iphone1;
