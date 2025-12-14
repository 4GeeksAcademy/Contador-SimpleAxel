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
let Count = 0;
export let Count5 = 0;
export let Count4 = 0;
export let Count3 = 0;
export let Count2 = 0;
export let Count1 = 0;
// No consegui manera logica de hacer que los contadores Count no se actualizaran a cero dentro del componente DisplayCount.jsx, y queria usar los hooks, pero no los comprendo muy bien aun. Por eso los declare en el Main
// Supongo que es malaPraxis im sorry
setInterval(() => {
  Count > 9 ? (Count = 0) : true;
  Count === 9 ? Count5++ : true;
  Count5 === 9 ? Count4++ : true;
  Count5 === 9 ? (Count5 = 0) : true;
  Count4 === 9 ? Count3++ : true;
  Count4 === 9 ? (Count4 = 0) : true;
  Count3 === 9 ? Count2++ : true;
  Count3 === 9 ? (Count3 = 0) : true;
  Count2 === 9 ? Count1++ : true;
  Count2 === 9 ? (Count2 = 0) : true;
  ReactRender.render(
    <React.StrictMode>
      <DisplayCount Counter={Count} />
    </React.StrictMode>
  );
  Count++;
}, 1);
