import React from 'react';
import { Link } from 'react-router-dom';

import './Main.css';

export default props => {
    return(
        <nav class="navbar main-menu navbar-dark navbar-expand-md sticky-top text-center" id="MainMenu">
            <div class="container-fluid">
                <Link class="navbar-brand d-md-none justify-content-xxl-start" to="/">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="1em" 
                        viewBox="0 0 16 16" 
                        fill="currentColor" 
                        class="bi bi-person-bounding-box"
                    >
                        <path 
                            fill-rule="evenodd" 
                            d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z">
                        </path>
                        <path 
                            fill-rule="evenodd" 
                            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z">
                        </path>
                    </svg>Mangut<button 
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
                            <Link to="/" class="nav-link active" style={{background: "rgba(255,255,255,.3);"}}>
                                <span style={{marginRight: "12px", position: "relative", left: "3px", top: "-2px"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" class="bi bi-house-door-fill">
                                        <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"></path>
                                        <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"></path>
                                    </svg>
                                </span>Início
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};