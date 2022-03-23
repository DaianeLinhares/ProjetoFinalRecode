import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/styles.min.css";

import './Produtos.css';
import FotoProdutos from '../../assets/img/jungle-g58104a631_1920.jpg';
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <>
            <main className="main">
                <div class="container conteudo-index conteudo1">
                    <div class="col-7">
                        <h1 class="text-success">Lista de Produtos</h1>
                        <p> Através do programa Recode Pro 2021, esse projeto foi idealizado e viabilizado pelos seguintes desenvolvedores(as):</p>
                        <div class="container row ">
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-3">
                                <div class="d-flex justify-content-center" style={{position: "relative"}}>
                                    <img src={FotoProdutos} class="rounded img-fluid shadow" height="auto" width="100%" style={{borderRadius: "9px"}}
                                    />
                                </div>
                                <div class="d-flex justify-content-center">
                                    Teste
                                </div>
                                <p class="d-flex justify-content-center">
                                    <input class="btn btn-sm btn-primary rounded-0 text-uppercase" type='button' value='Comprar' />
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </main>
        </>
    );
};
