import './styles.css';
import { ReactComponent as Logo } from './logo.svg';
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <nav className="main-navbar">
            <Link to="/" className="logo-text"><Logo /></Link>
            <Link to="/cadastroProduto" className="logo-text">Produto</Link>
            <Link to="/cadastroCliente" className="logo-text">Cliente</Link>
            <Link to="/cadastroUsuario" className="logo-text">Usuário</Link>
        </nav>

    )
}

export default Navbar;