import Indigena from "../../../public/img/Indigena.jpg";
import React from "react";

export default () =>{
    return (

        <div className = "container backcard">
        <div className="row d-md-flex align-items-center justify-content-md-center align-items-md-center">
            <div className="col d-xl-flex flex-column justify-content-xl-center align-items-xl-center align-items-xxl-start">
                <h1 className="text-danger">E-commerce descentralizado</h1>
                <p className="lead">Cansado de taxas e assinaturas, com o melhor do comércio local e nacional? Boas-vindas a Mangut!</p><br />
            </div>
        </div>
        <div className="row" style="margin-top: 18px;">
            <div className="col-8 col-md-6 d-xl-flex flex-column justify-content-xl-center align-items-xl-center align-items-xxl-start">

                <p>Somos um e-commerce que acredita que o melhor vendedor online, é o mesmo vendedor(a) que vende presencialmente, com o diferencial de abraçarmos o comércio indígena e sermos mais um vetor para a reescrita da sua realidade.&nbsp;</p><br /><br />

                <h1 className="text-danger">Mas, afinal... o que é "Mangut"?</h1>
                <p>De acordo com o VERDUM, Mangut é: “[...] o exercício da capacidade social dos povos indígenas para construir seu futuro, em consonância com suas experiências históricas e aos recursos reais e potenciais de sua cultura, de acordo com projetos definidos segundo seus próprios valores e aspirações.”<br></br></p>
                <p>Portanto, podemos definir Mangut, como, uma ferramenta de facilitação a busca da autonomia dos povos originários, por meio da tecnologia sem perder de vista a cultura, o histórico e as experiências indígenas.<br></br></p>
                <p className="lead text-center text-danger d-lg-flex mx-auto justify-content-lg-center">
                    <br></br>O melhor cuidado, vem de quem cuida da nossa terra.
                    <br></br>Abrace essa iniciativa.</p>
            </div>
            <div className="col-md-6 d-md-flex d-lg-flex align-items-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center"><img className="rounded img-fluid shadow" src = {Indigena}/></div>
        </div>

        </div>

    );
}