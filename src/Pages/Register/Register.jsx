import { useContext, useState } from "react";
import { FaCamera, FaEnvelope, FaEye, FaEyeSlash, FaKey, FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../../Components/Button";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import SocialLogin from "../../Components/SocialLogin";

const Register = () => { 
   const {createUser}=useContext(AuthContext) 
   const [isShown, setIsShown] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
   const handlePasswordShow = (e) => {
     e.preventDefault();
     setIsShown(!isShown);
   };
 
   const handleRegister = (e) => {
     e.preventDefault();
     const form = new FormData(e.currentTarget);
     const name = form.get("name");
     const photo = form.get("photo");
     const email = form.get("email");
     const password = form.get("password");
     const checkTerms = e.target.checkTerms.checked;
     const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{6,}$/;
     //checkbox
     if (!checkTerms) {
       Swal.fire({
         title: "Error!",
         text: "Please Read and accept our Terms & Conditions to create your account",
         icon: "error",
         confirmButtonText: "OK",
       });
       return;
     }
     //password
     if (!regex.test(password)) {
       Swal.fire({
         title: "Error!",
         text: "Error: Please make sure your password is at least 6 characters or longer and contain uppercase letter and also a special character",
         icon: "error",
         confirmButtonText: "OK",
       });
       return;
     }
     //create user
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          updateProfile(user, {
            displayName: name,
            photoURL: photo,
          })
            .then()
            .catch((error) => {
              Swal.fire({
                title: "Error!",
                text: `${error.message}`,
                icon: "error",
                confirmButtonText: "OK",
              });
            });
          Swal.fire({
            title: "Congrats!!",
            text: "You registered successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });
            navigate(location?.state ? location.state : "/");
        })
        .catch((error) => {
          Swal.fire({
            title: "Error!",
            text: `${ error.message }`,
            icon: "error",
            confirmButtonText: "OK",
          });
        });
   };
   return (
      
      <div className="dark:bg-theme-dark bg-theme-light py-14 md:py-24 lg:py-28 px-2">
        <div className="dark:bg-theme-dark-top bg-white max-w-3xl mx-auto px-6 md:px-12 py-10 md:py-20">
          <h2 className="text-4xl mb-9 dark:text-white  text-theme-black font-semibold">Register Now</h2>
          <form className="flex flex-col gap-3 text-theme-black " onSubmit={handleRegister}>
            <div className="flex relative items-center mb-3 rounded-md  ">
              <label
                className="p-3 absolute rounded-md dark:text-white "
                htmlFor="name"
              >
                <FaUser></FaUser>
              </label>
              <input
                className="w-full rounded-full  pl-12 py-2 bg-[#feab0c6c] dark:placeholder:text-[#fff] placeholder:text-theme-black dark:text-white text-theme-black  border-none"
                type="text"
                name="name"
                placeholder="Name*"
                id="name"
                required
              />
            </div>
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
                htmlFor="photo"
              >
                <FaCamera></FaCamera>
              </label>
              <input
                className="w-full rounded-full  pl-12 py-2 bg-[#feab0c6c] dark:placeholder:text-[#fff] placeholder:text-theme-black dark:text-white text-theme-black  border-none"
                type="url"
                name="photo"
                placeholder="Photo url"
                id="photo"
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
                placeholder="Create password*"
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
            <div className="py-3 text-theme-black dark:text-white">
              <input type="checkbox" id="checkTerms" name="checkTerms" />
              <label className="pl-2" htmlFor="checkTerms">
                Please accept our 
                <Link
                  className="font-medium ml-2 underline underline-offset-2"
                  to="/"
                >
                   Terms & Conditions
                </Link>
              </label>
            </div>
            <div className="mt-3">
              <input
                className="btn rounded-full  border-none bg-theme-yellow hover:bg-theme-black hover:text-white  text-theme-dark text-xl px-8 slider-button"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <div className="relative text-center before:w-full before:h-[2px] before:bg-theme-black dark:before:bg-white  before:absolute before:left-0 mt-20 mb-4">
            <h2 className="text-xl dark:text-white  bg-white text-theme-black font-semibold dark:bg-theme-dark-top inline-block relative -top-3  px-4 ">
              You can also create account with
            </h2>
          </div>
          <SocialLogin></SocialLogin>
        </div>
        <div className="mt-8  dark:bg-theme-dark-top bg-white  max-w-3xl mx-auto md:px-12 px-6 py-6 md:py-14 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-semibold dark:text-white  text-theme-black ">Already Have Account?</h2>
          <Link to="/login">
            <Button btnName={"Login"}></Button>
          </Link>
        </div>
      </div>
   );
};

export default Register;