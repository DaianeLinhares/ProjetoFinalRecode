import React from "react";

export default () =>{
    return (
        
        <div className="container backcard" >
            <h2 className="text-center text-danger text-uppercase" style="font-family: 'Alatsi'"> 
                Lista de Produtos
            </h2>
            <div className="container row col-sm mt-3 mt-md-3 mt-sm-3" style="visibility:hidden" >
                <form action="/Index" method="get" className="row col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 mt-3 form-inline my-2 my-lg-0">
                    <input type="text" name="Termo Busca" placeholder="Nome do produto a buscar" className="col form-control mr-sm-2" />
                    <button className="col-4 btn btn-secondary my-2 my-sm-0" type="submit">
                        Buscar
                    </button>
                </form>
            </div>

            <div className="container row ">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-3">
                    <div className="d-flex justify-content-center" style="position: relative">  <img src="~/images/@produto.ImagemProduto"
                        height="auto" width="100%" style="border-radius:9px"
                        asp-append-version="true" />
                    </div>

                    <div className="d-flex justify-content-center">
                    </div>
                        <p className="d-flex justify-content-center">    
                        <input className="btn btn-sm btn-primary rounded-0 text-uppercase" type='button' onclick='ObjetoVenda.SalvarVenda(" + entry.id + ")' value ='Comprar'/>
                    </p>
                </div>
            </div>
        </div>
    );
}