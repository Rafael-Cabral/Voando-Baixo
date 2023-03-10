import { Route, BrowserRouter } from "react-router-dom";
import Cards from "../components/Cards";
import Texto2 from "../components/Texto2";
import BarraPesquisa from "../components/BarraPesquisa";
import BotaoPg2 from "../components/BotaoPg2";


function CriarProjeto() {
  return (
    <BrowserRouter>
      <Cards />
      <Texto2 />
      <BarraPesquisa />
      <BotaoPg2 />
    </BrowserRouter>
  )
}

export default CriarProjeto;