import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import SectionTitle from "../../../../Components/SectionTitle"; 

//swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";


const Categories = () => {
  const [slidesPerView, setSlidesPerView] = useState(0);
  const [categories, setCategories] = useState([]);
  const axiosPublic=useAxiosPublic()
  useEffect(() => {
    axiosPublic.get("/categories") 
      .then((res) => {
        setCategories(res.data);
      });
  }, [axiosPublic]);
  
  useEffect(() => {
    setSlidesPerView(getInitialSlidesPerView)
   }, []);
 
  const getInitialSlidesPerView = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1440) {
       return 3;
    }else if (screenWidth >= 768) {
      return 2;
    } else {
      return 1;
    }  
  };
 
  return (
    <div className="shape-bg relative py-14 md:py-24 lg:py-28">
    <div className="absolute left-0 top-0 w-full h-full bg-theme-black dark:opacity-90 opacity-0"></div>
     <div className="container mx-auto relative z-10">
      <SectionTitle
        title={"Categories"}
        subTitle={"Meet Our Companions"}
        info={"Explore our diverse range of lovable pets waiting for their forever homes. Find the perfect companion to welcome into your heart and home."}
      ></SectionTitle>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {categories.map((item) => (
          <SwiperSlide key={item._id}>
            <CategoryCard item={item}></CategoryCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
   </div>
  );
};

export default Categories;
