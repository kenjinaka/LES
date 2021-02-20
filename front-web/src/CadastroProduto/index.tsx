import './styles.css';
import Footer from '../Footer';

function CadastroProduto(){
    return(
        <>   
        <div className="home-container">
            <form id="contact_form" action="#">
                <label className="required" form="name">Código:</label><br />
                <input id="codProduto" className="input" name="codigo" type="text" value=""/><br />
                <label className="required" form="name">Nome:</label><br />
                <input id="nomeProduto" className="input" name="nome" type="text" value=""/><br />
                <label className="required" form="name">Categoria:</label><br />
                <input id="categoriaProduto" className="input" name="categoria" type="text" value=""/><br />
                <label className="required" form="name">Subcategoria:</label><br />
                <input id="subCatProduto" className="input" name="subcategoria" type="text" value=""/><br />
                <label className="required" form="name">Tamanho:</label><br />
                <input id="tamanhoProduto" className="input" name="tamanho" type="text" value=""/><br /><br />
                <input  id="submit_button" type="submit" value="ENVIAR" />
            </form>
        </div>     
            <Footer />
        </>
    )
}

export default CadastroProduto;