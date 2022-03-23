import { useRef } from 'react'
import api from '../../services/api'
import 'bootstrap/dist/css/bootstrap.css';

const Formulario = () => {

    const nome = useRef()
    const telefone = useRef()
    const email = useRef()
    const mensagem = useRef()

    function enviarDados(event) {
        event.preventDefault()
        api.post("/contatos/", {
            nome: nome.current.value,
            telefone: telefone.current.value,
            email: email.current.value,
            mensagem: mensagem.current.value,
        }).then((res) => console.log(res.data)).catch((err) => console.log(err))
    }

  return (
    <>
       <main class="vh-100 ">
       <form className="col-8 container" onSubmit={enviarDados}>
                    <h1 className="display-3 mt-4">Entrar em Contato</h1>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nome</label>
                <input type="text" className="form-control" ref={nome} id="exampleFormControlInput1" placeholder="Nome Completo" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Telefone</label>
                <input type="text" className="form-control" ref={telefone} id="exampleFormControlInput1" placeholder="(21) 99777-8888" />
            </div>
            
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input type="email" className="form-control" ref={email} id="exampleFormControlInput1" placeholder="nome@exemplo.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Mensagem</label>
                <textarea className="form-control" ref={mensagem} id="exampleFormControlTextarea1" rows="3"></textarea>
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
