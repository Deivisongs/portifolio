import style from "./Skills.module.css";
import BoxSkill from "../../BoxSkill/BoxSkill";

//import imagens
import Html from "../../../img/html.png";
import css from "../../../img/css.png";
import js from "../../../img/js.png";
import react from "../../../img/react.png";
import Git from "../../../img/git.svg";
import Github from "../../../img/github.svg";
import mysql from "../../../img/mysql.svg";
import php from "../../../img/php.svg";

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
          <BoxSkill
            image={Git}
            title="Git"
            subtitle="Sistema de controle de versões muito usado no Desenvolvimento de Software"
            subtitle2="Atualmente usado bastante essa ferramenta em commits dos meus projetos pessoais"
          />
          <BoxSkill
            image={Github}
            title="GitHub"
            subtitle="Uma plataforma de hospedagem de código-fonte e arquivos"
            subtitle2="Uso para colocar disponivel meus códigos e projetos"
          />
          <BoxSkill
            image={mysql}
            title="MySQL"
            subtitle="O MySQL é um sistema de gerenciamento de banco de dados"
            subtitle2="Utiliza a linguagem SQL como interface."
          />
          <BoxSkill
            image={php}
            title="PHP"
            subtitle="PHP é uma linguagem de script do tipo server-side com diversos propósitos."
            subtitle2="Uso em conjunto com MySQL para a criação dos Sistemas e Interfaces."
          />
        </div>
      </div>
    </section>
  );
}
export default Skills;
