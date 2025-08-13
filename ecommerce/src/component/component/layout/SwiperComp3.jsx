import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Product3 from './Product3';

const SwiperComp3 = ({ data }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="relative w-full pb-12">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1450: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        className="!pb-12"
      >
        {data?.map((d, index) => (
          <SwiperSlide key={index}>
            <Product3
              name={d.name}
              price={d.price}
              discount={d.discount}
              rating={d.rating}
              disprc={d.disprc}
              image={d.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="absolute -top-14 right-4 md:right-2 lg:right-1 xl:right-19 flex gap-4">
        <button
          ref={prevRef}
          className={`w-[40px] h-[40px] p-2.5 bg-[#F5F5F5] rounded-full transition-opacity duration-300 ${
            isBeginning ? 'opacity-50' : 'opacity-100'
          }`}
        >
          <img src="/Assets/AaRowL.png" alt="Previous" />
        </button>
        <button
          ref={nextRef}
          className={`w-[40px] h-[40px] p-2.5 bg-[#F5F5F5] rounded-full transition-opacity duration-300 ${
            isEnd ? 'opacity-50' : 'opacity-100'
          }`}
        >
          <img src="/Assets/AaRowR.png" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default SwiperComp3;
