import React from "react";
import "./Side.css";
import { Link } from "react-router-dom";

export default () => {
    return(
        <nav class="navbar sidemenu navbar-light navbar-expand-sm">
            <div class="container-fluid">
                <button
                class="navbar-toggler" 
                data-bs-target="#navcol-2"
                data-bs-toggle="collapse"
                >
                    <span class="visually-hidden">
                        Alternar entre os modos de navegação
                    </span>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-none" id="navcol-2">
                    <ul class="navbar-nav text-end ms-auto">
                        <li class="nav-item text-end">
                            <button class="btn btn-primary" id="MainButton-Register" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" class="bi bi-person-plus">
                                    <path fill-rule="evenodd" d="M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10zM13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"></path>
                                </svg>&nbsp; Cadastro</button><button class="btn btn-primary" id="MainButton-Login" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" class="bi bi-person-square">
                                    <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                                    <path fill-rule="evenodd" d="M2 15v-1c0-1 1-4 6-4s6 3 6 4v1H2zm6-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                                </svg>&nbsp; Login
                            </button>
                        </li>
                        <li class="nav-item">
                            <button class="btn btn-outline-primary disabled" id="cart-basket" data-bs-toggle="tooltip" data-bss-tooltip="" data-bs-placement="bottom" type="button" disabled="" title="Cesta vazia">
                                <i class="fa fa-shopping-basket"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}