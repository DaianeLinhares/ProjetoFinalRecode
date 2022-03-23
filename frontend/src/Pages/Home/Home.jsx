import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Main/Main'
import Main from '../../Components/Main/Home'
import Footer from '../../Components/Footer/Footer'
// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{
    return(
        <>
            <Header></Header>
            <Navbar page="Home"></Navbar>
            <Main></Main>
            <Footer></Footer>
        </>
    );
}