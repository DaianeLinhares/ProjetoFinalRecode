import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home/Home';
import Contatos from './Pages/Contatos/Contatos';
import Cadastro from './Pages/Cadastro/Cadastro';
import CadastroVendedores from './Pages/Cadastro/CadastroVendedores';
import Admin from './Pages/Admin/index';
import Cesta from './Pages/Cesta/index';
import QuemSomos from './Pages/QuemSomos/QuemSomos';
import Produtos from './Pages/Produtos/Produtos';
import Proximidade from './Pages/Proximidade/Proximidade';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/Contatos' element={<Contatos/>}></Route>
        <Route path='/Cadastro' element={<Cadastro/>}></Route>
        <Route path='/Cadastro/Vendedores' element={<CadastroVendedores/>}></Route>
        <Route path='/Admin' element={<Admin/>}></Route>
        <Route path='/Cesta' element={<Cesta/>}></Route>
        <Route path='/Vendedores' element={<Proximidade/>}></Route>
        <Route path='/Sobre' element={<QuemSomos/>}></Route>
        <Route path='/Produtos' element={<Produtos/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
