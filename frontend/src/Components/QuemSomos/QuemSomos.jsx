import React from 'react';
import { Link } from 'react-router-dom';

import './QuemSomos.css';

export default () => {
  return (
    <>
      <main className="main">
        <div class="container conteudo-index conteudo1">
          <div class="col">
            <h1>QUEM SOMOS?</h1>
            <p class="text-center"> Através do programa Recode Pro 2021, esse projeto foi idealizado e viabilizado pelos seguintes desenvolvedores(as):</p>
          </div>
          <div class="row d-lg-flex justify-content-evenly mx-auto justify-content-lg-center membersList">
            <div class="col-6 col-sm-4 col-md-3 col-lg-2">
              <a href="https://github.com/DaianeLinhares" target="_blank"><img class="rounded-circle shadow" src="https://avatars.githubusercontent.com/u/91790650" loading="lazy" />
                <div class="text-center d-xl-flex justify-content-xl-center attrTags"><span class="badge rounded-pill bg-info shadow-sm">Back-End</span></div>
                <h5 class="text-center d-flex justify-content-center align-items-center align-content-center">Daiane<br />Linhares</h5>
              </a>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2">
              <a href="https://github.com/Estefani-prog" target="_blank">
                <img class="rounded-circle shadow" src="https://avatars.githubusercontent.com/u/84108238" loading="lazy" />
                <div class="text-center d-xl-flex justify-content-xl-center attrTags"><span class="badge rounded-pill bg-primary shadow-sm">Front-End</span></div>
                <h5 class="text-center d-flex justify-content-center align-items-center align-content-center">Estefani Monteiro</h5>
              </a>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
              <a href="https://github.com/Fredericoufsj" target="_blank">
                <img class="rounded-circle shadow" src="https://avatars.githubusercontent.com/u/72985009" loading="lazy" />
                <div class="text-center d-xl-flex justify-content-xl-center attrTags"><span class="badge rounded-pill bg-info shadow-sm">Back-End</span></div>
                <h5 class="text-center d-flex justify-content-center align-items-center align-content-center">Frederico Thomaz</h5>
              </a>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2">
              <a href="https://github.com/JessicaLuana" target="_blank">
                <img class="rounded-circle shadow" src="https://avatars.githubusercontent.com/u/88121822" loading="lazy" />
                <div class="text-center d-xl-flex justify-content-xl-center attrTags"><span class="badge rounded-pill bg-warning text-dark shadow-sm">Scrum Master</span></div>
                <h5 class="text-center d-flex justify-content-center align-items-center align-content-center">Jéssica<br />Luana</h5>
              </a>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2">
              <a href="https://github.com/Lohanedv" target="_blank">
                <img class="rounded-circle shadow" src="https://avatars.githubusercontent.com/u/88790041" loading="lazy" />
                <div class="text-center d-xl-flex justify-content-xl-center attrTags"><span class="badge rounded-pill shadow-sm" style={{ background: "rgb(186,76,20)" }}>Marketing</span><span class="badge bg-primary"></span></div>
                <h5 class="text-center d-flex justify-content-center align-items-center align-content-center">Lohane<br />Dafne</h5>
              </a>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2">
              <a href="https://github.com/Bryceed" target="_blank">
                <img class="rounded-circle shadow" src="https://avatars.githubusercontent.com/u/42657376" loading="lazy" />
                <div class="text-center d-xl-flex justify-content-xl-center attrTags"><span class="badge rounded-pill bg-primary shadow-sm">Front-End</span></div>
                <h5 class="text-center d-flex justify-content-center align-items-center align-content-center">Wellington<br />Nascimento</h5>
              </a>
            </div>
          </div>
          <h3><br />Missão</h3>
          <p> Nossa missão é <b>impactar positivamente a vida dos povos originários</b>, ao oferecermos uma ferramenta que vise na equidade e liberdade financeira dessa parcela da população brasileira.</p>
          <p>Além do alto índice, já existente, da comunidade indígena na linha da pobreza, essa situação foi agravada por terem sidos afetados, em dobro, pela pandemia de Coronavírus, que perdura por mais de 2 anos sem previsão efetiva de retorno (sem as preocupações das medidas sanitárias de prevenção para as negociações presenciais).</p>

          <h3><br />Visão</h3>
          <p> Por ser uma plataforma generalista que atenda essa população nos mais diversos ramos, espera-se que, por incentivarmos o contato diretamente com o vendedor através dos meios de contato eletrônico mais corriqueiros, nós aumentemos os índices de vendas, revendas e, inclusive, a redistribuição em estabelecimentos comerciais na região, aumentando seu capital a curto-médio prazo.</p>

          <h3><br />Valores</h3>
          <p>Respeitamos o direito de escolha, de privacidade e incentivamos a liberdade de negociação entre vendedores e compradores.</p><p><b>Motivamos</b> a sociedade a apoiar o comércio de produtos vindos de povos originários e, ao mesmo tempo, facilitar a inserção desses indivíduos e/ou de suas comunidades no mundo digital, ao criarmos uma ponte de <b>comunicação eficiente e realista</b>, visando principalmente entre quem não está acostumado com a utilização de plataformas de e-commerce como fonte de renda.</p><p><b>Acreditamos</b> que o impacto sociocultural na transformação de vidas, é mais importante do que monopolizar um serviço, em prol da rentabilidade da plataforma e dados analíticos.<br/><br/></p>
        </div>
      </main>
    </>
  );
};
