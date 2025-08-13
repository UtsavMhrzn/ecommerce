import Blur1 from "../../../assets/icons/Blur1.png";
import Blur2 from "../../../assets/icons/Blur2.png";
import PS5 from "../../../assets/icons/PS5.png";
import Woman from "../../../assets/icons/Woman.png";
import Speakers from "../../../assets/icons/Speakers.png";
import Gucci from "../../../assets/icons/Gucci.png";

function Arrival() {
  return (
    <>
      <div className="w-full h-fit mt-20 flex flex-col px-6 md:px-12 lg:px-20 mb-10">
        {/* Featured Header */}
        <div className="flex items-center gap-2 text-[#DB4444] font-medium text-[16px]">
          <div className="h-[40px] w-[20px] rounded-[4px] bg-[#DB4444]"></div>
          <span className="pt-2">Featured</span>
        </div>

        {/* Title */}
        <div className="flex justify-between items-center mt-2">
          <h2 className="text-[28px] md:text-[36px] font-semibold">
            New Arrival
          </h2>
        </div>

        {/* Content Block */}
        <div className="flex flex-col lg:flex-row gap-6 mt-10 w-full">
          {/* Left Large Box */}
          <div className="w-full lg:w-[60%] h-[705px] bg-black relative rounded-[4px] flex items-end overflow-hidden p-8">
            <img
              src={PS5}
              alt="PS5"
              className="w-[590px] h-[590px] absolute object-contain top-0 left-1/2 -translate-x-1/2"
            />
            <div className="relative z-10 text-white">
              <h3 className="text-[28px] font-semibold">PlayStation 5</h3>
              <p className="text-[16px] font-normal mt-1">
                Black and White version of the PS5 coming out on sale.
              </p>
              <p className="text-[18px] mt-2 font-medium underline decoration-[1px] underline-offset-3">
                Shop Now
              </p>
            </div>
          </div>

          {/* Right Boxes */}
          <div className="w-full lg:w-[40%] flex flex-col gap-6">
            {/* Women's Collection */}
            <div className="w-full h-[337px] bg-black relative rounded-[4px] flex overflow-hidden">
              <img
                src={Woman}
                alt="Woman"
                className="w-[557px] h-[359px] absolute right-0 object-contain"
              />
              <div className="relative z-10 text-white p-6">
                <h3 className="text-[28px] font-semibold">Women’s Collections</h3>
                <p className="text-[16px] font-normal mt-1">
                  Featured woman collections that give you another vibe.
                </p>
                <p className="text-[18px] mt-2 font-medium underline decoration-[1px] underline-offset-3">
                  Shop Now
                </p>
              </div>
            </div>

            {/* Bottom Two Cards */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Speaker */}
              <div className="w-full md:w-1/2 h-[337px] bg-black relative rounded-[4px] flex overflow-hidden">
                <img
                  src={Blur2}
                  className="absolute w-full h-full object-cover"
                  alt="Blur"
                />
                <img
                  src={Speakers}
                  className="w-[330px] h-[260px] absolute object-contain top-10 left-3"
                  alt="Speakers"
                />
                <div className="relative z-10 text-white p-5">
                  <h3 className="text-[28px] font-semibold">Speakers</h3>
                  <p className="text-[15px] font-normal mt-1">
                    Amazon wireless speakers
                  </p>
                  <p className="text-[18px] mt-2 font-medium underline decoration-[1px] underline-offset-3">
                    Shop Now
                  </p>
                </div>
              </div>

              {/* Perfume */}
              <div className="w-full md:w-1/2 h-[337px] bg-black relative rounded-[4px] flex overflow-hidden">
                <img
                  src={Blur1}
                  className="absolute w-full h-full object-cover"
                  alt="Blur"
                />
                <img
                  src={Gucci}
                  className="w-[330px] h-[260px] absolute object-contain top-10 left-3"
                  alt="Gucci"
                />
                <div className="relative z-10 text-white p-5">
                  <h3 className="text-[28px] font-semibold">Perfume</h3>
                  <p className="text-[15px] font-normal mt-1">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <p className="text-[18px] mt-2 font-medium underline decoration-[1px] underline-offset-3">
                    Shop Now
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Arrival;
