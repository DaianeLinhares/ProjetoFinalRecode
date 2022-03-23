

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
       <main class="vh-100 ">
        <section class="container col-8">
        <h1 class="display-3 mt-4">Entre em contato</h1>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nome</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Nome Completo" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Telefone</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="(21) 99777-8888" />
            </div>
            
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nome@exemplo.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Mensagem</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </section>

    </main>
    </>
  );
}
