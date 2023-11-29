import pageBg from "../assets/images/bb.jpg";
const PageBanner = ({ pageTitle,pageSubtitle }) => {
  return (
    <div className="relative">
      <div className="relative">
        <img className="w-full lg:h-[400px] xl:h-[550px] object-cover" src={pageBg} alt="" />
        <div className="w-full h-full bg-theme-dark absolute left-0 top-0 opacity-50 z-10"></div>
      </div>
      <div className="absolute left-[10%] xl:left-1/4 top-1/2 -translate-y-1/2 z-10">
         <h3 className="text-3xl md:text-4xl lg:text-5xl mb-5 text-white font-semibold ">{pageTitle}</h3>
        <h2 className="text-xl lg:text-2xl bg-theme-yellow py-2 px-5 rounded-full text-theme-black font-semibold inline-block">{pageSubtitle}</h2>
      </div>
    </div>
  );
};

export default PageBanner;
