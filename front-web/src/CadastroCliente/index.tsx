import './styles.css';
import Footer from '../Footer';

function CadastroCliente(){
    return(
        <>   
        <div className="home-container">
            <form id="contact_form" action="#">
                        <label className="required" form="name">Nome:</label><br />
                        <input id="nomeCliente" className="input" name="name" type="text" value=""/><br />
                        <label className="required" form="name">Apelido:</label><br />
                        <input id="apelidoCliente" className="input" name="apelido" type="text" value=""/><br />
                        <label className="required" form="name">E-mail:</label><br />
                        <input id="emailCliente" className="input" name="email" type="text" value=""/><br />
                        <label className="required" form="name">Data de Nascimento:</label><br />
                        <input id="nascimentoCliente" className="input" name="nascimento" type="text" value=""/><br /><br />
                <input  id="submit_button" type="submit" value="ENVIAR" />
            </form>
        </div>     
            <Footer />
        </>
    )
}

export default CadastroCliente;