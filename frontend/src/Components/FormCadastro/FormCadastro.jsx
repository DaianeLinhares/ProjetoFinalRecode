import { useRef } from 'react'
import api from '../../services/api'
import 'bootstrap/dist/css/bootstrap.css';


// eslint-disable-next-line import/no-anonymous-default-export
const Formulario = () => {

    const nome = useRef()
    const endereco = useRef()
    const telefone = useRef()
    const cpf = useRef()
    const email = useRef()

    function enviarDados(event){
        event.preventDefault()
        api.post("/contatos/",{
            nome: nome.current.value,
            foto: endereco.current.value,
            telefone: telefone.current.value,
            cpf: cpf.current.value,
            email: email.current.value
        }).then((res)=>console.log(res.data)).catch((err)=>console.log(err))
    }

  return (
    <>
       <main class="vh-100 ">
       <form className="col-8 container" onSubmit={enviarDados}>        
            <h1 class="display-3 mt-4">Cadastrar Cliente</h1>
            <div class="input-group flex-nowrap mt-4">
                <span class="input-group-text" id="addon-wrapping">Nome</span>
                <input required type="text" className="form-control" ref={nome} placeholder="Nome" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            
            <div class="input-group flex-nowrap mt-4">
                <span class="input-group-text" id="addon-wrapping">Endereço</span>
                <input required type="text" className="form-control" ref={endereco} placeholder="Endereço" aria-label="Endereço" aria-describedby="addon-wrapping" />
            </div>
            
            <div class="input-group flex-nowrap mt-4">
                <span class="input-group-text" id="addon-wrapping">Telefone</span>
                <input required type="text" className="form-control" ref={telefone} placeholder="Telefone" aria-label="Telefone" aria-describedby="addon-wrapping" />
            </div>
            
            <div class="input-group flex-nowrap mt-4">
                <span class="input-group-text" id="addon-wrapping">Email</span>
                <input required type="text" className="form-control" ref={email} placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" />
            </div>
            
            <div class="input-group flex-nowrap mt-4">
                <span class="input-group-text" id="addon-wrapping">CPF</span>
                <input required type="text" className="form-control" ref={cpf} placeholder="CPF" aria-label="CPF" aria-describedby="addon-wrapping" />
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