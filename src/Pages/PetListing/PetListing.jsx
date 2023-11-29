import { useState } from "react";
import { useEffect } from "react";
import PetCard from "./PetCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const PetListing = () => {
  const [pets, setPets] = useState([]);
  const axiosPublic=useAxiosPublic()
  useEffect(() => {
    axiosPublic.get("/pets") 
      .then(res=>{
         setPets(res.data)
      })
  }, [axiosPublic]); 
  return (
    <div className="bg-shape-bg bg-fixed relative py-28">
      <div className="absolute left-0 top-0 w-full h-full bg-theme-black dark:opacity-90 opacity-0"></div>
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-3 gap-12">
          {
            pets.map(item=><PetCard key={item._id} item={item}></PetCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default PetListing;
