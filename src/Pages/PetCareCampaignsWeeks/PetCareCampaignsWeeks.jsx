import { useEffect, useState } from "react";
import CareCampaignCard from "./CareCampaignCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const PetCareCampaignsWeeks = () => {
   const [rescueTeams, setRescueTeams] = useState([]);
   const axiosPublic = useAxiosPublic();
   useEffect(() => {
    axiosPublic.get("/care-campaign").then((res) => {
      setRescueTeams(res.data)
    });
    }, [axiosPublic]);
   return (
      <div> 
         <div className="shape-bg bg-fixed relative py-14 md:py-24 lg:py-28">
      <div className="absolute left-0 top-0 w-full h-full bg-theme-black dark:opacity-90 opacity-0"></div>
      
    <div className="container mx-auto relative z-10 px-2">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-12">
        {rescueTeams.length < 1 ? (
          <div className="text-center col-span-3 mt-10">
            <h4 className="text-3xl font-medium text-theme-yellow mb-10">
              Sorry!
            </h4>
            <h2 className=" text-3xl md:text-5xl font-semibold dark:text-white text-theme-black  mt-4 mb-8">
              Not available for adoption.
            </h2>
          </div>
        ) : (
         rescueTeams.map((item) => <CareCampaignCard key={item._id} item={item}></CareCampaignCard>)
        )}
      </div>
    </div>
    </div>
      </div>
   );
};

export default PetCareCampaignsWeeks;