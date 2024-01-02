import PropTypes from "prop-types";
import style from "./CardEstudos.module.css";

function CardEstudos({
  image,
  escola,
  curso,
  periodo,
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
  comentario,
  id,
}) {
  function abreComentario() {
    const verMais = document.getElementById("verMais" + id);
    const text = document.getElementById("textVer" + id).textContent;
    console.log(text);

    if (verMais.style.display !== "block") {
      verMais.style.display = "block";
      document.getElementById("textVer" + id).textContent = "Ver Menos ▲";
    } else {
      verMais.style.display = "none";
      document.getElementById("textVer" + id).textContent = "Ver Mais ▼";
    }
  }
  return (
    <div className={style.cardEstudos}>
      <div className={style.divImg}>
        <img src={image} alt="" className={style.img} />
      </div>
      <div className={style.divText}>
        <p>
          <strong>Instituição:</strong> {escola}
        </p>
        <p>
          <strong>Curso:</strong> {curso}
        </p>
        <p>
          <strong>Período:</strong> {periodo}
        </p>
        <p>
          <strong>Tecnologias Aprendidas:</strong>
        </p>
        <div className={style.tecnologias}>
          <p>{skill1}</p>
          <p>{skill2}</p>
          <p>{skill3}</p>
          <p>{skill4}</p>
          <p>{skill5}</p>
        </div>
        <div className={style.verMais} id={"verMais" + id}>
          <p>
            <strong>Comentário:</strong>
          </p>
          <p>{comentario}</p>
        </div>
      </div>
      <button className={style.btnVerMais} onClick={abreComentario}>
        <p id={"textVer" + id}>Ver Mais ▼</p>
      </button>
    </div>
  );
}
CardEstudos.propTypes = {
  image: PropTypes.string,
  escola: PropTypes.string,
  curso: PropTypes.string,
  periodo: PropTypes.string,
  skill1: PropTypes.string,
  skill2: PropTypes.string,
  skill3: PropTypes.string,
  skill4: PropTypes.string,
  skill5: PropTypes.string,
  comentario: PropTypes.string,
  id: PropTypes.string,
};
export default CardEstudos;
