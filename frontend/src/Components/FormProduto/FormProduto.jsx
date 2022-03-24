import { useRef } from 'react'
import api from '../../services/api'
import 'bootstrap/dist/css/bootstrap.css';


// eslint-disable-next-line import/no-anonymous-default-export
const Formulario = () => {

    const nome = useRef()
    const preco = useRef()
    const quantidade = useRef()
    const foto = useRef()
    const categoria = useRef()
   

    function enviarDados(event) {
        event.preventDefault()
        api.post("/produtos/", {
            nome: nome.current.value,
            preco: preco.current.value,
            quantidade: quantidade.current.value,
            foto: foto.current.value,
            categoria: categoria.current.value
            
        }).then((res) => console.log(res.data)).catch((err) => console.log(err))
    }

    return (
        <>
            
                <form className="col-8 container" onSubmit={enviarDados}>
                    <h1 className="display-3 mt-4">Cadastrar Produtos</h1>
                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">Nome</span>
                        <input required type="text" className="form-control" ref={nome} placeholder="Nome" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>

                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">Preco</span>
                        <input required type="text" className="form-control" ref={preco} placeholder="Nome" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    
                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">quantidade</span>
                        <input required type="text" className="form-control" ref={quantidade} placeholder="Nome" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>

                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">foto</span>
                        <input required type="text" className="form-control" ref={foto} placeholder="Endereço" aria-label="Endereço" aria-describedby="addon-wrapping" />
                    </div>

                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">categoria</span>
                        <input type="text" className="form-control" ref={categoria} placeholder="Nome" aria-label="Username" aria-describedby="addon-wrapping" />
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

