import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Orders from "./Orders";
import CadastroCliente from "./CadastroCliente";
import CadastroProduto from "./CadastroProduto";
import CadastroUsuario from "./CadastroUsuario";

function Routes(){
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/orders">
                    <Orders />
                </Route>
                <Route path="/cadastroCliente">
                    <CadastroCliente />
                </Route>
                <Route path="/cadastroProduto">
                    <CadastroProduto />
                </Route>
                <Route path="/cadastroUsuario">
                    <CadastroUsuario />
                </Route>
                <Route path="/">
                    <Home /> 
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;