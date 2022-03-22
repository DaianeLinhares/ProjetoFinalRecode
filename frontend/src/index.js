import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact component={<Home />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);