import './styles.css';
import { ReactComponent as MainImage } from './3ways-logo.svg'
import { ReactComponent as SigaNos } from './insta.svg'
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-image">
                        <MainImage />
                    </div>
                    <div className="home-actions">
                        <input className="home-subtitle" type="text" name="login" value="Login"></input>
                        <input className="home-subtitle" type="text" name="senha" value="Senha"></input>
                        <Link to="/orders" className="home-btn-order">
                                ENTRAR
                        </Link>
                    <div>
                        Não tem uma conta? 
                        <Link to="/cadastroCliente">
                            Cadastre-se
                        </Link>
                    </div>
                    <div className="insta-image">
                        <a href="https://www.instagram.com/threeways.store/">
                            <SigaNos />
                        </a>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;