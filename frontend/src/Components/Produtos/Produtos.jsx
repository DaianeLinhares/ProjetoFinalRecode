import React from "react";
import "../../assets/css/styles.min.css";
import Form from "../../Components/FormProduto/FormProduto";
import ListProdutos from "../ListProducts/ListProducts";

import './Produtos.css';
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <>
            <main className="main">
                <div class="container conteudo-index conteudo1">
                    <div class="col">
                        <h1 class="text-center">Lista de Produtos</h1>
                        <div class="container row ">
                            <ListProdutos></ListProdutos>
                        </div>
                    </div>
                    <Form></Form>
                </div>
            </main>
        </>
    );
};
