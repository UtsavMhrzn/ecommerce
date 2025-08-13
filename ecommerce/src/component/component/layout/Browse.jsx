import L from '../../../assets/icons/L.png';
import R from '../../../assets/icons/R.png';
import Bphone from '../../../assets/icons/Bphone.png';
import Wphone from '../../../assets/icons/Wphone.png';
import Bmonitor from '../../../assets/icons/Bmonitor.png';
import Wmonitor from '../../../assets/icons/Wmonitor.png';
import Bwatch from '../../../assets/icons/Bwatch.png';
import Wwatch from '../../../assets/icons/Wwatch.png';
import Bcamera from '../../../assets/icons/Bcamera.png';
import Wcamera from '../../../assets/icons/Wcamera.png';
import Bheadphones from '../../../assets/icons/Bheadphones.png';
import Wheadphones from '../../../assets/icons/Wheadphones.png';
import Bgaming from '../../../assets/icons/Bgaming.png';
import Wgaming from '../../../assets/icons/Wgaming.png';

function Browse() {
    return (
        <div className="w-full h-fit mt-20 px-4 md:px-10 lg:px-80 flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-row items-center gap-3 text-[#DB4444] font-medium text-[16px]">
                <div className="h-[40px] w-[20px] rounded-[4px] bg-[#DB4444]"></div>
                <span>Categories</span>
            </div>

            {/* Title + Arrows */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="text-[28px] md:text-[36px] font-semibold">
                    <span>Browse By Categories</span>
                </div>

                <div className="flex flex-row gap-2">
                    <div className="w-[40px] h-[40px] flex items-center justify-center p-2.5 bg-[#F5F5F5] rounded-full">
                        <img src={L} className="w-full h-full" alt="Arrow Left" />
                    </div>
                    <div className="w-[40px] h-[40px] flex items-center justify-center p-2.5 bg-[#F5F5F5] rounded-full">
                        <img src={R} className="w-full h-full" alt="Arrow Right" />
                    </div>
                </div>
            </div>

            {/* Category Cards */}
            <div className="flex flex-wrap gap-4 md:gap-8 lg:gap-14 justify-center md:justify-start mt-10">
                {[
                    { name: "Phones", black: Bphone, white: Wphone },
                    { name: "Computers", black: Bmonitor, white: Wmonitor },
                    { name: "Smart Watches", black: Bwatch, white: Wwatch },
                    { name: "Cameras", black: Bcamera, white: Wcamera },
                    { name: "Head Phones", black: Bheadphones, white: Wheadphones },
                    { name: "Gaming", black: Bgaming, white: Wgaming },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="w-[160px] sm:w-[180px] h-[175px] relative border-gray-400 border-2 hover:bg-[#DB4444] group hover:text-white rounded-[4px] text-[16px] font-normal text-black flex items-center justify-center"
                    >
                        <img
                            src={item.black}
                            className="h-[56px] w-[56px] absolute object-contain mb-10 duration-300 group-hover:opacity-0"
                            alt={`${item.name} Black`}
                        />
                        <img
                            src={item.white}
                            className="h-[56px] w-[56px] absolute object-contain mb-10 opacity-0 duration-300 group-hover:opacity-100"
                            alt={`${item.name} White`}
                        />
                        <span className="z-10 absolute top-[120px]">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Browse;
