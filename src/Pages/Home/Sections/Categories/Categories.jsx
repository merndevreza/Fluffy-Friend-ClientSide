import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import SectionTitle from "../../../../Components/SectionTitle"; 

//swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


const Categories = () => {
  const [slidesPerView, setSlidesPerView] = useState(0);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  
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
   <div className="bg-theme-dark-top">
     <div className="py-28 container mx-auto">
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
          <SwiperSlide key={item.id}>
            <CategoryCard item={item}></CategoryCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
   </div>
  );
};

export default Categories;
