import { useRef } from 'react'
import api from '../../services/api'
import 'bootstrap/dist/css/bootstrap.css';


// eslint-disable-next-line import/no-anonymous-default-export
const Formulario = () => {
    const foto = useRef()
    const nome = useRef()
    const preco = useRef()
    const quantidade = useRef()
    
   

    function enviarDados(event) {
        event.preventDefault()
        api.post("/produtos", {
            foto: foto.current.value,
            nome: nome.current.value,
            preco: preco.current.value,
            quantidade: quantidade.current.value,
            
        }).then((res) => console.log(res.data)).catch((err) => console.log(err))
        window.alert("Produto Cadastrado!")
        window.location.reload();
    }

    return (
        <>
            
                <form className="col-8 container" onSubmit={enviarDados}>
                    <h1 className="display-3 mt-4">Cadastrar Produtos</h1>
                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">Nome</span>
                        <input required type="text" className="form-control" ref={nome} placeholder="Nome" aria-label="Nome" aria-describedby="addon-wrapping" />
                    </div>

                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">Preco</span>
                        <input required type="text" className="form-control" ref={preco} placeholder="Preço" aria-label="Preço" aria-describedby="addon-wrapping" />
                    </div>
                    
                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">Quantidade</span>
                        <input required type="string" className="form-control" ref={quantidade} placeholder="Quantidade" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>

                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">foto</span>
                        <input required type="text" className="form-control" ref={foto} placeholder="URL da foto" aria-label="url da foto" aria-describedby="addon-wrapping" />
                    </div>
                             
                    <br></br>
                    <div className="col s12">
                    <button className="btn btn-sm btn-primary" type="submit">Enviar</button>
                    </div>
                </form>
        </>
    );
}
export default Formulario;

