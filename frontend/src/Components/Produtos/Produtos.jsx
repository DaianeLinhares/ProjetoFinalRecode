import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/styles.min.css";
import Form from "../../Components/FormProduto/FormProduto";
import ListProdutos from "../ListProducts/ListProducts";

import './Produtos.css';
import FotoProdutos from '../../assets/img/jungle-g58104a631_1920.jpg';
import ListProducts from "../ListProducts/ListProducts";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <>
            <main className="main">
                <div class="container conteudo-index conteudo1">
                    <div class="col">
                        <h1 class="text-center">Lista de Produtos</h1>
                        <p class="text-center"> Através do programa Recode Pro 2021, esse projeto foi idealizado e viabilizado pelos seguintes desenvolvedores(as):</p>
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
