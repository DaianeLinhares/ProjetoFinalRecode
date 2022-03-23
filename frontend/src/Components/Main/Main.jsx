import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/styles.min.css";
import './Main.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <main className="main">
        <div class="container conteudo-index conteudo1">
          <div class="col-7">
            <h1 class="text-success">O que é, Mangut?</h1>
            <p> Mangut é uma ferramenta de auxílio ao Etnodesenvolvimento dos povos originários, o que, de acordo com VERDUM é “ o exercício da capacidade social dos povos indígenas para construir seu futuro, em consonância com suas experiências históricas
              eos recursos reais e potenciais de sua cultura, de acordo com projetos definidos segundo seus próprios valores e aspirações.” <br />Portanto, podemos definir Mangut, como, uma ferramenta de facilitação a busca da autonomia dos povos originários,
              por meio da tecnologia sem perder de vista a cultura, o histórico e as experiências indígenas. </p>
          </div>          
        </div>     
      </main>
    </>
  );
};
