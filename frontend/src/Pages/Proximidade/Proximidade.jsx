import React from "react";
import { Link } from "react-router-dom";

import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Main/Main'
import Footer from '../../Components/Footer/Footer'

import "./Proximidade.css";

export default () => {
    return (
        <>
            <Header></Header>
            <Navbar page="Vendedores"></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Proximidade</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p className="text-center">
                            O Recode 2020 está próximo!
                        </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}