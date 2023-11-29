import PetCard from "../../PetListing/PetCard";
import PropTypes from "prop-types";
const Pets = ({ pets }) => {
  return (
    <div className="container mx-auto relative z-10 px-2">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-12">
        {pets.length < 1 ? (
          <div className="text-center col-span-3 mt-10">
            <h4 className="text-3xl font-medium text-theme-yellow mb-10">
              Sorry!
            </h4>
            <h2 className=" text-3xl md:text-5xl font-semibold dark:text-white text-theme-black  mt-4 mb-8">
              Not available for adoption.
            </h2>
          </div>
        ) : (
          pets.map((item) => <PetCard key={item._id} item={item}></PetCard>)
        )}
      </div>
    </div>
  );
};
Pets.propTypes = {
  pets: PropTypes.array,
};
export default Pets;
