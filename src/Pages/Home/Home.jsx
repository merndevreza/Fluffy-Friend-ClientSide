import AboutUs from "./Sections/AboutUs/AboutUs";
import Categories from "./Sections/Categories/Categories";
import Hero from "./Sections/Hero/Hero";

const Home = () => {
  return (
    <div>
      <div className="bg-theme-dark-top">
        <Hero></Hero>
      </div>
      <AboutUs></AboutUs>
      <Categories></Categories>
    </div>
  );
};

export default Home;
