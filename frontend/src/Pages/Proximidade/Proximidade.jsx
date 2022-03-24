import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Main/Main'
import Footer from '../../Components/Footer/Footer'
import Map from '../../Components/Map/Map';

import "./Proximidade.css";

export default () => {
    return (
        <>
            <Header></Header>
            <Navbar page="Vendedores"></Navbar>
            <embed src="/maps/openmaps.html"></embed>
            <Footer></Footer>
            <Helmet>
                <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
                    integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==">
                </script>
            </Helmet>
        </>
    )
}