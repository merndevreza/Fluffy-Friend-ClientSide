import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const {googleLogin,githubLogin}=useContext(AuthContext)

   const handleGoogleLogin = () => {
      googleLogin()
        .then(() => {
          Swal.fire({
            title: "Congrats!!",
            text: `You successfully Logged in`,
            icon: "success",
            confirmButtonText: "OK",
          });
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
          return;
        });
    };
    const handleGithubLogin = () => {
      githubLogin()
        .then(() => {
          Swal.fire({
            title: "Congrats!!",
            text: `You successfully Logged in`,
            icon: "success",
            confirmButtonText: "OK",
          });
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
          return;
        });
    };
   return (
      <div className="flex justify-center gap-3">
         <button className="text-3xl  rounded-full w-[50px] h-[50px] flex justify-center items-center bg-theme-yellow dark:bg-theme-black dark:hover:bg-theme-yellow hover:bg-theme-black" onClick={handleGoogleLogin}>
         <FcGoogle />
         </button>
         <button className="text-3xl  rounded-full w-[50px] h-[50px] flex justify-center items-center dark:bg-theme-black bg-theme-yellow hover:bg-theme-black hover:text-white text-theme-black dark:text-white dark:hover:bg-theme-yellow" onClick={handleGithubLogin}>
         <IoLogoGithub />
         </button>
      </div>
   );
};

export default SocialLogin;