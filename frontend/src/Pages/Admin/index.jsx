import { useEffect, useState } from "react";
import api from "../../services/api";

// eslint-disable-next-line import/no-anonymous-default-export
const Formulario = () => {
  const [cliente, setClientes] = useState([]);

  useEffect(() => {
    api
      .get("/clientes")
      .then((res) => {
        setClientes(res.data);
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="container row">
        <h5>Lista de Clientes</h5>
        {cliente.map((cliente) => (
          <div key={cliente.id}>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Telefone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Endereço</th>
                  <th scope="col">CPF</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{cliente.id}</th>
                  <td>{cliente.nome} </td>
                  <td>{cliente.telefone}</td>
                  <td>{cliente.email}</td>
                  <td>{cliente.endereco}</td>
                  <td>{cliente.cpf}</td>                 
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
