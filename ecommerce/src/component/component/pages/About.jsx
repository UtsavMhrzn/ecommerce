import { useNavigate } from "react-router-dom";
import Bphone from '../../../assets/icons/Bphone.png'
import Wphone from '../../../assets/icons/Wphone.png'
import Bmonitor from '../../../assets/icons/Bmonitor.png'
import Wmonitor from '../../../assets/icons/Wmonitor.png'
import Bwatch from '../../../assets/icons/Bwatch.png'
import Wwatch from '../../../assets/icons/Wwatch.png'
import Bcamera from '../../../assets/icons/Bcamera.png'
import Wcamera from '../../../assets/icons/Wcamera.png'
import Service from "../layout/Service";

const About = () => {
  const links = [
    { name: 'Home', path: '/home' }
  ];
  const navigate = useNavigate();

  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-20 flex flex-col">
      {/* Breadcrumbs */}
      <div className="flex flex-row gap-3">
        <div className="text-[15px] text-[#7D8184] font-medium cursor-pointer hover:text-black">
          {links.map((home) => (
            <span key={home.path} onClick={() => navigate(`${home.path}`)}>
              {home.name}
            </span>
          ))}
        </div>
        <span className="text-[15px] text-[#7D8184] font-medium">/</span>
        <span className="text-[15px] font-medium hover:text-[#7D8184] cursor-pointer">About</span>
      </div>

      {/* Our Story */}
      <div className="flex flex-col lg:flex-row gap-5 mt-20 w-full">
        <div className="w-full lg:w-[568px]">
          <div className="flex flex-col gap-10 mt-25 text-black">
            <h1 className="text-[54px] font-semibold">Our Story</h1>
            <span className="text-[18px] font-sans">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, 
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </span>
            <span className="text-[18px] font-sans">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</span>
          </div>
        </div>
        <div className="w-full lg:w-[805px]">
          <img src="/Assets/Abt.png" className="object-contain w-full h-auto lg:h-[709px] relative" />
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="flex flex-wrap justify-center gap-6 mt-20">
        {["Wstall", "Wdollar", "Wshopbag", "Wmonbag"].map((icon, index) => (
          <div key={index} className="w-[250px] h-[235px] border-gray-400 border-2 hover:bg-[#DB4444] group hover:text-white rounded-[4px] text-[16px] font-normal text-black flex justify-center items-center flex-col">
            <div className="relative flex items-center justify-center mt-5">
              <div className="h-[80px] w-[80px] rounded-full flex items-center justify-center z-10 relative">
                <div className="absolute inset-0 rounded-full bg-gray-300 group-hover:bg-[#ffffff66]"></div>
                <div className="h-[50px] w-[50px] rounded-full bg-black group-hover:bg-white z-10 flex items-center justify-center">
                  <img src={`/Assets/${icon}.png`} className="h-[28px] w-[28px] object-contain group-hover:opacity-0 absolute duration-300" />
                  <img src={`/Assets/B${icon.substring(1)}.png`} className="h-[28px] w-[28px] object-contain opacity-0 group-hover:opacity-100 absolute duration-300" />
                </div>
              </div>
            </div>
            <span className="text-[32px] font-bold mt-4">{["10.5k", "33k", "45.5k", "25k"][index]}</span>
            <span className="z-10 text-sm">{["Sellers active on our site", "Monthly Product Sale", "Customer active in our site", "Annual gross sale in our site"][index]}</span>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="flex flex-col md:flex-row gap-8 mt-40 items-center justify-center">
        {["Celeb1", "Celeb2", "Celeb3"].map((celeb, i) => (
          <div key={celeb} className="w-[380px] h-[594px]">
            <div className="flex flex-col gap-2">
              <div className="w-[390px] h-[480px] justify-items-center p-10 bg-gray-100">
                <img src={`/Assets/${celeb}.png`} className="object-contain w-full h-full" />
              </div>
              <span className="text-[32px] font-medium mt-4">{["Tom Cruise", "Emma Watson", "Will Smith"][i]}</span>
              <span className="text-[16px] font-sans">{["Founder & Chairman", "Managing Director", "Product Designer"][i]}</span>
              <div className="flex flex-row gap-5">
                {[1, 2, 3].map(n => (
                  <img key={n} src={`/Assets/Socials${n}.png`} className="object-contain" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot Navigation */}
      <div className="flex flex-row gap-2 mt-10 justify-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="rounded-full bg-gray-300 w-[12px] h-[12px] hover:bg-[#DB4444] hover:border-2 hover:border-white"></div>
        ))}
      </div>

      {/* Service Section */}
      <div className="mt-10">
        <Service />
      </div>
    </div>
  );
};

export default About;
