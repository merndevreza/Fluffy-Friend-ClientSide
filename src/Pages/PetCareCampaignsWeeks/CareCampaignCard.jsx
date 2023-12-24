import PropTypes from "prop-types"; 
import { FaPhoneVolume } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5"; 
import { Link } from "react-router-dom";

const CareCampaignCard = ({item}) => {
   const { name, photo, address, map,phone,date  } = item;
  return (
    <div>
      <img
          className=" h-[400px] w-full object-cover rounded-2xl"
          src={photo}
          alt=""
        />
      <div className="text-center py-10 bg-theme-dark rounded-2xl relative -top-4 border-b-4 border-theme-yellow mx-2 space-y-3">
        <div className="inline-block absolute right-3 -top-5 bg-theme-yellow   text-lg text-theme-black p-2 px-5 font-medium rounded-full">
          <div className="flex gap-2 items-center">
            <IoLocationSharp />
            <Link to={map}>{address}</Link> 
          </div>
        </div>
        <h2 className="text-3xl font-medium text-white">{name}</h2>
        <div className="flex gap-2 items-center justify-center text-lg text-theme-yellow">
        <FaPhoneVolume />
          <span>{phone}</span>
        </div>
        <div>
         <p className="text-2xl font-semibold text-theme-yellow">Date: {date}</p>
        </div>
      </div>
    </div>
  );
};
CareCampaignCard.propTypes = {
   item: PropTypes.object,
 };
export default CareCampaignCard;