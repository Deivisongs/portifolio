import style from "./Skills.module.css";
import BoxSkill from "../../BoxSkill/BoxSkill";
import Html from "../../../img/html.png";
import css from "../../../img/css.png";
import js from "../../../img/js.png";
import react from "../../../img/react.png";

function Skills() {
  return (
    <section className={style.mainContant}>
      <div className={style.container}>
        <h2 className={style.title}>Skills</h2>
        <p className={style.subtitle}>
          Algumas de minhas <strong>Habilidades</strong> são:
        </p>
        <div className={style.iconsSkills}>
          <BoxSkill
            image={Html}
            title="HTML"
            subtitle="O HTML é um componente base para a construção de Sistemas Web."
            subtitle2="Atualmente procuro me desenvolver ainda mais na Semântica e Acessibilidade"
          />
          <BoxSkill
            image={css}
            title="CSS"
            subtitle="Tenho um bom desenvolvimento e familiaridade com o CSS."
            subtitle2="Atualmente procuro aprender e aprofundar em mais propriedades e atributos que o CSS tem a oferecer."
          />
          <BoxSkill
            image={js}
            title="JavaScript"
            subtitle="A principal Linguagem para o desenvolvimento Web."
            subtitle2="Tenho familiaridade com a linguagem e algum projeto com JavaScript , quero me aprofundar e seguir carreira com JS"
          />
          <BoxSkill
            image={react}
            title="React"
            subtitle="Um dos frameworks mais utilizados."
            subtitle2="Atualmente estou estudando o React e criando alguns projetos pessoais."
          />
        </div>
      </div>
    </section>
  );
}
export default Skills;
