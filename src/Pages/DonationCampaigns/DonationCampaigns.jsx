import { useEffect, useState } from "react"; 
import DonationCard from "./DonationCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const DonationCampaigns = () => {
   const [donationCampaigns, setDonationCampaigns] = useState([]);
   const axiosPublic=useAxiosPublic()
   useEffect(() => {
    axiosPublic.get("/donations") 
       .then(res=>{
         setDonationCampaigns(res.data)
       })
   }, []);
   return (
      <div className="bg-shape-bg bg-fixed relative py-28">
      <div className="absolute left-0 top-0 w-full h-full bg-theme-black dark:opacity-90 opacity-0"></div>
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-3 gap-12">
          {
            donationCampaigns.map(item=><DonationCard key={item._id} item={item}></DonationCard>)
          }
        </div>
      </div>
    </div>
   );
};

export default DonationCampaigns;