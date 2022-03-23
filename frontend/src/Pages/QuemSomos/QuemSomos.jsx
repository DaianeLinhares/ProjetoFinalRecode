import React from 'react';


import Header from "../../Components/Header/Header"
import Navbar from "../../Components/Navbar/Main/Main"
import Footer from "../../Components/Footer/Footer"
import QuemSomos from "../../Components/QuemSomos/QuemSomos"

export default ()=>{
    return(
        <>
        <Header></Header>
        <Navbar page="Sobre"></Navbar>
        <QuemSomos></QuemSomos>
        <Footer></Footer>
        </>
    )
}