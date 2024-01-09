import React, { useState } from "react";
import style from "./PrincipaisProjetos.module.css";
import BoxProjetos from "../../BoxProjetos/BoxProjetos";
//import CardProjeto from "../../CardProjeto/CardProjeto";
import TagSkill from "../../TagSkill/TagSkill";

//Import Imagens
import react from "../../../img/react.png";
import Paises from "../../../img/buscaPaises.png";
import ImgBanco from "../../../img/BancoOnline.svg";
import comparaMotos from "../../../img/comparaMotos.png";

function PrincipaisProjetos() {
  const [projetoAtual, setPatual] = useState(0);
  const [projetos] = useState([
    {
      id: "1",
      linkImg: "https://info-word.vercel.app/",
      image: Paises,
      title: "InfoWord",
      descript:
        "Nesse projeto fiz um site que busca informações de uma API e mostra dados dos países em cards.",
      skill1: <TagSkill image={react} text="React" />,
      skill2: null,
      skill3: null,
      skill4: null,
      projeto: "https://info-word.vercel.app/",
      github: "https://github.com/Deivisongs/InfoWord",
    },
    {
      id: "2",
      linkImg: "https://compara-motos.vercel.app/",
      image: comparaMotos,
      title: "Compara Motos",
      descript:
        "Projeto pessoal criado totalmente do zero, nesse projeto procuro me desenvolver no React",
      skill1: null,
      skill2: null,
      skill3: null,
      skill4: <TagSkill image={react} text="React" />,
      projeto: "https://compara-motos.vercel.app/",
      github: "https://github.com/Deivisongs/ComparaMotos",
    },
  ]);
  function mudaMais() {
    if (projetoAtual < projetos.length - 1) {
      setPatual(projetoAtual + 1);
    } else {
      setPatual(0);
    }
  }
  function mudaMenos() {
    if (projetoAtual == 0) {
      setPatual(projetos.length - 1);
    } else {
      setPatual(projetoAtual - 1);
    }
  }

  function btnProjetos() {
    const divProjeto = document.getElementById("divTodosProjetos");
    const btnProjetos = document.getElementById("btnTodosOsProjetos");

    if (divProjeto.style.display !== "block") {
      divProjeto.style.display = "block";
      btnProjetos.textContent = "Esconder Projetos ▲";
      btnProjetos.style.color = "white";
      btnProjetos.style.background = "rgb(43, 60, 26)";
    } else {
      divProjeto.style.display = "none";
      btnProjetos.textContent = "Todos os Projetos ▼";
      btnProjetos.style.color = "rgb(43, 60, 26)";
      btnProjetos.style.background = "transparent";
      btnProjetos.style.border = "2px solid rgb(43, 60, 26)";
    }
  }

  return (
    <>
      <section className={style.mainContant} id="projetos">
        <div className={style.container}>
          <h2 className={style.title}>Principais Projetos</h2>
          <p className={style.subtitle}>
            Esses são alguns dos meus <strong>Projetos</strong>
          </p>
          <div className={style.containerCards}>
            <button className={style.btnCards} onClick={mudaMais}>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>

            <BoxProjetos
              linkImg={projetos[projetoAtual].linkImg}
              image={projetos[projetoAtual].image}
              title={projetos[projetoAtual].title}
              descript={projetos[projetoAtual].descript}
              skill1={projetos[projetoAtual].skill1}
              skill2={projetos[projetoAtual].skill2}
              skill3={projetos[projetoAtual].skill3}
              skill4={projetos[projetoAtual].skill4}
              projeto={projetos[projetoAtual].projeto}
              github={projetos[projetoAtual].github}
            />
            <button className={style.btnCards} onClick={mudaMenos}>
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
          <div className={style.divTodosProjetos} id="divTodosProjetos">
            <div className={style.divContainerTodosProjetos}>
              <p>Sem projetos no momento...</p>
              {/*<CardProjeto
                image={atualizaCadastro}
                title="Banco Online Retirada e Deposito"
                subtitle="Nesse projeto puxo os dados de uma API externa fdfjdl sfljkdsklf dsfjdsl gfdgfdgd"
                skill1={<TagSkill image={react} text="React" />}
              />*/}
            </div>
          </div>
          <button
            className={style.btnTodosOsProjetos}
            onClick={btnProjetos}
            id="btnTodosOsProjetos"
          >
            Todos os Projetos ▼
          </button>
        </div>
      </section>
    </>
  );
}
export default PrincipaisProjetos;
