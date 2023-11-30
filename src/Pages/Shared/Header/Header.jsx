import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { RiMenuLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosMoon } from "react-icons/io";
import { FiSun } from "react-icons/fi";

import logo from "../../../assets/images/logo.png";
import Button from "../../../Components/Button";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, logOutUser } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  //fix menu at top
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 300);
    });
  }, []);

  //user-dropdown
  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
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
  }, [theme]);

  //mobile Menu
  const [isOpen, setIsOpen] = useState(false);
  const handleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  // Check user logged in or logged out and update UI instantly
  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false)
    }
  }, [user]);
  //logout
  const handleLogout = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          title: "Logged Out!!",
          text: `You successfully Logged out`,
          icon: "success",
          confirmButtonText: "OK",
        });
        setIsLoggedIn(false);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          title: "Error!",
          text: `${errorMessage}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };
  return (
    <div
      className={
        scroll
          ? "fixed z-[99] top-0 w-full dark:bg-theme-black bg-[#fbebcd] shadow-lg"
          : "dark:bg-theme-black bg-[#fbebcd]"
      }
    >
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
                <h2 className="text-xl md:text-4xl mb-2 text-theme-yellow font-semibold uppercase">
                  Fluffy Friend
                </h2>
                <h3 className="hidden md:block md:text-xl font-medium dark:text-white text-theme-black">
                  Adopt Adorable Pets
                </h3>
              </div>
            </div>
          </Link>
        </div>
        <nav className="order-1 xl:order-2">
          <button
            onClick={handleMobileMenu}
            className="text-2xl border-2 p-1 dark:text-white text-theme-black xl:hidden"
          >
            <RiMenuLine></RiMenuLine>
          </button>
          <ul
            className={
              isOpen
                ? "flex flex-col gap-4  text-xl font-medium  pl-6 absolute z-30 left-0 top-0 h-screen w-1/3 bg-theme-black text-theme-black dark:text-white "
                : "hidden xl:flex gap-6 text-theme-black dark:text-white  text-xl font-medium "
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
            <li className="hover:text-[#feab0c]">
              <NavLink to="/pet-listing">Pet Listing</NavLink>
            </li>
            <li className="hover:text-[#feab0c]">
              <NavLink to="/donation-campaigns">Donation Campaigns</NavLink>
            </li>
            <li className="hover:text-[#feab0c]">
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className="hover:text-[#feab0c]">
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </nav>
        <div className="order-last flex items-center gap-2">
          <button className="lg:mr-5" onClick={handleDarkLight}>
            {theme === "dark" ? (
              <FiSun className="dark:text-white text-theme-black text-[35px]" />
            ) : (
              <IoIosMoon className="dark:text-white text-theme-black text-[35px]" />
            )}
          </button>
          {isLoggedIn ? (
            user?.photoURL && (
              <div className="relative ">
                <img
                  onClick={handleDropdown}
                  className="w-[50px] h-[50px] object-cover cursor-pointer rounded-full "
                  src={user.photoURL}
                  alt="user photo"
                />
                {isDropdownOpen && (
                  <div className="absolute z-50 right-0 text-center px-4 py-6 bg-[#020c25]">
                    <Link
                      className="text-lg font-medium text-white mb-3 inline-block"
                      to="dashboard"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="btn rounded-full  border-none bg-theme-yellow hover:bg-theme-black hover:text-white cursor-pointer text-theme-dark text-xl px-8 slider-button"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )
          ) : (
            <Link to="/login">
              <Button btnName={"Login"}></Button>
            </Link>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
