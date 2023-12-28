import PropTypes from "prop-types";
import style from "./TagSkill.module.css";

function TagSkill({ image, alt, text }) {
  return (
    <div className={style.container}>
      <div className={style.divIcon}>
        <img src={image} alt={alt} />
      </div>
      <div className={style.divText}>
        <p>{text}</p>
      </div>
    </div>
  );
}
TagSkill.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  text: PropTypes.string,
};
export default TagSkill;
