import { Route, BrowserRouter } from "react-router-dom";
import BotaoInicial from "../components/BotaoInicial";
import TextoInicial from "../components/TextoInicial";


function Login () {
    return(
        <BrowserRouter>
       <BotaoInicial />
       <TextoInicial />
    
        </BrowserRouter>
      )
}

export default Login;