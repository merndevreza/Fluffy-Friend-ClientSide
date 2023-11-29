import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "./Hero.css";
import "./animate.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import Button from "../../../../Components/Button";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const Hero = () => {
  const [slides, setSlides] = useState([]);
  const axiosPublic=useAxiosPublic()
  useEffect(() => {
    axiosPublic.get("/slides")
      .then((res) => setSlides(res.data)) 
  }, [axiosPublic]);
  return (
    <div className="shape-bg relative">
      <div className="absolute left-0 top-0 w-full h-full bg-theme-black dark:opacity-90 opacity-0 z-10"></div>
      <div className="relative z-20">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide._id}>
            <div className="flex flex-col-reverse md:flex-row gap-10 container mx-auto justify-between items-center py-16 px-2">
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-theme-yellow mb-5 slider-title">
                  {slide.title}
                </h2>
                <p className="text-xl lg:text-3xl dark:text-white text-theme-black mb-5 slider-sub-title font-medium">{slide.subtitle}</p>
                <Button animationClass={"slider-button"} btnName={"Adopt Now"}></Button>
              </div>
              <div className="relative">
               <div className="absolute md:top-12 md:left-4 bg-theme-yellow rounded-full w-20 h-20 md:w-24 md:h-24 flex justify-center items-center">
                  <span className="md:text-xl font-bold text-theme-black text-center">300+ <br />Pets</span>
               </div>
                <img
                  className="rounded-full w-[300px] md:w-auto bg-[rgb(255,255,255)] shadow"
                  src={slide.img}
                  alt=""
                />
                <div className="absolute bottom-3 md:bottom-8 right-0 bg-theme-yellow rounded-full w-52 h-10 md:h-20  flex justify-center items-center">
                   <span className="md:text-xl font-bold text-theme-black text-center md:px-9">Vaccinated Cats & Dogs</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default Hero;
