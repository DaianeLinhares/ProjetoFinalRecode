import { useEffect, useState } from "react";
import api from "../../services/api";

const Formulario = () => {
  const [produto, setProdutos] = useState([]);

  useEffect(() => {
    api
      .get("/produtos")
      .then((res) => {
        setProdutos(res.data);
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="container row">
        <h5>Lista de Clientes</h5>
        {produto.map((produto) => (
          <div key={produto.id}>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Preco</th>
                  <th scope="col">Quantidade</th>
                  <th scope="col">foto</th>                 
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{produto.id}</th>
                  <td>{produto.nome} </td>
                  <td>{produto.preco}</td>
                  <td>{produto.quantidade}</td>
                  <td>{produto.foto}</td>                                  
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Formulario;
