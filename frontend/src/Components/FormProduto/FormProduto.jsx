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
        api.post("/clientes/salvar/", {
            nome: nome.current.value,
            telefone: preco.current.value,
            email: quantidade.current.value,
            senha: foto.current.value,
            logradouro: categoria.current.value
            
        }).then((res) => console.log(res.data)).catch((err) => console.log(err))
    }

    return (
        <>
            <main className="vh-100 ">
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
                        <input required type="password" className="form-control" ref={foto} placeholder="Endereço" aria-label="Endereço" aria-describedby="addon-wrapping" />
                    </div>

                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">categoria</span>
                        <input required type="text" className="form-control" ref={categoria} placeholder="Nome" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>                               

                    <div className="col s12">
                        <button className="waves-light btn" type="submit">Enviar</button>
                    </div>
                </form>

            </main>
        </>
    );
}
export default Formulario;