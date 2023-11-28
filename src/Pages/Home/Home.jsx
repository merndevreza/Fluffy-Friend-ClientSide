import AboutUs from "./Sections/AboutUs/AboutUs";
import AdoptionProcess from "./Sections/AdoptionProcess/AdoptionProcess";
import CallToAction from "./Sections/CallToAction/CallToAction";
import Categories from "./Sections/Categories/Categories";
import Hero from "./Sections/Hero/Hero";
import Reviews from "./Sections/Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <div className="bg-theme-dark-top">
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
