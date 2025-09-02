
import { useState } from "react"
import { useFirst } from "../../Context/FIrstContext";
import SwiperComp1 from "./SwiperComp";
import UpdateUser from "./UpdateUser";
import { useNavigate } from "react-router-dom";





const FlashSale = () => {
  const { alluser, deleteUser } = useFirst()
  const [showDelete, setShowDelete] = useState(false)
  const [showUpdate, setShowUpdate] = useState(false)
  const [updateData, setUpdateData] = useState()
  const navigate = useNavigate()
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
  if (!alluser) return null
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
      <div className="w-full flex justify-center mt-12 ">
        <button className="bg-[#DB4444] text-white px-7 py-3 cursor-pointer rounded-md">
          View All Categories
        </button>

      </div>
      <div>
        <span>All users data</span>
        <section>
          {
            alluser && alluser.map((data, index) => (
              <>
                <div className="flex  gap-3 items-center">
                  <span>{index}</span>
                  <div className="flex flex-row w-fit-content gap-3 items-center text-center">
                    <div className="flex flex-col w-[90px] gap-1">
                      <span className="font-bold text-lg">{data.email}</span>
                      <span className="w-fit h-fit text-center">{data.username}</span>
                    </div>
                    <button className="text-white ml-40 bg-red-400 rounded-lg px-5 py-3 cursor-pointer"
                      onClick={() => {
                        setShowDelete(true)
                      }}>
                      Delete
                    </button>

                    <button className="" onClick={() => {
                      setUpdateData(data)
                      setShowUpdate(true)

                    }}>Update</button>

                    <button onClick={() => {
                      navigate(`/user/${data._id}`)
                    }}>Show page</button>
                  </div>


                  {
                    showDelete == true &&
                    (
                      <div className="fixed inset-0 z-[9999] bg-transparent w-full h-full">
                        <div className="absolute left-[30%] top-[30%] flex flex-col bg-black text-white gap-5 w-[45%] p-6">
                          <span>are you sure you want to delete the data of user {data.email}?</span>
                          <div className="flex justify-between w-full">
                            <button className="text-white p-2 shadow-md bg-red-300"
                              onClick={() => {
                                deleteUser(data._id)
                                setShowDelete(false)
                              }

                              }>
                              Delete
                            </button>
                            <button
                              onClick={() => setShowDelete(false)}
                              className="p-2 shadow-md bg-red-300">cancel</button>
                          </div>
                        </div>

                      </div>
                    )
                  }
                </div>

              </>
            ))
          }
        </section>
      </div>


      {
        showUpdate &&
        <UpdateUser data={updateData} hideFunction={() => setShowUpdate(false)} />
      }

    </div>
  );
};

export default FlashSale;
