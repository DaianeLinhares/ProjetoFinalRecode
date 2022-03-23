import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import Side from '../Navbar/Side/Side';
import Banner from '../Navbar/Banner/Banner';

export default () => {
    return (
        <header>
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <Side></Side>
                    </div>
                </div>
                <Banner></Banner>
            </div>
            <div class="website-logo d-none d-sm-block"></div>
        </header>
    )
}

// eslint-disable-next-line import/no-anonymous-default-export
/*
export default () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark nav-cor">
                <div className="container-fluid">
                    <div>
                    <Link to="/">
                        <a className="navbar-brand" href="Index.html">
                            Mangut
                        </a>
                    </Link>
                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> 
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/">
                                    <a className="nav-link active" aria-current="page" href="Index.html">HOME</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Cadastro">
                                    <a className="nav-link active let" aria-current="page" href="Cadastrar.html">CADASTRAR</a>
                                </Link>
                            </li>
                           
                            <li className="nav-item">
                                <Link to="/Contatos">
                                    <a className="nav-link active" aria-current="page" href="Contatos.html">CONTATOS</a>
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
};*/