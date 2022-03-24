import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/styles.min.css";

import './Home.css';
import Grafico from '../../assets/img/grafico2.png';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <main className="main">
        <div class="container conteudo-index conteudo1">
          <div class="col-10 offset-1">
            <h1 class="text-center">E-commerce descentralizado</h1>
            <p> Cansado de taxas e assinaturas, com o melhor do comércio local e nacional? Boas-vindas a Mangut!</p>
            <p> Somos um e-commerce que acredita que o melhor vendedor online, é o mesmo vendedor(a) que vende presencialmente, com o diferencial de abraçarmos o comércio indígena e sermos mais um vetor para a reescrita da sua realidade.</p>   
            <p> Criamos uma vitrine para produtos indigenas, onde os compradores entram em contato com o produtor e efetuam a compra, pois nosso objetivo é ajudar especialmente os produtores indígenas de qualquer lugar do país á terem a sua autonomia financeira e o seu próprio lugar no mercado de trabalho. Toda e qualquer pessoa pode se beneficiar dessa iniciativa, além de você nos ajudar a apoiar os direitos indígenas ainda aprende sobre  a riqueza da cultura indigena e pode ter alimentos de qualidade por um preço acessivel.</p>
  
              <h3><br />Mas, afinal... o que é "Mangut"?</h3>
              <p> De acordo com o VERDUM, Mangut é: “[...] o exercício da capacidade social dos povos indígenas para construir seu futuro, em consonância com suas experiências históricas e aos recursos reais e potenciais de sua cultura, de acordo com projetos definidos segundo seus próprios valores e aspirações.”</p> 
  
              <p> Portanto, podemos definir Mangut, como, uma ferramenta de facilitação a busca da autonomia dos povos originários, por meio da tecnologia sem perder de vista a cultura, o histórico e as experiências indígenas. Estamos propondo uma ponte tecnológica entre produtores indígenas e os compradores, abrindo um espaço visível para que todo e qualquer produtor indigena possa expor os seus produtos que na sua maioria, são alimentos orgânicos que respeitam a sazonalidade e os ciclos da natureza, conveniente porque toda a tratativa é feita online e é claro, rentável, sem nenhuma cobrança de taxa sobre a negociação do produto.</p> 

              <p> O melhor cuidado, vem de quem cuida da nossa terra.</p>
              <p><b />Abrace essa iniciativa.</p>
          </div>

          
          <h3 class="text-center"><br />Estimativa de crescimento da comunidade indígena e </h3> <h3 class="text-center">de usuários dentro da plataforma até 2033.</h3>

          <div class="Grafico"><center><img class="rounded img-fluid" src={Grafico} /></center>
          </div>        
        </div>     
      </main>
    </>
  );
};
