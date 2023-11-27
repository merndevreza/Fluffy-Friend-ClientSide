import PropTypes from "prop-types"
const CategoryCard = ({ item }) => {
  const { name, info, image } = item;
  return (
    <div className="text-center">
      <img className="w-[370px] h-[370px] mx-auto object-cover rounded-full bg-white" src={image} alt="" />
      <div className="mt-5">
        <h2 className="text-3xl font-semibold text-theme-yellow mb-3">{name}</h2>
        <p className="text-lg mb-3 text-theme-light">{info}</p>

        <button className="btn rounded-full bg-theme-yellow hover:bg-theme-black hover:text-white  text-theme-dark text-xl">
          See all
        </button>
      </div>
    </div>
  );
};
CategoryCard.propTypes={
  item:PropTypes.object
}
export default CategoryCard;
