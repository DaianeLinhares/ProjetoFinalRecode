import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from '../NavHandler/NavHandler';

import './Main.css';
import MangutName from '../../../assets/img/Mangut-name.svg';

export default props => {
    // props: page = string
    // if page is equal to the name of the link, then the link value inside NavLink is true

    return(
        <nav class="navbar main-menu navbar-dark navbar-expand-md sticky-top text-center" id="MainMenu">
            <div class="container-fluid">
                <Link class="navbar-brand d-md-none justify-content-xxl-start" to="/">
                    <img id="mangutlogo-mobile" alt="logotipo mobile: contém o texto 'Mangut' escrito em fonte cursiva e de cor verde claro" src={MangutName} /><button 
                        data-bs-toggle="collapse" 
                        class="navbar-toggler" 
                        data-bs-target="#navcol-1"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg" 
                            width="1em" 
                            height="1em" 
                            viewBox="0 0 16 16" 
                            fill="currentColor" 
                            class="bi bi-list"
                        >
                            <path 
                                fill-rule="evenodd" 
                                d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z">
                            </path>
                        </svg>
                    </button>
                </Link>
                <div class="collapse navbar-collapse text-start" id="navcol-1">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <Link to="/" class={
                                props.page === 'Home' ? 'nav-link active' : 'nav-link'
                            } style={{background: "rgba(255,255,255,.3);"}}>
                                <span style={{marginRight: "12px", position: "relative", left: "3px", top: "-2px"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" class="bi bi-house-door-fill">
                                        <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"></path>
                                        <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"></path>
                                    </svg>
                                </span>Início
                            </Link>
                        </li>
                        <NavLink name="Produtos" link="/Produtos" active={props.page === "Produtos" ? true : false}/>
                        <NavLink name="Vendedores" link="/Vendedores" active={props.page === "Vendedores" ? true : false}/>
                        <NavLink name="Sobre nós" link="/Sobre" active={props.page === "Sobre" ? true : false}/>
                    </ul>
                </div>
            </div>
        </nav>
    )
};