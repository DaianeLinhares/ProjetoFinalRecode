/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <>

<div className="col-md-10 mx-auto py-4 backcard">
    <h4 className="text-danger text-uppercase" >Adicionar produto</h4>
    <div className="card">
        <div className="card-body">
            <form enctype="multipart/form-data">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label"></label>
                            <input className="form-control" />
                            <span className="text-danger"></span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label"></label>
                            <input className="form-control" />
                            <span className="text-danger"></span>
                        </div>
                    </div>
                </div>
                <div className="row">                    
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label"></label>
                            <div className="custom-file">
                                <input className="custom-file-input" id="customFile"/>
                                <label className="custom-file-label" for="customFile"></label>
                            </div>
                            <span className="text-danger"></span>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                  
                    <input type="submit" value="Enviar" className="btn btn-sm btn-primary rounded-0 text-uppercase" />
            
                    <a className="btn btn-sm btn-primary rounded-0 text-uppercase">
                        <i className="fas fa-fast-backward"></i> Voltar para lista
                    </a>
                </div>
            </form>
        </div>
    </div>
</div>
</>
    );
};