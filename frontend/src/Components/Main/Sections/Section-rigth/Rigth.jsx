
// eslint-disable-next-line import/no-anonymous-default-export
export default (props)=>{
    return(
    <>
        <section className="container">
            <div className="row align-items-start">
                <div className="col-md-6 order-2 align-self-center">
                    <img src={props.foto} className="img-fluid" alt="" />
                </div>
                <div className="col-md-6 order-1 align-self-center">
                    <h1 className="display-3">Quem somos</h1>
                    <p className="lead">
                        Agencia de viagem especializada em tornar sonhos em realidade.
                        Dispomos dos profissionais mais qualificados do mercado, prontos
                        para lhe auxiliar.
                    </p>
                    <p className="lead ">
                        A empresa Voo Feliz tem por objetivo ser a melhor agencia de
                        viagem do mundo, entregando qualidade e experiêncas ótimas.
                    </p>
                </div>
            </div>
        </section>
    </>
    );}