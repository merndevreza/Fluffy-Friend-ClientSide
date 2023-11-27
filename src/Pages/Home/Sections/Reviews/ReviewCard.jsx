import { BsChatQuote } from "react-icons/bs";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import PropTypes from "prop-types"


const ReviewCard = ({ item }) => {
  const { review, rating, authorName, authorImage } = item;
  return (
    <div className="bg-theme-black p-6 rounded-lg">
      <div className="text-end absolute right-2 top-2">
        <BsChatQuote className="text-theme-yellow text-8xl opacity-20" />
      </div>
      <div className="flex gap-4">
        <img className="w-[130px] rounded-full" src={authorImage} alt="" />
        <div className="pt-3">
          <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
          <h4 className="text-xl md:text-2xl font-semibold text-white uppercase mt-4">
            {authorName}
          </h4>
        </div>
      </div>
      <p className="text-lg text-theme-light my-10">{review}</p>
    </div>
  );
};
ReviewCard.propTypes={
   item:PropTypes.object
}
export default ReviewCard;
