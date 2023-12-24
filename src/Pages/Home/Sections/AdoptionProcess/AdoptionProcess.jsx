import { Link } from "react-router-dom";
import Button from "../../../../Components/Button";
import SectionTitle from "../../../../Components/SectionTitle";
import rescueBanner from "../../../../assets/images/animal-resque.jpeg"

const AdoptionProcess = () => {
  return (
    <div className="dark:bg-theme-dark-top bg-[#f5eed9] py-14 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <SectionTitle
          title={"Animal Rescue Teams"}
          subTitle={"Contact with volunteer teams"}
          info={"If you have found any pet need help then contact with a rescue team near you or inform us. We will send rescue team"}
        ></SectionTitle>
         <div className="text-center">
         <img className="max-h-[500px] rounded-md mx-auto" src={rescueBanner} alt="" />
         
         <div className="mt-8">
         <Link to="/animal-rescue"><Button btnName={"Animal Rescue Teams"} ></Button></Link>
         </div>
         </div>
      </div>
    </div>
  );
};

export default AdoptionProcess;
