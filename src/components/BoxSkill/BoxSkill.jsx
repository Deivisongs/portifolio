import style from "./BoxSkill.module.css";
import PropTypes from "prop-types";

function BoxSkill({ image, title, subtitle, subtitle2 }) {
  return (
    <div className={style.container}>
      <img src={image} alt="" className={style.image} />
      <h1 className={style.title}>{title}</h1>
      <p className={style.subtitle}>{subtitle}</p>
      <p className={style.subtitle}>{subtitle2}</p>
    </div>
  );
}
BoxSkill.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  subtitle2: PropTypes.string.isRequired,
};
export default BoxSkill;
