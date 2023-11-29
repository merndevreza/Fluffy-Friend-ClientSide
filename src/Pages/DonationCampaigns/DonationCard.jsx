import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import { FaDonate } from "react-icons/fa";
import { LuBarChart2 } from "react-icons/lu";
import PropTypes from "prop-types";

const DonationCard = ({item}) => {
   const {_id,petName,image,maxDonationAmount,totalDonationAmount}=item;
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
        <FaDonate /> Total:
          ${totalDonationAmount}
        </div>
      </div>
      <h2 className="text-3xl font-medium text-white">{petName}</h2>
      <div className="flex gap-2 items-center justify-center text-xl text-white">
      <LuBarChart2 />
        <span>Max Donation: ${maxDonationAmount}</span>
      </div>
      <div>
        <Link to={`/donation/details/${_id}`}>
          <Button btnName={"Details"}></Button>
        </Link>
      </div>
    </div>
  </div>
   );
};
DonationCard.propTypes = {
   item: PropTypes.object,
 };

export default DonationCard;