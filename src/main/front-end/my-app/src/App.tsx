import TextoInicial from "./components/TextoInicial";
import BotaoInicial from "./components/BotaoInicial";
import Cards from "./components/Cards"
import Texto2 from "./components/Texto2"
import BotaoPg2 from "./components/BotaoPg2";
import BarraPesquisa from "./components/BarraPesquisa";
import { Route, BrowserRouter, Navigate, Routes } from "react-router-dom";
import Login from "./pages/Login";
import CriarProjeto from "./pages/CriarProjeto";



function App () {
  return(
    <BrowserRouter>
  <BotaoPg2 />
  <Cards />
  <Texto2 />
  <BarraPesquisa />
  </BrowserRouter>
  )
}

export default App;

/*
return(
  <BrowserRouter>
  <BotaoPg2 />
  <Cards />
  <Texto2 />
  </BrowserRouter>
)*/