import { Link } from "react-router-dom";
import Button from "../../../../Components/Button";
import petCareBanner from "../../../../assets/images/petDoctor.jpg"
import SectionTitle from "../../../../Components/SectionTitle";
const PetCareCampaigns = () => {
   return (
      <div className="dark:bg-theme-dark-top bg-[#f5eed9] py-14 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <SectionTitle
          title={"Pet Care Campaigns"}
          subTitle={"Free Vaccination and Treatment"}
          info={"If you have a pet and need doctors support then check our upcoming Pet Care Campaigns."}
        ></SectionTitle>
         <div className="text-center">
         <img className="max-h-[550px] rounded-md mx-auto" src={petCareBanner} alt="" /> 
         <div className="mt-8">
         <Link to="/pet-care-campaigns"><Button btnName={"Pet Care Campaigns"} ></Button></Link>
         </div>
         </div>
      </div>
    </div>
   );
};

export default PetCareCampaigns;