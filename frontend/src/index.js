import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Paginas/Views/Home';
ReactDOM.render(<App />, document.getElementById('root'));
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

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