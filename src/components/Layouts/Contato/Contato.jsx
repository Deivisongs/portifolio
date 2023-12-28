import style from "./Contato.module.css";

function Contato() {
  function enviar() {
    document.getElementById("btnEnviar").textContent = "Email Enviado";
  }

  return (
    <section className={style.principalSection} id="contato">
      <div className={style.main}>
        <h1 className={style.title}>Contato</h1>
        <p className={style.subtitle}>Entre em contato</p>

        <div className={style.divForm}>
          <form
            action="https://api.staticforms.xyz/submit"
            method="post"
            className={style.formContato}
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nome"
              autoComplete="off"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="exemplo@email.com"
              autoComplete="off"
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Mensagem"
              autoComplete="off"
            ></textarea>
            <button
              type="submit"
              className={style.btnEnviar}
              id="btnEnviar"
              onClick={enviar}
            >
              Enviar
            </button>

            <input
              type="hidden"
              name="replyTo"
              value="Parabens, Seu email foi enviado com sucesso"
            />

            <input
              type="hidden"
              name="redirectTo"
              value="https://vnyt2f-3000.csb.app/"
            />

            <input
              type="hidden"
              name="accessKey"
              value="f1218afb-06cc-4dc0-89ff-8a8ebfee4c25"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contato;
