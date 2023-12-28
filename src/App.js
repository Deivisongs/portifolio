import "./styles.css";
import Header from "./components/Header/Header";
import BannerPrincipal from "./components/Layouts/BannerPrincipal/BannerPrincipal";
import Skills from "./components/Layouts/Skills/Skills";
import PrincipaisProjetos from "./components/Layouts/PrincipaisProjetos/PrincipaisProjetos";
import JornadaAprendizado from "./components/Layouts/JornadaAprendizado/JornadaAprendizado";
import Contato from "./components/Layouts/Contato/Contato";
import SobreMim from "./components/Layouts/SobreMim/SobreMim";

export default function App() {
  return (
    <div className="App">
      <Header />
      <BannerPrincipal />
      <Skills />
      <PrincipaisProjetos />
      <JornadaAprendizado />
      <Contato />
      <SobreMim />
    </div>
  );
}
