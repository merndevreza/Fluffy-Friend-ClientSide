import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

import { FaEnvelope, FaEye, FaEyeSlash, FaKey } from "react-icons/fa";
import Button from "../../Components/Button";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../../Components/SocialLogin";

const Login = () => {
  //TODO:
  const { loginUser } = useContext(AuthContext);

  const [isShown, setIsShown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handlePasswordShow = (e) => {
    e.preventDefault();
    setIsShown(!isShown);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    //login user
    loginUser(email, password)
      .then(() => {
        Swal.fire({
          title: "Congrats!!",
          text: `You successfully Logged in`,
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          title: "Error!",
          text: `${errorMessage}`,
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      });
  };

  return (
    <div>
      <div className="dark:bg-theme-dark bg-theme-light py-14 md:py-24 lg:py-28 px-2">
        <div className="dark:bg-theme-dark-top bg-white  max-w-3xl mx-auto px-6 md:px-12 py-10 md:py-20">
          <h2 className="text-4xl dark:text-white  text-theme-black mb-9 font-semibold">
            Login Now
          </h2>
          <form
            className="flex flex-col text-theme-black gap-3"
            onSubmit={handleLogin}
          >
            <div className="flex relative items-center mb-3 rounded-md  ">
              <label
                className="p-3 absolute rounded-md dark:text-white  "
                htmlFor="email"
              >
                <FaEnvelope></FaEnvelope>
              </label>
              <input
                className="w-full rounded-full  pl-12 py-2 bg-[#feab0c6c] dark:placeholder:text-[#fff] placeholder:text-theme-black dark:text-white text-theme-black  border-none"
                type="email"
                name="email"
                placeholder="Email*"
                id="email"
                required
              />
            </div>
            <div className="flex relative items-center mb-3 rounded-md  ">
              <label
                className="p-3 absolute rounded-md dark:text-white  "
                htmlFor="password"
              >
                <FaKey></FaKey>
              </label>
              <input
                className="w-full rounded-full  pl-12 py-2 bg-[#feab0c6c] dark:placeholder:text-[#fff] placeholder:text-theme-black dark:text-white text-theme-black  border-none"
                type={isShown ? "text" : "password"}
                name="password"
                placeholder="Password*"
                id="password"
                required
              />
              <button
                onClick={handlePasswordShow}
                className="absolute  dark:text-white right-3 bottom-3"
              >
                {isShown ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </button>
            </div>
            <div className="mt-3">
              <input
                className="btn rounded-full  border-none bg-theme-yellow hover:bg-theme-black hover:text-white  text-theme-dark text-xl px-8 slider-button"
                type="submit"
                value="Login"
              />
            </div>
          </form>

          <div className="relative text-center before:w-full before:h-[2px] before:bg-theme-black dark:before:bg-white  before:absolute before:left-0 mt-20 mb-4">
            <h2 className="text-xl dark:text-white  bg-white text-theme-black font-semibold dark:bg-theme-dark-top inline-block relative -top-3  px-4 ">
              You can also login with
            </h2>
          </div>
          <SocialLogin></SocialLogin>
        </div>
        <div className="mt-8 dark:bg-theme-dark-top bg-white  max-w-3xl mx-auto md:px-12 px-6 py-6 md:py-14 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-semibold dark:text-white  text-theme-black ">
            New Customer?
          </h2>
          <Link to="/register">
            <Button btnName={"Create Account"}></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
