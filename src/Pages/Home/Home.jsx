import AboutUs from "./Sections/AboutUs/AboutUs";
import AdoptionProcess from "./Sections/AdoptionProcess/AdoptionProcess";
import CallToAction from "./Sections/CallToAction/CallToAction";
import Categories from "./Sections/Categories/Categories";
import Hero from "./Sections/Hero/Hero";
import Reviews from "./Sections/Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <div className="bg-shape-bg relative">
        <div className="absolute left-0 top-0 w-full h-full bg-theme-black dark:opacity-90 opacity-0"></div>
        <Hero></Hero>
      </div>
      <AboutUs></AboutUs>
      <Categories></Categories>
      <CallToAction></CallToAction>
      <AdoptionProcess></AdoptionProcess>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
