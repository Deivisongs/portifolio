import style from "./BtnSocial.module.css";
import PropTypes from "prop-types";

function BtnSocial({ link, img, text }) {
  return (
    <a href={link}>
      <button className={style.button}>
        <img src={img} alt="" className={style.img} />
        <p className={style.text}>{text}</p>
      </button>
    </a>
  );
}
BtnSocial.propTypes = {
  link: PropTypes.string,
  img: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default BtnSocial;
