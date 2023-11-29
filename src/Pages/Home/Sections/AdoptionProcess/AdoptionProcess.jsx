import SectionTitle from "../../../../Components/SectionTitle";

const AdoptionProcess = () => {
  return (
    <div className="dark:bg-theme-dark-top bg-[#f5eed9] py-28">
      <div className="container mx-auto">
        <SectionTitle
          title={"How it works?"}
          subTitle={"Follow the Easy Steps"}
          info={"Follow the Fluffy Friends Adoption  steps outlined below to bring joy into your home and make a lasting impact on the life of a lovable pet."}
        ></SectionTitle>
        
        <ul className="steps steps-vertical lg:steps-horizontal">
              <li className="step">
               <div className="dark:bg-theme-dark bg-[#feab0c6c] px-5 py-10 m-3">
               <h3 className="text-3xl font-semibold dark:text-white text-theme-black mb-5">Explore Our Adorable Companions</h3>
               <p className="dark:text-theme-light text-theme-dark text-lg">Browse through our diverse categories of pets, each with its unique charm and personality. Find the perfect companion for you.</p>
               </div>
              </li>  
              <li className="step">
               <div className="dark:bg-theme-dark bg-[#feab0c6c]  px-5 py-10 m-3">
               <h3 className="text-3xl font-semibold dark:text-white text-theme-black  mb-5">Submit Your Adoption Application</h3>
               <p className="dark:text-theme-light text-theme-dark text-lg">Once you &apos; ve found your potential furry friend, fill out a simple and straightforward adoption application. This will ensure your chance.  </p>
               </div>
              </li>  
              <li className="step">
               <div className="dark:bg-theme-dark bg-[#feab0c6c] px-5 py-10 m-3">
               <h3 className="text-3xl font-semibold dark:text-white text-theme-black  mb-5">Meet and Greet</h3>
               <p className="dark:text-theme-light text-theme-dark text-lg">Schedule a meet-and-greet session with your chosen pet. This is an opportunity for you to interact with your potential companion, and ensure that it is a perfect fit for your home.</p>
               </div>
              </li>  
              <li className="step">
               <div className="dark:bg-theme-dark bg-[#feab0c6c]  px-5 py-10 m-3">
               <h3 className="text-3xl font-semibold dark:text-white text-theme-black  mb-5">Welcome Your New Family Member</h3>
               <p className="dark:text-theme-light text-theme-dark text-lg">After a successful meet-and-greet, complete the adoption process, and welcome your new family member with open arms.  </p>
               </div>
              </li>  
            </ul>
      </div>
    </div>
  );
};

export default AdoptionProcess;
