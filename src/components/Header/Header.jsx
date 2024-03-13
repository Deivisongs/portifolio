import style from "./Header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <main className={style.main}>
        <div className={style.logo}>
          <p className={style.title}>Deivison G. Sousa</p>
          <p className={style.subtitle}>Full-Stack Developer</p>
        </div>
        <nav className={style.nav}>
          <a href="#projetos">
            <div className={style.divIcon}>
              <span className="material-symbols-outlined">folder_open</span>
              <p className={style.pNav}>Projetos</p>
            </div>
          </a>
          <a href="#contato">
            <div className={style.divIcon}>
              <span className="material-symbols-outlined">mail</span>
              <p className={style.pNav}>Contato</p>
            </div>
          </a>
        </nav>
      </main>
    </header>
  );
}
export default Header;
