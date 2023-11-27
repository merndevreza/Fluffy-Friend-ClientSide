import { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SectionTitle"; // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import CategoryCard from "./CategoryCard";

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
    <div className="my-28 container mx-auto">
      <SectionTitle
        title={"Categories"}
        subTitle={"Meet Our Adoptable Companions"}
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
  );
};

export default Categories;
