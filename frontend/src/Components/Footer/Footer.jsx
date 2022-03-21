import { Link } from 'react-router-dom';
import LogoPro from '../../Assets/img/LogoPro_Roxo.png';
import sOt6LAPm from '../../Assets/img/sOT6LAPm_4x.png';
import recode from '../../Assets/img/recode2021-squad19.png'
import './Footer.css';

export default () => {
    return (
        <footer className="d-flex justify-content-start align-self-baseline align-items-xxl-end Footer1" data-aos="slide-up" data-aos-delay="50">
            <div className="container">
                <div className="row d-lg-flex flex-column justify-content-lg-center">
                    <div className="col-lg-auto text-primary d-flex justify-content-center align-content-end align-self-center align-items-end">
                        <p className="text-center text-light d-lg-flex justify-content-lg-center align-items-lg-center Footer2">
                            <span style="opacity: 0.33;margin-bottom: 14px;">Mangut (2022) - Projeto Social Open-Source</span>
                        </p>
                    </div>
                    <div className="col-auto d-flex flex-column flex-grow-0 justify-content-center align-content-around align-self-center flex-wrap align-items-center Footer2">
                        <Link to="https://discord.gg/vVc6yyAvB5" target="_blank"><img className="d-lg-flex justify-content-lg-center align-items-lg-center Footer3" src={recode}/>Squad</Link>
                            <a><img src={LogoPro} className="Footer4" /></a>
                        <Link to="https://github.com/DaianeLinhares/squad19mangut/?utm_source=squad19_2021 Footer5" target="_blank"><img src={sOt6LAPm} /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}