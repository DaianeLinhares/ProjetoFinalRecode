import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import './Map.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <>
            <aside className="map">
                <div id="mappingList">
                    <h2>Próximos</h2>
                    <div className="toclose">
                        <button class="btn btn-danger" id="closeNearSidemenu">
                            <span className="material-icons-round">close</span>
                        </button>
                    </div>
                </div>
                <div className="searchArea" id="searchArea">
                    <div id="search">
                        <input type="text" id="search-input" placeholder="Verificar endereço" />
                        <button id="searchAddr" className="hide-it">
                            <span className="material-icons-round">travel_explore</span>
                        </button>
                        <div className="searchMore">
                            <button id="tryGPS"><span className="material-icons-round">gps_fixed</span></button>
                        </div>
                    </div>
                    <div id="map"></div>
                </div>
            </aside>
            <Helmet>
                <script></script>
            </Helmet>
        </>
    )
}