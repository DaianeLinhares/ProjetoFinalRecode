import React from "react";
import squad19 from "../../assets/img/recode2021-squad19.png";
import './Footer.css';

export default () => {
    return (
        <>

            <footer className="d-flex justify-content-start align-self-baseline align-items-xxl-end footer1" data-aos="slide-up" data-aos-delay="50">
                <div className="container">
                    <div className="row d-lg-flex flex-column justify-content-lg-center">
                        <div className="col-lg-auto text-primary d-xxl-flex justify-content-center align-content-end align-self-center align-items-xxl-end">
                            <p className="text-center text-light d-lg-flex justify-content-lg-center align-items-lg-center footer2">
                                <span className="footer3">
                                    <br></br>
                                    <em>"Qualidade de vida é viver daquilo que a natureza tem a oferecer"</em>
                                    <br></br>
                                </span>
                            </p>
                        </div>
                        <div className="col-auto d-flex flex-column flex-grow-0 justify-content-center align-content-around align-self-center flex-wrap align-items-lg-center">
                            <img className="d-lg-flex justify-content-lg-center align-items-lg-center footer4" src={squad19} />
                            <p className="text-center text-white d-flex d-xxl-flex justify-content-center align-items-center mx-auto justify-content-md-center align-items-md-center align-items-lg-center justify-content-xxl-center align-items-xxl-center footer5">Squad</p>
                            <img src="https://drive.google.com/uc?export=download&id=15PqOg4V4KZ6ZxCI5elhlfOIE2WmCNbvh" class="recodeLogo"/>
                             <div className="w-100">
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

