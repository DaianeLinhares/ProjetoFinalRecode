import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Navbar from "../../Components/Navbar/Main/Main"
import FormCadastro from "../../Components/FormCadastro/FormCadastro"


// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{
    return(
        <>
            <Header></Header>
            <Navbar></Navbar>
            <FormCadastro></FormCadastro>
            <Footer></Footer>
        </>
    )
}