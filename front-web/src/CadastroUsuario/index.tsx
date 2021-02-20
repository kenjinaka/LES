import './styles.css';
import Footer from '../Footer';

function CadastroUsuario(){
    return(
        <>   
        <div className="home-container">
            <form id="contact_form" action="#">
                        <label className="required" form="name">Nome:</label><br />
                        <input id="nomeUsuario" className="input" name="nome" type="text" value=""/><br />
                        <label className="required" form="name">CPF:</label><br />
                        <input id="cpfUsuario" className="input" name="cpf" type="text" value=""/><br />
                        <label className="required" form="name">Data de Nascimento:</label><br />
                        <input id="nascimentoUsuario" className="input" name="nascimento" type="text" value=""/><br />
                        <label className="required" form="name">Telefone:</label><br />
                        <input id="telefoneUsuario" className="input" name="telefone" type="text" value=""/><br />
                        <label className="required" form="name">O usuário é administrador?</label><br />
                        <input id="admUsusario" type="checkbox" value=""/><br />
                <input  id="submit_button" type="submit" value="ENVIAR" />
            </form>
        </div>     
            <Footer />
        </>
    )
}

export default CadastroUsuario;