import Search from "../../../assets/icons/Search.svg";
import Vector from "../../../assets/icons/Vector.svg";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useFirst } from "../../Context/FIrstContext";
import Service from "./Service";

const Navbar = () => {
  
  const links = [
    { name: "Home", path: "/home" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    // { name: "Sign Up", path: "/signup" },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useFirst();
  const [activeLink, setActiveLink] = useState();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  // Sync active link with current path
  useEffect(() => {
    const currentLink = links.find((link) => link.path === location.pathname);
    if (currentLink) setActiveLink(currentLink.name);
    else setActiveLink(null);
  }, [location.pathname]);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 300); // Delay for interaction
  };
  const handleLogout = async() => {
    await logout()
  }

  return (
    <>
    <div className="overflow-x-hidden overflow-y-hidden">
      {/* Top Banner */}
      <div className="relative w-full text-white bg-black h-[48px] flex items-center justify-center">
        <div className="text-center">
          <span>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          </span>
          <strong><u>Shop</u></strong>
        </div>
        <div className="absolute right-20 flex items-center gap-2">
          <span>English</span>
          <img src={Vector} alt="Lang" />
        </div>
      </div>

      {/* Navbar */}
      <div className="flex justify-between items-center h-[80px] px-20 w-full bg-white border-b border-gray-300 text-black">
        <strong className="text-[24px]">Exclusive</strong>

        {/* Navigation Links */}
        <div className="flex font-medium text-[16px] gap-15">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`cursor-pointer ${
                activeLink === link.name
                  ? "underline underline-offset-2 decoration-1 decoration-black text-[#333333]"
                  : "text-[#333333]"
              } hover:drop-shadow-md hover:underline hover:underline-offset-2 hover:decoration-1 hover:decoration-black`}
              onClick={() => setActiveLink(link.name)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex gap-4 items-center">
          {/* Search Bar */}
          <div className="flex items-center gap-3 rounded-2xl bg-gray-100 px-3 py-2 text-[12px] font-medium">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent outline-none"
            />
            <img src={Search} className="w-[24px] h-[24px]" alt="Search" />
          </div>

          {/* Favourite Icon */}
          <div
            onClick={() => {
              setActiveLink("favourites");
              navigate("/favourites");
            }}
            className="group relative w-[30px] h-[30px] p-1 flex rounded-full hover:bg-[#DB4444] cursor-pointer"
          >
            <img
              src="/Assets/Bfav.png"
              alt="Fav"
              className="w-full h-full object-contain group-hover:opacity-0"
            />
            <img
              src="/Assets/Wfav.png"
              alt="Fav"
              className="w-full h-full object-contain p-1 absolute top-0 left-0 opacity-0 group-hover:opacity-100"
            />
          </div>

          {/* Cart Icon */}
          <div
            onClick={() => {
              setActiveLink("cart");
              navigate("/cart");
            }}
            className="group relative w-[30px] h-[30px] p-1 flex rounded-full hover:bg-[#DB4444] cursor-pointer"
          >
            <img
              src="/Assets/Bcart.png"
              alt="Cart"
              className="w-full h-full object-contain group-hover:opacity-0"
            />
            <img
              src="/Assets/Wcart.png"
              alt="Cart"
              className="w-full h-full object-contain p-1 absolute top-0 left-0 opacity-0 group-hover:opacity-100"
            />
          </div>

          {/* User Icon with Dropdown */}
          <div
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <div
              tabIndex={0}
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="w-[30px] h-[30px] p-1 flex rounded-full cursor-pointer hover:bg-[#DB4444]  relative"
            >
              <img
                src="/Assets/Buser.png"
                alt="User"
                className={`w-full h-full object-contain transition-opacity duration-200 ${
                  isDropdownOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <img
                src="/Assets/Wuser.png"
                alt="User"
                className={`w-full h-full object-contain p-1 absolute top-0 left-0 transition-opacity duration-200 ${
                  isDropdownOpen ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            {/* Dropdown Menu */}
            <div
              className={`${
                isDropdownOpen ? "flex" : "hidden"
              } flex-col gap-3 absolute top-10 right-0 bg-gradient-to-br from-[#5A5A5A] to-[#1F1F1F] text-white shadow-lg rounded-lg py-4 px-6 w-[200px] z-50`}
            >
              {[
                { label: "Manage My Account", path: "/profile", icon: "account_circle" },
                { label: "My Order", path: "/orders", icon: "shopping_bag" },
                { label: "My Cancellations", path: "/cancellations", icon: "cancel" },
                { label: "My Reviews", path: "/reviews", icon: "rate_review" },
                { label: "Logout", path: "/logout", icon: "logout" },
              ].map(({ label, path, icon }) => (
                <button
                  key={path}
                  onClick={() => {
                    if (label === "Logout") {
                      if (logout) logout();
                      
                      localStorage.removeItem("authenticated");
                      navigate("/login");
                      console.log("Logged out");
                      handleLogout();

                    } 
                    else if(label === "Manage My Account"){
                      navigate("/profile");
                    }
                    setDropdownOpen(false);
                  }}
                  className="flex items-center gap-2 hover:text-[#DB4444] text-left"
                >
                  <span className="material-icons"></span> {label}
                </button>
                
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Outlet for nested routes */}
      <Outlet />
    </div>
   </>
  );
};

export default Navbar;
