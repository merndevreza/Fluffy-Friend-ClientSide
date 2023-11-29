import Button from "../../../../Components/Button";
import "./CallToAction.css"

const CallToAction = () => {
  return (
    <div className="cta-bg  bg-fixed bg-cover bg-center text-center py-16 lg:py-32 relative">
      <div className="w-full h-full bg-theme-dark absolute left-0 top-0 opacity-40 z-10"></div>
      <div className="z-20 relative">
      <div className="text-center max-w-5xl mx-auto">
         <h4 className="text-3xl font-medium text-theme-yellow">Find Your Furry Companion Today</h4>
          <h2 className="text-3xl md:text-5xl font-semibold text-white my-8 md:leading-normal">
          Take the First Step Towards Unconditional Love and Lifelong Happiness
          </h2> 
        <Button btnName={"Adopt A Pet Today"}></Button>
      </div> 
      </div>
    </div>
  );
};

export default CallToAction;
