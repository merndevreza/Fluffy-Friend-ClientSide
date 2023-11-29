import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import { useEffect } from "react";
import Pets from "../Shared/Pets/Pets";

const CategoryPage = () => {
   const [pets,setPets]=useState([])
   const params=useParams()
   const axiosPublic=useAxiosPublic()
   useEffect(()=>{
      axiosPublic.get(`/pet/category/${params.id}`)
      .then(res=>{
         setPets(res.data)
      })
   },[axiosPublic,params.id])
   return (
      <div className="shape-bg bg-fixed relative py-14 md:py-24 lg:py-28 ">
      <div className="absolute left-0 top-0 w-full h-full bg-theme-black dark:opacity-90 opacity-0"></div>
      {
         <Pets pets={pets}></Pets>
      }
      
    </div>
   );
};

export default CategoryPage;