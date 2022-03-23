import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/styles.min.css";

import './Home.css';
import FotoIndigena from '../../assets/img/jungle-g58104a631_1920.jpg';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <main className="main">
        <div class="container conteudo-index conteudo1">
          <div class="col-7">
            <h1 class="text-success">E-commerce descentralizado</h1>
            <p> Cansado de taxas e assinaturas, com o melhor do comércio local e nacional? Boas-vindas a Mangut!</p>
            <p> Somos um e-commerce que acredita que o melhor vendedor online, é o mesmo vendedor(a) que vende presencialmente, com o diferencial de abraçarmos o comércio indígena e sermos mais um vetor para a reescrita da sua realidade.</p>   
  
  
              <h3 class="text-success"><br />Mas, afinal... o que é "Mangut"?</h3>
              <p> De acordo com o VERDUM, Mangut é: “[...] o exercício da capacidade social dos povos indígenas para construir seu futuro, em consonância com suas experiências históricas e aos recursos reais e potenciais de sua cultura, de acordo com projetos definidos segundo seus próprios valores e aspirações.”</p> 
  
              <p> Portanto, podemos definir Mangut, como, uma ferramenta de facilitação a busca da autonomia dos povos originários, por meio da tecnologia sem perder de vista a cultura, o histórico e as experiências indígenas.</p> 

              <p> O melhor cuidado, vem de quem cuida da nossa terra.</p>
              <p><b />Abrace essa iniciativa.</p>
          </div>
          <div class="col-md-6 d-md-flex d-lg-flex align-items-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center"><img class="rounded img-fluid shadow" src={FotoIndigena} />
          </div>        
        </div>     
      </main>
    </>
  );
};
