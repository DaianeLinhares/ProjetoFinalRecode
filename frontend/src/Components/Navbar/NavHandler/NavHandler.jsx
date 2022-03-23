import React from 'react';
import { Link } from 'react-router-dom';

import './NavHandler.css';

export default props => {
    // props: name = string, link = string, enable = boolean
    // if enable is true, then the link is active
    return(
        <>
            <li class={props.enable ? 'nav-link active' : 'nav-link'}>
                <Link 
                to={props.link} 
                style={{background: "rgba(255,255,255,.3);"}}
                >
                    {props.name}
                </Link>
            </li>
        </>
    )
}