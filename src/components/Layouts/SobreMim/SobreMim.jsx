import style from "./SobreMim.module.css";

//import imagens
import Linkedin from "../../../img/linkedin.png";
import GitHub from "../../../img/github.svg";
import whatsapp from "../../../img/whatsapp.png";
import Perfil from "../../../img/fotoPerfil.png";

//import Components
import BtnSocial from "../../Buttons/BtnSocial/BtnSocial";

function SobreMim() {
  return (
    <section className={style.principalSection}>
      <div className={style.main}>
        <h1 className={style.title}>Sobre Mim</h1>
        <div className={style.itens}>
          <div className={style.divLeft}>
            <div className={style.divImg}>
              <img src={Perfil} alt="" />
            </div>
            <div className={style.divButtons}>
              <BtnSocial
                link="https://www.linkedin.com/in/deivison-gon%C3%A7alves-62b23523a/"
                img={Linkedin}
                text="Linkedin"
              />
              <BtnSocial
                link="https://github.com/Deivisongs"
                img={GitHub}
                text="Linkedin"
              />
              <BtnSocial
                link="https://api.whatsapp.com/send?phone=5531995882112&text=Oi,%20tudo%20bem?"
                img={whatsapp}
                text="WhatsApp"
              />
            </div>
          </div>

          <div className={style.divText}>
            <p>
              Olá, sou <strong>Deivison Gonçalves</strong>, desenvolvedor de
              Belo Horizonte.
            </p>
            <br />
            <p>
              Desde 2022, estou matriculado no Senai, onde venho aprimorando
              minhas habilidades em programação. Minha ambição é construir uma
              carreira sólida na área de programação front-end, e até agora,
              adquirir conhecimentos fundamentais em{" "}
              <strong>HTML, CSS e JavaScript</strong>.
            </p>
            <br />
            <p>
              Minha jornada na programação está apenas começando, e estou
              determinado a expandir meu conhecimento e habilidades, mantendo-me
              atualizado com as tendências e práticas recomendadas no mundo da
              programação front-end.
            </p>
            <br />
            <p>
              Mal posso esperar para contribuir com projetos inovadores e criar
              experiências envolventes na web.
            </p>
            <br />
            <p>
              No final das contas, meu objetivo é combinar minhas paixões
              pessoais com minha paixão por codificação para criar um futuro
              empolgante na tecnologia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SobreMim;
