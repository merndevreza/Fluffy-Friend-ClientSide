import { Link } from "react-router-dom";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import footerLogo from "../../../assets/images/logo.png";
const Footer = () => {
  return (
    <footer className="bg-theme-black">
      <div className=" footer footer-center p-10 bg-[#03112c6c] text-[#fff]">
        <aside>
          <img className="w-[160px] lg:w-[200px] xl:w-auto" src={footerLogo} alt="" />
          <div>
            <h2 className="text-3xl md:text-4xl mb-2 text-theme-yellow font-semibold uppercase">
              Fluffy Friend
            </h2>
            <h3 className="hidden md:block md:text-xl font-medium text-white">
              Adopt Adorable Pets
            </h3>
          </div>
          <p className="text-lg mt-5 lg:text-xl max-w-5xl"> 
            Fluffy Friends Adoptions are trying to connect adorable pets with
            loving homes. As a nonprofit organization, we are committed to the
            welfare of animals, driven by the belief that every pet deserves a
            secure and affectionate forever home. At Fluffy Friends, we go
            beyond traditional adoption. We are a community of dedicated
            individuals united by the common goal of ensuring each pet finds not
            just a home but a place filled with love and compassion. Our
            commitment to transparency, support, and responsible pet ownership
            sets us apart.
          </p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link to="/">
              <FaLinkedinIn></FaLinkedinIn>
            </Link>
            <Link to="/">
              <RiTwitterXFill></RiTwitterXFill>
            </Link>
            <Link to="/">
              <FaFacebookF></FaFacebookF>
            </Link>
            <Link to="/">
              <FaInstagram></FaInstagram>
            </Link>
          </div>
        </nav>
      </div>
      <p className="bg-[#010114] text-center text-[#fff] py-4">
        Copyright &copy; 2023, All right reserved by Rezaul Karim.
      </p>
    </footer>
  );
};

export default Footer;
