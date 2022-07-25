import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/login/Login';
import RoutesMenu from './components/pages/Routes';
import HistorialRiego from './components/tabla_datos/HistorialRiego';
import VerUsuarios from './components/verDatos/VerUsuarios';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutesMenu></RoutesMenu>
    {/* <Login></Login>
    <VerUsuarios></VerUsuarios>
    <HistorialRiego></HistorialRiego> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
