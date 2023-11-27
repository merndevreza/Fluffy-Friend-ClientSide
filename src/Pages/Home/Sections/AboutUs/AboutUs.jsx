import aboutImg from "../../../../assets/images/about.png";
import aboutBadge from "../../../../assets/images/about-badge.png";
import { IoMdPaw } from "react-icons/io";

const AboutUs = () => {
  return (
    <div className="bg-theme-dark py-28 px-2">
      <div className=" flex flex-col xl:flex-row justify-center gap-10 container mx-auto ">
        <div className="xl:w-full flex justify-center relative">
          <img
            className="h-[300px] md:h-[400px] xl:h-[600px]"
            src={aboutImg}
            alt="Fluffy Friend"
          />
          <img
            className="absolute right-[10%] md:right-[30%] xl:right-[20%] top-5 w-24 md:w-28  xl:w-auto"
            src={aboutBadge}
            alt="badge"
          />
        </div>
        <div className="w-full text-center xl:text-left">
          <h4 className="text-3xl font-medium text-theme-yellow">About Us</h4>
          <h2 className=" text-3xl md:text-5xl font-semibold text-white mt-4 mb-8">
            FluffyFriend Adoptions
          </h2>
          <p className="text-lg md:text-xl text-theme-light mb-12">
            Welcome to FluffyFriend Adoptions, where we believe in creating
            forever homes for pets and fostering meaningful connections between
            humans and their future furry companions. Our mission is to make the
            adoption process a joyful and fulfilling experience for both pets
            and adopters. At FluffyFriend, we are not just matching pets with
            homes; we are building lifelong bonds filled with love and
            companionship.
          </p>
          <ul className="font-nunito text-lg md:text-xl  text-left space-y-2 xl:space-y-5 text text-white mb-10">
            <li className="flex gap-2">
              <div className=" h-7 bg-theme-yellow text-theme-black rounded-full p-1">
                <IoMdPaw />
              </div>
              We are a nonprofit animal welfare organization.
            </li>
            <li className="flex gap-2  ">
              <div className=" bg-theme-yellow text-theme-black rounded-full p-1 h-7">
                <IoMdPaw />
              </div>
              Join our community-driven approach to animal welfare, where every
              adoption contributes to building a more compassionate society.
            </li>
            <li className="flex gap-2  ">
              <div className=" h-7 bg-theme-yellow text-theme-black rounded-full p-1">
                <IoMdPaw />
              </div>
              Our team is dedicated to providing unwavering support throughout
              your entire journey of pet ownership.
            </li>
            <li className="flex gap-2  ">
              <div className="h-7 bg-theme-yellow text-theme-black rounded-full p-1">
                <IoMdPaw />
              </div>
              FluffyFriend actively collaborates with other organizations,
              volunteers, and communities to create a network focused on the
              welfare of animals.
            </li>
          </ul>
          <button className="btn rounded-full   bg-theme-yellow hover:bg-theme-black hover:text-white  text-theme-dark text-xl slider-button">
            Discover Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
