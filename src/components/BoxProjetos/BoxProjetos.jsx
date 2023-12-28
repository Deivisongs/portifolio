// Css e importações
import PropTypes from "prop-types";
import style from "./BoxProjetos.module.css";

//Importações Imagens
import GitHub from "../../img/github-verde.png";

function BoxProjetos({
  linkImg,
  image,
  title,
  descript,
  skill1,
  skill2,
  skill3,
  skill4,
  projeto,
  github,
}) {
  return (
    <div className={style.boxProjetos}>
      <div className={style.divFoto}>
        <a href={linkImg} className={style.image}>
          <img src={image} alt="" />
        </a>
      </div>
      <div className={style.divText}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.subtitle}>{descript}</p>
        <div className={style.divTags}>
          {skill1}
          {skill2}
          {skill3}
          {skill4}
        </div>
        <div className={style.divBtn}>
          <div className={style.btnVerProjeto}>
            <a href={projeto} target="_blank" rel="noreferrer">
              <span className="material-symbols-outlined"> devices </span>
              <p>Ver projeto</p>
            </a>
          </div>
          <div className={style.btnVerProjeto}>
            <a href={github} target="_blank" rel="noreferrer">
              <img src={GitHub} alt="" className={style.logoGitHub} />
              <p>Ver Código</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
BoxProjetos.propTypes = {
  linkImg: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  descript: PropTypes.string,
  skill1: PropTypes.element,
  skill2: PropTypes.element,
  skill3: PropTypes.element,
  skill4: PropTypes.element,
  projeto: PropTypes.string,
  github: PropTypes.string,
};
export default BoxProjetos;
