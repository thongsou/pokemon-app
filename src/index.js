import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from "./components/homepage";
import Selection from './components/selectionpage';
import Battle from './components/battleground';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/selection" element={<Selection />} />
      <Route path="/battle" element={<Battle />} />
      <Route path="*" element={<Navigate to="/" replace />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
