import SectionTitle from "../../../../Components/SectionTitle";

const CallToAction = () => {
  return (
    <div className="bg-cta-bg  bg-fixed bg-cover bg-center text-center py-16 lg:py-28 relative">
<div className="w-full h-full bg-theme-dark absolute left-0 top-0 opacity-30 z-10"></div>
<div className="z-20 relative">
<SectionTitle
        title={"Friendly Community"}
        subTitle={"Join Fluffy Friends Community Today"}
      ></SectionTitle>

      <button className="btn rounded-full   bg-theme-yellow hover:bg-theme-black hover:text-white  text-theme-dark text-xl slider-button">
        Sign Up now
      </button>
</div>
    </div>
  );
};

export default CallToAction;
