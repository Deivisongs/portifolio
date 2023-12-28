import style from "./CardProjeto.module.css";
import PropTypes from "prop-types";

// import imagem
import imggithub from "../../img/github.png";

function CardProjeto({
  image,
  title,
  subtitle,
  skill1,
  skill2,
  skill3,
  projeto,
  github,
}) {
  return (
    <div className={style.divCardMain}>
      <div className={style.divImg}>
        <img src={image} alt="Imagem projeto" />
      </div>
      <div className={style.divText}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className={style.divSkills}>
          {skill1}
          {skill2}
          {skill3}
        </div>
      </div>
      <div className={style.divButtons}>
        <a href={projeto} target="_blank" rel="noreferrer">
          <button>
            <span className="material-symbols-outlined"> devices </span>
          </button>
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          <button className={style.btnGithub}>
            <img src={imggithub} alt="" className={style.logoGitHub} />
          </button>
        </a>
      </div>
    </div>
  );
}
CardProjeto.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  skill1: PropTypes.element,
  skill2: PropTypes.element,
  skill3: PropTypes.element,
  projeto: PropTypes.string,
  github: PropTypes.string,
};
export default CardProjeto;
