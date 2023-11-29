import PropTypes from "prop-types"
const Button = ({btnName,animationClass}) => {
   return (
      <button className={`btn rounded-full  border-none bg-theme-yellow hover:bg-theme-black hover:text-white cursor-pointer text-theme-dark text-xl px-8 ${animationClass}`}>
        {btnName}
      </button>
   );
};
Button.propTypes={
   btnName:PropTypes.string
}
export default Button;