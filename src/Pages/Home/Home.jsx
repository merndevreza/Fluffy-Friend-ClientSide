import AboutUs from "./Sections/AboutUs/AboutUs";
import Hero from "./Sections/Hero/Hero";

const Home = () => {
  return (
    <div>
      <div className="bg-theme-dark-top">
        <Hero></Hero>
      </div>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
