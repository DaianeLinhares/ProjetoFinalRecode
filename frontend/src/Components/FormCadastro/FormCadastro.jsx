import { useRef } from 'react'
import api from '../../services/api'
import 'bootstrap/dist/css/bootstrap.css';


// eslint-disable-next-line import/no-anonymous-default-export
const Formulario = () => {

    const nome = useRef()
    const telefone = useRef()
    const email = useRef()
    const senha = useRef()
    const logradouro = useRef()
    const numeroLogradouro = useRef()
    const bairro = useRef()
    const cidade = useRef()
    const estado = useRef()
    const cep = useRef()

    function enviarDados(event) {
        event.preventDefault()
        api.post("/clientes/salvar/", {
            nome: nome.current.value,
            telefone: telefone.current.value,
            email: email.current.value,
            senha: senha.current.value,
            logradouro: logradouro.current.value,
            numeroLogradouro: numeroLogradouro.current.value,
            bairro: bairro.current.value,
            cidade: cidade.current.value,
            estado: estado.current.value,
            cep: cep.current.value,
        }).then((res) => console.log(res.data)).catch((err) => console.log(err))
        window.alert("Cadastro realiazado com sucesso!")
    window.location.reload();
    }

    return (
        <>
            <main className="vh-100 ">
                <form className="col-8 container" onSubmit={enviarDados}>
                    <h1 className="display-3 mt-4">Cadastrar Cliente</h1>
                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">Nome</span>
                        <input required type="text" className="form-control" ref={nome} placeholder="Nome" aria-label="Nome" aria-describedby="addon-wrapping" />
                    </div>

                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">Telefone</span>
                        <input required type="text" className="form-control" ref={telefone} placeholder="Telefone" aria-label="Telefone" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">Email</span>
                        <input required type="text" className="form-control" ref={email} placeholder="E-mail" aria-label="Email" aria-describedby="addon-wrapping" />
                    </div>

                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">Senha</span>
                        <input required type="password" className="form-control" ref={senha} placeholder="Senha" aria-label="Senha" aria-describedby="addon-wrapping" />
                    </div>

                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">Logradouro</span>
                        <input required type="text" className="form-control" ref={logradouro} placeholder="Logradouro" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">Numero</span>
                        <input required type="text" className="form-control" ref={numeroLogradouro} placeholder="Numero" aria-label="Numero" aria-describedby="addon-wrapping" />
                    </div>

                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">bairro</span>
                        <input required type="text" className="form-control" ref={bairro} placeholder="Bairro" aria-label="bairro" aria-describedby="addon-wrapping" />
                    </div>

                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">cidade</span>
                        <input required type="text" className="form-control" ref={cidade} placeholder="Cidade" aria-label="Cidade" aria-describedby="addon-wrapping" />
                    </div>

                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">Estado</span>
                        <input required type="text" className="form-control" ref={estado} placeholder="Estado" aria-label="Estado" aria-describedby="addon-wrapping" />
                    </div>

                    <div className="input-group flex-nowrap mt-4 mb-4">
                        <span className="input-group-text" id="addon-wrapping">CEP</span>
                        <input required type="text" className="form-control" ref={cep} placeholder="Cep" aria-label="Cep" aria-describedby="addon-wrapping" />
                    </div>
                    
                    <div className="col s12 ">
                        <button className="btn btn-sm btn-primary" type="submit">Enviar</button>
                    </div>
                </form>
            </main>
        </>
    );
}
export default Formulario;