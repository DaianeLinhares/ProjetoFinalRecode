import React from "react";

export default () => {
    return (

        <div className="col-md-10 mx-auto py-4 backcard">
            <h4 className="text-danger text-uppercase" style="font-family: 'Alatsi' !important">Adicionar produto</h4>
            <div className="card">
                <div className="card-body">
                    <form enctype="multipart/form-data" asp-action="New">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label asp-for="Nome" className="control-label"></label>
                                    <input asp-for="Nome" className="form-control" />
                                    <span asp-validation-for="Nome" className="text-danger"></span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label asp-for="Tipo" className="control-label"></label>
                                    <input asp-for="Tipo" className="form-control" />
                                    <span asp-validation-for="Tipo" className="text-danger"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label asp-for="ImagemProduto" className="control-label"></label>
                                    <div className="custom-file">
                                        <input asp-for="ImagemProduto" className="custom-file-input" id="customFile" />
                                        <label className="custom-file-label" for="customFile"></label>
                                    </div>
                                    <span asp-validation-for="ImagemProduto" className="text-danger"></span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Enviar" className="btn btn-sm btn-primary rounded-0 text-uppercase" />
                            <a asp-action="Index" className="btn btn-sm btn-primary rounded-0 text-uppercase"><i className="fas fa-fast-backward"></i> Voltar para lista</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}