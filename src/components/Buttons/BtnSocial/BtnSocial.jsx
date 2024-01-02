import style from "./BtnSocial.module.css";
import PropTypes from "prop-types";

function BtnSocial({ link, img, text }) {
  return (
    <a href={link}>
      <button className={style.button}>
        <div className={style.divImg}>
          <img src={img} alt="" className={style.img} />
        </div>
        <div className={style.divtxt}>
          <p className={style.text}>{text}</p>
        </div>
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
