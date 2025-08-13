
import SwiperComp1 from "./SwiperComp";

const FlashSale = () => {
  const productData = [
    {
      name: "HAVIT HV-G92 Gamepad",
      price: "120",
      discount: "40%",
      rating: "88",
      disprc: "165",
      image: "/Assets/Console1.svg",
    },
    {
      name: "AK-900 Wired Keyboard",
      price: "960",
      discount: "35%",
      rating: "75",
      disprc: "1160",
      image: "/Assets/Console2.svg",
    },
    {
      name: "IPS LCD Gaming Monitor",
      price: "370",
      discount: "30%",
      rating: "99",
      disprc: "400",
      image: "/Assets/Console3.svg",
    },
    {
      name: "S-Series Comfort Chair ",
      price: "375",
      discount: "25%",
      rating: "99",
      disprc: "400",
      image: "/Assets/Console4.svg",
    },
    {
      name: "S-Series Comfort Chair ",
      price: "375",
      discount: "25%",
      rating: "99",
      disprc: "400",
      image: "/Assets/Console4.svg",
    },
    {
      name: "S-Series Comfort Chair ",
      price: "375",
      discount: "25%",
      rating: "99",
      disprc: "400",
      image: "/Assets/Console4.svg",
    },
    {
      name: "AK-900 Wired Keyboard",
      price: "960",
      discount: "35%",
      rating: "75",
      disprc: "1160",
      image: "/Assets/Console2.svg",
    },
    {
      name: "AK-900 Wired Keyboard",
      price: "960",
      discount: "35%",
      rating: "75",
      disprc: "1160",
      image: "/Assets/Console2.svg",
    },
    {
      name: "S-Series Comfort Chair ",
      price: "375",
      discount: "25%",
      rating: "99",
      disprc: "400",
      image: "/Assets/Console4.svg",
    },
  ];

  return (
    <div className="w-full max-w-[1470px] mx-auto px-4 md:px-10  flex flex-col gap-6 mt-[116px]">
      {/* Heading */}
      <div className="flex flex-row items-center gap-3 text-[#DB4444]">
        <div className="h-[40px] w-[20px] rounded-[4px] bg-[#DB4444]"></div>
        <span className="font-medium text-[16px]">Today's</span>
      </div>

      {/* Title + Timer */}
      <div className="flex flex-col lg:flex-row justify-between items-start  gap-6">
        {/* Flash Sale Text */}
        <div className="text-[36px] mt-4 font-semibold">
          <span>Flash Sale</span>
        </div>

        {/* Timer */}
        <div className="flex flex-row gap-7 mr-200 items-center">
          {[
            { label: "Days", value: "03" },
            { label: "Hours", value: "23" },
            { label: "Minutes", value: "19" },
            { label: "Seconds", value: "56", noDots: true },
          ].map((unit, i) => (
            <div key={i} className="flex flex-col pt-0 gap-0">
              <div className="text-[12px]">
                <span>{unit.label}</span>
              </div>
              <div className="text-[32px] flex flex-row gap-4 items-center">
                <span>{unit.value}</span>
                {!unit.noDots && (
                  <div className="flex flex-col gap-2 mt-2">
                    <div className="rounded-full w-[5px] h-[5px] bg-[#E07575]"></div>
                    <div className="rounded-full w-[5px] h-[5px] bg-[#E07575]"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Swiper Product List */}
      <div className="w-full ">
        <SwiperComp1 data={productData} />
      </div>
    </div>
  );
};

export default FlashSale;
