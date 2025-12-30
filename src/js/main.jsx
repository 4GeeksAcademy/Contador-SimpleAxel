import React from "react";
import ReactDOM from "react-dom/client";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css'
import "../styles/index.css";

// components
import { DisplayCount } from "./components/DisplayCount";
import { OpcionCuentaRegresiva } from "./OpcionCuentaRegresiva";

const ReactRender = ReactDOM.createRoot(document.getElementById("root"));
let count = 0;
setInterval(() => {
  const centenaM = Math.floor(count / 100000);
  const decenaM = Math.floor(count / 10000);
  const unidadM = Math.floor(count / 1000);
  const centena = Math.floor(count / 100);
  const decena = Math.floor(count / 10);
  const unidad = Math.floor(count / 1);
    ReactRender.render(
    <React.StrictMode>
      <DisplayCount unidad={unidad} decena={decena} centena={centena} unidadM={unidadM} decenaM={decenaM} centenaM={centenaM}/>
    </React.StrictMode>
  ); 
  count ++
}, 1);
