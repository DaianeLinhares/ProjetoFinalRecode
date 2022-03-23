import "./Section-left.css";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props)=>{
    return(
        <>
        <section className="container mb-5">
        <div className="row align-items-start">          
            <div className="col-md-6 align-self-center">
              <h1 className="display-3">Agencia Voo Feliz</h1>
              <p className="lead">
                Trabalhamos para tornar sua viagem uma experiência incrível!
              </p>
              <button type="button" className="btn btn-primary btn-pessoal">
                Saiba Mais!
              </button>
            </div>
            <div className="col-md-6 align-self-center">
              <img src={props.foto} className="img-fluid" alt="" />
            </div>
          </div>
        </section>
        </>
    );
}