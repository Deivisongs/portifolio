import style from "./BtnProjetos.module.css";
import PropTypes from "prop-types";

function BtnProjetos({ text }) {
  return (
    <a href="#projetos">
      <button className={style.btnProjetos}>{text}</button>;
    </a>
  );
}
BtnProjetos.propTypes = {
  text: PropTypes.string.isRequired,
};
export default BtnProjetos;
