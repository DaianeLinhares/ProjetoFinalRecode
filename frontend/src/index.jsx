import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Views/www/Home';
import Busca from './Views/www/Busca';
import Produtos from './Views/www/Produtos';
import New from './Views/www/New';
import QuemSomos from './Views/www/QuemSomos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/Busca" element={<Busca />}></Route>
        <Route path="/Produtos" element={<Produtos />}></Route>
        <Route path="/New" element={<New />}></Route>
        <Route path="/QuemSomos" element={<QuemSomos />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);