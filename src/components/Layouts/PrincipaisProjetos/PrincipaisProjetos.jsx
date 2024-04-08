import React, { useState } from "react";
import style from "./PrincipaisProjetos.module.css";
import BoxProjetos from "../../BoxProjetos/BoxProjetos";
import CardProjeto from "../../CardProjeto/CardProjeto";
import TagSkill from "../../TagSkill/TagSkill";

//Import Imagens
import react from "../../../img/react.png";
import Paises from "../../../img/buscaPaises.png";
import comparaMotos from "../../../img/comparaMotos.svg";
import banco from "../../../img/BancoOnline.svg";
import inovaGest from "../../../img/inovaGest.png";
import php from "../../../img/php.svg";
import mySQL from "../../../img/mysql.svg";
import js from "../../../img/js.png";
import onBank from "../../../img/onBank.png"

function PrincipaisProjetos() {
  const [projetoAtual, setPatual] = useState(0);
  const [projetos] = useState([
    {
      id: "1",
      linkImg: "https://inovagest.000webhostapp.com/",
      image: inovaGest,
      title: "InovaGest",
      descript:
        "Sistema Gerenciamento de Estoque e Financeiro focado no Pequeno Empreendedor (USER: admin | SENHA:1234)",
      skill1: null,
      skill2: <TagSkill image={js} text="JavaScript" />,
      skill3: <TagSkill image={php} text="PHP" />,
      skill4: <TagSkill image={mySQL} text="MySQL" />,
      projeto: "https://inovagest.000webhostapp.com/",
      github: "https://github.com/Deivisongs/InovaGest",
    },
    {
      id: "2",
      linkImg: "https://onbank.vercel.app/",
      image: OnBank,
      title: "On Bank",
      descript:
        "O On Bank é um projeto pessoal em desenvolvimento, Um sistema de banco online, intuitivo e de fácil acesso.",
      skill1: null,
      skill2: null,
      skill3: null,
      skill4: <TagSkill image={react} text="React" />,
      projeto: "https://onbank.vercel.app/",
      github: "https://github.com/Deivisongs/On-Bank",
    },
    {
      id: "3",
      linkImg: "https://compara-motos.vercel.app/",
      image: comparaMotos,
      title: "Compara Motos",
      descript:
        "Projeto pessoal criado totalmente do zero, nesse projeto procuro me desenvolver no React (Em Desenvolvimento)",
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
              <CardProjeto
                image={Paises}
                title="InfoWord"
                subtitle="Busca informações de uma API e mostra dados dos países em cards"
                skill1={<TagSkill image={react} text="React" />}
                projeto="https://info-word.vercel.app/"
                github="https://github.com/Deivisongs/InfoWord"
              />
              <CardProjeto
                image={banco}
                title="Banco Online Retirada e Deposito"
                subtitle="Nesse projeto faço um sistema de retirada e deposito"
                skill1={<TagSkill image={react} text="React" />}
                projeto="https://bancoonline.vercel.app/"
                github="https://github.com/Deivisongs/Banco"
              />
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
