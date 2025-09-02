import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFirst } from "../../Context/FIrstContext";

const Signup = () => {
    const { signup, isAuthenticated } = useFirst()
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
    const [userData, setUserData] = useState({
    username: "",
    email: "",
  
    password: ""
  })
  const handleChange = (e) => {
    const  name = e.target.name
    const value = e.target.value
    setUserData((prev) => ({ 
      ...prev, [name]: value }))
  }
  
  const handlesignup = async() => {
    await signup(userData)
  }
  
    useEffect(() => {
      if (isAuthenticated == true) {
        navigate("/")
      }
      else {
        navigate("/signup")
      }
    }, [isAuthenticated])
  
  const exchng = [
    
    { name: "Log in", path: "/login" }];
    //  useEffect(() => {
    //     if (isAuthenticated == true) {
    //       navigate("/")
    //     }
    //     else {
    //       navigate("/signup")
    //     }
    //   }, [isAuthenticated])


  return (
    <>
      <div className="w-full">
        <div className="flex flex-row relative w-full gap-80 mt-25">
          <img src="/Assets/Sideimg.png" className="object-contain" />
          <div className="flex flex-col mt-22 gap-2">
            <span className="text-[36px] font-medium">Create an account</span>
            <span className="text-[18px] font-normal">Enter your details below</span>
            <div className="flex-col gap-3 mt-8 flex">
              <input
                type="text"
                placeholder="Name"
                name="username"
                 onChange={(e) => handleChange(e)}
                className="border-b-1 pb-2 outline-0 text-[#7D8184] drop-shadow-2xl shadow-black/40 text-[16px] p-2 border-gray-300"
              />
              <input
                type="email"
                placeholder="Email or Phone Number"
                name="email"
                 onChange={(e) => handleChange(e)}
                className="border-b-1 pb-2 outline-0 text-[#7D8184] text-[16px] p-2 border-gray-300"
              />
                 {/* <input
                type="number"
                placeholder="Phone Number"
                name="phoneNumber"
                 onChange={(e) => handleChange(e)}
                className="border-b-1 pb-2 outline-0 text-[#7D8184] text-[16px] p-2 border-gray-300"
              /> */}

              {/* ✅ Password with Show/Hide */}
              <div className="relative w-full max-w-md">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                   onChange={(e) => handleChange(e)}
                  className="border-b pb-2 outline-0 text-[#7D8184] text-[16px] p-2 w-full border-gray-300"
                />
                <img
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 cursor-pointer  text-[16px] w-[20px] h-[20px]"
                
                  src={showPassword ? "/Assets/hide.png" : "/Assets/visible.png"}>
                </img>
              </div>
            </div>

            <div className="h-[56px] text-center p-4.5 bg-[#DB4444] rounded-[6px] cursor-pointer mt-6 " onClick={handlesignup}>
              <span className="text-white text-[16px] font-semibold">Create Account</span>
            </div>

            <div className="h-[56px] text-center pl-14 flex flex-row gap-2 cursor-pointer shadow-sm shadow-black/30 border-gray-400 border-2 items-center bg-white rounded-[6px] mt-6">
              <img src="/Assets/Google.png" className="object-contain" />
              <span className="text-black text-[16px] font-semibold">Sing up with Google</span>
            </div>

            <div className="flex flex-row gap-2">
              <span className="text-[#747373] text-[16px] font-medium">Already have account?</span>
              <div className="underline decoration-[1px] cursor-pointer text-[16px] font-medium decoration-gray-600 underline-offset-4">
                {exchng.map((log) => (
                  <span key={log.path} onClick={() => navigate(`${log.path}`)}>
                    {log.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Signup;
