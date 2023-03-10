import { Routes, Route, BrowserRouter } from "react-router-dom";
import BotaoInicial from "../components/BotaoInicial";
import TextoInicial from "../components/TextoInicial";
import App from "../App";


function Login() {
  return (
    <>
      <div>
        <BotaoInicial />
        <TextoInicial />
      </div>
    </>
  )
}

export default Login;