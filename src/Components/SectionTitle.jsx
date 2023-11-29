import PropTypes from "prop-types"
const SectionTitle = ({title,subTitle,info}) => {
   return (
      <div className="text-center max-w-3xl mx-auto">
         <h4 className="text-3xl font-medium text-theme-yellow">{title}</h4>
          <h2 className=" text-3xl md:text-5xl font-semibold text-theme-black dark:text-white mt-4 mb-8">
            {subTitle}
          </h2>
          <p className="text-lg md:text-xl dark:text-theme-light text-theme-dark mb-12">
            {info}
          </p>
      </div>
   );
};
SectionTitle.propTypes={
   title:PropTypes.string,
   subTitle:PropTypes.string,
   info:PropTypes.string,
}
export default SectionTitle;