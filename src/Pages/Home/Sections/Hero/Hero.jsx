import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "./Hero.css";
import "./animate.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const Hero = () => {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    fetch("slides.json")
      .then((res) => res.json())
      .then((data) => setSlides(data));
  }, []);
  return (
    <div>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col-reverse md:flex-row gap-10 container mx-auto justify-between items-center py-16 px-2">
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-theme-yellow mb-5 slider-title">
                  {slide.title}
                </h2>
                <p className="text-xl lg:text-3xl text-white mb-5 slider-sub-title">{slide.subtitle}</p>
                <button className="btn rounded-full bg-theme-yellow hover:bg-theme-black hover:text-white  text-theme-dark text-xl slider-button">
                  Adopt Now
                </button>
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
  );
};

export default Hero;
