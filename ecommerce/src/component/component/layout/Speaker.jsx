import Speaker from "../../../assets/icons/Speaker.png"
import Blur from "../../../assets/icons/Blur.png"

const Speak = () => {
    return (
        <>
            <div className="w-full max-w-[1170px] h-auto md:h-[500px] mx-auto mt-28 bg-black mb-20 px-4 md:px-0">
                <div className="flex flex-col md:flex-row justify-between h-full">
                    {/* Left Section */}
                    <div className="md:ml-15 md:mt-18 mt-8 flex flex-col gap-4">
                        <span className="text-[16px] font-medium text-[#00FF66]">Categories</span>
                        <h1 className="text-[32px] md:text-[48px] text-white font-semibold md:w-[400px]">
                            Enhance Your Music Experience
                        </h1>
                        <div className="flex flex-wrap gap-4 md:gap-6 mt-2">
                            {/* Timer Boxes */}
                            {[
                                { label: "Hours", value: "23" },
                                { label: "Days", value: "05" },
                                { label: "Minutes", value: "59" },
                                { label: "Seconds", value: "35" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="w-[62px] h-[62px] p-2.5 bg-white rounded-full text-black flex flex-col items-center justify-center"
                                >
                                    <span className="text-[16px] font-semibold">{item.value}</span>
                                    <span className="text-[13px] font-sans relative bottom-1.5">{item.label}</span>
                                </div>
                            ))}
                        </div>
                        <div className="text-white w-[171px] h-[56px] text-center flex items-center justify-center mt-6 bg-[#00FF66] cursor-pointer hover:bg-[#82e88c] rounded-[6px] text-[16px] font-semibold">
                            <span>Buy Now!</span>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="relative w-full md:w-[504px] h-[300px] md:h-[500px] mt-10 md:mt-0 md:mr-14 mx-auto">
                        <img
                            src={Blur}
                            className="w-full h-full object-fill"
                            alt="Blur background"
                        />
                        <img
                            src={Speaker}
                            className="h-[220px] md:h-[330px] w-full md:w-[569px] absolute top-0 left-0 mt-6 md:mt-15 object-contain z-50"
                            alt="Speaker"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Speak;
