import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenuLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosMoon } from "react-icons/io";
import { FiSun } from "react-icons/fi";

import logo from "../../../assets/images/logo.png";
const Header = () => {
   const [scroll, setScroll] = useState(false);
   const [isDropdownOpen,setIsDropdownOpen]=useState(false)
  const user = true;
  //fix menu at top
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 300);
    });
  }, []);
  
  //user-dropdown
  const handleDropdown=()=>{
   setIsDropdownOpen(!isDropdownOpen)
  }
  //dark light toggler
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const handleDarkLight = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.add("light");
  }, [theme]);

  //mobile Menu
  const [isOpen, setIsOpen] = useState(false);
  const handleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  //logout
  const handleLogout = () => {};
  return (
    <div className={scroll?"fixed z-30 top-0 w-full bg-[#04102e]":"bg-[#04102e]"}>
      <header className="container mx-auto py-4 px-2 flex justify-between items-center">
        <div className="order-2 xl:order-1">
          <Link to="/">
            <div className="flex items-center gap-3">
            <img
              className="max-h-[70px] md:max-h-[80px] lg:max-h-[100px]"
              src={logo}
              alt=""
            />
            <div>
               <h2 className="text-xl md:text-4xl mb-2 text-theme-yellow font-semibold uppercase">Fluffy Friend</h2>
               <h3 className="hidden md:block md:text-xl font-medium text-white">Adopt Adorable Pets</h3>
            </div>
            </div>
          </Link>
        </div>
        <nav className="order-1 xl:order-2">
          <button
            onClick={handleMobileMenu}
            className="text-2xl border-2 p-1 text-[#fff] xl:hidden"
          >
            <RiMenuLine></RiMenuLine>
          </button>
          <ul
            className={
              isOpen
                ? "flex flex-col gap-4  text-xl font-medium  pl-6 absolute z-30 left-0 top-0 h-screen w-1/3 bg-[#04102e] text-[#fff] "
                : "hidden xl:flex gap-6 text-[#fff]  text-xl font-medium "
            }
          >
            <div className={isOpen ? " text-right mt-4 mr-4" : "hidden"}>
              <button
                onClick={handleMobileMenu}
                className={
                  isOpen ? "text-2xl border-2 p-1 border-white" : "hidden"
                }
              >
                <AiOutlineClose></AiOutlineClose>
              </button>
            </div>
            <li className="hover:text-[#feab0c]">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/pet-listing">Pet Listing</NavLink>
            </li>
            <li>
              <NavLink to="/donation-campaigns">Donation Campaigns</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </nav>
        <div className="order-last flex items-center gap-2">
          <button className="lg:mr-5" onClick={handleDarkLight}>
            {theme === "dark" ? (
              <FiSun className="text-[#fff] text-[35px]" />
            ) : (
              <IoIosMoon className="text-[#fff] text-[35px]" />
            )}
          </button>
          {user ? (
            <div className="relative ">
              <img onClick={handleDropdown}
                className="w-[50px] h-[50px] object-cover cursor-pointer "
                src={logo}
                alt="user photo"
              />
              {
               isDropdownOpen &&
               <div className="absolute right-0 text-center px-4 py-6 bg-[#020c25]">
               <Link className="text-lg font-medium text-white mb-3 inline-block"  to='dashboard'>Dashboard</Link>
               <button
                 onClick={handleLogout}
                 className="btn bg-theme-golden hover:bg-theme-hover-golden  rounded-full border-none px-10 text-xl  text-[#fff]"
               >
                 Logout
               </button>
               </div>
              }
            </div>
          ) : (
            <Link to="/login">
              <button className="btn bg-theme-golden hover:bg-theme-hover-golden rounded-full border-none px-10 text-xl  text-[#fff]">
                Login
              </button>
            </Link>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
