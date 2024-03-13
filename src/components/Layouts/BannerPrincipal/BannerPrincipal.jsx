import style from "./BannerPrincipal.module.css";
import GitHub from "../../../img/github.svg";
import LinkedIn from "../../../img/linkedin.png";
import BtnProjetos from "../../Buttons/BtnProjetos/BtnProjetos";

function BannerPrincipal() {
  return (
    <section className={style.container}>
      <div className={style.principalText}>
        <h1>Full-Stack Developer</h1>
        <span className={style.subtitle}>
          <p>Maior gosto é tornar ideias em projetos.</p>
          <span className={style.iconsSocial}>
            <a href="https://github.com/Deivisongs/" target="_blank">
              <div className={style.elementoIcon}>
                <img src={GitHub} alt="Conta GitHub" />
                <p className={style.pElementoIcon}>GitHub</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/deivison-gon%C3%A7alves-62b23523a/" target="_blank">
              <div className={style.elementoIcon}>
                <img src={LinkedIn} alt="Conta GitHub" />
                <p className={style.pElementoIcon}>Linkedin</p>
              </div>
            </a>
          </span>
        </span>
        <BtnProjetos text="Ir para Projetos >" />
      </div>
    </section>
  );
}
export default BannerPrincipal;
