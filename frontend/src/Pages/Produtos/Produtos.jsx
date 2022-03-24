import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Main/Main';
import Produtos from '../../Components/Produtos/Produtos';
import Footer from '../../Components/Footer/Footer';
// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{
    return(
        <>
            <Header></Header>
            <Navbar page="Produtos"></Navbar>
            <Produtos></Produtos>
            <Footer></Footer>
        </>
    );
}