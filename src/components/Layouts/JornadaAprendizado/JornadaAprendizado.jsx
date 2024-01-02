import style from "./JornadaAprendizado.module.css";
import Cardstudos from "../../CardEstudos/CardEstudos";
import Senai from "../../../img/senai.png";
import OnebitCode from "../../../img/onebitcode.jpg";

function JornadaAprendizado() {
  return (
    <section className={style.principalSection}>
      <main className={style.main}>
        <h1 className={style.title}>Jornada de Estudos</h1>
        <p className={style.subtitle}>
          Essas são algumas de minhas bases de <strong>estudos</strong>
        </p>
        <div className={style.divEstudos}>
          <Cardstudos
            image={Senai}
            escola="Senai"
            curso="Desenvolvimento de Sistemas"
            periodo="08/2022 a 02/2024"
            skill1="HTML"
            skill2="CSS"
            skill3="Java Script"
            skill4="PHP"
            skill5="MySQL"
            comentario='O curso "Técnico em Desenvolvimento de Sistemas" foi um divisor de águas em minha jornada na Programação. Nesse curso aprendi toda a base de lógica de programação, pude ver que a programação é realmente a jornada que quero seguir.'
            id="1"
          />
          <Cardstudos
            image={OnebitCode}
            escola="OneBitCode"
            curso="Programador Full Stack JavaScript"
            periodo="01/2022 a Atualmente"
            skill1="HTML"
            skill2="CSS"
            skill3="Java Script"
            skill4="React"
            skill5=""
            comentario='No curso "Programador Full Stack JavaScript" da OneBitCode estudei e pude me aprofundar em algumas aréas que não foram enfatizadas no curso Técnico. Atualmente continuo estudando esse curso para que possa cada vez mais me aprofundar no conhecimento da Programação.'
            id="2"
          />
        </div>
      </main>
    </section>
  );
}

export default JornadaAprendizado;
