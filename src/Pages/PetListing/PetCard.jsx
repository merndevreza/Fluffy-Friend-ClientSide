import { IoCalendar, IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import PropTypes from "prop-types";
const PetCard = ({ item }) => {
  const { _id, name, age, location, image } = item;
  return (
    <div>
      <img
          className=" h-[500px] w-full object-cover rounded-2xl"
          src={image}
          alt=""
        />
      <div className="text-center py-10 bg-theme-dark rounded-2xl relative -top-4 border-b-4 border-theme-yellow mx-2 space-y-3">
        <div className="inline-block absolute right-3 -top-5 bg-theme-yellow   text-lg text-theme-black p-2 px-5 font-medium rounded-full">
          <div className="flex gap-2 items-center">
            <IoLocationSharp />
            {location}
          </div>
        </div>
        <h2 className="text-3xl font-medium text-white">{name}</h2>
        <div className="flex gap-2 items-center justify-center text-xl text-white">
          <IoCalendar />
          <span>Age: {age} years</span>
        </div>
        <div>
          <Link to={`/pet/details/${_id}`}>
            <Button btnName={"Details"}></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
PetCard.propTypes = {
  item: PropTypes.object,
};
export default PetCard;
