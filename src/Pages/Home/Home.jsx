import AboutUs from "./Sections/AboutUs/AboutUs";
import AdoptionProcess from "./Sections/AdoptionProcess/AdoptionProcess";
import CallToAction from "./Sections/CallToAction/CallToAction";
import Categories from "./Sections/Categories/Categories";
import Hero from "./Sections/Hero/Hero";
import PetCareCampaigns from "./Sections/PetCareCampaigns/PetCareCampaings";
import Reviews from "./Sections/Reviews/Reviews";

const Home = () => {
  return (
    <div> 
      <Hero></Hero>
      <AboutUs></AboutUs>
      <Categories></Categories>
      <PetCareCampaigns></PetCareCampaigns>
      <CallToAction></CallToAction>
      <AdoptionProcess></AdoptionProcess>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
