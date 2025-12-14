import { Contador } from "./Contador";
import { Count5, Count4, Count3, Count2, Count1 } from "../main";
export const DisplayCount = ({ Counter }) => {
  let ObjetoEspecificoIcono = {
    icono: <i className="fa-solid fa-clock"></i>,
  };
  return (
    <div className="row bg-dark bg-opacity justify-content-evenly my-auto text-white">
      <Contador id={0} digit={ObjetoEspecificoIcono.icono} />
      <Contador id={1} digit={Count1} />
      <Contador id={2} digit={Count2} />
      <Contador id={3} digit={Count3} />
      <Contador id={4} digit={Count4} />
      <Contador id={5} digit={Count5} />
      <Contador id={6} digit={Counter} />
    </div>
  );
};
