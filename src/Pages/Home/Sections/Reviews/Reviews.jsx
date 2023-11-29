import { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SectionTitle";
import reviewImg from "../../../../assets/images/testimonial-bg.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ReviewCard from "./ReviewCard";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
const Reviews = () => {
   const [reviews,setReviews]=useState([])
   const axiosPublic=useAxiosPublic()
   useEffect(()=>{
    axiosPublic.get("/reviews") 
      .then(res=>{
         setReviews(res.data)
      })
   },[axiosPublic])
  return (
    <div className="bg-shape-bg relative py-28">
        <div className="absolute left-0 top-0 w-full h-full bg-theme-black dark:opacity-90 opacity-0"></div>
      <div className="container mx-auto relative z-20">
        <SectionTitle
          title={"Testimonials"}
          subTitle={"Adopter's Reviews"}
          info={
            "Real Experiences, Real Bonds. Discover the Joy of Fluffy Friends Adoptions Through Our Adopter's Reviews"
          }
        ></SectionTitle>
      </div>
    <div className="px-2 relative z-10">
      <div className=" flex flex-col xl:flex-row justify-center items-center gap-10 container mx-auto ">
        <div className="xl:w-full flex justify-center">
          <img
            className="h-[300px] md:h-[450px] xl:h-[500px]"
            src={reviewImg}
            alt="Fluffy Friend review"
          /> 
        </div>
        <div className="w-full xl:w-1/2">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {
            reviews.map(item=> <SwiperSlide key={item._id}>
         <ReviewCard item={item}></ReviewCard>
               </SwiperSlide>)
          }
      </Swiper>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Reviews;
